package com.project.hackaton.controller;

import com.project.hackaton.dto.SeoulBusRequest;
import com.project.hackaton.service.SeoulBusService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/seoul")
public class SeoulBusApiController {

    private final SeoulBusService seoulBusService;

    @PostMapping("/station/latlng") // 현재 좌표 기준 주변 정류소 검색
    public String getBusStationByCoordinate(@RequestBody SeoulBusRequest request) {
        return seoulBusService.getSeoulBusStationInfoByLatlng(request);
    }

    @PostMapping("/station/name") // 정류소 이름 검색
    public String getBusStationByName(@RequestBody SeoulBusRequest request) {
        return seoulBusService.getSeoulBusStationInfoByName(request);
    }

    @PostMapping("/arrival") // 노선, 정류소 ID와 정류소 순번으로 도착 정보 검색
    public String getBusArrivalInfo(@RequestBody SeoulBusRequest request) {
        return seoulBusService.getSeoulBusArrivalInfo(request);
    }
}
