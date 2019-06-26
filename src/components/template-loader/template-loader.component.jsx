import React, { Component } from 'react';
import { connect } from 'react-redux';
import Zone from '../../components/zone/zone.component'; 
import { loadSite } from '../../redux/actions/core.actions';

class TemplateLoaderComponent extends Component{

    render() {

        // Reference the route params.
        const { match: { params } } = this.props;

        // Retrieve the name of the site from the route, default if not found.
        var siteName = params.site === undefined ? 'default' : params.site;

        //console.log(siteName);

        // Lookup the site configuration in redux.
        var templateConfig = this.templateConfig(siteName, 'project');

        return <Zone config={templateConfig} />
    }

    templateConfig(siteName, pageType) {

        // Lookup the site configuration in redux.
        var site = this.props.siteTemplates;

        console.log(site);

        return site.find(page => { return page.type === pageType });
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