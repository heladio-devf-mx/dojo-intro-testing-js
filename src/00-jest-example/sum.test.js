const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  // Arrange
  const a = 1;
  const b = 2;
  const expectedResult = 3;
  // Act
  const sutResult = sum(a, b);
  // Assert
  expect(sutResult).toBe(expectedResult);
});
