export const users = [];

export default class UserModel {
  constructor({username, avatar}){
    this.username = username;
    this.avatar = avatar;
  }

  findByUsername(username){
    return users.filter((user) => username === user.username);
  }

  createUser({username, avatar}){
    users.push({
      username,
      avatar
    })
  }
}