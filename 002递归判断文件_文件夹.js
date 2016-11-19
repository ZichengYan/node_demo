const fs = require("fs");
const pathO = require("path");
var p = "../";
var obj = {};
//获取路径中的东西
function loopAcc(path) {

    fs.readdir(path, (err, files) => {
        //console.log(files);
        files.forEach(function(val, index) {
            var pat = path + "/" + val;
            fs.stat(pat, (err, stats) => {
                if (err) throw err;
                if (stats.isDirectory()) {
                   //此处逻辑不清晰
                    //console.log("文件夹");
                    loopAcc(path + "/" + val);
                } else if (stats.isFile()) {
                    //console.log(val);
                }
            });
        });
    });
}

//读文件
function read(path) {
    fs.access(path, (err) => {
        if (!err) {
            fs.readFile(path, "utf8", (err, data) => {
                //console.log(data);
            });
        }
    });
}
//判断路径是否为文件夹
function judgeFile(path) {
    var stats = fs.statSync(path);
    if (stats.isDirectory()) {
        var baseName = pathO.basename(path);
        obj[baseName] = { type: 0, baseName: {} };
        loopAcc(path);
    } else if (stats.isFile()) {

    }
}
judgeFile(p);
