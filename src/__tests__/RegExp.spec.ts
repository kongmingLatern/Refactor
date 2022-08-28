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

    let reg = /https:\/\/(\w+.\w+\.(com|org|cn))/

    expect(hd.match(reg)[0]).toBe('https://www.baidu.com')
    expect(hd.match(reg)[1]).toBe('www.baidu.com')
    expect(hd.match(reg)[2]).toBe('com')
  })
  it('get domain', () => {
    let hd = `
      https://www.baidu.com
    `

    let reg = /https:\/\/(\w+.\w+\.(?:com|org|cn))/

    expect(hd.match(reg)[0]).toBe('https://www.baidu.com')
    expect(hd.match(reg)[1]).toBe('www.baidu.com')
    expect(hd.match(reg)[2]).toBe(undefined)
  })
})
