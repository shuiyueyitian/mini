const glob = require('glob');
const fs = require('fs');
const path = require('path');
const exec = require('child_process').execSync;
const NotificationCenter = require('node-notifier');

console.time('执行耗时');
for (let i = 0; i < 10000; i++) {
    i += 1;
}

let all = glob.sync('./*\.json');
let only = fs.readFileSync('./package.json', 'utf8');
let branch = exec('git rev-parse --abbrev-ref HEAD', {encoding: 'utf8'});

// console.log(all);
// console.log(only);
console.log(path.resolve(__dirname, 'src/'));
console.log(path.basename('D:\\mini\\test.js'));
// console.log(process.env.PATH.split(';'));
console.log(process.argv);
console.log(branch, __dirname);
new NotificationCenter.WindowsToaster({
    withFallback: false
}).notify({
    title: '~~~~~~系统通知~~~~~~',
    message: `当前分支是${branch}\n当前执行文件是${__dirname}\\test.js`,
    sound: true,
    type: 'warn',
    time: 6000,
    wait: true
});
fs.writeFileSync('../write.js', '中国工商银行\n中国建设银行\n中国农业银行');

console.timeEnd('执行耗时');