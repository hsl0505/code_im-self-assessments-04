var Schemas = {
  FIX_ME: "wrong answer",
  OPTION_0: "option 0",
  OPTION_1: "option 1",
  OPTION_2: "option 2",
  OPTION_3: "option 3",
  OPTION_4: "option 4",
  OPTION_5: "option 5",
  OPTION_6: "option 6"
};

exports.sqlPublisherAuthorSchema = Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// 다대다 관계이므로 둘을 이어줄 수 있는 새로운 테이블을 만들어서 연결해준다

exports.sqlPublisherGenreSchema = Schemas.OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// 1 (genre) 대 다(publisher) 관계이므로 publisher 테이블에 외래키 (genre의 id)를 넣어서 연결해준다

exports.sqlAuthorGenreSchema = Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// 다대다 관계이므로 둘을 이어줄 수 있는 새로운 테이블을 만들어서 연결해준다
