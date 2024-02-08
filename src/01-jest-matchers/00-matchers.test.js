// 00 matchers

// según la documentación de Jest:
// https://jestjs.io/docs/using-matchers
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('object assignment', () => {
  const data = { one: 1 };
  data.two = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
// You can also test for the opposite of a matcher using not
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

// Otros matchers muy comunes
test('testing objects', () => {
  const objectData = { name: 'Pepe' };
  objectData.lastName = 'Lota';
  expect(objectData).toEqual({ name: 'Pepe', lastName: 'Lota' });
});

test('testing null values', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('testing booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();

  expect(true).toBeTruthy();
});

test('testing strings', () => {
  const stringName = 'SupercalcetínConRombosMan';
  expect(stringName).toMatch(/supercalcetínconrombosman/i);
  expect(stringName).toEqual('SupercalcetínConRombosMan');
});

test('testing list / arrays', () => {
  const fruits = ['pineaple', 'banana', 'peach', '🍊'];
  expect(fruits).toContain('🍊');
  expect(fruits).not.toContain('🍎');
  expect(fruits).toContain('banana');
});
