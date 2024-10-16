import { assertEquals } from '@std/assert'
import { romanize, deromanize } from './main.ts'

Deno.test('romanize 1 to 10', () => {
  assertEquals(romanize(1), 'I')
  assertEquals(romanize(2), 'II')
  assertEquals(romanize(3), 'III')
  assertEquals(romanize(4), 'IV')
  assertEquals(romanize(5), 'V')
  assertEquals(romanize(6), 'VI')
  assertEquals(romanize(7), 'VII')
  assertEquals(romanize(8), 'VIII')
  assertEquals(romanize(9), 'IX')
  assertEquals(romanize(10), 'X')
})

Deno.test('romanize 10 to 100', () => {
  assertEquals(romanize(10), 'X')
  assertEquals(romanize(20), 'XX')
  assertEquals(romanize(30), 'XXX')
  assertEquals(romanize(40), 'XL')
  assertEquals(romanize(50), 'L')
  assertEquals(romanize(60), 'LX')
  assertEquals(romanize(70), 'LXX')
  assertEquals(romanize(80), 'LXXX')
  assertEquals(romanize(90), 'XC')
  assertEquals(romanize(100), 'C')
})

Deno.test('romanize 100 to 1000', () => {
  assertEquals(romanize(100), 'C')
  assertEquals(romanize(200), 'CC')
  assertEquals(romanize(300), 'CCC')
  assertEquals(romanize(400), 'CD')
  assertEquals(romanize(500), 'D')
  assertEquals(romanize(600), 'DC')
  assertEquals(romanize(700), 'DCC')
  assertEquals(romanize(800), 'DCCC')
  assertEquals(romanize(900), 'CM')
  assertEquals(romanize(1000), 'M')
})

Deno.test('romanize 1000 to 3000', () => {
  assertEquals(romanize(1000), 'M')
  assertEquals(romanize(2000), 'MM')
  assertEquals(romanize(3000), 'MMM')
})

Deno.test('romanize 493', () => {
  assertEquals(romanize(493), 'CDXCIII')
})

Deno.test('romanize 2024', () => {
  assertEquals(romanize(2024), 'MMXXIV')
})
Deno.test('deromanize 1 to 10', () => {
  assertEquals(deromanize('I'), 1)
  assertEquals(deromanize('II'), 2)
  assertEquals(deromanize('III'), 3)
  assertEquals(deromanize('IV'), 4)
  assertEquals(deromanize('V'), 5)
  assertEquals(deromanize('VI'), 6)
  assertEquals(deromanize('VII'), 7)
  assertEquals(deromanize('VIII'), 8)
  assertEquals(deromanize('IX'), 9)
  assertEquals(deromanize('X'), 10)
})

Deno.test('deromanize 10 to 100', () => {
  assertEquals(deromanize('X'), 10)
  assertEquals(deromanize('XX'), 20)
  assertEquals(deromanize('XXX'), 30)
  assertEquals(deromanize('XL'), 40)
  assertEquals(deromanize('L'), 50)
  assertEquals(deromanize('LX'), 60)
  assertEquals(deromanize('LXX'), 70)
  assertEquals(deromanize('LXXX'), 80)
  assertEquals(deromanize('XC'), 90)
  assertEquals(deromanize('C'), 100)
})

Deno.test('deromanize 100 to 1000', () => {
  assertEquals(deromanize('C'), 100)
  assertEquals(deromanize('CC'), 200)
  assertEquals(deromanize('CCC'), 300)
  assertEquals(deromanize('CD'), 400)
  assertEquals(deromanize('D'), 500)
  assertEquals(deromanize('DC'), 600)
  assertEquals(deromanize('DCC'), 700)
  assertEquals(deromanize('DCCC'), 800)
  assertEquals(deromanize('CM'), 900)
  assertEquals(deromanize('M'), 1000)
})

Deno.test('deromanize 1000 to 3000', () => {
  assertEquals(deromanize('M'), 1000)
  assertEquals(deromanize('MM'), 2000)
  assertEquals(deromanize('MMM'), 3000)
})

Deno.test('deromanize 493', () => {
  assertEquals(deromanize('CDXCIII'), 493)
})

Deno.test('deromanize 2024', () => {
  assertEquals(deromanize('MMXXIV'), 2024)
})
