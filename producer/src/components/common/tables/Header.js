import React from 'react';
import {Table} from 'semantic-ui-react';

class Header extends React.Component{
    render(){
        return(
            <Table.Header width={this.props.width}>
                {this.props.children}
            </Table.Header>
        );
    }
}

export default Header;