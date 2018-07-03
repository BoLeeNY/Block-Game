function createGrid() {
    const cells = [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6]
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
const blocks = [{x:3, y:3},{x:3,y:4}];



const insideGrid = function(x, y) {
    if (x < 0 || y < 0 || x > 6 || y > 6) {
        return false;
    }
    return true;
}

const allowedMove = function(x, y) {
    if (!insideGrid(x, y)) {
        return false;
    }
    if (isThereABlock(x, y)) {
        return false;
    }
    return true;
}

const isThereABlock = function(x, y) {
    for ( let i = 0; i < blocks.length; i += 1) {
        const block = blocks[i];
        if ( block.x === x && block.y === y) {
            return true;
        }
    }
    return false;
};

const moveBlock = function(x, y) {
    const mainBlock = document.querySelector('.one');
    mainBlock.style.top = (y * 100) + 'px';
    mainBlock.style.left = (x * 100) + 'px';
    //if (isThereABlock(x, y))
}

const moveRight = function() {
    if (allowedMove(mainBlock.x + 1, mainBlock.y)) {
        mainBlock.x += 1;
        moveBlock(mainBlock.x, mainBlock.y);
    }
}

