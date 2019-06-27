/*
 * action types
 */
export const LOAD_SITE = 'LOAD_SITE';
export const GET_PROJECT = 'GET_PROJECT';
export const LIST_DESIGNS = 'GET_DESIGN';
export const GET_DESIGN = 'GET_DESIGN';
export const ADD_DESIGN = 'ADD_DESIGN';

  /*
   * action creators
*/

export function loadSite(config) {
  return { type: LOAD_SITE, config }
}

export function addDesign(design) {
  return { type: ADD_DESIGN, design: design }
}
