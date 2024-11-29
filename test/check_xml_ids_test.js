'use strict';

var grunt = require('grunt');

const parseString = require('xml2js').parseString;

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.check_xml_ids = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },/*
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options');
    var expected = grunt.file.read('test/expected/default_options');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },
  custom_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_options');
    var expected = grunt.file.read('test/expected/custom_options');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  },*/
  load_xml: function (test) {
    test.expect(1);

    var xml = grunt.file.read('test/fixtures/same10-1.xml');

    // var actual = grunt.file.read('tmp/custom_options');
    // var expected = grunt.file.read('test/expected/custom_options');
    test.equal(xml.length, 403, 'file should have 403 bytes xml');

    test.done();
  },
  load_ids: function (test) {
    test.expect(1);

    var XMLdata = grunt.file.read('test/fixtures/same10-1.xml');

    const ids = [];

    const attrProcessor = function (value, name) {
      if (name === 'id') {
        ids.push(value);
      }
    };

    parseString(XMLdata, { attrValueProcessors: [attrProcessor] }, function (err, result) {
      // console.log(JSON.stringify(result));
    });

    test.equal(ids.length, 10, 'file should have 10 id attributes');

    test.done();
  },

};
