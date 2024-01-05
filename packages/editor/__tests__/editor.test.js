'use strict';

const editor = require('..');
const assert = require('assert').strict;

assert.strictEqual(editor(), 'Hello from editor');
console.info("editor tests passed");
