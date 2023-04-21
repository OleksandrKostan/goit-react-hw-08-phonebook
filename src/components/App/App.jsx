
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import { GlobalStyle } from './GlobalStyle';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectError } from 'Redux/selectors';
import { fetchContacts } from 'Redux/operations';

import {ContactForm} from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';




export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (<> <ThemeProvider theme={theme}> <GlobalStyle />
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    {isLoading && !error && <b>Request in progress...</b>}
    <ContactList/>
  </ThemeProvider> </>  
  );
    
}