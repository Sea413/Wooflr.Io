
function Dog(dname,dage,dsize,imgtag) {
  this.dname = dname;
  this.dage = dage;
  this.dsize = dsize;
  this.imgtag = imgtag;
  this.appendvar = [];
};

Dog.prototype.nameselect = function(){
  if (this.dsize === database.dogs[0].dsize && (parseInt(this.dage)) >= 10) {
    this.appendvar.push(database.dogs[0]);
  } else if (this.dsize === database.dogs[0].dsize && (parseInt(this.dage)) < 10) {
      this.appendvar.push(database.dogs[5]);
  } else if (this.dsize === database.dogs[1].dsize && (parseInt(this.dage)) >= 10) {
      this.appendvar.push(database.dogs[1]);
  } else if (this.dsize === database.dogs[1].dsize && (parseInt(this.dage)) < 10) {
      this.appendvar.push(database.dogs[6]);
  } else if (this.dsize === database.dogs[2].dsize && (parseInt(this.dage)) < 10) {
      this.appendvar.push(database.dogs[2]);
  } else if (this.dsize === database.dogs[2].dsize && (parseInt(this.dage)) >= 10) {
      this.appendvar.push(database.dogs[7]);
  } else if (this.dsize === database.dogs[3].dsize) {
      this.appendvar.push(database.dogs[3]);
  } else if (this.dsize === database.dogs[4].dsize) {
      this.appendvar.push(database.dogs[4]);
  }
};

  // Fake JSON Database //

var database = {
  "dogs": [
      {
          "dname": "Gimli", //0//
          "dage": "15",
          "dsize": "x-large",
          "imgtag": "#gimliimg"
      },
      {
          "dname": "Snoop Dog", //1//
          "dage": "10",
          "dsize": "small",
          "imgtag": "#snoopimg"
      },
      {
          "dname": "Sandy", //2//
          "dage": "2",
          "dsize": "x-small",
          "imgtag": "#sandyimg"
      },
      {
          "dname": "Apollo", //3//
          "dage": "6",
          "dsize": "large",
          "imgtag": "#apolloimg"
      },
      {
          "dname": "Samuel", //4//
          "dage": "9",
          "dsize": "medium",
          "imgtag": "#samuelimg"
      },
      {
          "dname": "Brutus", //5//
          "dage": "5",
          "dsize": "x-large",
          "imgtag": "#brutusimg"
      },
      {
          "dname": "Henry", //6//
          "dage": "3",
          "dsize": "small",
          "imgtag": "#henryimg"
      },
      {
          "dname": "Charlie, Destroyer of Worlds", //7//
          "dage": "968",
          "dsize": "x-small",
          "imgtag": "#charlieimg"
      }
  ]
}
  // End Fake Database //

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
    var newdname = $("input#name").val();
    var newdage = $("select#age").val();
    var newdsize = $("select#size").val();
    var dtime = $("select#time").val();
    var dcalendar = $("input#inputCalendar").val();
    var newDog = new Dog(newdname,newdage,newdsize,0);
    newDog.nameselect();

    var selector = newDog.appendvar[0].imgtag.toString();

    $(selector).show();

    $("#findDate").show();
    $("#dname").html(newDog.dname);
    $("#dage").html(newDog.dage);
    $("#dsize").html(newDog.dsize);
    $("#dtime").html(dtime);
    $("#dcalendar").html(dcalendar);
    $("#match-dname").html(newDog.appendvar[0].dname);
    $("#match-dage").html(newDog.appendvar[0].dage);
    $("#match-dsize").html(newDog.appendvar[0].dsize);
  });
});
