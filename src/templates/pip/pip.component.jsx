import React, { Component } from 'react';
import { connect } from 'react-redux';
import Zone from '../../components/zone/zone.component'; 
import { addProductLine } from '../../redux/actions/core.actions';

class PipComponent extends Component{

    render() {

        // Reference the route params.
        const { match: { params } } = this.props;

        // Retrieve the name of the product line from the route, default if not found.
        var productLineName = params.productLine === undefined ? 'default' : params.productLine;

        // Lookup the product line configuration in redux.
        var pageConfig = this.getPageConfig(productLineName, 'pip');
        
        // Retrieve all zone configurations that will be rendered as sections on the page.
        var sectionConfigs = pageConfig.zones.filter(section => { return section.zone === 'section'})
        
        // Generate the section templates.
        var sections = sectionConfigs.map(function(section, i){
            return <div key={i} className="zone"><Zone config={section} /></div>;
        })

        return <div className="pip">
                    <div>
                        <div className="breadcrumb zone">
                            <Zone config={this.getZoneConfig('breadcrumb', pageConfig)} />
                        </div>
                        <div className="pip-header">
                            <div className="pip-gallery zone">
                                <Zone config={this.getZoneConfig('gallery', pageConfig)} />
                            </div>
                            <div className="pip-details zone">
                                <Zone config={this.getZoneConfig('details', pageConfig)} />
                            </div>
                        </div>
                        {sections}
                    </div>
                </div>
    }

    getPageConfig(productLineName, pageType) {

        // Lookup the product line configuration in redux.
        var productLine = this.props.productLines.find(
            function(config) {
                return (config.line === productLineName)
            }
        );
    
        // Verify we found the product line configuration.
        if(productLine === undefined) {
    
            // The product line has not been loaded yet, import the configuration.
            const promise = import(`../../configurations/site/default/product-lines/${productLineName}`).then(
                result => 
                { 
                    // Store the product line configuration in redux.
                    this.props.addProductLine(productLineName, result.config);
                }
            )
            throw promise;

        } else {

            return productLine.templates.find(page => { return page.type === pageType });
        }
    }

    /**
     * Retrieves the specified product lines configuration from redux. If not found,
     * the product line will be dynamically imported and stored into redux.
     * @param {The name of the product line to retrieve} name 
     */
    getProductLineConfig(name) {

        // Lookup the product line configuration in redux.
        var productLine = this.props.productLines.find(function(config) {

            return (config.line === name)
        })
    
        // Verify we found the product line configuration.
        if(productLine === undefined) {
    
            // The product line has not been loaded yet, import the configuration.
            const promise = import(`../../configurations/${name}`).then(
                result => 
                { 
                    // Store the product line configuration in redux.
                    this.props.addProductLine(name, result.config);
                }
            )        
            throw promise;

        } else {

            return productLine;
        }
    }

    /**
     * Will search the provided config for the first plugin configured for the specified zone.
     * @param {The zone that owns the config we are looking for.} zone 
     * @param {The configuration containing layout and zone information.} config 
     */
    getZoneConfig(zone, config) {

        return config.zones.find(obj => { return obj.zone === zone });
    }
 }

 const mapStateToProps = (state) => {

    const design = state;

    return {
        productLines: design.productLines
    };
 }

 const mapDispatchToProps = { addProductLine };

 export default connect(mapStateToProps, mapDispatchToProps)(PipComponent);