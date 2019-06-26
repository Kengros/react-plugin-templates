import React, { Component } from 'react';
import { string } from 'prop-types'

class SectionComponent extends Component{

    static propTypes = {
        header: string
    }

    static defaultProps = {
        header: 'default'
    }

    render() {
    
        const {
            header
        } = this.props;

       return <div style={{display:'flex', flexDirection:'column', flex:1, alignItems:'center'}}>
                 <h1>Windows {header}</h1>
              </div>
       }
 }

 export default(SectionComponent);