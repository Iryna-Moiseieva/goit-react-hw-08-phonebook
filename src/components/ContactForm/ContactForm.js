import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { addContact } from '../../redux/contacts/operations';
import { selectAllContacts} from '../../redux/contacts/selectors';

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

  const contacts = useSelector(selectAllContacts);
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
    toast.success(`${name} was created!`);
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
      <ButtonSubmit text="Add contact">
      </ButtonSubmit>
    </Form>
  );
}
