CartDomain 브랜치는 비즈니스 로직과 뷰 로직의 적절한 분리부터 테스트 코드로 아키텍처 설계의 중요성에 대해 설명하고 있습니다.
[블로그 포스팅]() 참고해주세요.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

[http://localhost:3000](http://localhost:3000) 의 /cart/old-code 과, cart/new-code 에서 예제를 확인할 수 있습니다.

## Description

cart/(cart-test-code) 디렉토리 안에 new-code와 old-code가 존재합니다.

- old-code: 비즈니스 로직 + 뷰 로직을 합친 Page
  - 긴 코드, 중복된 테스트 코드가 존재할 수 있습니다.
- new-code: 비즈니스 로직과 뷰 로직을 적절히 분리
  - 한번의 테스트 코드로 비즈니스 로직을 테스트 할 수 있다.

## More Posting

다른 게시글을 보고 싶다면 [방울방울 블로그](https://blog.hansolbangul.com)을 방문해주세요!
