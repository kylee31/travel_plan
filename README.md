# 🛫 Travel_Plan

지역 축제를 추천받고 지도를 보며 여행 계획을 세울 수 있는 웹 사이트 (2023.11~)
<br/><br/>

## 구현 및 배포기술

- Typescript 적용한 Next.js 프로젝트 (AWS EC2 배포).
- Zustand 라이브러리로 전역 상태 관리.
- kakao 지도 API 및 지역축제(공공데이터) 추천 API 사용.
  <br/><br/>

## 디렉토리 구조

[app/page.tsx, app/main/page.tsx] <br/>
[common, components, lib, section, states, styles, types]
<br/><br/>

## 실행 (상세 설명)

- **Loading Page** <br/>
  - 접속 전 화면, 2초 후 메인 페이지 이동 <br/>
    <image src="https://github.com/kylee31/travel_plan/assets/106156087/b1f9f862-0886-46ab-9000-4576098ec558.png" width="600"/>
- **Main Page** <br/>
  - 지역 검색을 통해 추천장소 확인 가능, 캘린더에 일정 추가 기능, 기타 메모 작성<br/>
    <image src="https://github.com/kylee31/travel_plan/assets/106156087/1cae1185-e517-4e48-8ee2-45d8add6ee31.png" width="600">
    <br/>▼ 추천장소 section on/off로 지도 확대 가능<br>
    <image src="https://github.com/kylee31/travel_plan/assets/106156087/c5cbf04d-4654-48c3-a4dd-a8fc38f20659.png" width="600">
    <br/><br/>

## 사용 API

[문화공공데이터광장-문화체육관광부\_추천여행지](https://www.culture.go.kr/data/openapi/openapiView.do?id=581&category=D&gubun=A)<br/>
[Kakao 지도 Web API](https://apis.map.kakao.com/web/)
<br/><br/>

## 링크

<h3>http://to-travel-is-to-live.kro.kr</h3>
<br/>

## 현재 이슈, 코드 및 기능 개선사항

[이슈] 지역축제 추천 API가 특정 시간대 (00:00~오전)에는 제공되지 않음 (2023.11) <br/>
[이슈] 무료 도메인 3개월 만료, EIP 연결하여 도메인 재발급, 설정 (2024.03) <br/>
[UX 개선사항] 제공되지 않는 시간대에 사용자가 접속 시 추천장소 제공 되지 않음을 화면에 보여주기로 개선 (2024.01) <br/>
[코드 개선사항] Nginx 보안작업 설정 완료하였으나, 지역축제 추천 API가 https 제공하지 않음 ▶ 서비스 사용 가능하도록 http로 되돌린 후 리다이렉트 설정 중 (2023.11.19) <br/>
[기능 개선사항] 로그인 서비스(일정 및 메모 저장 가능하도록) 추가 예정, 날씨 서비스 추가 예정 / 종료일 오류 수정 (2023.12)
<br/><br/>

## 프로젝트 개발환경

VScode (version 1.84.1), Next.js (version 14.0.1), Typescript (version 5.0.4), Node.js (version 20.9.1)
