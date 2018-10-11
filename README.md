<img src="http://www.fcash.cash/css/images/module-message.png" alt="fcash-base message" height="35">
# Fcash Message Verification and Signing for Fcash


[![NPM Package](https://img.shields.io/npm/v/fcash-message.svg?style=flat-square)](https://www.npmjs.org/package/fcash-message)
[![Build Status](https://img.shields.io/travis/fcash-js/fcash-message.svg?branch=master&style=flat-square)](https://travis-ci.org/fcash-js/fcash-message)
[![Coverage Status](https://img.shields.io/coveralls/fcash-js/fcash-message.svg?style=flat-square)](https://coveralls.io/r/fcash-js/fcash-message?branch=master)

fcash-message adds support for verifying and signing bitcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main fcash-base repo](https://github.com/fcash-js/fcash-base) for more information.

## Getting Started

```sh
npm install fcash-message
```

```sh
bower install fcash-message
```

To sign a message:

```javascript
var fcash-base = require('fcash-lib');
var Message = require('fcash-message');

var privateKey = fcash-base.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/fcash-js/fcash-base/blob/master/CONTRIBUTING.md) on the main fcash-base repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/fcash-js/fcash-base/blob/master/LICENSE).

Copyright 2013-2015 Fcash, Inc. Fcash is a trademark maintained by Fcash, Inc.

