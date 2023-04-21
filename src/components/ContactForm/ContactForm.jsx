import { useDispatch, useSelector  } from 'react-redux';
import { Button } from './ContactForm.styled';
import { addContact } from 'Redux/operations';
import { selectContacts } from 'Redux/selectors';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts) 
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const findContact = contacts.find(contact => contact.name.toLowerCase().includes(form.elements.name.value.toLowerCase()));
      if (findContact) {
        toast.warning(`${findContact.name} is already in contacts`, {
          position: 'top-center',
        })
     return findContact.name;
      }
    dispatch(addContact({
      name: form.elements.name.value, 
      phone: form.elements.phone.value,
    }));
    form.reset();
  };
  
  
return (<form onSubmit={handleSubmit}> <label >
Name <input type="text"
name="name"
pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
required


          /></label>
  <label> Number <input
  type="tel"
  name="phone"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
     

/>
        </label>
        <Button  type="submit">Add contact</Button> <ToastContainer/>
      </form>);
    }
