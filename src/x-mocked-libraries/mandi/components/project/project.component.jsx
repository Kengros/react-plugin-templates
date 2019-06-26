import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types'
import Zone from '../../../../components/zone/zone.component'; 

class ProjectComponent extends Component{

    
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
                        <div>Mandi Specific Projects</div>
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

 export default connect(mapStateToProps, null)(ProjectComponent);