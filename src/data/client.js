/* @flow */
import {config} from '../config';

function queryUrl(projectId, apiBase) {
  return `${apiBase}/${projectId}/query`
}

export function query(query: Object, projectId: string, apiKey: string, apiBase: string) {
  apiBase = apiBase || config.apiBase;
  return fetch(queryUrl(projectId, apiBase), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-TOKEN': apiKey
    },
    body: JSON.stringify(query)
  }).then(function(response) {
    return response.json();
  }).catch(function(ex) {
    throw new Error(`Request failed: ${ex}`);
  });
}

export default function() {
  return 'data client';
}
