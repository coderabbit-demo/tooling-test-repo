const UserService = require('../src/userService');

describe('UserService', () => {
  let userService;

  beforeEach(() => {
    userService = new UserService();
  });

  test('creates user successfully', () => {
    const userData = {
      username: 'testuser',
      email: 'test@example.com'
    };

    const user = userService.createUser(userData);
    expect(user.username).toBe('testuser');
    expect(user.email).toBe('test@example.com');
    expect(user.id).toBeDefined();
  });

  test('throws error for invalid email', () => {
    const userData = {
      username: 'testuser',
      email: 'invalid-email'
    };

    expect(() => userService.createUser(userData)).toThrow('Invalid email format');
  });
});