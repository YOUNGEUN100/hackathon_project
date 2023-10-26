package com.project.hackaton.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
public class SeoulBusRequest {
    private String stSrch;
    private String busRouteId; // 노선id
    private String busRouteNm;// 버스노선번호
    private String stId; // 정류소 고유  id
    private String arsId; // 정류소 번호
    private String ord; // 정류소 순번
    private String tmX; // 경도
    private String tmY; // 위도
}
