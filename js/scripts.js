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
};

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
  this.bname = bname;
  this.bage = bage;
  this.bsize = bsize;
};
function Zeus (zname,zage,zsize) {
  this.zname = zname;
  this.zage = zage;
  this.zsize = zsize;
};

Berney.prototype.companion = function(){
  var random = Math.floor((Math.random()*2) + 1);
  var rng = 0;
  this.rng += random;
  if (rng === 1) {
    this.bname ="Sandy";
    this.bage ="12";
    this.bsize = "Mediumish";
    } else if (rng !== 1) {
      return;
    }
  };

  Wesley.prototype.companion = function(){
    var random = Math.floor((Math.random()*2) + 1);
    var rng = 0;
    this.rng += random;
    if (rng === 1) {
      this.wname = "Snoop Dog";
      this.wage = "5";
      this.wsize = "Fabulous";
      } else if (rng !== 1) {
        return;
      }
    };

    Zeus.prototype.companion = function(){
      var random = Math.floor((Math.random()*2) + 1);
      var rng = 0;
      this.rng += 1;
      if (rng === 1) {
        this.zname = "Apollo";
        this.zage = "6";
        this.zsize = "small"
        } else if (rng !== 1) {
          return;
        }
      };

      Jerry.prototype.companion = function(){
        var random = Math.floor((Math.random()*2) + 1);
        var rng = 0;
        this.rng += random;
        if (rng === 1) {
          this.jname = "Gimli";
          this.jage = "15";
          this.jsize = "Obese";
          } else if (rng !== 1) {
            return;
          }
        };

  Dog.prototype.dogInfo = function(){
    return this.dname + " " + this.age + " " + this.dsize;
  };

  Berney.prototype.dogInfo = function(){
    toString(this.bname + " " + this.bage + " " + this.bsize);
  };

  Wesley.prototype.dogInfo = function(){
    toString(this.wname + " " + this.wage + " " + this.wsize);
  };

  Zeus.prototype.dogInfo = function(zname,zage,zsize){
  return this.zname + " " + this.zage + " " + this.zsize;
  };

  Jerry.prototype.dogInfo = function(){
    return this.jname + " " + this.jage + " " + this.jsize;
  };

$(document).ready(function() {
  $("form#dogForm").submit(function(event) {
    event.preventDefault();
    var nameentry = $("input#name").val();
    var dage = $("select#age").val();
    var dsize = $("select#size").val();
    var ddate = new Dog(nameentry,dage,dsize);
    // $("#dinfo").append(nameentry);
    // $("#dsize").append(dage);
    // $("#dsize").append(dsize);
    // $("#confirmForm").show();
      // var newBerney = new Berney();
      // var newWesley = new Wesley();
      // var newZeus = new Zeus();
      // var newJerry = new Jerry();
      // newBerney.companion();
      // newWesley.companion();
      // newZeus.companion();
      // newJerry.companion();
      // $("#test").append(newZeus.dogInfo);
      // $("form#confirmForm").submit(function(event) {
        var newBerney = new Berney();
        var newWesley = new Wesley();
        var newZeus = new Zeus();
        var newJerry = new Jerry();
        newBerney.companion();
        newWesley.companion();
        newZeus.companion();
        newJerry.companion();
        $("#test").append(newZeus.companion());
        event.preventDefault();
      // $("form#confirmForm").submit(function(event) {
      //   event.preventDefault();
      //   var timeDate = new Playdate();
      // $("#test").append(timeDate.companion);

// });
     });
     });
