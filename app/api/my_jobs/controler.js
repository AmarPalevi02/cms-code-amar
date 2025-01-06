const { createMyJobs, getAllMyJobs, updateById, destroyByOne } = require('../../services/my_jobs')

const create = async (req, res, next) => {
   try {
      const result = await createMyJobs(req)

      res.status(201).json({
         statusCode: 201,
         message: 'Succes',
         data: result
      })
   } catch (error) {
      next(error)
   }
}

const getAll = async (req, res, next) => {
   try {
      const result = await getAllMyJobs()

      res.status(200).json({
         statusCode: 200,
         message: 'Succes',
         data: result
      })
   } catch (error) {
      next(error)
   }
}

const update = async (req, res, next) => {
   try {
      const result = await updateById(req)

      res.status(201).json({
         message: 'Succes',
         data: result
      })
   } catch (error) {
      next(error)
   }
}

const destroyservices = async (req, res, next) => {
   try {
      const { id } = req.params; 

      const result = await destroyByOne(id); 

      return res.status(200).json({
         status: 200,
         message: result.message,
         abouts: result.abouts 
      });
   } catch (error) {
      next(error);
   }
}


module.exports = {
   create,
   getAll,
   update,
   destroyservices
}