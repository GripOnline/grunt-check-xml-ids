/*
 * grunt-check-xml-ids
 * https://github.com/GripOnline/grunt-check-xml-ids
 *
 * Copyright (c) 2024 Grip Online
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Configuration to be run (and then tested).
    // use --force to run all of them as some will fail
    check_xml_ids: {
      equal_files: {
        files: [
          { src: 'test/fixtures/same10-1.xml' },
          { src: 'test/fixtures/same10-2.xml' }
        ]
      },
      missing_one: {
        files: [
          { src: 'test/fixtures/same10-1.xml' },
          { src: 'test/fixtures/same10-missing-one.xml' }
        ]
      },
      missing_two: {
        files: [
          { src: 'test/fixtures/same10-1.xml' },
          { src: 'test/fixtures/same10-missing-two.xml' }
        ]
      },
      plus_one: {
        files: [
          { src: 'test/fixtures/same10-1.xml' },
          { src: 'test/fixtures/same10-plus-one.xml' }
        ]
      },
      plus_two: {
        files: [
          { src: 'test/fixtures/same10-1.xml' },
          { src: 'test/fixtures/same10-plus-two.xml' }
        ]
      },
      all_files: {
        files: [
          { src: 'test/fixtures/*.xml' },
        ]
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // register test task
  grunt.registerTask('test', ['nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
