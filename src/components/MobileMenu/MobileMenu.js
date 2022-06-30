/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import {COLORS, QUERIES} from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content>
        <DismissIcon id={'close'} strokeWidth={1} onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </DismissIcon>
        <Nav>
          <NavLink isHighlighted href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  background: rgba(96, 100, 108, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Content = styled(DialogContent)`
  background-color: white;
  width: 300px;
  height: 100%;
  top: 0;
  right: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  padding-left: 25px;
`;

const DismissIcon = styled(Icon)`
  svg {
    margin: 24px 12px 24px auto;
  }
`;

const Nav = styled.nav`
  top: 50%;
  display: flex;
  flex-direction: column;
  margin: auto 0;
  gap: 22px;
`;

const NavLink = styled.a`
  font-size: ${18 / 16}rem;
  text-decoration: unset;
  text-transform: uppercase;
  color: ${p => p.isHighlighted ? COLORS.secondary : COLORS.gray['900'] };
`;

const Footer = styled.footer`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 32px;
`;

const FooterLink = styled.a`
  font-size: ${14 / 16}rem;
  color: ${COLORS.gray['700']};
  text-decoration: unset;
`;

export default MobileMenu;
