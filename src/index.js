/**
 * @module cv
 * This is what you get when you require('cv');
 */

"use strict";


/**
 * @namespace
 */
let cv = {};

function asyncGet(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('body');
    }, 333);
  });
}

async function testAsync() {
  try {
    let get = await asyncGet('https://github.com');
    console.log(get);
  }
  catch (err) {
    console.log('testAsync error:', err);
  }
}

testAsync();