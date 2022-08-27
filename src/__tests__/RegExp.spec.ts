import { describe, expect, it } from 'vitest'
describe('First RegExp', () => {
  it('Atomic', () => {
    let s = `<h1>asdfjioasdf</h1>
  <h2>bhds</h2>
`

    let reg = /<(h[1-6])>([\s\S]*)<\/\1>/i
    console.dir(s.match(reg))

    expect((s.match(reg) as any)[0]).toBe('<h1>asdfjioasdf</h1>')
    expect((s.match(reg) as any)[1]).toBe('h1')
    expect((s.match(reg) as any)[2]).toBe('asdfjioasdf')
  })
})
