describe('First RegExp', () => {
  it('Atomic', () => {
    let s = `<h1>asdfjioasdf</h1>
  <h2>bhds</h2>
`
    let reg = /<(h[1-6])>([\s\S]*)<\/\1>/i

    expect((s.match(reg) as any)[0]).toBe('<h1>asdfjioasdf</h1>')
    expect((s.match(reg) as any)[1]).toBe('h1')
    expect((s.match(reg) as any)[2]).toBe('asdfjioasdf')
  })
})

describe('test emial', () => {
  it('email test', () => {
    let email_test1 = '1923212@qq.com'
    let email_test2 = '@qq.com'
    let email_test3 = '123123123@qq'

    const reg = /^[\w-]+(@[\w-]+\.)(com|org|cc|cn|net)$/i
    expect(email_test1.match(reg)[0]).toBe('1923212@qq.com')
    expect(email_test2.match(reg)).toBe(null)
    expect(email_test3.match(reg)).toBe(null)
  })
})

describe('No Recording Group', () => {
  it('match address', () => {
    let hd = `
      https://www.baidu.com
    `

    let reg = /https:\/\/(\w+\.\w+\.(com|org|cn))/

    expect(hd.match(reg)[0]).toBe('https://www.baidu.com')
    expect(hd.match(reg)[1]).toBe('www.baidu.com')
    expect(hd.match(reg)[2]).toBe('com')
  })
  it('get domain', () => {
    let hd = `
      https://www.baidu.com
    `

    let reg = /https:\/\/(\w+\.\w+\.(?:com|org|cn))/

    expect(hd.match(reg)[0]).toBe('https://www.baidu.com')
    expect(hd.match(reg)[1]).toBe('www.baidu.com')
    expect(hd.match(reg)[2]).toBe(undefined)
  })
  it('get All domain', () => {
    let hd = `
      https://www.baidu.com
      https://www.aaa.com
      https://bbb.com
    `

    let reg = /https?:\/\/((?:\w+\.)?\w+\.(?:com|org|cn))/gi
    let res = []
    let temp
    while ((temp = reg.exec(hd))) {
      res.push(temp[1])
    }
    expect(res).toEqual(['www.baidu.com', 'www.aaa.com', 'bbb.com'])
  })
})

describe('check password', () => {
  it('Password should have number, letters and capital letters', () => {
    const password_1 = '123456'
    const password_2 = 'aaA123'
    // 字母或数字开头，后接4-9位数字或字母，必须有大写字母以及数字
    const regs = [/^[a-z0-9]\w{5,10}$/i, /[A-Z]/, /[0-9]/]
    expect(regs.every(reg => reg.test(password_1))).toBeFalsy()
    expect(regs.every(reg => reg.test(password_2))).toBeTruthy()
  })
})

describe('Stop greed', () => {
  it('get tag innerHTML and put this text become red', () => {
    const main = `
      <span>123123123</span>
      <span>abc</span>
      <span>cjoi</span>
      <span>bbb]qwe</span>
    `

    // ? 用来限定个数为 1个
    let reg = /<span>([\s\S]+?)<\/span>/gi
    let result = main.replace(reg, (v, p1) => {
      return `<h4>${p1}</h4>`
    })
    expect(result).toBe(`
      <h4>123123123</h4>
      <h4>abc</h4>
      <h4>cjoi</h4>
      <h4>bbb]qwe</h4>
    `)
  })
})
describe('test $&', () => {
  it('replace xxx to ?', () => {
    let str = '===xxx???'
    // 注意
    // $` 是指的是 匹配的内容的 前一部分
    // $' 是指的是 匹配的内容的 后一部分
    const result = str.replace(/xxx/g, "$'$&$`")
    expect(result).toBe('===???xxx===???')
  })
})
describe('get Address by ?<=', () => {
  it('get Address', () => {
    // ?<=xxx 意思是 前面必须是 xxx 才会匹配
    // 例如 x只有在y后面才匹配，必须写成/(?<=y)x/
    const str = `
      百度:https://www.baidu.com
      腾讯:http://www.qq.com
      新浪:https://www.sina.com
    `

    let reg = /(?<=百度:)(https?:\/\/(\w+\.)?\w+\.(?:com|cn))/gi

    expect(str.match(reg)[0]).toBe('https://www.baidu.com')

    let reg_1 = /(?<=腾讯:)(https?:\/\/(\w+\.)?\w+\.(?:com|cn))/gi

    expect(str.match(reg_1)[0]).toBe('http://www.qq.com')

    let reg_2 = /(?<=新浪:)(https?:\/\/(\w+\.)?\w+\.(?:com|cn))/gi
    expect(str.match(reg_2)[0]).toBe('https://www.sina.com')
  })
})

describe('getFileName', () => {
  it('get Filename', () => {
    const str = 'https://123123/123/123/abc.jpg'
    const reg = /\/((\w+)\.(\w+))$/g
    expect(str.match(reg)[0]).toBe('/abc.jpg')
  })
})
