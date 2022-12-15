import PropTypes from 'prop-types';
import { Form, Input, SearchBtn } from "./SearchBox.styled";


export const SearchBox = ({handleChangeInput, handleSubmit}) =>{

    const onChangeInput  = e =>{
        handleChangeInput(e.target.value.trim())
    };

    const onSubmitForm = e =>{
        e.preventDefault();
        handleSubmit()
    }

    return(
        <Form onSubmit={onSubmitForm}>
            <Input 
                type='text'
                onChange={onChangeInput}
                />
            <SearchBtn type="Submit">Submit</SearchBtn>
        </Form>
    )
};

SearchBox.propTypes = {
    handleChangeInput: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}