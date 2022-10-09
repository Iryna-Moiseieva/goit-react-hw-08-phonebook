import {useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

import Section from '../Section';
import Container from '../Container';
import {
  Form,
  Label,
  ButtonSubmit,
  InputName,
} from '../ContactForm/ContactForm.styles';

import {
  InputEmail,
  InputPassword
} from './RegisterForm.styles';


export default function RegisterForm () {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Container>
      <Section title="Registration">

    <Form  onSubmit={handleSubmit} autoComplete="off">
      <Label>Username
        <InputName/>
      </Label>
      <Label>Email
        <InputEmail/>
      </Label>
      <Label>Password
        <InputPassword/>
      </Label>
        <ButtonSubmit text="Register"></ButtonSubmit>
          </Form>
        </Section>
        </Container>
      </>
  );
};

