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
    public String getSeoulBusStationInfoByLatlng(SeoulBusRequest request) {
        String tmX = request.getTmX(); // X좌표 (WGS84)
        String tmY = request.getTmY(); // Y좌표 (WGS84)
        String radius = "100"; // 검색 반경 (미터)

        String uri = "http://ws.bus.go.kr/api/rest/stationinfo/getStationByPos?ServiceKey="
        + serviceKey + "&tmX=" + tmX + "&tmY=" + tmY + "&radius=" + radius + "&resultType=json";

        String response = webClient.get(uri, String.class);

        JSONObject jsonObject = new JSONObject(response);

        JSONObject result = jsonObject.getJSONObject("msgBody")
                .getJSONArray("itemList")
                .getJSONObject(0);

        System.out.println("getStationByPos--------");
        System.out.println(result);
        System.out.println("-----------------------");

        return result.toString();

    }

    // 버스 정류장 정보 (이름)
    public String getSeoulBusStationInfoByName(SeoulBusRequest request) {
        String stSrch = request.getStSrch(); // 정류소명

        String uri = "http://ws.bus.go.kr/api/rest/stationinfo/getStationByName?ServiceKey="
        + serviceKey + "&stSrch=" + stSrch + "&resultType=json";

        String response = webClient.get(uri, String.class);

        JSONObject jsonObject = new JSONObject(response);

        JSONArray result = jsonObject.getJSONObject("msgBody")
                .getJSONArray("itemList");

        System.out.println("getStationByName-------");
        System.out.println(result);
        System.out.println("-----------------------");

        return result.toString();

    }

    // 버스 도착 정보
    public String getSeoulBusArrivalInfo(SeoulBusRequest request) {

        String arsId = request.getArsId(); // 정류소 고유번호
        String rtNm = request.getRtNm(); // 노선명

        String uri = "http://ws.bus.go.kr/api/rest/stationinfo/getStationByUid?ServiceKey="
         + serviceKey + "&arsId=" + arsId + "&resultType=json";

        String response1 = webClient.get(uri, String.class);  // API 호출

        JSONObject jsonObject = new JSONObject(response1);
        JSONArray result = jsonObject.getJSONObject("msgBody")
                .getJSONArray("itemList");

        System.out.println("getStationByUid--------");
        System.out.println(result);
        System.out.println("-----------------------");

        JSONObject returnObject = new JSONObject();

        for(int i=0; i< result.length(); i++) {
            JSONObject compareObject = result.getJSONObject(i);

            System.out.println("comparing--------------");
            System.out.println(rtNm + " : " + compareObject.getString("rtNm"));
            System.out.println("-----------------------");

            if(rtNm.equals(compareObject.getString("rtNm"))) {
                returnObject = compareObject;
            }
        }

        if(!returnObject.isEmpty()) {
            System.out.println("conclusion-------------");
            System.out.println(result);
            System.out.println("-----------------------");

            return returnObject.toString();
        } else {
            System.out.println("conclusion-------------");
            System.out.println("Not matched");
            System.out.println("-----------------------");

            return null;
        }
    }
}
