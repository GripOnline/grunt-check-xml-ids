# grunt-check-xml-ids

> Grunt plugin to check if a set of XML files contain the same ids

## Getting Started
This plugin requires Grunt `~1.6.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-check-xml-ids --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-check-xml-ids');
```

## The "check_xml_ids" task

### Overview
In your project's Gruntfile, add a section named `check_xml_ids` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  check_xml_ids: {
    frontend: {
      files: [
        { src: 'lang/cms_lang.*.xml' }
      ]
    },
    backend: {
      files: [
        { src: 'lang/texts.*.xml' }
      ]
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.1.0: First release
