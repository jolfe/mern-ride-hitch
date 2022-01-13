import express from 'express';

import userRouter from '../routes/user.js';
import authRouter from '../routes/auth.js';
import balanceRouter from '../routes/balance.js';

const setup = (application) => {
	application.use(express.json());
	application.use(userRouter);
	application.use(authRouter);
	application.use(balanceRouter);
}

export default setup;
