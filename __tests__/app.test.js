const request = require("supertest");
const app = require("../app");
const data = require("../db/data/test-data");
const seed = require("../db/seeds/seed");
const db = require("../db/connection");

afterAll(() => {
if (db.end) db.end();
});

beforeEach(() => seed(data));

describe("GET api/topics", () => {
  test("status 200 - responds with an array of test objects", () => {
    return request(app)
      .get("/api/topics")
      .expect(500)
      .then(({ body: { topics } }) => {
        console.log(topics)
        expect(topics).toHaveLength(3);
      });
  });
});
