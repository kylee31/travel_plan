# 🛫 Travel_Plan

외부 API(지도 API, 지역축제 목록 API) 활용, AWS 배포 여행 계획 웹 서비스
<br/><br/>

## 설치 및 실행

```
## npm
git clone https://github.com/kylee31/travel_plan.git
npm install
npm run dev

## yarn
git clone https://github.com/kylee31/travel_plan.git
yarn install
yarn dev
```

<br/>

## 기술스택 및 구현 기능

<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/> <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styledcomponents&logoColor=black"/> <img src="https://img.shields.io/badge/zustand-4951F5?style=flat-square&logoColor=white"/> <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=flat-square&logo=amazonec2&logoColor=white"/>

- Kakao Map API, 공공문화데이터 API 명세서 활용하여 데이터 제공
- Zustand로 검색어, 추천 데이터 전역 상태 관리
- AWS 탄력적 IP 사용, 도메인 연결 및 EC2 배포
- GitHub Actions로 CI/CD 구축

🌐 [문화공공데이터광장-문화체육관광부\_추천여행지](https://www.culture.go.kr/data/openapi/openapiView.do?id=581&category=D&gubun=A) 🌐 [Kakao 지도 Web API](https://apis.map.kakao.com/web/)
<br/><br/>

## 디렉토리 구조, 아키텍처

| 디렉토리 구조                                                                                         | 아키텍처                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ![dir4](https://github.com/kylee31/travel_plan/assets/106156087/4067e3cc-f167-4af5-a8be-447dd8b26b5d) | ![arch2](https://github.com/kylee31/travel_plan/assets/106156087/1542c5b3-bbde-4c2a-af53-eee63a1bca60) |

**[디렉토리 구조]** 파일의 기능 별(component, style, type 등)로 폴더 분리하여 디렉토리 구조화<br/>
<br/>

## 주요 기능

|                                                                                                                             |                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **로딩 화면**                                                                                                               |                                                                                                                            |
| 접속 전 화면, 2초 후 메인 페이지 이동                                                                                       |                                                                                                                            |
| <image src="https://github.com/kylee31/travel_plan/assets/106156087/b1f9f862-0886-46ab-9000-4576098ec558.png" width="600"/> |                                                                                                                            |
| **메인 화면**                                                                                                               |                                                                                                                            |
| 지역 검색을 통해 추천장소 확인 가능, 캘린더에 일정 추가 기능, 기타 메모 작성                                                | 추천장소 section on/off로 지도 확대 가능                                                                                   |
| <image src="https://github.com/kylee31/travel_plan/assets/106156087/1cae1185-e517-4e48-8ee2-45d8add6ee31.png" width="600">  | <image src="https://github.com/kylee31/travel_plan/assets/106156087/c5cbf04d-4654-48c3-a4dd-a8fc38f20659.png" width="600"> |

<br/><br/>

## 링크

<h3>http://to-travel-is-to-live.kro.kr</h3>
<br/>

## 트러블슈팅

<details>
<summary><b>SEO 최적화를 위한 컴포넌트 구조 재설계</b></summary>
[문제] <br/>
클라이언트 컴포넌트 경계로 인해 서버 컴포넌트 제한, SEO에 필요한 메타데이터 삽입 및 SSR 사용 방해<br/>
[과정] <br/>
1.SEO 최적화를 위해 페이지 컴포넌트 구조 재설계 결정 <br/>
2. 기존 클라이언트 컴포넌트였던 페이지 컴포넌트를 비즈니스 로직 분리하여 서버 컴포넌트로 전환, 메타데이터 삽입할 수 있는 구조 및 SSR 방식으로 리팩토링<br/>
[결과] <br/>
페이지 별 필요한 메타데이터 포함하여 SEO 최적화 진행, 컴포넌트 구조화 단계 중요성 학습<br/>
</details>

<details>
<summary><b>공공문화데이터 API CORS 에러config rewrites 옵션으로 API 리다이렉션 해결</b></summary>
[문제] <br/>
공공문화데이터 API 활용 중 CORS 에러 발생<br/>
[과정] <br/>
1. CORS 에러 해결하기 위해 Proxy 비교 및 그 외 방식 탐색 중 Next.js 환경설정 옵션 rewrites 학습<br/>
2. 옵션으로 클라이언트 측에서 새로 매핑된 주소를 서버에 전송, 서버는 실제 주소에 요청 전달하여 해결<br/>
[결과] <br/>
API 요청 주소 리다이렉션 방식으로 CORS 에러 해결, 다양한 접근 방식 활용의 중요성 습득<br/>
</details>

<details>
<summary><b>AWS 탄력적 IP 사용, 도메인 연결 및 EC2 배포, GitHub Actions로 CI/CD 구축</b></summary>
[문제] <br/>
3개월 무료 도메인 연결 후 만료, 오류 등의 이유로 인스턴스 중지 시 IP 변동으로 인한 설정 과정 증가<br/>
[과정] <br/>
AWS 탄력적 IP 사용으로 고정 IP 설정, 도메인 연결하여 배포<br/>
[결과] <br/>
도메인 만료 후에도 동일한 IP 설정으로 추가 변경 과정 제거<br/>
</details>

<br/>

## 현재 이슈, 코드 및 기능 개선사항

[이슈] 문화공공데이터 API 연결 오류 ▶ Open API URL 변경됨을 확인, 반영 (2024.05) <br/>
[이슈] 무료 도메인 3개월 만료 ▶ EIP 연결하여 도메인 재발급, 설정 (2024.03) <br/>
[이슈] 지역축제 추천 API가 특정 시간대 (00:00~09:00)에는 제공되지 않음 (2023.11) ▶ 사용자에게 접근 불가 시간 안내 UI, UX 개선<br/>
[UX 개선사항] 제공되지 않는 시간대에 사용자가 접속 시 추천장소 제공 되지 않음을 화면에 보여주기로 개선 (2024.01) <br/>
[코드 개선사항] Nginx 보안작업 설정 완료하였으나, 지역축제 추천 API가 https 제공하지 않음 ▶ 서비스 사용 가능하도록 http로 되돌린 후 리다이렉트 설정 중 (2023.11.19) <br/>
[기능 개선사항] 로그인 서비스(일정 및 메모 저장 가능하도록) 추가 예정, 날씨 서비스 추가 예정 / 종료일 오류 수정 (2023.12)
<br/><br/>
