// 小球动画移动以及undo

var ball = element1
var movePosition = input1
var moveBtn = button1
var undoBtn = button2

var MoveCommand = function(receiver, pos) {
    this.receiver = receiver // 动画类
    this.pos = pos
    this.oldPos = null
}

MoveCommand.prototype.execute = function() {
    this.receiver.start('left', this.pos, 1000)
    // oldPos记录
    this.oldPos = this.receiver.dom.getBoundingClientRect()[this.receiver.propertyName]
}

MoveCommand.prototype.undo = function() {
    this.receiver.start('left', this.oldPos, 1000)
}

var command;
moveBtn.onclick = function() {
    var animation = new Animation(ball)
    // 把button.click与实际操作的Animation类隔离开
    // 解耦合（使得可以有更多能力，如undo，reset等）
    // 有点类似中介者
    command = new MoveCommand(animation, movePosition.value)
    command.execute()
}

undoBtn.onclick = function() {
    command.undo()
}