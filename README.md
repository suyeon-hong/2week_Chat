
# 목표는 취업이조 2팀
👉 [배포주소 바로가기](https://2weekchat.netlify.app/)<br>
👉 [회고록 바로가기](https://velog.io/@suyeon-hong/%EC%9B%90%ED%8B%B0%EB%93%9C%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9%EC%BD%94%EC%8A%A4-2%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0-2)

<br>


### 👀 프로젝트 빌드 및 실행 방법

1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

```
$ git clone https://github.com/wanted-team2/2week_Chat.git
```

2. 패키지를 설치합니다.

```
$ yarn install
```

3. 서버를 실행합니다.

```
$ yarn start
```

<br>

## 🔥 프로젝트 과정 소개
| [코딩 컨벤션 규칙](https://sleepy-oxygen-343.notion.site/9c06caa291f44d129f3b707fd4627aa0) | [깃허브 작성 규칙](https://sleepy-oxygen-343.notion.site/9c06caa291f44d129f3b707fd4627aa0) |
|:--:|:--:|
|![1](https://user-images.githubusercontent.com/78653426/152985098-26a0af22-9186-4d1b-b302-ef5246f85b29.png)|![3](https://user-images.githubusercontent.com/78653426/152985107-45acb775-a967-4e8d-a0d9-271171369fed.png)|
|![2](https://user-images.githubusercontent.com/78653426/152985104-7c2ac57a-1491-4d2f-90cf-3d1ae24c6799.png)|![4](https://user-images.githubusercontent.com/78653426/152985109-90d48190-b379-481d-aa1f-66ed1f86e581.png)|
| [정보 공유](https://www.notion.so/5520df8322e549ebb29b4528de020d52) | [구현명세 시각화](https://www.figma.com/file/4Cd5n1VVGLrAzlldO6FEEe/Swit?node-id=0%3A1) |
|![11](https://user-images.githubusercontent.com/78653426/153548448-d9e13041-e5fa-4b66-b69f-9b54b8d8fbdc.png)|![11](https://user-images.githubusercontent.com/78653426/153548281-6e4d5866-29ef-4a4d-b9e2-2c64c4e01dd2.png)|



<br>
<br>


### 📝 기능 목록 명세
#### ✔ 김지영
- 프로젝트 기초 세팅
- 공용 SCSS 설정
- 디자인 통일화
- 배포
- `Login 페이지`, `Profile 컴포넌트` 구현
#### ✔ 고병표
- `Botton 컴포넌트`, `Bottons 컴포넌트` 구현
- `Chats 페이지`, `MessageBox 컴포넌트` 구현
#### ✔ 유제호
- `ChatInput (채팅 인풋)컴포넌트 구현`
- 메세지 전송, 답글, 삭제 기능 구현
- redux 전역 상태관리 담당
#### ✔ 홍수연
- `Modal`, `replyBox` 컴포넌트 구현

<br>

### 📈 디렉토리 구조
```
.
├── README.md
├── config-overrides.js
├── package.json
├── public
│   ├── _redirects
│   ├── index.html
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── index.tsx
│   ├── models
│   ├── pages
│   ├── react-app-env.d.ts
│   ├── redux
│   ├── setupTests.ts
│   ├── styles
│   ├── types
│   └── utils
├── tsconfig.json
├── tsconfig.paths.json
├── yarn-error.log
└── yarn.lock
```
