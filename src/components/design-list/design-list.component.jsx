import React, { Component } from 'react';
import { Link } from "react-router-dom";

class DesignListComponent extends Component{

    render() {

        return <div>
                   <h1>Im a list of designs!</h1>
                   <Link to="/chuck/countertops/pip">View PIP</Link>
               </div>
    }
 }

 export default(DesignListComponent);