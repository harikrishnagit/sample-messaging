import React from 'react';
import {Grid} from 'semantic-ui-react';

class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <br/>
                <Grid>
                    <Grid.Row>{this.props.children}</Grid.Row>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Footer;