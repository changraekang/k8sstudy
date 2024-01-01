// 필수 모듈 로드
const express = require("express");
const fs = require("fs");

// 앱 생성
const app = express();

// 루트 경로에 대한 라우트 설정
app.get("/", (req, res) => {
  // 파일 읽기
  fs.readFile("title.txt", "utf8", (err, data) => {
    if (err) {
      // 파일을 읽는 데 오류가 발생하면 오류 메시지를 응답
      res.status(500).send("Error reading file");
      return;
    }
    // 파일의 내용을 응답
    res.send(data);
  });
});

// 서버 시작
const server = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
