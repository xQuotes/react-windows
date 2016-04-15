'use strict';

import React from 'react';

if (!React) {
  throw new Error('IfengDesk requires React.');
}

import Desktop from './Desktop';

import commonStyle from './style/common.less';

const IfengDesk = {
  VERSION: '__VERSION__',

  Desktop: Desktop
}

export default IfengDesk;