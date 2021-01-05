import React from 'react';
import {Table} from 'semantic-ui-react';

class HeaderCell extends React.Component{
    render(){
        const { width, onClick } = this.props;
        let textAlign = (this.props.textAlign&&this.props.type==='number')?'right':this.props.textAlign;
        return(
            <Table.HeaderCell onClick={onClick} textAlign={textAlign} width={width} scope ='col' style={{backgroundColor:"gray", color:"white", width:width}}>
                {this.props.children}
            </Table.HeaderCell>
        )
    }
}

export default HeaderCell;