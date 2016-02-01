describe("People", function(){
  it("Determines existing customer value", function(){
  var testObject = new Customer ("Jerry","Trifling","Kale");
  expect(testObject.name).to.equal("Jerry");
  expect(testObject.psize).to.equal("Trifling");
  expect(testObject.topping).to.equal("Kale");
});
});
