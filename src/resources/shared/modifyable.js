/* @flow */
const Modifyable = {
  // instance
  modify(attrs) {
    if (this.isNew()) {
      throw new Error('Cannot modify resources without id.')
    }
    return this.request(null, { method: 'PUT' }, attrs)
      .then((attrs) => {
        this.attrs = attrs;
        return this
      })
  }
};

export default function(ResourceClass: Class<any>) {
  Object.assign(ResourceClass.prototype, Modifyable);
}
