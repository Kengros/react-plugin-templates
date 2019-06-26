import React, { Component } from 'react';
import { string } from 'prop-types'

class GalleryComponent extends Component{

    static propTypes = {
        text: string
    }

    static defaultProps = {
        text: 'default'
    }

    render() {
    
        const {
            text
        } = this.props;

       return <div style={{display:'flex', flexDirection:'column', flex:1, alignItems:'center'}}>
                 <h1>Default Gallery</h1>
                 <p>{text}</p>
              </div>
       }
 }

 export default(GalleryComponent);