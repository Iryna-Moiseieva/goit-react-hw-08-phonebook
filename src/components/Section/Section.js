import PropTypes from 'prop-types';
import { SectionStyled, Title } from './Section.styles';

export default function Section({ title, children }) {
  return (
    <SectionStyled>
      {title && <Title>{title}</Title>}
      {children}
    </SectionStyled>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
