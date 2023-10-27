package com.project.hackaton.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SeoulBusResponse {
    private String adirection;
    private String arsId;
    private String arrmsg1;
    private String busRouteId;
    private String dist;
    private String ord;
    private String tmX;
    private String tmY;
    private String rtNm;
    private String staOrd;
    private String stationId;
    private String stationNm;
    private String stId;
    private String strSrch;
    private String stSrch;
}
