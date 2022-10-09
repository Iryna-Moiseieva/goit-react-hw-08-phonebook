import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Section from 'components/Section';
import Loader from '../../components/Loader'
import Container from '../../components/Container';
import ContactFilter from '../../components/ContactFilter';

import { fetchContacts } from '../../redux/contacts/operations';
import { selectLoading } from '../../redux/contacts/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <div>{isLoading && <Loader/>}</div>
      <Section title="Contacts">
        <ContactFilter />
        <ContactList />
      </Section>
    </Container>
  );
}