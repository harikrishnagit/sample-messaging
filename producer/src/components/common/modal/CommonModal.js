import React from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import ReactHtmlParser from 'react-html-parser';
import { Modal, Form, Icon, Header} from 'semantic-ui-react';

const CommonModal = props => {
    const { htmlContent } = props;
    const ignoreDefaultCancel = e => {
        e.preventDefault();
        props.cancelAction();
    };
    const ignoreDefaultConfirm = e => {
        e.preventDefault();
        props.confirmAction();
    };

    return (
        !!props.open && (
            // <FocusTrap>
            <Modal
                open={props.open}
                closeOnDimmerClick={props.closeOnDimmerClick === 'no' ? false : true}
                size={props.size ? props.size : 'tiny'}
                onClose={props.cancelAction || props.onClose}
            >
                <Header style={{background: "#28516A", color: "#FFF"}}>
                    {props.title}
                    <Icon name='close' onClick={ignoreDefaultCancel} className="inverted" title={props.cancelButtonText || 'Cancel'} style={{ float: 'right' }} />
                </Header>
                <Modal.Content style={{ padding: "0px 10px 35px" }}>
                    {htmlContent && ReactHtmlParser(props.htmlContent)}
                    {props.displayHtml ? ReactHtmlParser(props.children) : props.children}

                </Modal.Content>
            </Modal>
            // </FocusTrap>
        )
    )
};
CommonModal.propTypes = {
    buttonText: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
    closeOnDimmerClick: PropTypes.string,
    title: PropTypes.string.isRequired,
    open: PropTypes.any.isRequired,
    cancelAction: PropTypes.func.isRequired,
    confirmAction: PropTypes.func.isRequired,
    scrolling: PropTypes.bool
};

export default CommonModal;
