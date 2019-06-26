import React, {Component } from 'react';
import store from '../../redux/store';
import { loadSite } from '../../redux/actions/core.actions';

export default function SiteContainer(WrappedComponent) {

    return class extends Component{
    
        render() {

            // Reference the route params.
            const { match: { params } } = this.props;

            // Retrieve the name of the site from the route, default if not found.
            var siteName = params.site === undefined ? 'default' : params.site;

            var productLineName = params.productLine === undefined ? 'default' : params.productLine;

            this.loadSiteConfig(siteName, productLineName)
        
            return  <WrappedComponent {...this.props} />
        }

        loadSiteConfig(siteName, productLineName) {

            // Lookup the site configuration in redux.
            var site = store.getState().siteTemplates;
    
            console.log(site);
    
            // Verify we found the site configuration.
            if(site === undefined || site.length === 0) {
        
                // The site has not been loaded yet, import the configuration.
                const promise = import(`../../configurations/site/${siteName}/site.js`).then(
                    result => 
                    { 
                        // Store the site configuration in redux.
                        store.dispatch(loadSite(result.config));
                    }
                );
    
                throw promise;
    
            }
        }
     }
}