import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from '../../redux/contacts/operations';
import {
  selectLoading,
  selectAllContacts
} from '../../redux/contacts/selectors';
import Loader from '../Loader';
import {
  Form,
  Label,
  ButtonSubmit,
  InputName,
  InputNumber,
} from './ContactForm.styles';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const [addContact, { isLoading }] = useAddContactMutation();
  // const { data: contacts } = useGetContactsQuery(undefined, {
  //   skip: name === '',
  // });

  const contacts = useSelector(selectAllContacts);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const handleChangeName = e => setName(e.target.value);

  const handleChangeNumber = e => setNumber(e.target.value);

  const checkContact = name => {
    const normalizedName = name.toLowerCase();
    return contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit =  e => {
    e.preventDefault();
    const isContact = checkContact(name);

    if (isContact) {
      toast.error(`${name} is already in contacts.`);
      reset();
      return;
    }

    dispatch(addContact({ name, number }));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <InputName value={name} onChange={handleChangeName} />
      </Label>
      <Label>
        Number
        <InputNumber value={number} onChange={handleChangeNumber} />
      </Label>
      <ButtonSubmit disabled={isLoading}>
        {isLoading ? <Loader size={10} /> : 'Add contact'}
      </ButtonSubmit>
    </Form>
  );
}
