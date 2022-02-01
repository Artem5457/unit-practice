const { getPlan } = require('./getPlan');

test('should return expected goals', () => {
  const goals = getPlan(200, 3, 50);

  expect(goals)
    .toEqual([300, 450, 675]);
})
