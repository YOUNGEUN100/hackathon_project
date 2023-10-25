package com.project.hackaton.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
public class SeoulBusRequest {
    private String stSrch;
    private String busRouteId;
    private String stId;
    private String ord;
    private String tmX;
    private String tmY;
}
