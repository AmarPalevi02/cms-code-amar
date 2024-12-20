const { createBlog, getAllBlogs, getOneBlog } = require('../../services/blog')

const create = async (req, res, next) => {
   try {
      const result = await createBlog(req)

      res.status(200).json({
         statusCode: 201,
         message: 'Succes',
         data: result
      })
   } catch (error) {
      next(error)
      res.status(500).json({ message: "Error creating project", error })
   }
}

const getAll = async (req, res, next) => {
   try {
      const result = await getAllBlogs()

      if (result.length === 0) {
         return res.status(200).json({
            statusCode: 200,
            message: 'No blogs found',
            data: []
         });
      }

      res.status(200).json({
         statusCode: 200,
         message: 'Succes',
         data: result
      })
   } catch (error) {
      next(error)
   }
}

const getOne = async (req, res, next) => {
   try {
      const result = await getOneBlog(req)

      res.status(200).json({
         statusCode: 200,
         message: 'Succes',
         data: result
      })
   } catch (error) {
      next(error)
   }
}

module.exports = {
   create,
   getAll,
   getOne
}