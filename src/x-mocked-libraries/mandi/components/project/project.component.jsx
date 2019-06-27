import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types'
import Zone from '../../../../components/zone/zone.component'; 
import { Link } from "react-router-dom";

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
                        <div>Mandi (Override) Projects Page</div>
                        {sections}
                    </div>
                    <Link to="/mandi/countertops/pip">View PIP</Link>
                </div>
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