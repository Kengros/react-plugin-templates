import { combineReducers } from 'redux';

import { siteTemplates, project, designs } from './core.reducer';

const Root = combineReducers({
  siteTemplates,
  project,
  designs
})
  
export default Root