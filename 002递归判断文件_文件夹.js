var fs = require("fs");

//获取路径中的东西
function loopAcc(path) {
    fs.readdir(path, (err, files) => {
        console.log(files);
        files.forEach(function(val, index) {
            //console.log(typeof val)
            //console.log(val);
            var pat = path + "/" + val;
            fs.stat(pat, (err, stats) => {
                //console.log(pat);
                //console.log(stats);
                if (err) throw err;
                if (stats.isDirectory()) {
                    console.log("文件夹");
                    loopAcc(path + "/" + val);
                } else if (stats.isFile()) {
                    //console.log(pat + "文档");
                    console.log(val);
                    //read(pat);
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
                console.log(data);
            });
        }
    });
}

loopAcc("./path");
