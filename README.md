# Typescript

> https://typescript-kr.github.io



## TypeScript: 정적 타입 검사자

- *정적 검사*: 프로그램을 실행시키지 않으면서 코드의 오류를 검출하는 것
- *정적 타입 검사*: 어떤 것이 오류인지와 어떤 것이 연산 되는 값에 기인하지 않음을 정하는 것
- **TypeScript**는  프로그램을 실행시키기 전 *값의 종류*를 기반으로 프로그램의 오류를 찾음



</br>



## 타입이 있는 JavaScript의 상위 집합

### TypeScript와 JavaScript의 관계

- #### 구문

  - TypeScript는 JS의 구문이 허용되는, JavaScript의 상위 집합 언어이다.
  - 작동하는 JavaScript 코드를 TypeScript 파일에 넣어도 잘 작동함.

- #### 타입

  - TypeScript는 다른 종류의 값들을 사용할 수 있는 방법이 추가된 *타입이 있는* 상위 집합이다.

  - TypeScript의 타입 검사자는 일반적인 오류를 최대한 많이 검출하면서 올바른 프로그램을 만들 수 있게 설게 되었음.

    ```typescript
    // JavaScript일 경우 NaN 반환
    // TypeScript일 경우 오류 발생
    console.log(4/[]);
    ```

    

- #### 런타임 특성

  - TypeScript는 JavaScript의 *런타임 특성* 을 가진 프로그래밍 언어이다.
  - TypeScript가 코드에 타입 오류가 있음을 검출해도, JavaScript 코드를 TypeScript로 이동시키는 것은 같은 방식으로 실행시킬 것을 보장.

  

- #### 삭제된 타입

  - TypeScript의 컴파일러가 코드 검사를 마치면 타입을 삭제해서 결과적으로 컴파일된 코드를 생성함 -> 코드가 한 번 컴파일 되면, 결과로 나온 일반 JS 코드에는 타입 정보가 없음.
  - 타입 정보가 없다는 것 -> TypeScript가 추론한 타입에 따라 프로그램의 특성을 변화시키지 않음을 의미
  - TypeScript는 JavaScript와 같은 표준 라이브러리를 사용하므로, TypeScript 관련 프레임워크를 추가로 공부할 필요가 없음.



## JavaScript와 TypeScript 학습

- TypeScript는 JavaScript와 구문과 런타임 특성을 공유하므로, JavaScript에서 배운 모든 것들은 동시에 TypeScript를 배울 때 도움이 됨.



## 타입 추론

- 변수를 생성하면서 동시에 특정 값에 할당하는 경우, TypeScript는 그 값을 해당 변수의 타입으로 사용함

- 코드에서 타입을 명시하기 위해 추가로 문자를 사용할 필요가 없는 타입 시스템을 제공함.

  ```typescript
  let helloWorld = "Hello World";
  ```

  

## 타입 정의하기

```typescript
// 객체의 형태를 명시적으로 나타냄
interface User {
	name: string;
	id: number;
};

// 변수 뒤 : TypeName의 구문을 사용해 JavaScript 객체가 새로운 interface의 형태를 따르고 있음을 선언.
const user: User = {
	name: "Hayes",
	id: 0,
};
```



```typescript
// 해당 인터페이스에 맞지 않는 객체를 생성하면 TypeScript에서 경고를 유발

interface User {
  name: String;
  id: number;
};

const user: User =. 
	username: "Hayes",
  id: 0,
};
```





```typescript
// 인터페이스는 클래스로도 선언 가능

interface User {
  name: String;
  id: number;
};

class UserAccount {
  name: String;
  id: number;
  
  constructor(name: String, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);
```





```typescript
// 인터페이스는 함수에서 매개변수와 리턴 값을 명시하는데 사용되기도 함.

interface User {
  name: String;
  id: number;
}

function getAdminUser(): User {
  //...
}

function deleteUser(user: User) {
  //...
}
```



## 타입 구성

> 여러가지 타입을 이용하여 새 타입을 작성하기 위해 일상적인 코드에서 많이 사용되는 두가지 ==> 유니언과 제네릭

- #### 유니언 (Unions)

  - 유니언은 타입이 여러 타입 중 하나일 수 있음을 선언하는 방법이다.
  - 유니언 타입이 가장 많이 사용되는 사례 중 하나는 값이 다음과 같이 허용되는 string 또는 number의 리터럴 집합을 설명하는 것이다.

  ``` typescript
  type MyBool = true | false;
  type WindowsStates = "open" | "closed" | "minimized";
  type LockStates = "locked" | "unlocked";
  type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
  ```

  ```typescript
  // 유니언은 다양한 타입을 처리하는 방법을 제공함
  // 예) array 또는 string을 받는 함수 존재
  function getLength(obj: string | string[]) {
  	return obj.length;
  }
  ```

  ```typescript
  // typeof obj === "string"을 이용하여 string과 array를 구분할 수 있음.
  function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
      return [obj];
  //          ^?
    } else {
      return obj;
    }
  }
  ```

  

