import { expect, test } from '@jest/globals'
import { mount } from '@vue/test-utils'
import Example from './Example.vue'

test('메세지를 변경합니다', () => {
  const wrapper = mount(Example)
  expect(wrapper.vm.msg).toBe('Hello Vue Test utils')
})

