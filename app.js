const express =  require('express');
require('dotenv').config()
const cors = require('cors')
const {requestLogger ,errorHandler} = require('./middleware/middleware')
const connectDB = require('./database/serviceDB')
const router= require('./routes/notesRoutes')

const app = express();
connectDB();



app.use(cors());
app.use(express.json());

app.use(requestLogger)
app.use('/api/services', router )

app.use(errorHandler) 

module.exports = app