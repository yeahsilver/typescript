# AWS용어

- ### EC2

  > 독립된 컴퓨터 한대를 임대해서 사용할 수 있게 해주는 서비스

  - #### EC2 리전

    > 컴퓨터들이 많이 모여있는 공간인 데이터 센터가 위치하는 곳

  - #### EC2 Instance

    > 컴퓨터 한개를 의미

- ### ECS

  > 도커 컨테이너를 이용하여 인프라 환경을 편리하게 운영하고 관리할 수 있도록 해주는 서비스

  - #### Task Definition

    > 도커 컨테이너를 실행하기 위해 정의한 set

  - #### Task

    > Test Definition에서 정의된 대로 배포된 Container Set

  - #### Service

    > Task들의 생명주기를 관리하는 부분. Task를 Cluster에 몇 개나 배포할 것인지 결정하고, 실행 중인 Task가 어떤 이유로 작동이 중지되면 이것을 자동으로 감지해 새로운 Task를 Cluster에 배포하는 고가용성에 대한 정책 또한 관리

  - #### Container Instance

    > Task를 올리기 위해 등록된 ECS 인스턴스

  - #### Cluster

    > Task가 배포되는 컨테이너 인스턴스들이 논리적인 그룹으로 묶은 단위.





- ### ECR (Elastic Container Registry)

  > ECS와 통합되어 안전하고 확장 가능하고 신뢰할 수 있는 AWS 관리형 컨테이너 이미지 레포지토리 서비스이다. (Docker Container의 이미지 저장)

  

- ### EKS

  > AWS에서 만든 관리형 쿠버네티스 서비스. 

  

- ### LOADBALANCING

  > 네트워크 기술의 일종으로, 중앙 처리 장치 혹은 저장장치와 같은 컴퓨터 자원들에게 작업을 나누는 것. (서버에 가해지는 부하(=load)를 분산(=balance) 해주는 장치 또는 기술)

  - Scale Up: 서버 자체의 성능을 높이는 것
  - Scale Out: 여러 대의 서버를 두는 것 ==> 이 때 로드 밸런싱이 필요해짐



- ### VPN

  > 가상 사설망. 실제로 같은 네트워크상에 있지만 논리적으로 다른 네트워크인 것 처럼 동작하는 것.

  

- ### VPC

  > Virtual Private Cloud. EC2 인스턴스들이 서로 거미줄처럼 연결되는 것을 막기위해 사용

  

- ### IAM

  > Identity and Access Management. AWS 리소스에 대한 액세스를 안전하게 제어할 수 있는 웹 서비스. IAM을 사용하여 리소스를 사용하도록 인증 및 권한 부여된 대상을 제어함.