import React from 'react';
import {Table} from 'semantic-ui-react';

class Row extends React.Component{

    render(){
        let { displayError, warning } = this.props;
        if(!displayError){
            return(
                <Table.Row verticalAlign='top' scope='row' warning={warning}>
                    {this.props.children}
                </Table.Row>
            );
        }else{
            return(
                <React.Fragment>
                    <Table.Row verticalAlign='top' scope='row' className='errorBorderline'>
                        {this.props.children}
                    </Table.Row>
                    <Table.Row verticalAlign='top' scope='row' className='errorBorderline'>
                        <Table.Cell>
                            {this.props.errorMessages.map(message=>{
                                return <p>{message}</p>
                            })}
                        </Table.Cell>
                    </Table.Row>
                </React.Fragment>
            )
        }
    }

}

export default Row;