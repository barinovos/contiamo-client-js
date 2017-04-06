/* @flow */
const Listable = {
  // static
  list() {
    return this.request()
      .then((list) => {
        return list.map((attrs) => {
          return this.build(attrs)
        })
      })
  }
};

export default function(ResourceClass: Class<any>) {
  Object.assign(ResourceClass, Listable);
}
