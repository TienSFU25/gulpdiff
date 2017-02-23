var beautify = require('gulp-beautify');
var gulp = require('gulp');
var path = require('path');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var exec = require('child_process').exec;

// root contains ts, origin contains just js
var ROOT = "C:/Repos/MSN.Service.Web/Statics";
var ORIGIN = "C:/Users/tivu/Documents/testshit/primecopy/Statics";
var VERTICALS = ['Autos', 'Weather'];
 
gulp.task('beautify', function() {
  var rootFiles = VERTICALS.map(verticalName => {
    return path.join(ROOT, verticalName + '.Statics', 'Js');
  });

  var originFiles = VERTICALS.map(verticalName => {
    return path.join(ORIGIN, verticalName + '.Statics', 'Js')
  });

  for (let i = 0; i < VERTICALS.length; i++) {
    gulp.src(
      rootFiles[i] + '/**/*.js'
    ).pipe(beautify({
      "preserve_newlines": false
    })).pipe(gulp.dest(`./beautified/${VERTICALS[i]}/root`));

    gulp.src(
      originFiles[i] + '/**/*.js'
    ).pipe(beautify({
      "preserve_newlines": false
    })).pipe(gulp.dest(`./beautified/${VERTICALS[i]}/origin`));
  }
});

gulp.task('diff', ['beautify'], function() {
  for (let vertical of VERTICALS) {
    exec(`diff -bur beautified/${vertical}/origin beautified/${vertical}/root > out.${vertical}.diff`, (error, stdout, stderr) => {
      if (error) {
        console.log(error);
      }

      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
  }
});

// default settings
// {
//     "indent_size": 4,
//     "indent_char": " ",
//     "indent_with_tabs": false,
//     "eol": "\n",
//     "end_with_newline": false,
//     "indent_level": 0,
//     "preserve_newlines": true,
//     "max_preserve_newlines": 10,
//     "space_in_paren": false,
//     "space_in_empty_paren": false,
//     "jslint_happy": false,
//     "space_after_anon_function": false,
//     "brace_style": "collapse",
//     "break_chained_methods": false,
//     "keep_array_indentation": false,
//     "unescape_strings": false,
//     "wrap_line_length": 0,
//     "e4x": false,
//     "comma_first": false,
//     "operator_position": "before-newline"
// }