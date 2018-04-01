var assert = require('assert');
var isDirectory = require('../index');

describe('Directory existence (await)', () => {
  it(`should exists`, async function() {
    assert(await isDirectory(__dirname + '/test-me'));
  });

  it(`should not exist`, async function() {
    assert(!await isDirectory(__dirname + '/i-dont-exist'));
  });
});


describe('Directory existence (async)', () => {
  it(`should exist`, function(done) {
    isDirectory(`${__dirname}/test-me`)
        .then((isdir) => {
          assert(isdir);
          done();
        })
        .catch((err) => {
          done(err);
        });
  });
});
