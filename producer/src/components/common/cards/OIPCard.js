import React from 'react';
import { Card, Grid, Button, Icon } from 'semantic-ui-react';
import OIPTable from '../tables/OIPTable'
import _ from 'lodash';

export class OIPCard extends React.Component {
    createRows = (object) => {
        if (typeof object === 'object') {
            if (_.has(object, "icon")) {
                return <Icon className={object.icon} onClick={object.fn} size={object.size} color={object.color} style={{ cursor: "pointer" }}></Icon>
            }

            return _.map(object, objectProp => { return this.createRows(objectProp) });
        }
        else if (typeof object === 'function') {
            return <Button icon="ellipsis horizontal" onClick={object}></Button>
        }
        else { return <Grid.Row fluid style={{ padding: "0px 14px" }}>{object}</Grid.Row> }
    }

    render() {
        const { data, children, extraCol } = this.props;
        // delete data.prototype;

        return (
            <Card fluid>
                <Card.Content>

                    <Grid fluid columns={_.size(data) + (extraCol ? extraCol : 0)}>
                        {_.map(data, x => {
                            return (
                                <Grid.Column>
                                    <OIPTable.TextCell>{this.createRows(x)}</OIPTable.TextCell>
                                </Grid.Column>
                            )
                        }
                        )
                        }
                        <OIPTable.TextCell>{children}</OIPTable.TextCell>
                    </Grid>
                </Card.Content>
            </Card>
        )
    }
}

export default OIPCard;
