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
