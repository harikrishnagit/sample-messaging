import React from 'react';
import {Table} from 'semantic-ui-react';

class Body extends React.Component{
    render(){
        return( <Table.Body>{this.props.children}</Table.Body>);
    }
}

export default Body;