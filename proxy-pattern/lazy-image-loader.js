// 通过虚拟代理进行拦截，减少开销大的实例化

var myImage = (function() {
    // 使用闭包，持久化获得imgNode的访问权
    var imgNode = document.createElement('img')
    document.body.appendChild(imgNode)
    return function(src) {
        imgNode.src = src
    }
})()

// 可能图片很大，图片加载完全前空白
// 通过新增代理类，进行转菊花图处理
var proxyImage = function() {
    var img = new Image()
    img.onload = function() {
        myImage(this.src)
    }
    // 与myImage拥有相同的接口，方便上层应用
    return function(src) {
        myImage('file://loading.gif')
        img.src = src
    }
}

proxyImage('target.png')