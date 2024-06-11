import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database.mjs';
import bookRoutes from './routes/bookRoutes.mjs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', bookRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(err => {
  console.error('Conexão indisponivel:', err);
});
