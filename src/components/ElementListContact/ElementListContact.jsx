import PropTypes from 'prop-types';
import { Delete } from './ElementList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/operations';


export const ElementListContact = ({ id, name, phone}) => { 
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id))
    return (
    <li>
        {name}: {phone}
        <Delete
            type="button"
            onClick={handleDelete} >
            Delete
        </Delete>
    </li>
        );};

        
ElementListContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,

};