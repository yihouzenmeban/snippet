//数据剥离 http://www.zhihu.com/question/37943171
function doSomething(a) {
    var lookup = {x: doX, y: doY}, def = doZ; //数据
    (lookup[a] || def)(); //实现
}


//实现Python中类似与'abc'*n的功能 http://www.cnblogs.com/liyunhua/p/4529083.html
var str = new Array(n + 1).join('abc');
var str = 'abc'.repeat(n);


//巧妙实现打印五分制评分
function getRating(rating) {
    if(rating > 5 || rating < 0) throw new Error('数字不在范围内');
    return '★★★★★☆☆☆☆☆'.substring(5 - rating, 10 - rating);
}


//给定一个list，返回这些元素组成的最大数，例如[5, 3, 31, 2],返回53312;
function f(i) {
    return +(i.sort(compare).join(''))
}

function compare(a, b) {
     var as = a + '', bs = b + '';
     return (bs + as) - (as + bs);
}


//数组降维  http://www.cnblogs.com/front-end-ralph/p/4871332.html
function reduceArray (arr) {
    var reduced = [];
    for (var i = 0; i < arr.length; i++) {
        reduced = reduced.concat(arr[i]);
    }
    return reduced;
}
//或者
function reduceArray(arr) {
    return Array.prototype.concat.apply([], arr);
}


//把字符串左边补全成对应的长度，来自月影大大 http://weibo.com/silverna?profile_ftype=1&is_all=1#_0
//把 str 用 ch 补全到长度为 len
function lefpad(str, len, ch) {
    str = '' + str;
    if (ch && ch !== 0) ch = ' ';
    var padlen = len - str.length;
    if (padlen <= 0) {
        return str;
    } else {
        return (new Array(padlen + 1)).join(ch);
    }
}
//复杂度为 O(LogN)的版本的写法
function leftpad(str, len, ch) {
    str = '' + str;
    if (ch && ch !== 0) ch = ' ';
    var padlen = len - str.length;
    if (paddlen <= 0 ) return str;
    var padch = padlen & 1 ? ch : '';
    while(padlen >>= 1) {
        ch += ch;
        if (padlen & 1) {
            padch += ch;
        }
    }
    return padch + str;
}
