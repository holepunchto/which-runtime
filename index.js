const { runtime, platform, arch } = typeof Bare !== 'undefined'
  ? { runtime: 'bare', platform: global.Bare.platform, arch: global.Bare.arch }
  : typeof process !== 'undefined'
    ? { runtime: 'node', platform: global.process.platform, arch: global.process.arch }
    : typeof Window !== 'undefined'
      ? { runtime: 'browser', platform: 'unknown', arch: 'unknown' }
      : { runtime: 'unknown', platform: 'unknown', arch: 'unknown' }

const isReactNative = typeof global !== 'undefined' &&
  (global.navigator?.product === 'ReactNative' ||
   global.HermesInternal)

const isExpo = typeof global !== 'undefined' &&
  (global.__expo ||
   global.ExpoModules)

const isIOS = platform === 'ios' || platform === 'ios-simulator'
const isAndroid = platform === 'android'

exports.runtime = runtime
exports.platform = platform
exports.arch = arch
exports.isReactNative = isReactNative
exports.isExpo = isExpo
exports.isBare = runtime === 'bare'
exports.isBareKit = exports.isBare && BareKit
exports.isPear = Pear
exports.isNode = runtime === 'node'
exports.isBrowser = runtime === 'browser'
exports.isWindows = platform === 'win32'
exports.isLinux = platform === 'linux'
exports.isMac = platform === 'darwin'
exports.isIOS = isIOS
exports.isAndroid = isAndroid
exports.isElectron = process && !!global.process.versions?.electron
exports.isElectronRenderer = exports.isElectron && global.process.type === 'renderer'
exports.isElectronWorker = exports.isElectron && global.process.type === 'worker'
exports.isMobile = isReactNative || isExpo || isIOS || isAndroid
