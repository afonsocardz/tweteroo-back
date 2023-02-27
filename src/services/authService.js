export default class AuthService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  signUp(user) {
    if (!user.username || !user.avatar) {
      throw { status: 400, message: "Todos os campos são obrigatórios!" };
    }

    this.userModel.createUser(user);
  }
}
