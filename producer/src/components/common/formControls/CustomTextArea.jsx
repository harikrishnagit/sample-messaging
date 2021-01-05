import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

class CustomTextArea extends React.Component {

    getLabelStyle = () => {
        return {
            display: 'block',
            margin: '0',
            color: 'rgba(0,0,0,.87)',
            fontSize: '.92857143em',
            fontWeight: '700',
            textTransform: 'none',
        }
    }

    render() {
        return (
            <React.Fragment>
                <label style={this.getLabelStyle()}
                    textarealabel={this.props.textarealabel}>{this.props.textarealabel}</label>
                <i maxcharacters={this.props.maxcharacters}  >
                    {this.props.characterCount} Characters  | {this.props.maxcharacters} Characters Maximum</i>
                <Form.TextArea
                    width={this.props.width}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    style={this.props.style}
                    maxLength={this.props.maxLength}
                />
            </React.Fragment>
        )
    }
};

CustomTextArea.propTypes = {
    textarealabel: PropTypes.string,
    maxcharacters: PropTypes.string,
    characterCount: PropTypes.number,
    width: PropTypes.any,
    name: PropTypes.string,
    value: PropTypes.any,
    maxLength: PropTypes.string
};

export default CustomTextArea;