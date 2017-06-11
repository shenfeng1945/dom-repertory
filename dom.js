/**
 * Created by lzc on 2017/6/11.
 */
window.dom = {}   //即var dom = {}
//给dom添加属性

//增
window.dom.create = function (tagname,children,attributes) {
    var tag = document.createElement(tagname)
    if(typeof children === 'string'){
        var text = document.createTextNode(children)
        tag.appendChild(text)
    }else if(children instanceof HTMLElement){
        tag.appendChild(children)
    }else if(children instanceof Array){
        for(var i=0;i<children.length;i++){
            if(typeof children[i] === 'string'){
                tag.appendChild(document.createTextNode(children[i]))
            }else if(children[i] instanceof HTMLElement){
                tag.appendChild(children[i])
            }
        }
    }
    if(attributes instanceof Object){
        for(var key in attributes){
            tag[key] = attributes[key]
        }
    }
    return tag
}
//查
window.dom.find = function (selector,scope) {
    var tag = (scope instanceof HTMLElement) ? scope : document
    return tag.querySelectorAll(selector)
}
//删
window.dom.empty = function (tag) {
    var first = tag.childNodes[0]
    while(first){
        first.remove()
        first = tag.childNodes[0]
    }
}
window.dom.children = function (tag) {
    return tag.children
}
//寻找子节点里节点类型为3
window.dom.text = function (tag) {
    var result = ''
    for(var i=0;i<tag.childNodes.length;i++){
        if(tag.childNodes[i].nodeType === 3){
            result = result + tag.childNodes[i].trim()
        }
     return result
    }
}
//设置属性
window.dom.attr = function (tag,attributes) {
    for(var key in attributes){
        tag.setAttribute(key,attributes[key])
    }
}
// 设置样式
window.dom.style = function (tag,styles) {
    for(var key in styles){
        tag.style[key] = styles[key]
    }
}
//找同级节点最大的
window.dom.bigBrother = function (tag) {
    var big = tag.previousElementSibling
    while(big.previousElementSibling !== null){
        big = big.previousElementSibling
    }
    return big
}