const requestLogger = (request, response, next)=>{
    console.log('Method:', request.method);
    console.log('Path', request.path)
    console.log('Body:', request.body)
    console.log('---')

    next()
}

const errorHandler = (err, req, res, next)=>{
    const statusCode = res.statusCode ? res.statusCode :500

    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
        
    })
}

module.exports ={
    requestLogger,
    errorHandler
}