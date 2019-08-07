'use strict'

var Base = require('../base')

test('removeItemByIndex', function () {
  // 删除数组指定元素
  var arr = [1, 2, 3]
  expect(Base.removeItemByIndex(1, arr)).toStrictEqual([1, 3])
  expect(Base.removeItemByIndex(0, ['a', 'c', 'z'])).toStrictEqual(['c', 'z'])
})

describe('removeNode', function () {
  // 删除节点
  test('removeNode', function () {
    document.body.innerHTML = '<div><span class="2"></span><p class="me"></p><p class="me"></p></div>'
    Base.removeNode('p')
    expect(document.body.innerHTML).toBe('<div><span class="2"></span></div>')
  }), test('removeNode', function () {
    document.body.innerHTML = '<div><span class="2"></span><p class="me"></p><p class="me"></p></div>'
    Base.removeNode('span')
    expect(document.body.innerHTML).toBe('<div><p class="me"></p><p class="me"></p></div>')
    expect(Base.removeNode('span')).toBe('no find')
  })
})

describe('insertAfter', function () {
  // 插入node节点
  it('insertAfter', function () {
    var node = document.createElement('h1')
    node.innerHTML = '0000'
    document.body.innerHTML = '<div><p></p></div><div><p></p><h3></h3></div><p></p>'
    Base.insertAfter(node, 'p')
    console.log(document.body.innerHTML)
    expect(document.getElementsByTagName('h1').length).toBe(3)
    expect(Base.insertAfter(node, 'h2')).toBe('no find')
  })
})

describe('addClass', function () {
  // 添加类名
  it('addClass', function () {
    document.body.innerHTML = '<div><p class="1"></p></div><div><p></p></div>'
    Base.addClass('p', 11111)
    var numbers = document.getElementsByClassName('11111')
    expect(numbers.length).toBe(2)
    expect(Base.addClass('h2', 11111)).toBe('no find')
  })
})

describe('removeClass', function () {
  // 移除类名
  it('removeClass', function () {
    document.body.innerHTML = '<div><p class="1 2"></p></div><div><p class="2 3"></p></div>'
    Base.removeClass('p', 2)
    var number1 = document.getElementsByClassName('2').length
    var number2 = document.getElementsByClassName('1').length
    var number3 = document.getElementsByClassName('3').length
    expect(number1).toBe(0)
    expect(number2).toBe(1)
    expect(number3).toBe(1)
    expect(Base.removeClass('h2', 2)).toBe('no find')
  })
})

describe('getAbsoluteUrl', function () {
  // 获取绝对地址
  it('getAbsoluteUrl', function () {
    expect(Base.getAbsoluteUrl('/jerojiang').href).toBe('http://imweb.io/jerojiang')
  })
})

describe('query', function () {
  // 获取指定的 querystring 中指定 name 的 value
  it('query', function () {
    expect(Base.query('hello', '?hello=js')).toBe('js')
    expect(Base.query('hello2', '?hello2=js')).toBe('js')
    expect(Base.query('hello', '?&hello=j')).toBe('j')
    expect(Base.query('hello', '?hello=j&hello=me')).toBe('j')
  })
})

describe('serialize', function () {
  // 序列化对象为字符串
  it('serialize', function () {
    var data = { name: 'chengweinan', age: '25', hello: 'js', hi: 'test' }
    expect(Base.serialize({ hello: 'js', hi: 'test' })).toBe('hello=js&hi=test')
    expect(Base.serialize(data)).toBe('name=chengweinan&age=25&hello=js&hi=test')
  })
})

describe('$', function () {
  // 根据选择器查找dom
  it('$', function () {
    document.body.innerHTML = '<div class="div"><p id="p"></p><span></span><p></p></div>'
    expect(Base.$('#p').length).toBe(1)
    expect(Base.$('.div').length).toBe(1)
    expect(Base.$('p').length).toBe(2)
    expect(Base.$('span').length).toBe(1)
  })
})

describe('debounce', function () {
  // 防抖动函数
  it('检测累加结果, 传time', function (done) {
    var total = 0
    var debounce = Base.debounce(function () {
      total += 1
      expect(total).toBe(1)
      done()
    }, 300)

    for (var i = 0; i < 1000; i++) {
      debounce()
    }

    expect(total).toBe(0)
  })

  it('检测累加结果, 不传time', function (done) {
    var total = 0
    var debounce = Base.debounce(function () {
      total += 1
      expect(total).toBe(1)
      done()
    })

    for (var i = 0; i < 10; i++) {
      debounce()
    }

    expect(total).toBe(0)
  })
})

describe('debounce2', function () {
  // 防抖动函数2
  it('debounce2', function (done) {
    var num = 0
    var debounce = Base.debounce2(function () {
      console.log('debounce')
      num += 1
      expect(num).toBe(1)
      done()
    })
    for (var i = 0; i < 10; i++) {
      debounce()
    }
    expect(num).toBe(0)
  })
})

describe('maxnumber', function () {
  // 数组取最大值
  it('maxnumber', function () {
    expect(Base.maxnumber([])).toBe('数组长度不能为0')
    expect(Base.maxnumber([6])).toBe(6)
    expect(Base.maxnumber([5, 7, 9, 2, 4])).toBe(9)
  })
})

it('x', function () {
  // 获取数组指定位置
  expect(Base.x(2, [1, 2, 'me', 4])).toStrictEqual(['me'])
})

it('push', function () {
  // 数组添加元素
  expect(Base.push(2, [1, 2, 'me', 4])).toStrictEqual([1, 2, 'me', 4, 2])
})

it('p', function () {
  // 文字拼接
  expect(Base.p('Tom', 20)).toBe('我叫Tom,今年20岁')
})

it('unll', function () {
  // 判断对象是否为空
  expect(Base.unll()).toBe('空')
  expect(Base.unll({ hello: 'me' })).toBe('非空')
})

it('isDigit', function () {
  // 判断是否全是数字组成
  expect(Base.isDigit('1234567')).toBe(true)
  expect(Base.isDigit('assd324325')).toBe(false)
})
