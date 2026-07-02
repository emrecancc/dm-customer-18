const { User } = require('../models');

beforeEach(() => User.destroy({ where: {}, truncate: true }));

describe('User model', () => {
  it('creates a user', async () => {
    const user = await User.create({ name: 'Alice' });
    expect(user).toBeDefined();
  });

  it('starts with empty database', async () => {
    const count = await User.count();
    expect(count).toBe(0);
  });
});