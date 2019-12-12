// js通用单例模式-核心思想是利用闭包存下cache

var getSingle = function(fn) {
    var cache
    return function() {
        return cache || (cache = fn.apply(this, arguments))
    }
}

var globalLayerTemplate = getSingle(function() {
    var div = document.createElement('div')
    div.innerHTML = 'login'
    document.body.appendChild(div)
    return div
})

// test
loginLayer1 = globalLayerTemplate()
loginLayer2 = globalLayerTemplate()
console.log(loginLayer1 === loginLayer2)