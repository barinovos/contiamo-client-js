import Resource from './resource';

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
};
  
test('should set `attrs` as an empty object by default', () => {
  const r = new Resource(1);
  expect(r.attrs).toEqual({});
});

describe('static methods: ', () => {
  class MockedResource extends Resource {
    static url() {
      return 'http://foo.bar';
    }

    static options() {
      return {
        apiKey: 'FAKE_API_KEY'
      };
    }
  }

  describe('#build', () => {
    test('should ensure that the static `build` method is implemented', () => {
      expect(() => {
        Resource.build();
      }).toThrow('Implement collection build in concrete resource');
    });
  });

  describe('#url', () => {
    test('should ensure that the `url` method is implemented', () => {
      expect(() => {
        Resource.url()
      }).toThrow('Implement collection url in concrete resource');
    });
  });

  describe('#options', () => {
    test('should ensure that the `options` method is implemented', () => {
      expect(() => {
        Resource.options()
      }).toThrow('Implement collection options in concrete resource');
    });
  });

  describe('#request', () => {
    beforeEach(() => {
      fetch.mockReset();
      fetch.mockResponseOnce(JSON.stringify({ foo: 'bar' }));
    });

    test('should fire an request with the url and options', () => {
      MockedResource.request(null, {
        method: 'GET'
      }).then(response => {
        expect(response).toEqual({ foo: 'bar' });
      });
    });

    test('should add the given `attrs` to the request `body`', () => {
      MockedResource.request(null, {}, { bar: 'baz' });
      expect(JSON.parse(fetch.mock.calls[0][1].body)).toEqual({
        bar: 'baz'
      });
    });

    test('should throw an error if the request fails', () => {
      fetch.mockReset();
      window.fetch = jest.fn()
        .mockImplementation(() => Promise.resolve(
          mockResponse(400, 'Test Error', '{"status":400, "statusText": Test Error!}')
        ));

      MockedResource.request(null, { method: 'GET' });

      // TODO: assert the error being thrown
    });
  });

  describe('#requestHeaders', () => {
    test('should return the headers', () => {
      let headers = MockedResource.requestHeaders();

      expect(headers).toEqual({
        headers: {
          'Content-Type': 'application/json',
          'X-API-TOKEN': 'FAKE_API_KEY'
        }
      });
    });
  });
});

describe('instance methods: ', () => {
  class ExistentMockedResource extends Resource {
    constructor() {
      super();
      this.id = 42;
    }

    static url() {
      return 'constructor_url';
    }

    static options() {
      return { foo: 'bar' }; 
    }

    static request() {
      return 'request';
    }
  }

  class NewMockedResource extends Resource {}

  describe('#isNew', () => {
    test('should return whether there is an existent `id` or not', () => {
      const existentResource = new ExistentMockedResource();
      const newResource = new NewMockedResource();

      expect(existentResource.isNew()).toBe(false);
      expect(newResource.isNew()).toBe(true);
    });
  });

  describe('#path', () => {
    test('should return an empty string if no `subpath` passed', () => {
      const newResource = new NewMockedResource;
      expect(newResource.path()).toBe('');
    });

    test('should return the `subpath` with a `[id]/` prefix if resource contains an `id`', () => {
      const existentResource =  new ExistentMockedResource();
      expect(existentResource.path('foo')).toBe('42/foo');
    });

    test('should throw if `subpath` is passed but resource does not contain an `id`', () => {
      const newResource = new NewMockedResource();
      expect(() => {
        newResource.path('foo');
      }).toThrow('Action subpath not allowed on resource without id.');
    });
  });

  describe('#url', () => {
    test('should combine the `constructor#url` with the given `path`', () => {
      let m = new ExistentMockedResource();
      m.path = jest.fn(() => 'x');
      expect(m.url()).toBe('constructor_url/x');
    });

    test('should use the `constructor#url` only if there is no `path`', () => {
      let m = new ExistentMockedResource();
      m.path = jest.fn(() => '');
      expect(m.url()).toEqual('constructor_url');
    });
  });

  describe('#options', () => {
    test('should return the `constructor#options`', () => {
      let m = new ExistentMockedResource();
      expect(m.options()).toEqual({
        foo: 'bar'
      });
    });
  });

  describe('#request', () => {
    test('should fire the `constructor#request`', () => {
      let m = new ExistentMockedResource();
      expect(m.request()).toBe('request');
    });
  });
});