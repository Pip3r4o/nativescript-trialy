var Trialy = require("nativescript-trialy").Trialy;
var trialy = new Trialy();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("greet function", function() {
  it("exists", function() {
    expect(trialy.greet).toBeDefined();
  });

  it("returns a string", function() {
    expect(trialy.greet()).toEqual("Hello, NS");
  });
});