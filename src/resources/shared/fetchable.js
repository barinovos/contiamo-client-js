/* @flow */
const Fetchable = {
  // instance
  fetch() {
    return this.request()
      .then((attrs) => {
        this.attrs = attrs;
        return this
      })
  }
};

export default function(ResourceClass: Class<any>) {
  Object.assign(ResourceClass.prototype, Fetchable);
}
