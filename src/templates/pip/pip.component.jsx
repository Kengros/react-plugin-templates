import React, { Component } from 'react';
import { connect } from 'react-redux';
import Zone from '../../components/zone/zone.component';
import TemplateLoaderComponent from '../../components/template-loader/template-loader.component'
import { object } from 'prop-types'

class PipComponent extends Component{

    static propTypes = {
        config: object.isRequired
    }

    render() {

        const { config } = this.props;
        
        // Retrieve all zone configurations that will be rendered as sections on the page.
        var sectionConfigs = config.zones.filter(section => { return section.zone === 'section'})
        
        // Generate the section templates.
        var sections = sectionConfigs.map(function(section, i){
            return <div key={i} className="zone"><Zone config={section} /></div>;
        })

        return <div className="pip">
                    <div>
                        <div>Chuck Norris Default PIP</div>
                        <div className="breadcrumb zone">
                            <TemplateLoaderComponent {...this.props} zone='breadcrumb' />
                        </div>
                        <div className="pip-header">
                            <div className="pip-gallery zone">
                                <TemplateLoaderComponent {...this.props} zone='gallery' />
                            </div>
                            <div className="pip-details zone">
                                <TemplateLoaderComponent {...this.props} zone='details' />
                            </div>
                        </div>
                        {sections}
                    </div>
                </div>
    }
 }

 const mapStateToProps = (state) => {

    const design = state;

    return {
        productLines: design.productLines
    };
 }

 export default connect(mapStateToProps, null)(PipComponent);