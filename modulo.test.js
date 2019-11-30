const modulo = require('./modulo')

test('validation as results',() => {
    expect(modulo.func1(12,10)).toBe(22)
    expect(modulo.func2(2,1)).toBe(1)
    expect(modulo.func3(2,3)).toBe(6)
})
