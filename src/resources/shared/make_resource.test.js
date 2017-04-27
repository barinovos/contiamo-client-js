import {MakeResource} from './make_resource';

test('should return a class that inherits from Resource and has the capabilities mixins applied', () => {
  let parent = {};
  const ResourceCapabilities = MakeResource(parent, '', ['Creatable']);

  expect(ResourceCapabilities.build).toBeDefined();
  expect(ResourceCapabilities.url).toBeDefined();
  expect(ResourceCapabilities.options).toBeDefined();

  expect(ResourceCapabilities.create).toBeDefined();
  expect(ResourceCapabilities.fetch).not.toBeDefined();
});