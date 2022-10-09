import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { logIn } from '../../redux/auth/operations';
import Section from '../Section';
import Container from '../Container';
import {
  Form,
  Label,
  ButtonSubmit,
} from '../ContactForm/ContactForm.styles';

import {
  InputEmail,
  InputPassword
} from '../RegisterForm/RegisterForm.styles';

export default function LoginForm () {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    toast.success('Logged in successfully!');
    form.reset();
  };

  return (
      <Container>
        <Section title="LogIn">
          <Form  onSubmit={handleSubmit} autoComplete="off">
            <Label>Email
              <InputEmail/>
            </Label>
            <Label>Password
              <InputPassword />
            </Label>
              <ButtonSubmit text="LogIn"></ButtonSubmit>
          </Form>
        </Section>
      </Container>
  );
};
