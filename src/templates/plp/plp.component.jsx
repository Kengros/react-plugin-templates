import React, { Component } from 'react';
import { connect } from 'react-redux';
import Zone from '../../components/zone/zone.component'; 
import { loadSite } from '../../redux/actions/core.actions';

class PlpComponent extends Component{

    render() {

        return <div>
                    <div>
                        PLP
                    </div>
                </div>
    }
 }

 const mapStateToProps = (state) => {

    const design = state;

    return {
        site: design.site
    };
 }

 const mapDispatchToProps = { loadSite };

 export default connect(mapStateToProps, mapDispatchToProps)(PlpComponent);