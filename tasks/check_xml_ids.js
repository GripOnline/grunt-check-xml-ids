/*
 * grunt-check-xml-ids
 * https://github.com/GripOnline/grunt-check-xml-ids
 *
 * Copyright (c) 2024 Grip Online
 * Licensed under the MIT license.
 */

'use strict';

var parseString = require('xml2js').parseString;

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('check_xml_ids', 'Grunt plugin to check if a set of XML files contain the same ids', function () {

    var idsbyfile = new Map();
    var allids = new Set();

    var attrProcessor = function (ids, value, name) {
      if (name === 'id') {
        ids.add(value);
      }
    };

    // Iterate over all specified file groups.
    this.files.forEach(function (f) {
      // Process specified files.
      f.src.filter(function (filepath) {

        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {

          // Read file source.
          var XMLdata = grunt.file.read(filepath);
          var ids = new Set();

          parseString(XMLdata, { attrValueProcessors: [attrProcessor.bind(null, ids)] }, function (err, result) {

            ids.forEach(function (id) {
              allids.add(id);
            });
            idsbyfile.set(filepath, ids);

          });

        }
      });
    });

    if (idsbyfile.size > 0) {

      if (allids.size > 0) {

        idsbyfile.forEach(function (ids, file) {
          var missingids = [];
          allids.forEach(function (id) {
            if (!ids.has(id)) {
              missingids.push(id);
            }
          });

          if (missingids.length > 0) {
            grunt.fail.warn('File "' + file + '" is missing ' + missingids.length + ' id' + (missingids.length !== 1 ? 's' : '') + ': "' + missingids.join('", "') + '"');
          } else {
            grunt.log.ok('File "' + file + '" contains all ids');
          }

        });

      } else {
        grunt.log.writeln('No ids found in any of the files');
      }

    } else {
      grunt.log.warn('No valid xml files found');
    }

  });

};
