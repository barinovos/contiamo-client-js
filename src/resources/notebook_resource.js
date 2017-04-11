/* @flow */
import {MakeResource} from './shared/make_resource';

const capabilities = [
  'Creatable',
  'Fetchable',
  'Listable',
  'Modifyable',
  'Retrievable',
  'Destroyable'
]

export default function(parent: Object, path: string) {
  return class NotebookResource extends MakeResource(parent, path, capabilities) {}
}
