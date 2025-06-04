const { Bio, Jobs, Abouts, sequelize } = require('../db/models');


const createMyJobs = async (req, res, next) => {
   const transaction = await sequelize.transaction();
   try {
      const { jobs, jobIds, city, about } = req.body

      const result = await Bio.create({ city, about }, { transaction })

      let jobInstances;
      if (jobs) {
         jobInstances = await Promise.all(jobs.map(job => Jobs.findOrCreate({
            where: { job },
            transaction
         })));
         jobInstances = jobInstances.map(instance => instance[0]);
      } else if (jobIds) {
         jobInstances = await Jobs.findAll({
            where: { id: jobIds },
            transaction
         });
      }

      await Promise.all(jobInstances.map(jobInstance => {
         return Abouts.create({ jobId: jobInstance.id, bioId: result.id }, { transaction });
      }));

      await transaction.commit();

      return { result, jobInstances }
   } catch (error) {
      console.log(error)
   }
}

const getAllMyJobs = async (req, res, next) => {
   try {
      const result = await Bio.findAll({
         attributes: ['id', 'about', 'city'],
         include: [
            {
               model: Jobs,
               through: { attributes: [] },
               attributes: ['id', 'job']
            },
         ],
      });

      return result

   } catch (error) {
      console.log(error)
   }
}

const updateById = async (req, res, next) => {
   try {
      const { id } = req.params
      const { job, city, about } = req.body

      const check = await Bio.findOne({ where: { id: id } })

      if (!check) {
         res.status(400).json({ message: `Tidak ada id ${id}` })
      }

      await Bio.update(
         { job, city, about },
         {
            where: { id: id },
         }
      )

      const result = await Abouts.findOne({
         where: { id: id },
         attributes: ['id', 'job', 'city', 'about']
      })

      return result
   } catch (error) {
      next(error)
   }
}

const destroyByOne = async (id) => {
   try {
      const check = await Bio.findOne({ where: { id: id } });

      if (!check) {
         return { message: `Tidak ada id : ${id}` };
      }

      const associatedJobs = await Abouts.findAll({
         where: { bioId: id },
         attributes: ['jobId', 'id'],
      });

      const aboutToDelete = await Abouts.findAll({
         where: { bioId: id },
      });

      await Abouts.destroy({
         where: { bioId: id },
      });

      for (let job of associatedJobs) {
         await Jobs.destroy({
            where: { id: job.jobId },
         });
      }

      await Bio.destroy({
         where: { id: id },
      });

      return {
         message: `Data Bio dengan id ${id} dan Jobs terkait berhasil dihapus beserta relasi Abouts-nya.`,
         abouts: aboutToDelete
      };
   } catch (error) {
      console.log(error);
      return { message: 'Terjadi kesalahan pada server.' };
   }
};

module.exports = {
   createMyJobs,
   getAllMyJobs,
   updateById,
   destroyByOne
}