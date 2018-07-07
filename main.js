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
        for (let j = 0; j < cells.length; j += 1) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            //cell.setAttribute('ondrop','drop(event)');
            //cell.setAttribute('ondragover', 'allowDrop(event)');
            container.appendChild(cell);
        }
    }
}
createGrid(); 



const block = {x:0,y:2};
const threeBlock = [{x:2, y:0}, {x: 3, y: 0}];
const twoBlock = [{x: 4, y: 1}, {x: 5, y: 1}, {x: 0, y: 3}, {x: 1, y: 3}, {x: 5, y: 3}];
const horiTwoBlock = [{x: 2, y: 4}, {x: 1, y: 5}];
const blocks = [
    {x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2},
    {x: 3, y: 0}, {x: 3, y: 1}, {x: 3, y: 2},
    {x: 4, y: 1}, {x: 4, y: 2},
    {x: 5, y: 1}, {x: 5, y: 2},
    {x: 0, y: 3}, {x: 0, y: 4},
    {x: 1, y: 3}, {x: 0, y: 4},
    {x: 5, y: 3}, {x: 5, y: 4},
    {x: 2, y: 4}, {x: 3, y: 4},
    {x: 1, y: 5}, {x: 2, y: 5},
    {x: 0, y: 2}, {x: 1, y: 2}];

const render3 = () => {
    for (let i = 0; i < threeBlock.length; i++) {
      const threeB = threeBlock[i];
      const blockElement = document.createElement('div');
      blockElement.classList.add (`x${threeBlock[i].x}y${threeBlock[i].y}`, 'three', 'block');
      blockElement.style.left = (threeB.x * 100).toString() + 'px';
      blockElement.style.top = (threeB.y * 100).toString() + 'px';
      blockElement.addEventListener('click', function() {
          movement3();
      })
      document.querySelector('#container').appendChild(blockElement);
    }
  };
  render3();

  const render2 = () => {
    for (let i = 0; i < twoBlock.length; i++) {
      const twoB = twoBlock[i];
      const blockElement = document.createElement('div');
      blockElement.classList.add(`x${twoBlock[i].x}y${twoBlock[i].y}`, 'two', 'block');
      blockElement.style.left = (twoB.x * 100).toString() + 'px';
      blockElement.style.top = (twoB.y * 100).toString() + 'px';
      document.querySelector('#container').appendChild(blockElement);
    }
  };
  render2();

  const renderHori2 = () => {
    for (let i = 0; i < horiTwoBlock.length; i++) {
      const hori2 = horiTwoBlock[i];
      const blockElement = document.createElement('div');
      blockElement.classList.add(`x${horiTwoBlock[i].x}y${horiTwoBlock[i].y}`, 'hori2', 'block');
      blockElement.style.left = (hori2.x * 100).toString() + 'px';
      blockElement.style.top = (hori2.y * 100).toString() + 'px';
      //blockElement.setAttribute('draggable', true);
      document.querySelector('#container').appendChild(blockElement);
    }
  };
  renderHori2();

  const renderMain = () => {
      const blockElement = document.createElement('div');
      blockElement.classList.add(`x${block.x}y${block.y}`, 'main', 'block');
      blockElement.style.left = (block.x * 100).toString() + 'px';
      blockElement.style.top = (block.y * 100).toString() + 'px';
      blockElement.addEventListener('onfocus', function() {
          movement();
      })
      document.querySelector('#container').appendChild(blockElement);
  };
  renderMain();

