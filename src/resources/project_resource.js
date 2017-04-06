/* @flow */
import {MakeResource} from './shared/make_resource';
import AppResource from './app_resource';
import DashboardResource from './dashboard_resource';

const capabilities = [
  'Creatable',
  'Fetchable',
  'Listable',
  'Modifyable',
  'Retrievable',
]

export default function(parent: Object, path: string) {
  return class ProjectResource extends MakeResource(parent, path, capabilities) {
    app: any;
    dashboard: any;

    constructor(...args: any) {
      super(...args);
      this.app = AppResource(this, 'apps');
      this.dashboard = DashboardResource(this, 'dashboards');
    }

    query(attrs: Object = {}) {
      return this.request('query', { method: 'POST' }, attrs)
    }
  }
}
