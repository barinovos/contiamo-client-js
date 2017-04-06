/* @flow */
const Retrievable = {
  // static
  retrieve(id) {
    return this.build(id).fetch()
  }
};

export default function(ResourceClass: Class<any>) {
  Object.assign(ResourceClass, Retrievable);
}
