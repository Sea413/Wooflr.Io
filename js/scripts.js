
function Dog() {
  this.appendvar = [];
  this.img = []
};
function rover(dname,dage,dsize){
  this.dname =dname;
  this.dage =dage;
  this.dsize =dsize;
  this.grog =[];
}
Dog.prototype.nameselect = function(random){
  var random = Math.floor((Math.random()*5) + 1);
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
   else if (random === 5) {
        for (var i = 1; i <= 1; i++) {
        this.appendvar.push("Apollo"," 6"," Small")
        this.img.push("#apolloimg")
   }
  };
  rover.prototype.fullinfo= function(){
    return this.dname + " " + this.dage + " " + this.dsize;
}
  }
  $(function () {
      $(":file").change(function () {
          if (this.files && this.files[0]) {
              var reader = new FileReader();
              reader.onload = imageIsLoaded;
              reader.readAsDataURL(this.files[0]);
          }
      });
  });
  function imageIsLoaded(e) {
      $('#myImg').attr('src', e.target.result);
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
    var newRover = new rover(nameentry,dage,dsize);

    var selector = sequence.img.toString();
    $(selector).show();
    $("#confirmForm").show();
    $("#dname").append(nameentry);
    $("#dage").append(dage);
    $("#dsize").append(dsize);
    $("#dtime").append(dtime);
    $("#dcalendar").append(dcalendar);
    $("#test").append(sequence.appendvar);
     });
     });