- #### 제네릭 (Generic)

  - 제네릭이 있는 배열은 배열 안의 값을 설명할 수 있다.

    ```typescript
    type ObjectWithNameArray = Array<{name: string}>;
    ```

    ```typescript
    interface Backpack<Type> {
      add: (obj: Type) => void;
      get: () => Type;
    }
    
    // type이 string임을 선언함
    declare const backpack: Backpack<string>;
    
    // 위에서 변수를 string형으로 선언하였기에, object는 string
    const object = backpack.get();
    
    // backpack 변수가 string이므로, add 함수에 number를 전달할 수 없음
    backpack.add(23);
    ```



## 구조적 타입 시스템 (Structural Type System)

- TypeScript는 타입 검사를 할 경우 값이 있는 **형태**에 집중함.

  ```typescript
  // Point 변수는 Point 타입으로 선언된 적 없지만 TypeScript는 타입 검사에서 point의 형태와 Point의 형태를 비교함. 아래의 경우에는 같은 형태이기에 통과.
  
  interface Point {
    x: number;
    y: number;
  }
  
  function printPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
  }
  
  // "12, 26"를 출력
  const point = { x: 12, y: 26 };
  printPoint(point);
  ```



## 집합으로써의 타입 (Types as Sets)

- TypeScript에서의 타입은 공통의 무언가를 공유하는 **값의 집합**임
- TypeScript는 집합론의 의거해 타입을 이용하는 여러 방법을 제공하며, 타입을 집합으로 생각하는 것이 더 직관적임



## 삭제된 구조적 타입 (Erased Structural Types)

- TypeScript에서, 객체는 정확히 단일 타입이 아니다.

- 인터페이스를 만족하는 객체를 생성할 때, 둘 사이의 선언적인 관계가 없더라도 해당 인터페이스가 예상되는 곳에 해당 객체를 사용할 수 있다.

  ```typescript
  interface Pointlike {
    x: number;
    y: number;
  }
  interface Named {
    name: string;
  }
  
  function printPoint(point: Pointlike) {
    console.log("x = " + point.x + ", y = " + point.y);
  }
  
  function printName(x: Named) {
    console.log("Hello, " + x.name);
  }
  
  // Pointlike로써 사용 가능. 
  // => 타입간의 관계는 포함된 프로퍼티에 의해 결정
  
  const obj = {
    x: 0,
    y: 0,
    name: "Origin",
  };
  
  printPoint(obj);
  printName(obj);
  ```

  

## 구조적 타입화의 결과 (Consequences of Structural Typing)

- #### 빈 타입 (Empty Types)

  ```typescript
  class Empty {}
  
  function fn(arg: Empty) {
    // 무엇인가를 하나요?
  }
  
  // 오류는 없지만, '빈' 타입은 아님
  // Empty에 프로퍼티가 없으므로 Empty가 수행하는 모든 프로퍼티가 {k: 10}에 속해있음
  // => 유효한 호출임
  fn({ k: 10 });
  ```

- #### 동일한 타입 (Identical Types)

  ```typescript
  class Car {
    drive() {
      // hit the gas
    }
  }
  class Golfer {
    drive() {
      // hit the ball far
    }
  }
  
  // 에러가 발생하지 않음
  // 이유) 클래스의 구조가 동일하기 때문
  let w: Car = new Golfer();
  ```

  

## Haskell에는 없는 개념

- #### 내장 타입 (Built-in types)

  | 타입      | 설명                          |
  | --------- | ----------------------------- |
  | Number    | 배정밀도 IEEE 754 부동 소수점 |
  | String    | 수정 불가능한 UTF-16 문자열   |
  | Boolean   | true와 false                  |
  | Symbol    | 고유한 값                     |
  | Null      | 단위 타입과 동등              |
  | Undefined | 단위 타입과 동등              |
  | Object    | 레코드와 유사                 |

  

- #### 다른 중요한 TypeScript 타입

  | 타입        | 설명                                                     |
  | ----------- | -------------------------------------------------------- |
  | unknown     | 최상위 타입                                              |
  | never       | 하위 타입                                                |
  | 객체 리터럴 | 예) {property: Type}                                     |
  | void        | 리턴 타입으로 사용하기 위해 의도된 undefined의 서브 타입 |
  | T[]         | 수정 가능한 배열들, 또한 Array<T>로 사용 가능            |
  | [T, T]      | 고정된 길이지만 수정 가능한 튜플                         |
  | (t: T) => U | 함수                                                     |

  

  1. 함수 구문에는 매개 변수 이름이 포함. 

     ```typescript
     let fst: (a: any, d: any) => any = (a, d) => a;
     ```

     

  2. 객체 리터럴 타입의 구문이 객체 리터럴 값 구문과 유사

     ```typescript
     let o: { n: number; xs: object[] } = { n: 1, xs: [] };
     ```

     

- #### 박스 형태 타입

  - 박스 형태의 타입은 메서드가 원시 타입을 반환할 때 필요

    ```typescript
    (1).toExponential();
    // 동등하게
    Number.prototype.toExponential.call(1);
    ```



## 점진적인 타이핑

