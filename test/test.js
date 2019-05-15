let request = require("supertest");
let app = require("../app/index");

describe("GET /", () => {
  it("respond with hello world", done => {
    request(app)
      .get("/")
      .expect("hello world", done);
  });
});
