import creatable from './creatable';

test('it should contain the create method', () => {
  let obj = {};
  creatable(obj);
  expect(obj.create).toBeDefined();
});

describe('#create',  () => {
  test('it should call the request method from the given object', () => {
    let obj = {
      request: jest.fn()
        .mockReturnValueOnce({
          then: jest.fn()
        })
    };

    creatable(obj);
    obj.create({});

    expect(obj.request.mock.calls.length).toEqual(1);
  });
});