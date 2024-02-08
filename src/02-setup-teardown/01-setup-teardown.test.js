// setup and teardown in jest
const { sum } = require('../03-unit-tests/math');

let result;

beforeAll(() => {
  // Configuración antes de todas las pruebas
  console.log('BeforeAll');
});

beforeEach(() => {
  // Configuración antes de cada prueba
  result = sum(2, 3);
  console.log('BeforeEach');
});

afterEach(() => {
  // Limpiar después de cada prueba
  result = undefined;
  console.log('AfterEach');
});

afterAll(() => {
  // Limpiar después de todas las pruebas
  console.log('AfterAll');
});

test('Suma de dos números', () => {
  expect(result).toBe(5);
});

test('Suma de dos números 2 ', () => {
  expect(result).toBe(5);
});
