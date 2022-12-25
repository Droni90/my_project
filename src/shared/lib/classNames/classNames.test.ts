import { classNames } from '../classNames/classNames';

describe('classNames', () => {
  test('with only 1st param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expected: string = 'someClass class1 class2';
    expect(classNames('someClass', ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected: string = 'someClass class1 class2 hovered scrollable';
    expect(
      classNames('someClass', ['class1', 'class2'], {
        hovered: true,
        scrollable: true,
      }),
    ).toBe(expected);
  });
});
