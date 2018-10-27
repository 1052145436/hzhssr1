/**
 * 实用工具库
 * @author lucy <76573917@qq.com>
 * @created 2017/12/18 11:56
 */
import isNull from 'lodash/isNull'
import isArray from 'lodash/isArray'
import isNumber from 'lodash/isNumber'
import isObject from 'lodash/isObject'
import isString from 'lodash/isString'
import isBoolean from 'lodash/isBoolean'
import isFunction from 'lodash/isFunction'
import isUndefined from 'lodash/isUndefined'

import chunk from 'lodash/chunk'
import extend from 'lodash/extend'
import debounce from 'lodash/debounce'
import uniqueID from 'lodash/uniqueId'

/**
 * sleep
 * @param { Number } ms - 等待时间。单位（毫秒）
 * @returns { Promise }
 */
export const sleep = ms => {
    return new Promise(resolve => setTimeout(() => {
        resolve()
    }, ms))
}

/**
 * device
 * @returns { Object } - device
 */
export const device = (() => {
    let device = {}

    let ua = navigator.userAgent
    // eslint-disable-next-line no-useless-escape
    let android = ua.match(/(Android);?[\s\/]+([\d.]+)?/)
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
    let ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/)
    let iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/)

    // android
    if (android) {
        device.os = 'android'
        device.osVersion = android[2]
        device.android = true
        device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0
    }

    // ios
    if (ipad || iphone || ipod) {
        device.os = 'ios'
        device.ios = true
    }
    if (iphone && !ipod) {
        device.osVersion = iphone[2].replace(/_/g, '.')
        device.iphone = true
    }
    if (ipad) {
        device.osVersion = ipad[2].replace(/_/g, '.')
        device.ipad = true
    }
    if (ipod) {
        device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null
        device.iphone = true
    }
    // iOS 8+ changed UA
    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
        if (device.osVersion.split('.')[0] === '10') {
            device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0]
        }
    }
    // weixin
    device.isWeixin = /MicroMessenger/i.test(ua)
    return device
})()

/**
 * 动态设置页面title
 * @param { String } title - 标题
 */
export const setDocumentTitle = title => {
    document.title = title
    if (device.isWeixin && device.os === 'ios') {
        let iframe = document.createElement('iframe')

        iframe.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
        iframe.style.display = 'none'
        iframe.onload = async () => {
            await sleep(10)
            iframe.remove()
        }
        document.body.appendChild(iframe)
    }
}

/**
 * 获取文件后缀
 * @param { String } filename
 * @returns { String }
 */
export const getFileSuffix = (filename) => {
    let dotIndex = filename.indexOf('.')

    if (dotIndex === 0) {
        filename = filename.substring(1)
        dotIndex = filename.indexOf('.')
    }
    if (dotIndex > 0) {
        return filename.substring(dotIndex + 1)
    }
    return ''
}

/**
 * 检查 value 是否是nodeList
 * @param { * } value
 * @returns { Boolean } value是nodeList，那么返回 true，否则返回 false
 */
export const isNodeList = (value) => {
    return Object.prototype.toString.call(value) === '[object NodeList]'
}

/**
 * url参数转对象
 * @param { String } url  默认: window.location.href
 * @returns { Object }
 */
export const parseQueryString = (url = window.location.href) => {
    let query = {}
    let search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1)

    if (search === '') {
        return {}
    }
    search = search.split('&')
    for (let i = 0; i < search.length; i++) {
        let pair = search[i].split('=')
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')
    }
    return query
}

/**
 * 检查是否存在指定类名
 * @param element 元素
 * @param className 类名
 * @returns { Boolean }
 */
export const hasClass = (element, className = '') => {
    if (className.replace(/\s/g, '').length === 0) {
        return false
    }
    return new RegExp(' ' + className + ' ').test(' ' + element.className + ' ')
}

/**
 * 添加指定的类名
 * @param element 元素
 * @param className 类名
 */
