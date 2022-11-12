import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {join} from 'path';
import Connection from './database/db.js';
import userRouter from './routes/userRouter.js';



const app = express();

dotenv.config();
const PORT = 4000 || process.env.PORT;
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
Connection(username,password);


// Middleware
app.use(express.json());
app.use(cors());


// loading static files
app.use(express.static(join(process.cwd(), 'public')));

app.get('/', (req, res) => {
    res.sendFile(join(process.cwd(), 'views', 'index.html'));
    
});

// load routes 

app.use('/users',userRouter);



app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});