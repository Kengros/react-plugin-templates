import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types'
import Zone from '../../components/zone/zone.component'; 
import { loadSite } from '../../redux/actions/core.actions';

class ProjectComponent extends Component{

    

    // render () {

    //     console.log('this.props.config');
    //     console.log(this.props);

    //     return <div>My Projects</div>
    // }

    render() {

        console.log(this.props);
        const { config } = this.props;
        
        // Retrieve all zone configurations that will be rendered as sections on the page.
        var sectionConfigs = config.zones.filter(section => { return section.zone === 'section'})
        
        // Generate the section templates.
        var sections = sectionConfigs.map(function(section, i){
            return <div key={i} className="zone"><Zone config={section} /></div>;
        })

        return <div className="pip">
                    <div>
                        <div>This is the default - My Projects</div>
                        <div className="breadcrumb zone">
                            <Zone config={this.getZoneConfig('breadcrumb', config)} />
                        </div>
                        <div className="pip-header">
                            <div className="pip-gallery zone">
                                <Zone config={this.getZoneConfig('gallery', config)} />
                            </div>
                            <div className="pip-details zone">
                                <Zone config={this.getZoneConfig('details', config)} />
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

    static propTypes = {
        config: object.isRequired
    }
 }

 const mapStateToProps = (state) => {

    const design = state;

    return {
        siteTemplates: design.siteTemplates
    };
 }

 const mapDispatchToProps = { loadSite };

 export default connect(mapStateToProps, mapDispatchToProps)(ProjectComponent);