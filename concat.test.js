const concat = require("./concat");

test("concat test + concat to equal testconcat", () => {
  expect(concat('test', 'concat')).toBe('testconcat');
});
