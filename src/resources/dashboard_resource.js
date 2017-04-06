/* @flow */
import {MakeResource} from './shared/make_resource';
import WidgetResource from './widget_resource';

const capabilities = [
  'Creatable',
  'Fetchable',
  'Listable',
  'Modifyable',
  'Retrievable',
  'Destroyable'
]

export default function(parent: Object, path: string) {
  return class DashboardResource extends MakeResource(parent, path, capabilities) {
    widget: any;
    constructor(...args: any) {
      super(...args);
      this.widget = WidgetResource(this, 'widgets');
    }
  }
}
