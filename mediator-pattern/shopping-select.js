// 当页面上多个选择组件决定显示不同
// 比如手机颜色、数量、内存大小等选择，根据库存限制对提交按钮禁用

var colorSelect = document.getElementById('colorSelect')
var numberInput = document.getElementById('numberInput')
var memorySelect = document.getElementById('memorySelect')

var nextBtn = document.getElementById('nextBtn')

Mediator = {
    changed: function(obj) {
        let colorSelectValue = colorSelect.nodeValue
        // ...

        if (stock.length > numberInputValue &&
            color.length > colorValue &&
            memory.length > memorySelectValue) {
                this.nextBtn.disabled = false
        }
    }
}

// 多个因素作用互相耦合
// 中介者可以隔离开，使得不必了解对方的存在
colorSelect.onchange = function() { Mediator.changed(this)}
numberInput.onchange = function() { Mediator.changed(this)}
memorySelect.onchange = function() { Mediator.changed(this)}
