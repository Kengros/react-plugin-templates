import React, { Suspense, Component } from 'react';
import { connect } from 'react-redux';
import Zone from '../../components/zone/zone.component'; 
import { loadSite } from '../../redux/actions/core.actions';

class TemplateLoaderComponent extends Component{

    isBusy = false;

    render() {

        // Reference the route params.
        const { match: { params } } = this.props;

        // Retrieve the name of the site from the route, default if not found.
        var productLineName = params.productLine === undefined ? 'default' : params.productLine;

        // Retrieve the name of the site from the route, default if not found. 
        var templateName = params.page === undefined ? 'default' : params.page;

        // Lookup the site configuration in redux.
        var templateConfig = this.templateConfig(templateName, productLineName);

        return <Zone config={templateConfig} />
    }

    templateConfig(pageType, productLineName) {

        // Attempt the retrieve the templates configuration from the product line config.
        var config = this.props.siteTemplates.find(page => { return page.productLine === productLineName && page.type === pageType });

        if (config === undefined) {

            // Attempt to retrieve the templates configuration from the site config.
            config = this.props.siteTemplates.find(page => { return page.productLine === undefined && page.type === pageType });
        }

        return config;
    }
 }

 const mapStateToProps = (state) => {

    const design = state;

    return {
        siteTemplates: design.siteTemplates
    };
 }

 const mapDispatchToProps = { loadSite };

 export default connect(mapStateToProps, mapDispatchToProps)(TemplateLoaderComponent);