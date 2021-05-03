## NestJS_Basic

- #### Nest Factory

  > Nest기반의 애플리케이션을 생성 및 구동시키기 위한 클래스로, Nest의 핵심기능에 해당한다.

- #### Controller

  > Client의 http 요청을 처리하여 응답을 보내주는 역할을 수행한다.

  - NestJS는 기본적으로 컨트롤러를 통해 라우팅을 구현
  - @controller 데코레이터를 이용하여 컨트롤러를 정의

- #### Provider

  > 서비스, 레포지토리, 팩토리, 헬퍼 등의 dependency를 Nest Core가 register할 수 있도록 등록

- #### Async / Await

  > 비동기 코드를 작성하는 새로운 방법

  - 간결함과 깔끔함

    - 에러를 헨들링 (try/catch를 통해 처리 가능)

      

- `npm run start:dev   `: 수정사항 바로 변동 가능하게 서버 켜기

- `nest generate controller controller명`: controller 추가
- `nest generate module modlue명`: 모듈 추가
- `nest generate service service명`: 서비스 추가