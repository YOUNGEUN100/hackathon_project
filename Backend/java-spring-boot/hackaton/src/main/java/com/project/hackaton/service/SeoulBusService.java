package com.project.hackaton.service;

import com.project.hackaton.dto.SeoulBusRequest;
import com.project.hackaton.dto.SeoulBusResponse;
import com.project.hackaton.utils.WebClientUtil;
import lombok.RequiredArgsConstructor;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SeoulBusService {

    private final WebClientUtil webClient;
    String serviceKey = "s";

    // 버스 정류장 정보 (좌표)
    public SeoulBusResponse getSeoulBusStationInfoByLatlng(SeoulBusRequest request) {
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

        return SeoulBusResponse.builder()
                .arsId(result.getString("arsId"))
                .stationNm(result.getString("stationNm"))
                .dist(result.getString("dist"))
                .build();

    }

    // 버스 정류장 정보 (이름)
    public List<SeoulBusResponse> getSeoulBusStationInfoByName(SeoulBusRequest request) {
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

        List<SeoulBusResponse> stationList = new ArrayList<>();

        for(int i=0; i< result.length(); i++) {
            JSONObject stationObject = result.getJSONObject(i);

            stationList.add(SeoulBusResponse.builder()
                    .arsId(stationObject.getString("arsId"))
                    .stationNm(stationObject.getString("stNm"))
                    .tmX(stationObject.getString("tmX"))
                    .tmY(stationObject.getString("tmY"))
                    .build());
        }

        return stationList;

    }

    // 버스 도착 정보 (최초)
    public ResponseEntity getSeoulBusArrivalInfoF(SeoulBusRequest request) {

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
        System.out.println("conclusion-------------");

        if(!returnObject.isEmpty()) {
            System.out.println(result);
            System.out.println("-----------------------");

            return new ResponseEntity<>(SeoulBusResponse.builder()
                    .adirection(returnObject.getString("adirection"))
                    .arsId(returnObject.getString("arsId"))
                    .arrmsg1(returnObject.getString("arrmsg1"))
                    .busRouteId(returnObject.getString("busRouteId"))
                    .rtNm(returnObject.getString("rtNm"))
                    .staOrd(returnObject.getString("staOrd"))
                    .stationNm(returnObject.getString("stNm"))
                    .build(), HttpStatus.OK);

        } else {
            System.out.println("Not matched");
            System.out.println("-----------------------");

            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        }
    }

    public ResponseEntity getSeoulBusArrivalInfoL(SeoulBusRequest request) {

        String stId = request.getStId(); // 정류소 ID
        String busRouteId = request.getBusRouteId(); // 노선 ID
        String ord = request.getOrd(); // 노선 정류소 순번

        String uri = "http://ws.bus.go.kr/api/rest/arrive/getArrInfoByRoute?ServiceKey="
                + serviceKey + "&stId=" + stId + "&busRouteId=" + busRouteId + "&ord=" + ord
                + "&resultType=json";

        String response = webClient.get(uri, String.class);

        JSONObject jsonObject = new JSONObject(response);

        System.out.println(jsonObject);

        JSONObject result = jsonObject.getJSONObject("msgBody")
                .getJSONArray("itemList")
                .getJSONObject(0);

        System.out.println("getArrInfoByRoute------");
        System.out.println(result);
        System.out.println("-----------------------");

        return new ResponseEntity<>(SeoulBusResponse.builder()
                .arsId(result.getString("arsId"))
                .arrmsg1(result.getString("arrmsg1"))
                .busRouteId(result.getString("busRouteId"))
                .rtNm(result.getString("rtNm"))
                .staOrd(result.getString("staOrd"))
                .stationNm(result.getString("stNm"))
                .build(), HttpStatus.OK);
    }
}
