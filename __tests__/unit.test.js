// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//isPhoneNumber()
test('Checks phone number (true case 1)', () => {
    expect(functions.isPhoneNumber('503-918-3614')).toBe(true);
  });

test('Checks phone number (true case 2)', () => {
    expect(functions.isPhoneNumber('000-000-0000')).toBe(true);
  });

test('Checks phone number insufficient numbers', () => {
    expect(functions.isPhoneNumber('911')).toBe(false);
  });

test('Checks phone number alphabets and special characters', () => {
    expect(functions.isPhoneNumber('asdfhkljasdf&*()&')).toBe(false);
  });

//isEmail()
test('Checks Email (true case 1) .com domain', () => {
    expect(functions.isEmail('example@gmail.com')).toBe(true);
  });

test('Checks Email (true case 2) different domain', () => {
    expect(functions.isEmail('example@yahoo.in')).toBe(true);
  });

test('Checks email (false case 1 multiple domains)', () => {
    expect(functions.isEmail('why@yahoo.co.in')).toBe(false);
  });

test('Checks email (false case 2) numbers in username', () => {
    expect(functions.isEmail('111@11.com')).toBe(false);
  });

//isStrongPassword()
test('Checks for strong password (true case 1)', () => {
    expect(functions.isStrongPassword('password123')).toBe(true);
  });

test('Checks for strong password (true case 2)', () => {
    expect(functions.isStrongPassword('astrongpassword')).toBe(true);
  });

test('Checks for strong password (false case 1) using email', () => {
    expect(functions.isStrongPassword('example@example.com')).toBe(false);
  });

test('Checks for strong password (false case 2) using numbers', () => {
    expect(functions.isStrongPassword('123456')).toBe(false);
  });

//isDate()
test('Checks for valid date (true case 1)', () => {
    expect(functions.isDate('60/30/1111')).toBe(true);
  });

test('Checks for valid date (true case 2)', () => {
    expect(functions.isDate('19/18/1111')).toBe(true);
  });

test('Checks for valid date (false case 1)', () => {
    expect(functions.isDate('011/11/2022')).toBe(false);
  });

test('Checks for valid date (false case 2)', () => {
    expect(functions.isDate('18/19/10235')).toBe(false);
  });

//isHexColor()
test('Checks for Hex color (true case 1)', () => {
    expect(functions.isHexColor('AAA')).toBe(true);
  });

test('Checks for Hex color (true case 2)', () => {
    expect(functions.isHexColor('EEEEEE')).toBe(true);
  });

test('Checks for Hex color (false case 1)', () => {
    expect(functions.isHexColor('120120120')).toBe(false);
  });

test('Checks for Hex color (false case 2)', () => {
    expect(functions.isHexColor('RRER')).toBe(false);
  });



