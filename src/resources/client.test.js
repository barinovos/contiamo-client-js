import clientResource from './client';

test('should return a `project`', () => {
  const expected = clientResource('API_KEY');
  expect(expected.project).toBeDefined();
});