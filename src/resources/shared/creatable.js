/* @flow */
import Resource from './resource';

const Creatable = {
  // static
  create(attrs) {
    return this.request(null, { method: 'POST' }, attrs)
      .then((responseAttrs) => {
        return this.build(responseAttrs)
      })
  }
};

export default function(ResourceClass: Class<any>) {
  Object.assign(ResourceClass, Creatable);
}
