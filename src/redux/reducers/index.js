import { combineReducers } from 'redux';

import { siteTemplates, project, designs, productLines } from './core.reducer';

const Root = combineReducers({
  siteTemplates,
  project,
  productLines,
  designs
})
  
export default Root