/* @flow */
import {config} from '../config';

const queryUrl = function(query: string, startDate: string, endDate: string, options: Object) {
  try {
    var [, queryType, projectId, queryId, token] = query.split(':');
  } catch(e) {
    throw new Error('Invalid query string.');
  }
  const queryTypePath = queryType == 'sql' ? 'stored_sql_query' : 'stored_query';
  const queryUrl = `${options.apiBase}/${projectId}/published_queries/${queryId}/data.json?resource_token=${token}`;
  return startDate || endDate ? queryUrl + `&start_date=${startDate}&end_date=${endDate}` : queryUrl;
};

export default function query(query: string, startDate: string, endDate: string, options:Object = {}) {
  const mergedOptions = Object.assign({}, options, config);
  return fetch(queryUrl(query, startDate, endDate, mergedOptions))
    .then((response) => { return response.json() })
    .catch((ex) => { throw new Error(`Request failed: ${ex}`) });
}
