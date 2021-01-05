import React from 'react';
import {Table} from 'semantic-ui-react';
import {Checkbox} from '../../formControls';
import PropTypes from 'prop-types';

class CheckboxCell extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked: this.props.checked?this.props.checked:false
        }
    }
    toggleCheckbox = () =>{
        const {handleChange, label} = this.props;
        this.setState(
            ({checked})=>({
                checked:!checked
            }),
            ()=>handleChange(label, this.state.checked)
        )
    }
    componentDidUpdate(){
        if( this.props.checked!==this.state.checked){
            this.setState({checked:this.props.checked});
        }
    }
    render(){
        const{
            label,
            disabled,
            myRef,
            width,
            isHeader,
            className,
            hideLabel,
            collapsing
        } = this.props;
        const {checked} = this.state;
        let field =(
            <Checkbox
                ref={myRef}
                title={label}
                name={label}
                className={className}
                label={label}
                hidelabel={hideLabel}
                handleChange={this.toggleCheckbox}
                disabled={disabled?true:false}
                value={label}
                checked={checked}
            />
        )
        if(isHeader){
            return(
                <Table.HeaderCell className='OIPTableCheckboxCell' width={width} collapsing={collapsing}>
                    {field}
                </Table.HeaderCell>
            )
        }
        else{
            return(
                <Table.Cell className='OIPTableCheckboxCell' width={width} collapsing={collapsing}>
                    {field}
                </Table.Cell>
            )
        }
    }
}

CheckboxCell.propTypes={
    label: PropTypes.any.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default CheckboxCell;