import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/contacts/slice';
import { Label, FilterInput } from './ContactFilter.styles';

export default function Filter() {
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(addFilter(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <FilterInput onChange={onChange} />
    </Label>
  );
}