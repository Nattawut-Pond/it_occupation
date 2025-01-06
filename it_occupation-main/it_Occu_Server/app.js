require('dotenv').config()

const express = require('express');
const cors = require('cors');   
const { createRateLimiter } = require('./rateLimit/rateLimit.js');
// const { databaseConnection } = require('./database/initDatabase.js');   

// databaseConnection();
// setting up express
const app = express();
const PORT = process.env.PORT || 3000;


// Import 
const middleWare = require('./Middleware/middleWare.js');
const userRouter = require('./routes/userRouter.js');


// App use 
app.use(express.json());
app.use(middleWare.keepLog);
app.use(createRateLimiter());
app.use(cors());


// Routes
app.use('/api', userRouter);



// Listen
app.listen(PORT, () => {
    console.log('\x1b[31m');
    console.log(`

        ██╗ █████╗ ██╗   ██╗    ███████╗██╗  ██╗██████╗ ██████╗ ███████╗███████╗███████╗
        ██║██╔══██╗╚██╗ ██╔╝    ██╔════╝╚██╗██╔╝██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝
        ██║███████║ ╚████╔╝     █████╗   ╚███╔╝ ██████╔╝██████╔╝█████╗  ███████╗███████╗
   ██   ██║██╔══██║  ╚██╔╝      ██╔══╝   ██╔██╗ ██╔═══╝ ██╔══██╗██╔══╝  ╚════██║╚════██║
   ╚█████╔╝██║  ██║   ██║       ███████╗██╔╝ ██╗██║     ██║  ██║███████╗███████║███████║
    ╚════╝ ╚═╝  ╚═╝   ╚═╝       ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝
                                                                                        
   [jay] Running on http://localhost:${process.env.PORT || 3000}
                                                                        `);
       
})