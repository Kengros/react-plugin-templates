import React, { Component } from 'react';
import { connect } from 'react-redux';
import Zone from '../../components/zone/zone.component'; 
import { addProductLine } from '../../redux/actions/core.actions';

class DesignComponent extends Component{

    render() {

        return <div>
                    <div>
                        Designs
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

 const mapDispatchToProps = { addProductLine };

 export default connect(mapStateToProps, mapDispatchToProps)(DesignComponent);