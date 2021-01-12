const glob = require('glob');
const fs = require('fs');
const exec = require('child_process').execSync;
const NotificationCenter = require('node-notifier');

console.time('运算耗时');
for (let i = 0; i < 10000; i++) {
    i += 1;
}

let all = glob.sync('./*\.json');
let only = fs.readFileSync('./package.json', 'utf8');
let branch = exec('git rev-parse --abbrev-ref HEAD', {encoding: 'utf8'});

// console.log(all);
// console.log(only);
console.log(process.platform);
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

console.timeEnd('运算耗时');