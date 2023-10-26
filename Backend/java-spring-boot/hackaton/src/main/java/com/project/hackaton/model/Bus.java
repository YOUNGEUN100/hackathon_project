package com.project.hackaton.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;
import org.hibernate.annotations.Comment;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@NonNull
@Table(name = "BUS")
public class Bus {

    @Comment("버스노선번호")
    @Column(name = "BUS_ROUTE_NM")
    private String busRouteNm;

    @Comment("버스노선아이디")
    @Column(name = "BUS_ROUTE_ID")
    @Id
    private String busRouteId;
}
