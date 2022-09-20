import {Suspense} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from "./SharedLayout.module.css";
import Container from 'components/Container';
import Header from 'components/Header';

function SharedLayout(props) {
  const getActiveClassName = ({isActive}) =>{
    return isActive ? `${s.link} ${s.active}` : s.link;
  }
  
  return (
    <>
      <Header>
        <NavLink className={getActiveClassName} end to="/"> Home</NavLink>
        <NavLink className={getActiveClassName} to="/movies">Movies</NavLink>
      </Header>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}

export default SharedLayout;
