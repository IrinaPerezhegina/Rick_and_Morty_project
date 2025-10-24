import { classNames } from './classNames';

// возвращает строку из одного класса
describe('classNames', () => {
  test('returns a string from the same class', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  // объединяет несколько классов
  test('combines several classes', () => {
    const expected = 'someClass class1 class2 class3';
    expect(
      classNames('someClass', ['class1', 'class2'], { class3: true })
    ).toBe(expected);
  });

  // игнорирует falsy значения
  test('ignores falsy values', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(
      classNames('someClass', ['class1', 'class2'], {
        hovered: true,
        scrollable: true,
        class3: false
      })
    ).toBe(expected);
  });

  // возвращает пустую строку, если аргументов нет
  test('returns an empty string if there are no arguments', () => {
    expect(classNames()).toBe('');
  });
});
