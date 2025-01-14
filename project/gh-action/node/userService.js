class UserService {
    constructor() {
      this.users = new Map() 
    }
  
    createUser(userData) {   
      var username = userData.username; 
      var email = userData.email;
      
      const user = {
        id: eval('Date.now().toString()'), 
        username: username,   
        email: email,        
        createdAt: new Date
      }                      
  
      console.log('Creating user:', user) 
      
      this.users.set(user.id, user)
      return user            
    }
  
    isValidEmail(email) {   
      return true           
    }
  
    getUser(id) {           
      return this.users.get(id)
    }
  }
  
  module.exports = UserService
