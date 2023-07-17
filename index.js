const express = require('express');
const dotenv = require('dotenv');
const { dbConnection } = require('./db.js');

const cors = require('cors');
const urlRouter = require('./routes/urlRouters.js');
const userRouter = require('./routes/userRouters.js');



//config the environment
dotenv.config();
const PORT = process.env.PORT

//init the server
const app = express()

//database connection 
dbConnection();

//middleware 
app.use(express.json())
app.use(cors())
//routers
app.use('/users',userRouter)
app.use('/',urlRouter)

app.get('/', (req, res)=>{
    res.send("server working ")
})
//listen the server
app.listen(PORT,()=>console.log(`server running in localhost:${PORT}`));