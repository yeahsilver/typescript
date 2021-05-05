# AWS용어

- ### ECS

  > 도커 컨테이너를 이용하여 인프라 환경을 편리하게 운영하고 관리할 ㅏ수 있도록 해주는 서비스

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



- ### EC2

- ### ECR

- ### EKS

- ### LOADBALANCING

- ### VPC

- ### IAM

  