import React, { Component } from 'react';
import store from '../../redux/store';
import { loadSite } from '../../redux/actions/core.actions';

export default function SiteContainer(WrappedComponent) {

    return class extends Component{
    
        render() {

            // Reference the route params.
            const { match: { params } } = this.props;

            // Retrieve the name of the product line from the route, default if not found.
            var siteName = params.site === undefined ? 'default' : params.site;

            // Lookup the site configuration in redux.
            var templateConfig = this.templateConfig(siteName, 'project');
        
            return <WrappedComponent {...this.props} config={templateConfig} />
        }

        templateConfig(siteName, pageType) {

            // Lookup the site configuration in redux.
            var site = store.getState().siteTemplates;
    
            console.log(site);
    
            // Verify we found the site configuration.
            if(site === undefined || site.length === 0) {
        
                // The site has not been loaded yet, import the configuration.
                const promise = import(`../../configurations/site/${siteName}/site.js`).then(
                    result => 
                    { 
                        // Store the product line configuration in redux.
                        store.dispatch(loadSite(result.config));
                    }
                );
    
                throw promise;
    
            } else {
    
                return site.find(page => { return page.type === pageType });
            }
        }
     }
}