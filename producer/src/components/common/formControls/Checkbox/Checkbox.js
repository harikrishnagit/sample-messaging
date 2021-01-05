import React from 'react';
import {Form, Checkbox as SCheckbox} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export class _Checkbox extends React.Component{
    componentWillMount = () =>{
        this.id = 'checkBox' + _.uniqueId();
    };
    toggleCheckbox =()=>{
        const {handleChange, label,name} = this.props;
        handleChange(
            name!==undefined&&name!==''&&name!==null?name:label,
            !this.props.checked
        );
    }
    render(){
        const{
            label,
            disabled,
            myRef,
            checked,
            className,
            hideLabel
        } = this.props;
        const id = this.id;
        return(
            <Form.Field
                ref={myRef}
                key={id}
                id={id}
                value={label}
                control={SCheckbox}
                title={label}
                label={hideLabel?'':label}
                aria-label={label}
                onChange={this.toggleCheckbox}
                onBlur={this.props.handleBlur}
                checked={checked}
                disabled={disabled?true:false}
                className={className}
            />
        )
    }

    
}

_Checkbox.propTypes = {
    disabled: PropTypes.bool,
    handleChange: PropTypes.func.isRequired  
}

export const Checkbox = _Checkbox;