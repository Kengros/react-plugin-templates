import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import Root from './reducers';

const INITIAL_STATE = {
    siteTemplates: {},
    project: {},
    designs: [],
};

const store = createStore(Root, INITIAL_STATE, composeWithDevTools());

export default store;

