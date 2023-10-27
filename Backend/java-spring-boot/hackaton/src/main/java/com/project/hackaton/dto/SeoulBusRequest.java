package com.project.hackaton.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SeoulBusRequest {
    private String arsId;
    private String busRouteId;
    private String ord;
    private String tmX;
    private String tmY;
    private String rtNm;
    private String stId;
    private String strSrch;
    private String stSrch;
}
