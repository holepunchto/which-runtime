const test = require('brittle')
const which = require('.')

test('basic exports', function (t) {
  t.is(typeof which.runtime, 'string')
  t.is(typeof which.platform, 'string')
  t.is(typeof which.arch, 'string')
  t.is(typeof which.host, 'string')
  t.is(typeof which.isBare, 'boolean')
  t.is(typeof which.isBareKit, 'boolean')
  t.is(typeof which.isPear, 'boolean')
  t.is(typeof which.isNode, 'boolean')
  t.is(typeof which.isBrowser, 'boolean')
  t.is(typeof which.isWindows, 'boolean')
  t.is(typeof which.isLinux, 'boolean')
  t.is(typeof which.isMac, 'boolean')
  t.is(typeof which.isIOS, 'boolean')
  t.is(typeof which.isAndroid, 'boolean')
  t.is(typeof which.isElectron, 'boolean')
  t.is(typeof which.isElectronRenderer, 'boolean')
  t.is(typeof which.isElectronWorker, 'boolean')
})

test('host detection', function (t) {
  t.is(which.host, which.platform + '-' + which.arch)
})

test('runtime detection', function (t) {
  // eslint-disable-next-line eqeqeq
  if (typeof Bare != 'undefined') {
    t.is(which.runtime, 'bare')
    t.is(which.isBare, true)
    t.is(which.isNode, false)
  } else {
    t.is(which.runtime, 'node')
    t.is(which.isBare, false)
    t.is(which.isNode, true)
  }
})

test('platform detection', function (t) {
  const platforms = ['win32', 'linux', 'darwin', 'ios', 'ios-simulator', 'android']
  t.ok(platforms.includes(which.platform) || which.platform === 'unknown')

  // Only one of these should be true at a time (or none if unknown platform)
  const platformFlags = [which.isWindows, which.isLinux, which.isMac, which.isIOS, which.isAndroid]
  const trueCount = platformFlags.filter(Boolean).length
  t.ok(trueCount <= 1, 'at most one platform flag should be true')
})
