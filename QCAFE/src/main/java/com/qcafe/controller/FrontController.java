package com.qcafe.controller;

import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class FrontController {

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of(
                "service", "QCAFE",
                "status", "UP"
        );
    }
}
