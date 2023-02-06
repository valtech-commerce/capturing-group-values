# @valtech-commerce/capturing-group-values

[![npm](https://img.shields.io/npm/v/@valtech-commerce/capturing-group-values.svg)](https://www.npmjs.com/package/@valtech-commerce/capturing-group-values)
[![npm dependencies](https://david-dm.org/valtech-commerce/capturing-group-values/status.svg)](https://david-dm.org/valtech-commerce/capturing-group-values)
[![npms](https://badges.npms.io/%40valtech-commerce%2Fcapturing-group-values.svg)](https://npms.io/search?q=%40valtech-commerce%2Fcapturing-group-values)
[![Travis CI](https://travis-ci.com/valtech-commerce/capturing-group-values.svg?branch=master)](https://travis-ci.com/valtech-commerce/capturing-group-values/builds)

> Extracts capturing group values via a regular expression


## Install

```bash
$ npm install @valtech-commerce/capturing-group-values
```


## Usage

```js
import capturingGroupValues from '@valtech-commerce/capturing-group-values';

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

View [documentation](https://valtech-commerce.github.io/capturing-group-values)






<br><br>

## License

MIT © [Valtech Canada inc.](https://www.valtech.ca/)

