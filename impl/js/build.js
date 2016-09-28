var compressor = require('node-minify');

new compressor.minify({
  type: 'gcc',
  fileIn: ['src/p1.js'],
  fileOut: 'dist/p1.js',
  callback: function(err, min){
    console.log(err);
    //console.log(min); 
  }
});