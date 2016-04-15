'use strict';

import React from 'react';

if (!React) {
  throw new Error('IfengDesk requires React.');
}

import Desktop from './Desktop';
import RightClickMenu from './RightClickMenu';
import DeskIcon from './DeskIcon';
import StartMenu from './StartMenu';
import Window from './Window';
import Dos from './Dos';

import commonStyle from './style/common.less';

const IfengDesk = {
  VERSION: '__VERSION__',

  Desktop: Desktop,
  RightClickMenu: RightClickMenu,
  DeskIcon: DeskIcon,
  StartMenu: StartMenu,
  Window: Window,
  Dos: Dos
}

export default IfengDesk;