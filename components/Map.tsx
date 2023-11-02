import styled from "styled-components";

import { useEffect } from "react";
import { useSearchWord } from "@/states/stores";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Map() {
  const { searchWord } = useSearchWord();

  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=caa8fa29ecb821323f9e1dd432bc4b07&libraries=services&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(127.269311, 37.413294), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        var ps = new window.kakao.maps.services.Places();

        ps.keywordSearch(`${searchWord}`, placesSearchCB);

        function placesSearchCB(data: any, status: any, pagination: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            var bounds = new window.kakao.maps.LatLngBounds();
            for (var i = 0; i < data.length; i++) {
              bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
            }
            // 검색된 장소 위치를 기준으로 지도 범위 재설정
            map.setBounds(bounds);
          }
        }
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
  }, [searchWord]);

  return (
    <Container>
      <MapContainer id="map"></MapContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 70%;
  height: calc(70vh - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;