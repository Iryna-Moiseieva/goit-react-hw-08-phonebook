import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import {
  ButtonDelete,
  IndexNumber,
  Container,
  Wrapper,
  Name,
  Number,
} from './ContactItem.styles';

export default function ContactItem({ id, name, number, index }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.success(`${name} has been deleted!`);
  }


  return (
    <Container>
      <Wrapper>
      <IndexNumber>{`${index + 1}.`}</IndexNumber>
      <Name>{name}</Name>
        <Number>{number}</Number>
        </Wrapper>
        <ButtonDelete text="Delete" onClick={handleDelete}>
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
