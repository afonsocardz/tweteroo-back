import UserModel from "../models/userModel";
import AuthService from "../services/authService";

export async function signUp(req, res) {
  const { username, avatar } = req.body;

  const authService = new AuthService(UserModel);
  
  try {
    authService.signUp({ username, avatar });
    return res.status(200).send("OK deu tudo certo");
  } catch (error) {
    return res.status(error.status).send(error.message);
  }
}
