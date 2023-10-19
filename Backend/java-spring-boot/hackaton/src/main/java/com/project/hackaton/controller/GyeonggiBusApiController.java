package com.project.hackaton.controller;

import com.project.hackaton.service.GyeonggiBusService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/gyeonggi")
public class GyeonggiBusApiController {

    private final GyeonggiBusService gyeonggiBusService;

    @PostMapping("/arrival")
    public String getBusArrivalInfo( ) {
        return "";//gyeonggiBusService;
    }
}
