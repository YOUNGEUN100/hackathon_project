package com.project.hackaton.service;

import com.project.hackaton.dto.SeoulBusRequest;
import com.project.hackaton.utils.WebClientUtil;
import lombok.RequiredArgsConstructor;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SeoulBusService {

    private final WebClientUtil webClient;
    String serviceKey = "ec37XMuUDWO4Zxoj4Fx2ewkY5ST2UaW%2BqRBjOZ1TayuGoA%2Fmf3EijLICa14VRjOgBI1Vsk4EkanznggdJwphFA%3D%3D";

    // 버스 정류장 정보 (좌표)
    public String getSeoulBusStationInfo(SeoulBusRequest request) {
        String tmX = request.getTmX(); // X좌표 (WGS84)
        String tmY = request.getTmY(); // Y좌표 (WGS84)
        String radius = "500"; // 검색 반경 (미터)

        String stdUri = "http://ws.bus.go.kr/api/rest/stationinfo/getStationByPos?ServiceKey=";
        String cmpUri = stdUri + serviceKey + "&tmX=" + tmX + "&tmY=" + tmY + "&radius=" + radius + "&resultType=json";

        String response = webClient.get(cmpUri, String.class);

        JSONObject jsonObject = new JSONObject(response);
        JSONArray result = jsonObject.getJSONObject("msgBody")
                .getJSONArray("itemList");

        System.out.println("-----------------------");
        System.out.println(result);
        System.out.println("-----------------------");

        return result.toString();
    }

    // 버스 정류장 정보 (이름)


    // 버스 도착 정보 (단일)
    public String getSeoulBusArrivalInfo(SeoulBusRequest request) {

        String stId = request.getStId(); // 정류소 ID
        String busRouteId = request.getBusRouteId(); // 노선 ID
        String ord = request.getOrd(); // 정류소 순번

        String stdUri = "http://ws.bus.go.kr/api/rest/arrive/getArrInfoByRoute?ServiceKey=";
        String cmpUri = stdUri + serviceKey + "&stId=" + stId + "&busRouteId="
                + busRouteId + "&ord=" + ord + "&resultType=json";

        String response = webClient.get(cmpUri, String.class);  // API 호출

        JSONObject jsonObject = new JSONObject(response);
        JSONObject result = jsonObject.getJSONObject("msgBody")
                .getJSONArray("itemList")
                .getJSONObject(0);

        System.out.println("-----------------------");
        System.out.println(result);
        System.out.println("-----------------------");

        return result.toString();
    }
}
