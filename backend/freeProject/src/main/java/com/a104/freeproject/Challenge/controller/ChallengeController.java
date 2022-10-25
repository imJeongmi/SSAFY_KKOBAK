package com.a104.freeproject.Challenge.controller;

import com.a104.freeproject.Challenge.request.registerRequest;
import com.a104.freeproject.Challenge.service.ChallengeServiceImpl;
import com.a104.freeproject.HashTag.entity.ChlTag;
import com.a104.freeproject.advice.exceptions.NotFoundException;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/challenge")
@RequiredArgsConstructor
@ApiOperation(value="[챌린지] Challenge Controller")
public class ChallengeController {

    private final ChallengeServiceImpl challengeService;

    @PostMapping("/register")
    @ApiOperation(value = "[수정필요] 챌린지 등록", notes = "return 값 변경 원하시면 MM 주세용\n"
            +"순서 >> 회원가입 >> 토큰 입력(유효기간 7일) >> 카테고리 생성 + 세부카테고리 생성(있으면 pass) >> 이미지url 생성 >> 챌린지 생성 일..걸요...?"
            +"startTime, endTime 걍 스웨거 무시하시고 \"startTime\": \"2022-10-22T22:37\" 형식으로 입력해주시면 됩니당\n"
            +"알람시간은 24시간 표시 형식으로 >> 14:25 이렇게 보내주세용"
            +"현재 해시태그, 카테고리, 스케쥴러와는 연결 완료. prtchl 연결 안료. log 연결 필요")
    public ResponseEntity<Boolean> register(@RequestBody registerRequest input, HttpServletRequest req) throws NotFoundException{
        return ResponseEntity.ok().body(challengeService.register(input, req));
    }


}
