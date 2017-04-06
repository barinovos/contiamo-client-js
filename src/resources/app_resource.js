/* @flow */
import {MakeResource} from './shared/make_resource';
import ContractResource from './contract_resource';
import DimensionResource from './dimension_resource';

const capabilities = [
  'Creatable',
  'Fetchable',
  'Listable',
  'Modifyable',
  'Retrievable',
  'Destroyable'
]

export default function(parent: Object, path: string) {
  return class AppResource extends MakeResource(parent, path, capabilities) {
    contract: any;
    dimension: any
    constructor(...args: any) {
      super(...args);
      this.contract = ContractResource(this, 'data_contracts/contracts');
      this.dimension = DimensionResource(this, 'dimensions');
    }
  }
}
