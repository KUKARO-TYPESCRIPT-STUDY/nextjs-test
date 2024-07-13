import {describe, expect, test} from '@jest/globals';
import {hello} from "@/app/utils/hello";

describe('chapter2', () => {
  test('sayHello function test', () => {
    function sayHello(firstName: string) {
      return `Hello ${firstName}`
    }

    let firstName = "Hana"

    expect(sayHello(firstName)).toBe('Hello Hana')
  })

  /**
   * typescript에는 튜플이랑 유니온타입도 있다.
   */
  test('array type test', () => {
    const mixedArray = ['foo', 1]
    const mixedArrayU: (string | number)[] = ['foo', 1]
    const mixedArrayT: [string, number] = ['foo', 1]
    expect(typeof mixedArray).toBe('object')
    expect(typeof mixedArrayU).toBe('object')
    expect(typeof mixedArrayT).toBe('object')
  })

  test('object type test', () => {
    const user: { name: string, age: number } = {name: 'Hana', age: 36}
    expect(user.age).toBe(36)
    expect(user.name).toBe('Hana')
  })

  test('type inference test', () => {
    const age = 10
    // age.length는 TS2339: Property 'length' does not exist on type 'number'.가 발생
    expect((age as any).length).toBe(undefined)
  })

  test('union, intersection test', () => {
    type Id = number | string
    const id: Id = 1
    expect(id).toBe(1)

    type Identity = { name: string }
    type User = { id: Id }
    type UserInfo = Identity & User
    const userInfo: UserInfo = {name: 'Hana', id: 1}
    expect(userInfo.name).toBe('Hana')
  })

  test('literal type test', () => {
    type Direction = 'left' | 'right' | 'up' | 'down'
    const direction: Direction = 'left'
    expect(direction).toBe('left')
  })

  test("never type test", () => {
    function error(message: string): never {
      throw new Error(message)
    }

    expect(() => error('error')).toThrow('error')
  })

  test('type guard test', () => {
    function isString(value: any): value is string {
      return typeof value === 'string'
    }

    expect(isString('string')).toBe(true)
  })

  test('keyof test', () => {
    type User = {
      name: string
      age: number
    }

    type UserKey = keyof User
    const key: UserKey = 'name'
    expect(key).toBe('name')
  })

  test('type assertion test', () => {
    const value: string = 'kukaro'
    expect(hello(value)).toBe('Hello, kukaro!')
  })
})