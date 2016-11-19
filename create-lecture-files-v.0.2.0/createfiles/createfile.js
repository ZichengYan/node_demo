#!/usr/bin/env node

/*需求
E:\study\exercise\workspace\popular_Angular
在该路径下创建一个文件夹文件的名字一day0x命名,x为最大数值,
并且在该文件夹内创建两个文件件lecture preview*/

//读取该路径下的文件夹
const program = require('commander');
var test = '在当前目录创建一个名为dayx文件夹,并且在其中创建两个名为'
            +'\n'
            +'               lecture preview的文件夹.';
var fs = require('fs');
var pathO = require('path');
var arr = [];
var stop = 0;
var path = process.cwd();
var fnTest = function() {
    /*fs.writeFile(path.join(process.cwd()+'/foo1.js'),'hellolllll','utf8',(err)=>{

    });*/

    readPath(path);
};




// 读取路径中所有文件夹
function readPath(path) {
    fs.readdir(path, (err, files) => {
        //console.log(files)
        //遍历文件中所有的文件
        files.forEach(function(val, index) {
            var pathNew = path + '/' + val;
            fs.stat(pathNew, (err, stats) => {
                if (stats.isDirectory) {
                    // console.log('files');
                    var num = Number(val.substr(-2));
                    if (num) {
                        arr.push(num);
                    }
                } else if (stats.isFiles) {
                    //console.log('doc');
                }
            });
        });
        setTimeout(function() {
            arr.sort(function(a, b) {
                return a - b;
            });
            //console.log(arr);
            var num = (arr[arr.length - 1] + 1);
            if (num !== num) {
                num = '01';
            }else if(num==num&&num<10){
                num = '0'+num;
            }
            var pN = '/day' + num;
            // console.log(arr[arr.length - 1] + 1);

            makeDir(path + pN);

            setTimeout(function() {
                makeDir(path + pN + '/lecture');
                makeDir(path + pN + '/preview');
            }, 15);
        }, 10);
    });
}
//创建文件夹
function makeDir(p) {
    stop++;
    fs.mkdir(p, (err) => {
        if (err) throw err;
        //makeDir(p + '/lecture');
        //makeDir(p + '/preview');
        /*if(p==(p + '/lecture')||(p + '/preview')){
            return;
        }*/

    });
}




program
    .version('0.0.1') //-V指令读取的是这里面的版本号
    .usage('[options]')
    .option('-t, --test', test, fnTest);


program
    .parse(process.argv);

// callback解决方案
/*var fn=function (cb) {
    fs.readdir('path',(err,function (data) {
       cb(data);
    })
};

fn(function () {
    
})*/


/*var fs = require('fs');
// 要处理的文件列表
var files = ['file1', 'file2', 'file3'];

function parseFile() {
    if (files.length == 0) {
        return;
    }
    var file = files.shift();
    fs.readFile(file, function(err, data) {
        // 这里处理文件数据
        parseFile(); // 处理完毕后，通过递归调用处理下一个文件
    });
}
// 开始处理
parseFile();*/
