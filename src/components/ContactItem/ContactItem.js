import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { deleteContact } from '../../redux/contacts/operations';
// import { selectLoading } from '../../redux/contacts/selectors';
import PropTypes from 'prop-types';
// import Loader from '../Loader';
import {
  ButtonDelete,
  IndexNumber,
  Container,
  Wrapper,
  Name,
  Number,
} from './ContactItem.styles';

export default function ContactItem({ id, name, number, index }) {
// const { id: contactId } = useParams();
  // const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Container>
      <Wrapper>
      <IndexNumber>{`${index + 1}.`}</IndexNumber>
      <Name>{name}</Name>
        <Number>{number}</Number>
        </Wrapper>
        <ButtonDelete onClick={handleDelete}>Delete
      </ButtonDelete>
    </Container>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
