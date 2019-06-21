import React, { Component } from 'react';
import Zone from '../zone/zone.component'; 

const cache = {};

class PipComponent extends Component{

    render() {

        var productLine = undefined;

        const { match: { params } } = this.props;
        
        if(params.productLine === undefined) {
            productLine = 'default';
        } else {
            productLine = params.productLine;
        }

        const config = cache[productLine];
    
        if(!config) {
    
            const promise = import(`../../configurations/${productLine}`).then(
                result => (cache[productLine] = result.config),                    
            )
        
            throw promise;
        }
        
        var sectionConfigs = config.filter(section => { return section.zone === 'section'})
        
        var sections = sectionConfigs.map(function(section, i){
            return <div key={i} className="zone"><Zone config={section} /></div>;
        }) 

        return <div className="pip">
                    <div>
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

    getZoneConfig(zone, config) {

        return config.find(obj => { return obj.zone === zone });
    }
 }

 export default(PipComponent);