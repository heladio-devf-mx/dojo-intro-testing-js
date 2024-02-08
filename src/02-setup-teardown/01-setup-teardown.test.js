// setup and teardown in jest
const { sum } = require('../03-unit-tests/math');

let result;

beforeEach(() => {
  // Configuración antes de cada prueba
  result = sum(2, 3);
});

afterEach(() => {
  // Limpiar después de cada prueba
  result = undefined;
});

test('Suma de dos números', () => {
  expect(result).toBe(5);
});
