class UserService {
    constructor() {
      this.users = new Map();
    }
  
    createUser(userData) {
      const { username, email } = userData;
  
      if (!username || !email) {
        throw new Error('Username and email are required');
      }
  
      if (!this.isValidEmail(email)) {
        throw new Error('Invalid email format');
      }
  
      const user = {
        id: Date.now().toString(),
        username: username.trim(),
        email: email.toLowerCase(),
        createdAt: new Date()
      };
  
      this.users.set(user.id, user);
      return user;
    }
  
    isValidEmail(email) {
      return email.includes('@') && email.includes('.');
    }
  
    getUser(id) {
      const user = this.users.get(id);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    }
  }
  
  module.exports = UserService;