// function doSomthing() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i);
//     }

//     console.log('Finally: '+ i);
// }

// doSomthing();

// typescript에서는 count가 number 형태라 count에 'a'를 삽입하면 에러.
// 하지만 javascript에서는 에러가 나지 않음.
// let count = 5;
// count = 'a';

// console.log(count);

// enum같은 경우 javascript보다 typescript에서 더욱 간편하게 사용할 수 있음.
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1, true, 'a', false];

// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

// enum Color { Red = 0, Green = 1, Blue = 2 };
// let backgroundColor = Color.Red;

// // type assertion
// let message;

// // message type = string
// // <string> 또는 as string을 사용하여 message의 타입을 string이라고 알려줌
// message = 'abc';
// let endWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');

// let log = function(message) {
//     console.log(message);
// }

// arrow function
// let doLog = (message) => {
//     console.log(message);
// }

// interface Point {
//     x: number,
//     y: number,
//     draw: () => void
// }


// typescript class 사용법
// class Point {
//     // private x: number;
//     // private y: number;
    
//     constructor(private x?: number, private y?: number) {
//         // this.x = x;
//         // this.y = y;
//     }

//     draw() {
//         console.log('X: ' + this.x + ', Y: ' + this.y);
//     }
// }

// 다른 파일 불러오기 및 가져오기
// import { Point } from './point';

// let point: Point = new Point(1, 2);
// point.draw();