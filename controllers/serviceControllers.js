
const Service = require('../models/serviceModel')

/////////////////////////////////////////////////////// Get Request fuction
const getService = async (req, res)=>{
    const service  = await Service.find({})

    res.status(200).json(service.map(c=> c.toJSON()))
}


/////////////////////////////////////////////////////////////// Post Request function
const setService = async (req, res)=>{
   
    const service = await Service.create({
        icon: req.body.icon,
        title: req.body.title,
        content:req.body.content
    })

    if(!req.body.title && req.body.content){
        res.status(404).json
        ({error:'please add a text field'})
    }

    const savedService = await service.save()

    res.status(200).json(savedService)
}





module.exports = {
    getService,
    setService  
}