/* @flow */
export default class Resource {
  id: string;
  attrs: Object;

  constructor(id: string, attrs: Object = {}) {
    this.id = id;
    this.attrs = attrs;
  }

  static build(stringOrAttrs: string | Object, attrs: ?Object) {
    throw new Error('Implement collection build in concrete resource')
  }

  static url() {
    throw new Error('Implement collection url in concrete resource')
  }

  static options() {
    throw new Error('Implement collection options in concrete resource')
  }

  static request(subPath: ?string, options: Object = {}, attrs: ?Object) {
    const url = subPath ? `${this.url()}/${subPath}` : this.url();
    let requestOptions = Object.assign({}, this.requestHeaders(), options);
    if (attrs) {
      requestOptions.body = JSON.stringify(attrs);
    }
    return fetch(url, requestOptions)
      .then((response) => { return response.json() })
      .catch((ex) => { throw new Error(`Request failed: ${ex}`) })
  }

  static requestHeaders() {
    return {
      'headers': {
        'Content-Type': 'application/json',
        'X-API-TOKEN': this.options().apiKey
      }
    }
  }

  isNew() {
    return !this.id
  }

  path(subPath: ?string) {
    let path = '';
    if (this.id) {
      path += `${this.id}`;
      if (subPath) {
        path += `/${subPath}`
      }
    } else if (subPath) {
      throw new Error('Action subpath not allowed on resource without id.')
    }
    return path
  }

  url() {
    const path = this.path();
    return path ? `${this.constructor.url()}/${path}` : this.constructor.url()
  }

  options() {
    return this.constructor.options()
  }

  request(subPath: ?string, options: Object = {}, attrs: ?Object) {
    return this.constructor.request(this.path(subPath), options, attrs)
  }
}
