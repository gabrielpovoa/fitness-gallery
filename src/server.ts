import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import path from 'path';
import route from './routes/main';

dotenv.config();

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../public')));

server.use('/', route)


server.listen(process.env.PORT, () => console.log(`🚀 Server on port ${process.env.PORT}`));
server.on('error', err => (console.error('🧨 Error during start:', err), process.exit(1)));