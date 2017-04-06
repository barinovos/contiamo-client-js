/* @flow */
import {MakeResource} from './shared/make_resource';

const capabilities = [
  'Creatable',
  'Fetchable',
  'Listable',
  'Modifyable',
  'Retrievable',
]

export default function(parent: Object, path: string) {
  return class DimensionResource extends MakeResource(parent, path, capabilities) {
    constructor(...args: any) {
      super(...args);
    }

    values(query: Object) {
      return this.request('values', { method: 'POST' }, query)
    }
  }
}
