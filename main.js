function createGrid() {
    const cells = [
        [0, 1 ,2 ,3 ,4 ,5],
        [0, 1 ,2 ,3 ,4 ,5],
        [0, 1 ,2 ,3 ,4 ,5],
        [0, 1 ,2 ,3 ,4 ,5],
        [0, 1 ,2 ,3 ,4 ,5],
        [0, 1 ,2 ,3 ,4 ,5]
    ]; 

    const container = document.querySelector('#container');
    for ( let i = 0; i < cells.length; i += 1) {
        //let row = document.createElement('div');
        //row.className = `row`;
        for (let j = 0; j < cells.length; j += 1) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            container.appendChild(cell);
            //const col = document.createElement('div');
            //col.className = `col`;
            //row.appendChild(col);
        }
        //container.appendChild(row);
    }
    //document.body.appendChild(container);
}
createGrid(); 



const mainBlock = {x:0,y:0};
const horiBlock = {x:0,y:3};
const blocks = [{x:4, y:3},{x:4,y:4}];


// checks if spaces youre moving to are inside the grid
const insideGrid = function(x, y) {
    if (x < 0 || y < 0 || x > 6 || y > 6) {
        return false;
    }
    return true;
}
// if the move is inside the grid and theres no block, you can move
const allowedMove = function(x, y) {
    if (!insideGrid(x, y)) {
        return false;
    }
    if (isThereABlock(x, y)) {
        return false;
    }
    return true;
}
// checks if theres a block in the way
const isThereABlock = function(x, y) {
    for ( let i = 0; i < blocks.length; i += 1) {
        const aBlock = blocks[i];
        if ( aBlock.x === x && aBlock.y === y) {
            return true;
        }
    }
    return false;
};
//moves block vertically by pixels
const moveBlock = function(x, y) {
    const block = document.querySelector('.block');
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}


const moveRight = function() {
    if (allowedMove(block.x + 1, block.y)) {
        block.x += 1;
        moveBlock(block.x, block.y);
    }
}

const moveLeft = function() {
    if (allowedMove(block.x -= 1, block.y)) {
        block.x -= 1;
        moveBlock(block.x, block.y);
    }
}

const moveUp = function() {
    if (allowedMove(block.x, block.y -= 1)) {
        block.y -= 1;
        moveBlock(block.x, block.y);
    }
}

const moveDown = function() {
    if (allowedMove(block.x, block.y += 1)) {
        block.y += 1;
        moveBlock(block.x, block.y);
    }
}


const container = document.querySelector('#container');
container.addEventListener('click', function(e) {
    if (e.target.class === document.querySelector('.hori')) {
        moveRight();
        moveLeft();
    } else {
        moveUp();
        moveDown();
    }
});


const win = function() {
        if (document.querySelector('.winner') !== null) {
            return;
        }
        const winEl = document.createElement('div');
        winEl.className = 'winner';
        winEl.innerHTML = 'We Out!';
        document.getElementById('container').appendChild(winEl);
}