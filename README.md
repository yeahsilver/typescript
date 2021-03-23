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

  

### 타입 정의하기

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



### 타입 구성

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

  

- 