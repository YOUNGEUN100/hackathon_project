package com.project.hackaton.controller;

import com.project.hackaton.dto.SeoulBusRequest;
import com.project.hackaton.service.SeoulBusService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/seoul")
public class SeoulBusApiController {

    private final SeoulBusService seoulBusService;

    @PostMapping("/station/latlng") // 현재 좌표 기준 주변 정류소 검색
    public ResponseEntity getBusStationByCoordinate(@RequestBody SeoulBusRequest request) {
        return new ResponseEntity<>(seoulBusService.getSeoulBusStationInfoByLatlng(request), HttpStatus.OK);
    }

    @PostMapping("/station/name") // 정류소 이름 검색
    public ResponseEntity getBusStationByName(@RequestBody SeoulBusRequest request) {
        return new ResponseEntity<>(seoulBusService.getSeoulBusStationInfoByName(request), HttpStatus.OK);
    }

    @PostMapping("/arrival") // 노선명과 정류소 고유번호로 도착 정보 검색
    public ResponseEntity getBusArrivalInfo(@RequestBody SeoulBusRequest request) {
        return seoulBusService.getSeoulBusArrivalInfoF(request);
    }
}
