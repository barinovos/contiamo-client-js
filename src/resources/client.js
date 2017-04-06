/* @flow */
import {config} from '../config';
import ProjectResource from './project_resource';

export default function(apiKey: string, options: Object = {}) {
  const mergedOptions = Object.assign({}, config, options, {apiKey});

  const parent = {
    url() {
      return mergedOptions.apiBase
    },
    options() {
      return mergedOptions
    }
  };

  return {
    project: ProjectResource(parent, '')
  }
}
