import app from "./app";
import chalk from 'chalk';

app.listen(5001, () => {
  console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});