function BoardMember(name, homeState, training) {
    this.name = name
    this.homeState = homeState
    this.training = training
}

BoardMember.prototype.veto = function() {
    return "No, I must disagree"
}

BoardMember.prototype.approve = function() {
    return "You can do that!"
}

BoardMember.prototype.doCharity = function() {
    return "I like to help people."
}

BoardMember.prototype.releasePressStatement = function() {
    return "You will see great things from Scuber."
}

BoardMember.prototype.sayHi = function() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}

// veto()
//     1) returns "No, I must disagree"
// approve()
//     2) returns "You can do that!"
// doCharity()
//     3) returns "I like to help people."
// releasePressStatement()
//     4) returns "You will see great things from Scuber."
// sayHi()
//     5) returns "Hi, my name is <name>. I am from <homestate>, and I was trained in <training>."