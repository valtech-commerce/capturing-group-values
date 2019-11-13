# @absolunet/capturing-group-values

[![npm](https://img.shields.io/npm/v/@absolunet/capturing-group-values.svg)](https://www.npmjs.com/package/@absolunet/capturing-group-values)
[![npm dependencies](https://david-dm.org/absolunet/node-capturing-group-values/status.svg)](https://david-dm.org/absolunet/node-capturing-group-values)
[![npms](https://badges.npms.io/%40absolunet%2Fcapturing-group-values.svg)](https://npms.io/search?q=%40absolunet%2Fcapturing-group-values)
[![Travis CI](https://travis-ci.com/absolunet/node-capturing-group-values.svg?branch=master)](https://travis-ci.com/absolunet/node-capturing-group-values/builds)

> Extracts capturing group values via a regular expression


## Install

```bash
$ npm install @absolunet/capturing-group-values
```


## Usage

```js
import capturingGroupValues from '@absolunet/capturing-group-values';

const pattern = /(?<alpha>[a-z]+)?:(?<num>\d+)?/u;

console.log(capturingGroupValues('',        pattern));  // {}
console.log(capturingGroupValues(':',       pattern));  // {}
console.log(capturingGroupValues('abc',     pattern));  // {}
console.log(capturingGroupValues('123',     pattern));  // {}
console.log(capturingGroupValues('abc:xyz', pattern));  // { alpha: 'abc' }
console.log(capturingGroupValues('123:789', pattern));  // { num: '789' }
console.log(capturingGroupValues('abc:789', pattern));  // { alpha: 'abc', num: '789' }
```



## Documentation

View [documentation](https://documentation.absolunet.com/node-capturing-group-values)






<br><br>

## License

MIT © [Absolunet](https://absolunet.com)
