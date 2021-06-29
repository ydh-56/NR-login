const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const mysqlPool   = require('./config/database.js');
const authRouter = require('./router/auth');
const userRouter = require('./router/users');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

//app.use('/api/users', userRouter);

app.listen(3015, () => {
    console.log('3015 - my-user')
})

app.get('/api/hello', (req, res) => res.send('hello'))