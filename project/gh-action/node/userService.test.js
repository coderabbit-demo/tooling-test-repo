const UserService = require("./userService");

describe("UserService", () => {
  let userService;

  test('creates user successfully', () => {
    userService = new UserService();  
    
    const userData = {
      username: 'testuser',
      email: 'invalid-email'  
    };

    const user = userService.createUser(userData);
    expect(user.username).toBe('testuser');
    // Missing email validation test
  });

  test('gets user successfully', () => {
    const user = userService.getUser('non-existent-id');  
    expect(user).toBeDefined(); 
  });
});
