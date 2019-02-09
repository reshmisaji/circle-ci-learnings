const { add } = require("../main.js");
const assert = require("assert");

describe("a", function() {
  it("should return 3 when given 1 and 2", function() {
    assert.deepEqual(add(1, 2), 3);
  });
});
