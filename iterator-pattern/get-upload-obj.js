// 迭代器模式模式获取合适上传组件对象

const iteratorUploadObj = (...args) => {
    for (let fn of args) {
        let uploadObj = fn()
        if (uploadObj) {
            return uploadObj
        }
    }
    return null
}

const getActiveUploadObj = () => {
    try {
        return new ActiveXObject('TXFTNActive.FINUpload') // IE 上传控件
    } catch {
        return false
    }
}
const getFlashUploadObj = () => {
    if (supportFlash()) {
        let str = '<object type="application/xshockwave-flash"></object>'
        return $(str).appendTo($('body'))
    }
    return false
}

const uploadObj = iteratorUploadObj(getActiveUploadObj, getFlashUploadObj, getFormUploadObj, ...)