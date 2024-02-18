import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup,
  MDBTabsItem,
  MDBTabs
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <Link to="/product">
        <MDBTabs className='mb-3'>
          
        <MDBTabsItem>
         All Product
        </MDBTabsItem>
        </MDBTabs>
        </Link>
        <Link to="/cart">
        <MDBTabs className='mb-3'>
        <MDBTabsItem>
         Cart
        </MDBTabsItem>
        </MDBTabs>
        </Link>

      <MDBBtn color='dark'>
        cart {0}
      </MDBBtn>

      </MDBContainer>
    </MDBNavbar>
  );
}