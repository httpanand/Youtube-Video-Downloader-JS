const fs = require('fs');
const ytdl = require('ytdl-core');
var link = 'youryoutubelink' //enter a link ... 

console.log('Downloading ..... ')
ytdl(link)
 .pipe(fs.createWriteStream('output.mp4'));

