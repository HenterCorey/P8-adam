var Base = {}
/**
 * 获取指定的 querystring 中指定 name 的 value
 * @param {String} name
 * @param {String} querystring
 * @return {String|undefined}
 *
 * query('hello', '?hello=js') 结果是 js
 *
 */
Base.query = function (name, querystring) {
  var reg = new RegExp('(?:\\?|&)' + name + '=(.*?)(?:&|$)')
  var ret = reg.exec(querystring)
  return ret[1]
}

/**
 * 序列化对象，就是把对象转成 url 字符串
 * @param {Obj} data
 * @return {String}
 *
 * serialize({hello: 'js', hi: 'test'}) 结果是 ''
 */
Base.serialize = function (data) {
  var arr = []
  for (i in data) {
    arr.push(i + '=' + data[i])
  }
  var json = arr.join('&')
  return json
}

/**
 * 根据选择器查找 DOM
 * 就是模拟 $() ，当然，这里返回元素的 DOM 对象即可
 * @param {String} selector
 * @return {DOM|Null}
 */
Base.$ = function (selector) {
  var me = document.querySelectorAll(selector)
  return me
}

/**
 * 删除 DOM 节点
 * @param {DOM} node
 * @return {DOM}
 */
Base.removeNode = function (node) {
  var me = document.querySelectorAll(node)
  if (me.length !== 0) {
    for (var i = 0; i < me.length; i++) {
      me[i].parentNode.removeChild(me[i])
    }
  } else {
    return 'no find'
  }
}

/**
 * 在 target 节点之后插入 node 节点
 * 类似 $().insertAfter()
 * @param {DOM} node
 * @param {DOM} target
 */
Base.insertAfter = function (node, target) {
  var me = document.querySelectorAll(target)
  console.log(me.length)
  if (me.length !== 0) {
    for (var i = 0; i < me.length; i++) {
      var parent = me[i].parentNode
      if (parent.lastChild === me[i]) {
        parent.appendChild(node.cloneNode(true))
      } else {
        parent.insertBefore(node.cloneNode(true), me[i].nextSibling)
      }
    }
  } else {
    return 'no find'
  }
}

/**
 * 添加类名
 * @param {DOM} node
 * @param {String|Array} className
 */
Base.addClass = function (node, className) {
  var me = document.querySelectorAll(node)
  if (me.length !== 0) {
    for (var i = 0; i < me.length; i++) {
      me[i].classList.add(className)
    }
  } else {
    return 'no find'
  }
}

/**
 * 移除类名
 * @param {DOM} node
 * @param {String|Array} className
 */
Base.removeClass = function (node, className) {
  var me = document.querySelectorAll(node)
  if (me.length !== 0) {
    for (var i = 0; i < me.length; i++) {
      me[i].classList.remove(className)
    }
  } else {
    return 'no find'
  }
}

/**
 * 获取绝对路径
 * @param {String} url
 * @return {String}
 *
 * getAbsoluteUrl('/jerojiang') => 'http://imweb.io/jerojiang'
 * 在当前页面获取绝对路径，这里要创建 A 元素，测试用例看你们的了
 */
Base.getAbsoluteUrl = function (url) {
  var a = document.createElement('a')
  a.href = 'http://imweb.io' + url
  return a
}

/**
 * 防抖动
 * 防抖动函数了啦，有做个这个习题，不清楚回去复习
 */
Base.debounce = function (fn, delay) {
  let timer = null

  return function () {
    const context = this
    const args = arguments

    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}
Base.debounce2 = function (callback, time) {
  var timer
  time = time || 300
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback()
    }, time)
  }
}

/**
 *  根据所以移出数组的某一项
 * @param {Number} index
 * @param {Array} arr
 * @return {Array}
 *
 * removeItemByIndex(1, [1,2,3]) => [1, 3]
 */
Base.removeItemByIndex = function (index, arr) {
  arr.splice(index, 1)
  return arr
}

// 数组取最大值
Base.maxnumber = function (arr) {
  if (arr.length > 0) {
    var arr = arr
    var max = arr[0]
    if (arr.length === 1) {
      return max
    } else {
      for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i]
        }
      }
      return max
    }
  } else {
    return '数组长度不能为0'
  }
}

// 获取数组指定位置
Base.x = function (x, arr) {
  return arr.splice(x, 1)
}

// 数组添加元素
Base.push = function (x, arr) {
  arr.push(x)
  return arr
}

// 拼接文字
Base.p = function (name, age) {
  return '我叫' + name + ',今年' + age + '岁'
}

// 判断对象是否为空
Base.unll = function (obj) {
  var obj = obj
  if (obj == '' || obj == null || obj == undefined || obj == 'null' || obj == 'undefined') {
    return '空'
  } else {
    return '非空'
  }
}

// 校验是否全由数字组成
Base.isDigit = function (s) {
  var patrn = /^[0-9]{1,20}$/
  if (!patrn.exec(s)) {
    return false
  } else {
    return true
  }
}

module.exports = Base
