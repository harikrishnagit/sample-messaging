import React from 'react';
import { Table, Form } from 'semantic-ui-react';
import Header from './Header';
import HeaderCell from './HeaderCell';
import Footer from './Footer';
import Row from './Row';
import Body from './Body';
import cellTypes from './cellTypes';

class OIPTable extends React.Component {
    handleTableType = () => {
        const {
            type,
            summary,
            scrollable,
            collapsing,
            children,
            columns,
            basic,
            celled
        } = this.props;
        let table;
        switch (type) {
            case 'entry':
                table = (
                    <Table
                        selectable
                        celled={celled ? celled : true}
                        collapsing={collapsing}
                        className='entryTable'
                        summary={summary}
                        columns={columns}
                        basic={basic}
                        style={{
                            borderCollapse: 'collapse',
                            width: scrollable ? scrollable + '%' : ''
                        }}
                    >
                        {children}
                    </Table>
                );
                break;
            case 'static':
                table = (
                    <Table
                        selectable
                        basic
                        collapsing={collapsing}
                        className='staticTable'
                        summary={summary}
                        columns={columns}
                        basic={basic}
                        style={{
                            width: scrollable ? scrollable + '%' : ''
                        }}
                    >
                        {children}
                    </Table>
                );
                break;
            default:
                table = (<Table
                    selectable
                >
                    {children}
                </Table>);
        }
        return table;
    }
    render() {
        const { withForm } = this.props;
        return withForm === false ? (
            this.handleTableType()
        ) : (
                <Form className='tableForm' onSubmit={this.props.handleSubmit}>
                    {this.handleTableType()}
                </Form>
            )
    }
}

const {
    CheckboxCell,
    TextCell
} = cellTypes;


OIPTable.Header = Header;
OIPTable.Body = Body;
OIPTable.Footer = Footer;
OIPTable.Row = Row;
OIPTable.CheckboxCell = CheckboxCell;
OIPTable.HeaderCell = HeaderCell;
OIPTable.TextCell = TextCell;

export default OIPTable;