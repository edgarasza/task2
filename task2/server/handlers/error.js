 const errorHandler = (error, request, response, next) => {
    return response.status(error.status || 500).json({
        message: error.message || " Something went wrong"
    })
}

module.exports = errorHandler;