- TypeScript는 표현식의 타입을 알 수 없을 때 마다 `any` 타입을 사용합니다.

  ```typescript
  // any[]에 어떤 값이든 체크하지 않고 넣어도 상관 없음
  const anys = [];
  anys.push(1);
  anys.push("oh no");
  anys.push({ anything: "goes" });
  
  // any 타입은 어디서든 간에 사용 가능
  anys.map(anys[1]);
  
  // any타입의 표현식과 함께 변수를 초기화하면, 변수 역시 any타입을 가짐
  let sepsis = anys[0] + anys[1];
  ```

- TypeScript는 `any`를 제공할 때 에러가 발생되면, `tsconfig.json`에서 `"noImplicitAny": true` 또는 `"strict": true`를 설정해야 합니다.



## 구조적인 타이핑

```typescript
// {x: String, extra: number}에 할당
let o = { x: "hi", extra: 1 }; // 성공

// 할당을 막지 않고, {x: string}의 서브타입으로 만듦
let o2: { x: string } = o; // 성공
```



## 유니언 (Unions)

- 다른 프로퍼티나 내장된 태그를 사용하는 유니언으로 타입을 구별할 수 있음

  ```typescript
  function start(
    arg: string | string[] | (() => string) | { s: string }
  ): string {
    // JavaScript에서 아주 일반적입니다
    if (typeof arg === "string") {
      return commonCase(arg);
    } else if (Array.isArray(arg)) {
      return arg.map(commonCase).join(",");
    } else if (typeof arg === "function") {
      return commonCase(arg());
    } else {
      return commonCase(arg.s);
    }
  
    function commonCase(s: string): string {
      // 마지막으로, 다른 문자열로 변환합니다
      return s;
    }
  }
  ```

- 다음 타입들은 조건자를 가지고 있음

  | 타입      | 조건자                             |
  | --------- | ---------------------------------- |
  | string    | `typeof s === "string"`            |
  | number    | `typeof n === "number"`            |
  | bigint    | `typeof m === "bigint"`            |
  | boolean   | `typeof b === "boolean"`           |
  | symbol    | `typeof g === "symbol"`            |
  | undefined | `typeof undefined === "undefined"` |
  | function  | `typeof f === "function"`          |
  | array     | `Array.isArray(a)`                 |
  | object    | `typeof o === "object"`            |



- #### 교집합

  ```typescript
  // a와 b 두 개의 속성을 가지고 있음
  type Combined = { a: number } & { b: string };
  
  // 충돌을 일으킴
  type Conflicting = { a: number } & { a: string };
  ```

  

## 유니언 타입

```typescript
declare function pad(s: string, n: number, direction: "left" | "right"): string;
pad("hi", 10, "left");
```

```typescript
// @errors: 2345
declare function pad(s: string, n: number, direction: "left" | "right"): string;
// ---cut---
let s = "right";
pad("hi", 10, s); // 오류: 'string'은 '"left" | "right"'에 할당할 수 없음
```



## Haskell과 비슷한 개념 

- #### 문맥적인 타이핑

  ```typescript
  // 변수 s가 string형이라는 것을 추론할 수 있음
  let s = "I'm a string!";
  ```



## 타입 별칭 (Type aliases)

```typescript
type Size = [number, number];
let x: Size = [101.1, 999.9];
```





## 판별 유니언

```typescript
type Shape =
| { kind: "circle"; radius: number}
| { kind: "square", x: number}
| { kind: "triangle"; x: number; y: number};

function area(s: Shape) {
  if (s.kind === "circle") {
    return Math.PI * s.radius * s.radius;
  } else if (s.kind === "square") {
    return s.x * s.x;
  } else {
    return (s.x * s.y) / 2;
  }
}
```





## 타입 매개변수

- 타입 매개변수는 일반적으로 단일 대문자임.

  ```typescript
  function firstish<T extends { length: number }>(t1: T, t2: T): T {
    return t1.length > t2.length ? t1 : t2;
  }
  ```



- ### 상위 유형의 타입

  - TypeScript는 상위 유형의 타입이 없음. 



## 모듈 시스템

- Import 또는 export가 포함된 파일이 암시적로 모듈이라는 점을 제외하면 JavaScript의 최신 모듈 구문운 Haskell과 유사.

  ```typescript
  import { value, Type } from "npm-package";
  import { other, Types } from "./local-package";
  import * as prefix from "../lib/third-package";
  ```



### readonly와 const (readonly and const)

- Javascript에서 수정 가능함이 기본이지만 참조가 수정 불가능함을 선언하기 위해 const로 변수를 선언할 수 있다. 

  ```
  const a = [1, 2, 3];
  a.push(102); // ):
  a[0] = 101; // D:
  ```

- TypeScript는 추가적으로 프로퍼티에 readonly 제어자를 사용할 수 있다.

  ```typescript
  interface Rx {
    readonly x: number;
  }
  let rx: Rx = { x: 1 };
  rx.x = 12; // error
  ```

  

- 매핑된 타입 Readonly<T>은 모든 프로퍼티를 readonly으로 만들어버립니다.

  ```typescript
  interface X {
    x: number;
  }
  let rx: Readonly<X> = { x: 1 };
  rx.x = 12; // error
  ```

  

