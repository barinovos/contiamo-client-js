/* @flow */
import Promise from 'promise-polyfill';
if (!window.Promise) {
  window.Promise = Promise;
}
import 'whatwg-fetch';

import query from './public/query';
import resourceClient from './resources/client';
//import dataClient from './data/client';

module.exports = {
  'public': {query},
  resources: { client: resourceClient },
  //data: { client: dataClient }
}
