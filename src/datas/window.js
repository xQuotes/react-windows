import ImgIcon from '../images/Img';

import { AppDOM } from '../constants/index'

export const DesktopWidth = AppDOM.offsetWidth
export const DesktopHeight = AppDOM.offsetHeight

console.log(DesktopHeight)

export default {
  'desktop': {
    id: 'desktop',
    width: 600,
    height: 400,
    title: '桌面',
    top: (DesktopHeight - 400)/2,
    left: (DesktopWidth - 600)/2,
    zIndex: 99
  },
  'dos': {
    id: 'dos',
    width: 600,
    height: 400,
    title: '命令行',
    top: (DesktopHeight - 400)/2,
    left: (DesktopWidth - 600)/2,
    zIndex: 98
  },
  'browser': {
    id: 'browser',
    width: 600,
    height: 400,
    title: '浏览器',
    top: (DesktopHeight - 400)/2,
    left: (DesktopWidth - 600)/2,
    zIndex: 97
  }
}