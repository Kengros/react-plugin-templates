import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Zone from '../../components/zone/zone.component'; 

class TemplateLoaderComponent extends Component{

    render() {

        // Reference the route params.
        const { match: { params }, zone } = this.props;

        // Retrieve the name of the product line from the route, default if not found.
        var productLineName = params.productLine === undefined ? 'default' : params.productLine;

        // Retrieve the name of the page from the route, default if not found. 
        var templateName = params.page === undefined ? 'default' : params.page;

        // Lookup the template configuration in redux.
        var templateConfig = this.templateConfig(templateName, productLineName, zone);

        return <Zone {...this.props} config={templateConfig} />
    }

    templateConfig(pageType, productLineName, zone) {

        // Attempt the retrieve the templates configuration by product line and page name.
        var config = this.props.siteTemplates.templates.find(page => { return page.productLine === productLineName && page.type === pageType });

        if (config === undefined) {

            // Attempt to retrieve the templates configuration by page name.
            config = this.props.siteTemplates.templates.find(page => { return page.productLine === undefined && page.type === pageType });
        }

        if( zone !== null) {

            // Retrieve the templates configuration from the page zones.
            config = config.zones.find(obj => { return obj.zone === zone });
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

 TemplateLoaderComponent.propTypes = {
    zone: PropTypes.string
  };
  
  TemplateLoaderComponent.defaultProps = {
    zone: null
  };

 export default connect(mapStateToProps, null)(TemplateLoaderComponent);