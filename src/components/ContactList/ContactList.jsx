import { ElementListContact } from 'components/ElementListContact/ElementListContact';
import { useSelector } from "react-redux";
import { selectContacts, selectFilters } from 'Redux/selectors';

export const ContactList = () => { 

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilters);
  
    const visibleContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  
    return (
      <ul>
      {visibleContacts.map(({ name, phone, id }) => (
        <ElementListContact
        key={id}
          name={name}
          phone={phone}
          id={id}
          />
      ))}
    </ul>
    );
  };