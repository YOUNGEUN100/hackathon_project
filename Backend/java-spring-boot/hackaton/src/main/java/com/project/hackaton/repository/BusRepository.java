package com.project.hackaton.repository;

import com.project.hackaton.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BusRepository extends JpaRepository<Bus, Long> {
    // %버스 번호% 로 버스 고유 아이디 찾기
    Optional<Bus> findByBusRouteNmContaining(String busRouteNm);
    
    // 버스 번호가 존재하는지 확인
    boolean existsByBusRouteNm(String busRouteNm);
}
