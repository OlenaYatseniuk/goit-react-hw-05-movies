import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import s from './Header.module.css';

function Header({ children }) {
  return (
    <Container>
      <header className={s.header}>
        <nav>{children}</nav>
      </header>
    </Container>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
