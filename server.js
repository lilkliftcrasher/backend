const express =  require('express');
require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./database/notesDB')
const PORT = 3001

connectDB();

const app = express();

app.use(express.json());


app.use('/api/service', require('./routes/notesRoutes'))

app.use(errorHandler)

app.listen(PORT, () =>{
    console.log(`Sever is running on  Port`, PORT)
})