export const addClass = (element, className) => {
    if (!hasClass(element, className)) {
        element.className = element.className === '' ? className : element.className + ' ' + className
    }
}

/**
 * 移除一个，多个或全部的类名
 * @param element
 * @param className
 */
export const removeClass = (element, className) => {
    if (hasClass(element, className)) {
        let newClass = ' ' + element.className.replace(/[\t\r\n]/g, '') + ' '

        while (newClass.indexOf(' ' + className + ' ') >= 0) {
            newClass = newClass.replace(' ' + className + ' ', ' ')
        }
        element.className = newClass.replace(/^\s+|\s+$/g, '')
    }
}

/**
 * 绑定事件
 */
export const on = (function () {
    if (document.addEventListener) {
        return function (element, type, listener, useCapture = false) {
            if (element && type && listener) {
                element.addEventListener(type, listener, useCapture)
            }
        }
    } else {
        return function (element, type, listener) {
            if (element && type && listener) {
                element.attachEvent('on' + type, listener)
            }
        }
    }
})()

/**
 * 解绑事件
 */
export const off = (function () {
    if (document.removeEventListener) {
        return function (element, type, listener, useCapture = false) {
            if (element && type) {
                element.removeEventListener(type, listener, useCapture)
            }
        }
    } else {
        return function (element, type, listener) {
            if (element && type) {
                element.detachEvent('on' + type, listener)
            }
        }
    }
})()

/**
 * 获取窗口尺寸
 * @returns {{ width: Number, height: Number }}
 */
export const getWindowSize = () => {
    let w = window
    let d = document
    let e = d.documentElement
    let g = d.getElementsByTagName('body')[0]
    let width = w.innerWidth || e.clientWidth || g.clientWidth
    let height = w.innerHeight || e.clientHeight || g.clientHeight

    return {
        width,
        height
    }
}


/**
 * 返回顶部（支持缓动）
 * @param el 元素
 * @param from
 * @param to
 * @param duration 持续时间
 */
export const scrollTop = (el, from = 0, to, duration = 500) => {
    const difference = Math.abs(from - to)
    const step = Math.ceil(difference / duration * 50)

    const scroll = (start, end, step) => {
        if (start === end) return

        let d = (start + step > end) ? end : start + step

        if (start > end) {
            d = (start - step < end) ? end : start - step
        }
        if (el === window) {
            window.scrollTo(d, d)
        } else {
            el.scrollTop = d
        }
        window.requestAnimationFrame(() => scroll(d, end, step))
    }
    scroll(from, to, step)
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param { ...Function } funcs The functions to compose.
 * @returns { Function } A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
export const compose = (...funcs) => {
    if (funcs.length === 0) {
        return arg => arg
    }
    if (funcs.length === 1) {
        return funcs[0]
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

/**
 * 获取字符串中多个属性
 * @param { String } string 字符串
 * @returns { Object }
 */
export const getStringAttributes = (string) => {
    let regex = /(\w+)\s*=\s*((["'])(.*?)\3|([^>\s]*)(?=\s|\/>))/g
    let attributes = {}
    let match

    while ((match = regex.exec(string)) !== null) {
        if (match.index === regex.lastIndex) {
            regex.lastIndex++
        }
        attributes[match[1]] = match[4]
    }
    return attributes
}

export {
    chunk,
    isNull,
    isNumber,
    isObject,
    isString,
    isUndefined,
    isBoolean,
    isFunction,
    isArray,
    extend,
    debounce,
    uniqueID
}

export default {
    on,
    off,
    sleep,
    device,
    chunk,
    uniqueID,
    extend,
    debounce,
    isNull,
    isArray,
    isObject,
    isString,
    isNumber,
    isNodeList,
    getFileSuffix,
    isBoolean,
    isFunction,
    isUndefined,
    hasClass,
    addClass,
    removeClass,
    getWindowSize,
    compose,
    setDocumentTitle,
    getStringAttributes
}
