import ImgIcon from '../images/Img'

import { AppDOM } from '../constants/index'

export const DesktopWidth = AppDOM.offsetWidth
export const DesktopHeight = AppDOM.offsetHeight

export default {
  'desktop': {
    id: 'desktop',
    width: 600,
    height: 400,
    title: '桌面',
    display: 'flex',
    top: (DesktopHeight - 400)/2,
    left: (DesktopWidth - 600)/2,
    icon: ImgIcon.DesktopIcon
  },
  'dos': {
    id: 'dos',
    width: 600,
    height: 400,
    title: '命令行',
    display: 'flex',
    top: (DesktopHeight - 400 + 20)/2,
    left: (DesktopWidth - 600 + 40)/2,
    icon: ImgIcon.DosIcon
  },
  'browser': {
    id: 'browser',
    width: 600,
    height: 400,
    title: '浏览器',
    display: 'flex',
    top: (DesktopHeight - 400 + 40)/2,
    left: (DesktopWidth - 600 + 80)/2,
    icon: ImgIcon.ChromeIcon
  }
}