// checks if spaces youre moving to are inside the grid
const insideGrid = function(x, y) {
    if (x < 0 || y < 0 || x > 5 || y > 5) {
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


const moveBlock = function(x, y) {
    const block = document.querySelector(`.x0y2`);
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}

const moveRight = () => {
    if (allowedMove(block.x + 1, block.y)) {
        block.x += 1;
        moveBlock(block.x, block.y);
    }
}

const moveLeft = () => {
    if (allowedMove(block.x - 1, block.y)) {
        block.x -= 1;
        moveBlock(block.x, block.y);
    }
}

const moveUp = () => {
    if (allowedMove(block.x, block.y - 1)) {
        block.y -= 1;
        moveBlock(block.x, block.y);
    }
}

const moveDown = () => {
    if (allowedMove(block.x, block.y + 1)) {
        block.y += 1;
        moveBlock(block.x, block.y);
    }
}




let newClick;
//let allInfo;
/*const aBlock=document.querySelectorAll('.block');
for (i = 0; i <aBlock.length; i += 1) {
    aBlock[i].addEventListener('click', function(e) {
        const focusBlock = e.target.classList[0];
        //const blockStyle = e.target.getBoundingClientRect();
        newClick = focusBlock;
        movement();
        //allInfo = [focusBlock, blockStyle];
        console.log(focusBlock);
        //console.log(blockStyle);

})
}*/

const movement = function() {
    console.log('movement');
    document.body.addEventListener('keydown', function(evt) {
        const keyCode = evt.keyCode;
        if ([37, 38, 39, 40].includes(keyCode)){
            evt.preventDefault;
        }
        switch(keyCode) {
            case 37:
            moveLeft();
            break;
            case 38:
            moveUp();
            break;
            case 39:
            moveRight();
            break;
            case 40:
            moveDown();
            break;
        }
    })
}





const win = function() {
        if (document.querySelector('.winner') !== null) {
            return;
        }
        const winEl = document.createElement('div');
        winEl.className = 'winner';
        winEl.innerHTML = 'We Out!';
        document.getElementById('container').appendChild(winEl);
}



// MOVEMENT OF THREE BLOCKS
const moveThreeBlock = function(x, y) {
    const block = document.querySelector(`.x2y0`);
    block.style.top = (y * 100).toString() + 'px';
    block.style.left = (x * 100).toString() + 'px';
}

const moveRight3 = () => {
    if (allowedMove(threeBlock[0].x + 1, threeBlock[0].y)) {
        threeBlock[0].x += 1;
        blocks[0].x += 1;
        blocks[1].x += 1;
        blocks[2].x += 1;
        moveThreeBlock(threeBlock[0].x, threeBlock[0].y);
        //blocks[0].x = threeBlock[0].x;
    }
}

const moveLeft3 = () => {
    if (allowedMove(threeBlock[0].x - 1, threeBlock[0].y)) {
        threeBlock[0].x -= 1;
        blocks[0].x -= 1;
        blocks[1].x -= 1;
        blocks[2].x -= 1;
        moveThreeBlock(threeBlock[0].x, threeBlock[0].y);
        //blocks[0].x = threeBlock[0].x;

    }
}

const moveUp3 = () => {
    blocks[1].y -= 1;
    blocks[2].y -= 1;
    if (allowedMove(threeBlock[0].x, threeBlock[0].y - 1)) {
        threeBlock[0].y -= 1;
        blocks[0].y -= 1;
        moveThreeBlock(threeBlock[0].x, threeBlock[0].y);
        //blocks[0].y = threeBlock[0].y;
    }
}

const moveDown3 = () => {
    blocks[1].y += 1;
    blocks[2].y += 1;
    if (allowedMove(threeBlock[0].x, threeBlock[0].y + 1)) {
        threeBlock[0].y += 1;
        blocks[0].y += 1;
        moveThreeBlock(threeBlock[0].x, threeBlock[0].y);
        //blocks[0].y = threeBlock[0].y;
    }
}
const movement3 = function() {
    console.log('movement');
    document.body.addEventListener('keydown', function(evt) {
        const keyCode = evt.keyCode;
        if ([37, 38, 39, 40].includes(keyCode)){
            evt.preventDefault;
        }
        switch(keyCode) {
            case 37:
            moveLeft3();
            break;
            case 38:
            moveUp3();
            break;
            case 39:
            moveRight3();
            break;
            case 40:
            moveDown3();
            break;
        }
    })
}