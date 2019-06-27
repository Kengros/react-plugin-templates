import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types'
import TemplateLoaderComponent from '../../components/template-loader/template-loader.component'

class ProjectComponent extends Component{

    render() {

        return <div className="pip">
                    <div>
                    <div>Chuck Norris Default Projects Page</div>
                        <div className="pip-header">
                            <div className="pip-gallery zone">
                                <TemplateLoaderComponent {...this.props} zone='design-list' />
                            </div>
                            <div className="pip-details zone">
                                <TemplateLoaderComponent {...this.props} zone='summary' />
                            </div>
                        </div>
                    </div>
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