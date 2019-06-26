import React, { Component } from 'react';
import { string } from 'prop-types'

class GalleryComponent extends Component{

    static propTypes = {
        productName: string
    }

    static defaultProps = {
        productName: 'default'
    }

    render() {
    
        const {
            productName
        } = this.props;

       return <div style={{display:'flex', flexDirection:'column', flex:1, alignItems:'center'}}>
                 <h1>Windows Details</h1>
                 <p>{productName}</p>
              </div>
       }
 }

 export default(GalleryComponent);


//  var names = ['Jake', 'Jon', 'Thruster'];
//         var namesList = names.map(function(name){
//                         return <li>{name}</li>;
//                       })

//         return  <ul>{ namesList }</ul>