function Dog(dname,dsize,dage,dtime,dcalendar) {
  this.dname = dname;
  this.dsize = dsize;
  this.dage = dage;
  this.dtime = dtime;
  this.dcalendar = dcalendar;
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
    var dage = $("select#age").val();
    var dtime = $("select#time").val();
    var dcalendar = $("input#inputCalendar").val();
    var newDog = new Dog(nameentry,dsize,dage,dtime,dcalendar);

    $("#findDate").show();
    $("#dname").append(newDog.dname);
    $("#dage").append(newDog.dage);
    $("#dsize").append(newDog.dsize);
    $("#dtime").append(newDog.dtime);
    $("#dcalendar").append(newDog.dcalendar);

  });
});
