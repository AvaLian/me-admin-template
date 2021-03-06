import router from '@/router'
import config from '@/_config'
import { Message, MessageBox } from 'element-ui'
import NProgress from 'nprogress' // Progress 进度条

//#region 提示
export const back = _ => {
  router.back()
}
export const link = route => {
  if (!route) return
  if (
    typeof route === 'string' &&
    (route.indexOf('http') > -1 || route.indexOf('//') > -1)
  ) {
    return (location.href = route)
  }
  return router.push(route)
}

export const info = (msg, opt) => {
  _currentMessage({
    message: msg,
    type: 'info',
    showClose: true,
    duration: 1500,
    ...opt
  })
}
export const warn = (msg, opt) => {
  _currentMessage({
    message: msg,
    type: 'warning',
    showClose: true,
    duration: 2000,
    ...opt
  })
}
export const success = (msg, opt) => {
  _currentMessage({
    message: msg,
    type: 'success',
    showClose: true,
    duration: 1500,
    ...opt
  })
}
export const confirm = (content, opt) => {
  return _currentConfirm(
    content,
    '提示',
    Object.assign(
      {
        type: 'warning'
      },
      opt
    )
  )
}

function _currentMessage(opt) {
  return Message(opt)
  // return window.__currentApp.$message(opt)
}
function _currentConfirm(content, title, opt) {
  return MessageBox.confirm(content, title, opt)
  // return window.__currentApp.$confirm(content, title, opt)
}

//#endregion

//#region 进度条

export function showProgress() {
  NProgress.start()
}
export function hideProgress() {
  NProgress.done()
}

//#endregion

//#region 辅助方法

export function getDownloadUrl(imgUrl) {
  if (imgUrl || imgUrl.indexOf('http') === 0 || imgUrl.indexOf('//') === 0) {
    return imgUrl
  }
  return config.previwFileUrl + imgUrl
}
//#endregion
