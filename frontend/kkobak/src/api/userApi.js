import api from "api/api.js";

function requestJoin(email, hp, nickname, password, success, fail) {
  api
    .post("member/join", {
      email: email,
      hp: hp,
      nickname: nickname,
      password: password,
    })
    .then(success)
    .catch(fail);
}

function requestEmailCheck(email, success, fail) {
  api.post("/member/chk-email", email).then(success).catch(fail);
}

function requestNicknameCheck(nickname, success, fail) {
  api.post("member/chk-name", nickname).then(success).catch(fail);
}

function requestAuthNum(phoneNumber, success, fail) {
  api
    .post("member/register/phone", {
      phoneNumber: phoneNumber,
    })
    .then(success)
    .catch(fail);
}

function requestPasswdCheck(passwd, success, fail) {
  api.post("member/chk-pw", passwd).then(success).catch(fail);
}

function requestLogin(email, password, success, fail) {
  api
    .post("member/login", {
      email: email,
      password: password,
    })
    .then(success)
    .catch(fail);
}

function requestUserInfo(success, fail) {
  api.get("member/my-info").then(success).catch(fail);
}

function fetchMyChallengeList(page, success, fail) {
  api
    .get(`/member/my-chl-list?page=${page - 1}&size=6&sort=id,DESC`)
    .then(success)
    .catch(fail);
}
function fetchMyChallengePageCnt(success, fail) {
  api
    .get(`/member/sum/my-chl-list?size=6&sort=id,DESC`)
    .then(success)
    .catch(fail);
}

function fetchMyChallengeCalendarList(page, success, fail) {
  api
    .get(`/member/my-chl-list?page=${page - 1}&size=1&sort=id,DESC`)
    .then(success)
    .catch(fail);
}

function fetchMyChallengeCalendarPageCnt(success, fail) {
  api
    .get(`/member/sum/my-chl-list?size=1&sort=id,DESC`)
    .then(success)
    .catch(fail);
}

function requestCalendarCheck(chlId, year, month, success, fail) {
  api
    .get(`/member/month-info/${chlId}/${year}/${month}`)
    .then(success)
    .catch(fail);
}

function requestMyChallengeDetail(id, success, fail) {
  api.get(`/challenge/${id}`).then(success).catch(fail);
}

function requestMyChallengeStatistics(success, fail) {
  api.get(`member/chl-info`).then(success).catch(fail);
}

export {
  requestJoin,
  requestEmailCheck,
  requestNicknameCheck,
  requestAuthNum,
  requestPasswdCheck,
  requestLogin,
  requestUserInfo,
  fetchMyChallengeList,
  fetchMyChallengePageCnt,
  fetchMyChallengeCalendarList,
  fetchMyChallengeCalendarPageCnt,
  requestCalendarCheck,
  requestMyChallengeDetail,
  requestMyChallengeStatistics,
};
