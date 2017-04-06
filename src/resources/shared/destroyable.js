/* @flow */
const Destroyable = {
  // instance
  destroy() {
    return this.request(null, { method: 'DELETE' })
  }
};

export default function(ResourceClass: Class<any>) {
  Object.assign(ResourceClass.prototype, Destroyable);
}
