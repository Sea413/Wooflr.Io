function Dog(dname,age,dsize) {
  this.dname = dname;
  this.age = age;
  this.dsize = dsize;
};

function Playdate(time,place,rng) {
  this.time = time;
  this.place = place;
  this.rng = 0;
  this.dogs = [];
}
function Jerry(jname,jage,jsize,rng) {
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
function Zues (zname,zage,zsize) {
  this.zname = "Apollo";
  this.zage = "6";
  this.zsize = "small";
};

Playdate.prototype.companion = function(){
  var random = Math.floor((Math.random()*4) + 1);
  this.rng += random;
  if (rng === 1) {
    var newJerry = new Jerry;
    return newJerry;
  } else if (rng === 2) {
    var newWesley = new Wesley;
    return newWesley;
    } else if (rng === 3) {
      var newBerney = new Berney;
      return newBerney;
      } else if (rng === 4) {
        var newZues = new Zues;
        return newZues;
        }
  };

  Dog.prototype.dogInfo = function(){
    return this.dname + " " + this.age + " " + this.dsize;
  };

$(document).ready(function() {
  $("form#dogForm").submit(function(event) {
    event.preventDefault();
    var nameentry = $("input#name").val();
    var dsize = $("select#size").val();
    var ddate = new Dog(nameentry,dage,dsize);
    var dage = $("select#age").val();
    var dtime = $("select#time").val();

    $("#customern").append(nameentry);
    $("#size").show();
    ddate.doginfo();

    // $("#dinfo").append(nameentry);
    // $("#dsize").append(dage);
    // $("#dsize").append(dsize);
    // $("#confirmForm").show();
      $("form#confirmForm").submit(function(event) {
        event.preventDefault();


    ddate.dogInfo();

     });
     });
      });
