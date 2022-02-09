//Nasted loop task-1
let star = ["*","*", "*", "*", "*", "*", "*", "*", "*", "*"]
for(let i = 0; i < star.length; i++){
    let line = "";
    for(let x = 0; x < i; x++){
        line += star[x];
    }
    // console.log(line);
}
// task-1 tried to another way
for(let a = 0; a < 10; a++){
    let grow = "";
    for(let b = 0; b < a; b++){
        grow += "*"
    }
    // console.log(grow);
}

//task 2

let viewLine = 5;
for(let c = 0; c < viewLine; c++){
    let viewData = "";
    for(let d = 0; d < viewLine; d++){
        viewData += d;
    }
    console.log(viewData)
}