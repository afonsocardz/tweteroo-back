import cors from 'cors';
import express, { json } from 'express';
import router from './routers';

const app = express();

app.use(cors());
app.use(json());

const usuarios = [];
const tweets = [];

app.use(router);

app.post('/sign-up', (req, res) => {
  const { username, avatar } = req.body;

  if (!username || !avatar) {
    res.status(400).send('Todos os campos são obrigatórios!');
    return;
  }

  usuarios.push({ username, avatar });

  res.status(200).send('OK deu tudo certo');
});

function reverseTweets() {
  return [...tweets].reverse();
}

export default app;
