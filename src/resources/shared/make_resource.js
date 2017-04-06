/* @flow */
import Resource from './resource';
import Creatable from './creatable';
import Fetchable from './fetchable';
import Listable from './listable';
import Modifyable from './modifyable';
import Retrievable from './retrievable';
import Destroyable from './destroyable';

const knownCapabilities = {
  Creatable,
  Fetchable,
  Listable,
  Modifyable,
  Retrievable,
  Destroyable
};

// Return new class that inherits from Resource and has mixins applied
export function MakeResource(parent: Object,
  path: string = '',
  capabilities: string[] = [],
  idAttribute: string = 'id'): Class<Resource> {

  let ResourceCapabilities = class NestedResource extends Resource {
    static build(stringOrAttrs: string | Object, maybeAttrs: ?Object) {
      var id, attrs;
      if (typeof stringOrAttrs == 'object') {
        id = stringOrAttrs[idAttribute];
        attrs = stringOrAttrs;
      } else {
        id = stringOrAttrs;
        attrs = {};
      }
      return new this(id, attrs)
    }

    static url(): string {
      return path ? `${parent.url()}/${path}` : parent.url()
    }

    static options(): string {
      return parent.options()
    }
  };

  capabilities.forEach((capability) => {
    knownCapabilities[capability](ResourceCapabilities);
  });

  return ResourceCapabilities
}
