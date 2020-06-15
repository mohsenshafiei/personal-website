import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./useInterval";
import {
  CANVAS_SIZE,
  SCALE,
  SPEED,
  DIRECTIONS,
  COLOR_NAMES,
} from "./constants";
import style from './style.scss';

const create2DArray = (x: number, y: number) => {
  const column = new Array(y).fill(0)
  const row = new Array(x).fill(column)
  return row;
}

const X: number = Math.floor(CANVAS_SIZE[0]/SCALE);
const Y: number = Math.floor(CANVAS_SIZE[1]/SCALE);
let board: any = create2DArray(X, Y)
let path: any = [];
const createStack = () => {
  let item: any = [];
  const push = (el: number[]) => item.push(el)
  const pop = () => item.pop()
  const isEmpty = () => item.length === 0
  const size = () => item.length
  return {
    push,
    pop,
    isEmpty,
    size,
  }
}

const getRandomArbitrary = (min: number, max: number) => Math.round(Math.random() * (max - min) + min);
const getNeighbors = (x: number, y: number) => DIRECTIONS.map((n) => [n[0] + x, n[1] + y])
const types = ['maze', 'dots', 'rects', 'mixed'];
const type = types[getRandomArbitrary(0 , 3)];
const sizes = [ 0.2, 0.3, 0.1]
const size = sizes[getRandomArbitrary(0 , 3)];
const isInRange = (x: number, y: number) => x >= 0 && x < X && y >= 0 && y < Y
const isVisited = (x: number, y: number) => board[x][y] === 1
const random = (pallete: string) => {
  switch (pallete) {
    case 'light':
      const randomNumber = getRandomArbitrary(0, COLOR_NAMES.length -1);
      return COLOR_NAMES[randomNumber];
    default:
      return pallete;
  }
}
const visit = (x: number, y: number) => {
  board = board.map((row: number[], i:number) => {
    const r = row.map((tile: number, j: number) => {
      if (i === x && j === y) return 1;
      return tile;
    });
    return r
  })
}

function shuffle(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const dfs = (x: number, y: number) => {
  const stack = createStack();
  stack.push([x, y]);
  visit(x, y)
  path = [...path, [x, y]]
  while (!stack.isEmpty()) {
    let node = stack.pop();
    if (!isVisited(node[0], node[1])) path = [...path, node]
    visit(node[0], node[1]);
    const neighbors = getNeighbors(node[0], node[1]).filter(n => isInRange(n[0], n[1]) && !isVisited(n[0], n[1]));
    shuffle(neighbors);
    neighbors.forEach((n) => {
      stack.push(n)
    });
  }
  return path;
}

export const Maze = () => {
  const canvasRef = useRef();
  const [speed, setSpeed] = useState(null);
  const [counter , setCounter] = useState(0)
  const [pathing, setPathing] = useState([[1,1], [1,2]])
  const color: string = 'light';
  const designs: string[] = ['maze', 'dots']
  const design: string = type === 'mixed' ? designs[getRandomArbitrary(0, 2)] : type;
  const circleSize: number = type === 'mixed' ? sizes[getRandomArbitrary(0, 3)] : size;
  useInterval(() => gameLoop(), speed);

  const renderDots = () => {
    // @ts-ignore
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.fillStyle = random(color);
    var circle = new Path2D();
    circle.moveTo(pathing[counter][0], pathing[counter][1]);
    circle.arc(pathing[counter][0] + 1, pathing[counter][1] + 1, circleSize, 0, 2 * Math.PI);
    context.fillStyle = random(color);;
    context.fill(circle);
  }

  const renderRect = () => {
    // @ts-ignore
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.fillStyle = random(color);;
    context.fillRect(pathing[counter][0] + 1, pathing[counter][1] + 1, circleSize, circleSize);
  }

  const renderMaze = () => {
    // @ts-ignore
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.fillStyle = random(color);
    const a = pathing[counter - 1][0] - pathing[counter][0];
    const b = pathing[counter - 1][1] - pathing[counter][1];
    const c = Math.sqrt( a*a + b*b );
    if (c === 1) {
      context.beginPath();
      context.lineCap = "round";
      context.lineWidth = 0.1;
      context.moveTo(pathing[counter - 1][0] + 1, pathing[counter - 1][1] + 1);
      context.lineTo(pathing[counter][0] + 1, pathing[counter][1] + 1);
      context.strokeStyle = random(color);
      context.stroke();
    }
  }

  useEffect(() => {
    if (counter > 1 && counter < pathing.length) {
      switch (design) {
        case 'maze':
          renderMaze()
          break;
        case 'dots':
          renderDots()
          break;
        case 'rects':
          renderRect()
          break;
        default:
          renderMaze()
      }
    }
  }, [counter]);

  const gameLoop = () => (counter < path.length) && setCounter(counter + 1);

  const startGame = () => {
    const start = [getRandomArbitrary(0, X - 1), getRandomArbitrary(0, Y - 1)]
    setPathing(dfs(start[0],start[1]))
    setSpeed(SPEED);
  };

  useEffect(() => { startGame() }, [])

  return (
    <div className={style.container}>
      <canvas
        className={style.game}
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      />
    </div>
  );
};
