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
            //cell.setAttribute('ondrop','drop(ev)');
            container.appendChild(cell);
        }
    }
}
createGrid(); 



const block = {x:0,y:2};
const threeBlock = [{x:2, y:0}, {x: 3, y: 0}];
const twoBlock = [{x: 4, y: 1}, {x: 5, y: 1}, {x: 0, y: 3}, {x: 1, y: 3}, {x: 5, y: 3}];
const horiTwoBlock = [{x: 2, y: 4}, {x: 1, y: 5}];

const render3 = () => {
    for (let i = 0; i < threeBlock.length; i++) {
      const threeB = threeBlock[i];
      const blockElement = document.createElement('div');
      blockElement.classList.add (`xy${threeBlock[i].x}${threeBlock[i].y}`, 'three');
      blockElement.style.left = (threeB.x * 100).toString() + 'px';
      blockElement.style.top = (threeB.y * 100).toString() + 'px';
      document.querySelector('#container').appendChild(blockElement);
    }
  };
  render3();

  const render2 = () => {
    for (let i = 0; i < twoBlock.length; i++) {
      const twoB = twoBlock[i];
      const blockElement = document.createElement('div');
      blockElement.className = `xy${twoBlock[i].x}${twoBlock[i].y}`;
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
      blockElement.className = `xy${horiTwoBlock[i].x}${horiTwoBlock[i].y}`;
      blockElement.style.left = (hori2.x * 100).toString() + 'px';
      blockElement.style.top = (hori2.y * 100).toString() + 'px';
      document.querySelector('#container').appendChild(blockElement);
    }
  };
  renderHori2();

  const renderMain = () => {
    for (let i = 0; i < block.length; i++) {
      const block = block[i];
      const blockElement = document.createElement('div');
      blockElement.className = `xy${block[i].x}${block[i].y}`;
      blockElement.style.left = (rock.x * 100).toString() + 'px';
      blockElement.style.top = (rock.y * 100).toString() + 'px';
      document.querySelector('#container').appendChild(blockElement);
    }
  };
  renderMain();

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
    const block = document.querySelector(`#${newClick}`);
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
    if (allowedMove(block.x -= 1, block.y)) {
        block.x -= 1;
        moveBlock(block.x, block.y);
    }
}

const moveUp = () => {
    if (allowedMove(block.x, block.y -= 1)) {
        block.y -= 1;
        moveBlock(block.x, block.y);
    }
}

const moveDown = () => {
    if (allowedMove(block.x, block.y += 1)) {
        block.y += 1;
        moveBlock(block.x, block.y);
    }
}

const block2a = document.querySelector(`#block2a`);
//block2a.onfocus = function() {movement()}();
block2a.onclick = function() {
    block2a.focus();
     movement();
}
let newClick;
let allInfo;
const aBlock=document.querySelectorAll('.block');
for (i = 0; i <aBlock.length; i += 1) {
    aBlock[i].addEventListener('focus', function(e) {
        const focusBlock = e.target.id;
        const blockStyle = e.target.getBoundingClientRect();
        newClick = focusBlock;
        allInfo = [focusBlock, blockStyle];
        console.log(focusBlock);
        console.log(newClick);
        console.log(blockStyle);

})
}

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


/*const container = document.querySelector('#container');
container.addEventListener('click', function(e) {
    const horizontalBlocks = document.querySelector('.hori');
    e.preventDefault();
    for (i = 0; i < horizontalBlocks.length; i += 1) {
        if (e.target === horizontalBlocks) {
            moveRight();
            moveLeft();
        } else {
            moveUp();
            moveDown();
    }
    }
});*/


const win = function() {
        if (document.querySelector('.winner') !== null) {
            return;
        }
        const winEl = document.createElement('div');
        winEl.className = 'winner';
        winEl.innerHTML = 'We Out!';
        document.getElementById('container').appendChild(winEl);
}

function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}