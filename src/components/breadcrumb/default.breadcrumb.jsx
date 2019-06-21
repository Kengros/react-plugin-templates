import { Component } from 'react';
import { array } from 'prop-types'

class BreadcrumbComponent extends Component{

    static propTypes = {
        crumbs: array.isRequired
    }

    static defaultProps = {
        crumbs: []
    }

    render() {
    
        const {
            crumbs
        } = this.props;

        var breadcrumbs = crumbs.map(function(crumb){
            return `${crumb} / `;
        })

       return breadcrumbs;
    }
 }

 export default(BreadcrumbComponent);
