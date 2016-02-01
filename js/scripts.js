function Dog(dname,age,dsize) {
  this.dname = dname;
  this.age = age;
  this.dsize = dsize;
};

function Playdate(time,place) {
  this.time = time;
  this.place = place;
  this.dogs = [];
}
function Jerry(jname,jage,jsize) {
  this.jname = "Gimli";
  this.jage = "15";
  this.jsize = "Obese";
};
function Wesley(wname,wage,wsize) {
  this.wname = "Snoop Dog";
  this.wage = "5";
  this.wsize = "Fabulous";
};
function Berney(bname,bage,bsize) {
  this.bname = "Sandy";
  this.bage = "2";
  this.bsize = "Mediumish";
};
function zues (zname,zage,zsize) {
  this.zname = "Apollo";
  this.zage = "6";
  this.zsize = "small";
};

Dog.prototype.dogInfo = function(){
  return this.dname + " " + this.age + " " + this.dsize;

  }
$(document).ready(function() {
  $("form#question").submit(function(event) {
    event.preventDefault();
    var nameentry = $("input#name").val();
    var ddate = new Dog(nameentry,dage,dsize);
    var dage = parseint()"input#age").val();
    var dsize = $("?????????").val();
    $("#customern").append(nameentry);
    $("#size").show();
    ddate.doginfo();

     });
     });
