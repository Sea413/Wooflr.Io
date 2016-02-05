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
it("Attempt to reverse engineer function inputs", function(){
var testObject = new Dog ();
expect(testObject.nameselect(3)).to.equal("Sandy", "2", "mediumish");
});
it("Determine easter inputs.", function(){
var testObject = new Dog ();
testObject.whysomean("C:\fakepath\thiscodeisbad.jpg")
expect(testObject.easter).to.equal("C:\fakepath\thiscodeisbad.jpg");
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
