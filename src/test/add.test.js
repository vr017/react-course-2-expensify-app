const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('Should have 2 numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
}); 

test('Should have a name', () => {
    const result = generateGreeting('victor');
    expect(result).toBe('Hello victor!');
}); 

test('Should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
}); 