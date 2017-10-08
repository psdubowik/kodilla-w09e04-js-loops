function drawXmasTree(treeHeight){
    var star = "*";
    var spaceNum = treeHeight;
    var space = " ".repeat(spaceNum);
    console.log(space + star);
    for(var level = 1; level <= treeHeight; level++){
        star += "o*";
        spaceNum --;
        space = " ".repeat(spaceNum);
        console.log(space + star);
    }
    console.log( " ".repeat(treeHeight-1) + "[ ]");
}
var myTree = drawXmasTree(20);
