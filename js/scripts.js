
function Dog() {
  this.dname = dname;
  this.dage = dage;
  this.dsize = dsize;
  this.appendvar = [];
  this.img = []
};

Dog.prototype.nameselect = function(random){
  var random = Math.floor((Math.random()*4) + 1);
  if (random === 1) {
    for (var i = 1; i <= 1; i++) {
    this.appendvar.push("Gimli"," 15"," Obese")
    this.img.push("#gimliimg")
  }
} else if (random === 2) {
    for (var i = 1; i <= 1; i++) {
    this.appendvar.push("Snoop Dog"," 5"," Fabulous")
    this.img.push("#snoopimg")
  }
} else if (random === 3) {
    for (var i = 1; i <= 1; i++) {
    this.appendvar.push("Sandy", " 2", " Mediumish")
    this.img.push("#sandyimg")
  }
} else if (random === 4) {
     for (var i = 1; i <= 1; i++) {
     this.appendvar.push("Apollo"," 6"," Small")
     this.img.push("#apolloimg")
   }
   }
  };
$(document).ready(function() {
  $("form#dogForm").submit(function(event) {
    event.preventDefault();
    var sequence = new Dog();
    sequence.nameselect();
    var nameentry = $("input#name").val();
    var dsize = $("select#size").val();
    var dage = $("select#age").val();
    var dtime = $("select#time").val();
    var dcalendar = $("input#inputCalendar").val();


    var selector = sequence.img.toString();

    $(selector).show();
    $("#findDate").show();
    $("#dname").append(nameentry);
    $("#dage").append(dage);
    $("#dsize").append(dsize);
    $("#dtime").append(dtime);
    $("#dcalendar").append(dcalendar);
    $("#test").append(sequence.appendvar);
     });
     });
