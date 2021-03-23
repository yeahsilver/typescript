# Typescript

> https://typescript-kr.github.io



## TypeScript: 정적 타입 검사자

- *정적 검사*: 프로그램을 실행시키지 않으면서 코드의 오류를 검출하는 것
- *정적 타입 검사*: 어떤 것이 오류인지와 어떤 것이 연산 되는 값에 기인하지 않음을 정하는 것
- **TypeScript**는  프로그램을 실행시키기 전 *값의 종류*를 기반으로 프로그램의 오류를 찾음







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

    

