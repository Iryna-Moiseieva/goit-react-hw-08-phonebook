import { useSelector } from 'react-redux';
// import { getVisibleContacts } from '../../redux/contacts/selectors';
import { selectAllContacts } from '../../redux/contacts/selectors';
import ContactItem from 'components/ContactItem';
// import Loader from '../Loader';
import { Container } from './ContactList.styles';

export default function ContactList() {
const visibleContacts = useSelector(selectAllContacts);

  return (
    <Container>
      {visibleContacts.map(({ id, name, number }, index) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            index={index} />
        );
      })}
    </Container>
  );
}

