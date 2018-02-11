const deepUpdate = require('./index');

const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: {
            f: 4,
            g: 5
        }
    }
}

it('updates a nested value without mutating', () => {
    const newObj = deepUpdate(obj, ['c', 'e', 'f'], val => val + 10);
    expect(newObj).toEqual({ a: 1, b: 2, c: { d: 3, e: { f: 14, g: 5 } } })
    expect(obj).toEqual({ a: 1, b: 2, c: { d: 3, e: { f: 4, g: 5 } } });
})

it('returns false if path is invalid', () => {
    expect(deepUpdate(obj, ['c', 'e', 'z'], val => val + 10)).toBe(false);
    expect(deepUpdate(obj, ['c', 'z', 'z'], val => val + 10)).toBe(false);
    expect(deepUpdate(obj, ['z', 'e', 'z'], val => val + 10)).toBe(false);
})