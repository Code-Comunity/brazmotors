const SlideImgsViews = require('../../views/SlideImgs/SlideImgsViews')
const SlideImgsModel = require('../../models/SlideImgs/SlideImgsModel')

module.exports = {
   async FindAll(Request,Response){
       const SlideImgs = await SlideImgsModel.find({}).limit(10)
    return Response.json(SlideImgsViews.RenderAll(SlideImgs))
    }
}