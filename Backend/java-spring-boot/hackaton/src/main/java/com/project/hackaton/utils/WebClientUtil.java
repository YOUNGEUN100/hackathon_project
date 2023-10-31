package com.project.hackaton.utils;

import com.project.hackaton.config.WebClientConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class WebClientUtil {

    private final WebClientConfig webClientConfig;

    /* WebClientConfig 에서 구성한 WebClient 로 Rest API 호출에 필요한
    매개 변수를 동적 입력, 출력 하는 클래스*/

    // get 방식 통신
    public <T> T get(String url, Class<T> responseDto) {
        return webClientConfig.webClient().method(HttpMethod.GET)
                .uri(url)
                .retrieve()
                .onStatus(status -> status.is4xxClientError() || status.is5xxServerError()
                        , clientResponse -> clientResponse.bodyToMono(String.class)
                                .map(RuntimeException::new))
                .bodyToMono(responseDto)
                .block();
    }

    // post 방식 통신(미사용)
//    public <T, V> T post(String url, V requestDto, Class<T> responseDtoClass) {
//        return webClientConfig.webClient().method(HttpMethod.POST)
//                .uri(url)
//                .bodyValue(requestDto)
//                .retrieve()
//                .onStatus(status -> status.is4xxClientError() || status.is5xxServerError()
//                        , clientResponse -> clientResponse.bodyToMono(String.class)
//                                .map(RuntimeException::new))
//                .bodyToMono(responseDtoClass)
//                .block();
//    }
}
