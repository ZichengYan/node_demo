"use strict";

var timer = null;
var persent = null;
var endLen = null;
const fs = require("fs");
const path = "../1.mp4";
const rs = fs.createReadStream(path);
const ws = fs.createWriteStream("../test/1.mp4");
var len = 0;
//读取文件
(function(callback) {

    fs.stat(path, (err, stats) => {
        var size = stats.size;
        //console.log(size);
        callback(size);
    });
})(function(size, cb) {
    rs.on('data', function(chunk) {
        //console.log(typeof chunk.length);
        ws.write(chunk);
        5
        len += chunk.length;
        endLen = len / size * 100;
        persent = endLen.toFixed(2) + "%";

        //timer = setInterval(function() {
        console.log("当前进度" + persent);
        // }, 1000);
        //clearInterval(timer);
    });
    rs.on('end', function() {
        //clearInterval(timer);
        console.log("读取完成,定时器清除");
        ws.end();
    });
});
