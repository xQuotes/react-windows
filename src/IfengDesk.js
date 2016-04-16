'use strict';

import React from 'react';

if (!React) {
  throw new Error('IfengDesk requires React.');
}

import Desktop from './Desktop';

import Header from './Header';
import Footer from './Footer';
import RightClickMenu from './RightClickMenu';
import DeskIcon from './DeskIcon';
import StartMenu from './StartMenu';
import Window from './Window';
import Dos from './Dos';

const IfengDesk = {
  VERSION: '__VERSION__',
  
  Desktop: Desktop,

  Header: Header,
  Footer: Footer,
  
  RightClickMenu: RightClickMenu,
  DeskIcon: DeskIcon,
  StartMenu: StartMenu,
  Window: Window,
  Dos: Dos
}

export default IfengDesk;