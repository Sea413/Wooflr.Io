describe("Dogs", function(){
  it("stores info on users's dog", function(){
  var testObject = new Dog ("Jerry","12","large");
  expect(testObject.dname).to.equal("Jerry");
  expect(testObject.age).to.equal("12");
  expect(testObject.dsize).to.equal("large");
});
it("Attempt to verify if the prototype is working", function(){
var testObject = new Dog ("Jerry","12","large");
expect(testObject.dname).to.equal("Jerry");
expect(testObject.age).to.equal("12");
expect(testObject.dsize).to.equal("large");
expect(testObject.dogInfo()).to.equal("Jerry 12 large");
});
});
describe("Playdate", function() {
  it("stores info on playdate time, place, and attending dogs", function(){
  var testObject = new Playdate ("10am","Forest Park");
  expect(testObject.time).to.equal("10am");
  expect(testObject.place).to.equal("Forest Park")
  expect(testObject.dogs).to.eql([]);
});

});
