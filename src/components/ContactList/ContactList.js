import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAllContacts, selectFilter, selectLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactItem from 'components/ContactItem';
import Loader from '../Loader';
import { Container } from './ContactList.styles';

export default function ContactList() {
const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getContactsList = () => {
    const filterValue = (filter || '').toLowerCase().trim();
    return contacts.filter(contact =>
      (contact.name || '').toLowerCase().includes(filterValue)
    );
  };


  return (
    <Container>
      {isLoading ? (
          <Loader />
        ) : (
          <>
            {contacts &&
              getContactsList().map(({ name, number, id }, index ) => (
                <ContactItem
                  key={id}
                  id={id}
                  name={name}
                  number={number}
                  index={ index }
                />
              ))}
          </>
        )}
    </Container>
  );
}

