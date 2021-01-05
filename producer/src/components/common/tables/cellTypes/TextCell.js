import React from 'react';
import { Table } from 'semantic-ui-react';
// import moment from 'moment-timezone';

class TextCell extends React.Component {
    handleTextCell = () => {
        let value;
        let { children, type } = this.props;
        switch (type) {
            case 'date':
                // value = moment(value).format("MM/DD/YYYY")
                value = children;
                break;
            default:
                value = children;
        }
        return value;
    }

    render() {
        const { colSpan, emphasis, verticalAlign, textAlign, width } = this.props;
        let value = this.handleTextCell();
        let className = emphasis ?
            `oipTableTextCell border-line--${emphasis}` :
            'oipTableTextCell';
        return (
            <Table.Cell
                width={width}
                colSpan={colSpan}
                className={className}
                textAlign={textAlign ? textAlign : 'left'}
                verticalAlign={verticalAlign}
            >{value}</Table.Cell>
        )
    }
}

export default TextCell;