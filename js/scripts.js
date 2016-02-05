
function Dog(dname,dage,dsize,dtime,imgtag,score) {
  this.dname = dname;
  this.dage = dage;
  this.dsize = dsize;
  this.dtime =dtime;
  this.imgtag = imgtag;
  this.appendvar = [];
  this.score = 0;
};

Dog.prototype.sizeselect = function(){
if (this.dsize === database.dogs[0].dsize) {
  this.score += 1;
} else if (this.dsize === database.dogs[1].dsize ) {
  this.score += 2;
} else if (this.dsize === database.dogs[2].dsize) {
    this.score += 3;
}else if (this.dsize === database.dogs[3].dsize) {
    this.score += 4;
}else if (this.dsize === database.dogs[4].dsize) {
    this.score += 5;
  }
};
Dog.prototype.ageselect = function(){
if (this.dage <= 15 && this.dage > 9 ) {
  this.score += 1;
} else if (this.dage <= 9 && this.dage > 6) {
  this.score += 2;
} else if (this.dage <= 6 && this.dage > 5) {
    this.score += 3;
}else if (this.dage <= 5 && this.dage > 2) {
    this.score += 4;
}else if (this.dage <= 2 && this.dage > 0) {
    this.score += 5;
  }
};
Dog.prototype.timeselect = function(){
if (this.dtime === database.dogs[0].dtime) {
  this.score += 5;
} else if (this.dtime === database.dogs[1].dtime ) {
  this.score += 3;
} else if (this.dtime === database.dogs[2].dtime) {
    this.score += 5;
}else if (this.dtime === database.dogs[3].dtime) {
    this.score += 5;
}else if (this.dtime === database.dogs[4].dtime) {
    this.score += 3;
  }
  };

Dog.prototype.nameselect = function(){
  if (this.score > 0 && this.score <= 4 ) {
    this.appendvar.push(database.dogs[0]);
  } else if (this.score > 4 && this.score <= 8) {
      this.appendvar.push(database.dogs[1]);
  } else if (this.score > 8 && this.score <= 12) {
      this.appendvar.push(database.dogs[2]);
  } else if (this.score > 12 && this.score <= 16) {
      this.appendvar.push(database.dogs[3]);
  } else if (this.score > 16 && this.score <= 20) {
      this.appendvar.push(database.dogs[4]);
  }
};
  // Fake JSON Database //
var database = {
  "dogs": [
      {
          "dname": "Gimli",
          "dage": "15",
          "dsize": "x-large",
          "dtime": "morning",
          "imgtag": "#gimliimg"
      },
      {
          "dname": "Snoop Dog",
          "dage": "5",
          "dsize": "small",
          "dtime": "afternoon",
          "imgtag": "#snoopimg"
      },
      {
          "dname": "Sandy",
          "dage": "2",
          "dsize": "x-small",
          "dtime": "evening",
          "imgtag": "#sandyimg"
      },
      {
          "dname": "Apollo",
          "dage": "6",
          "dsize": "large",
          "dtime": "morning",
          "imgtag": "#apolloimg"
      },
      {
          "dname": "Samuel",
          "dage": "9",
          "dsize": "medium",
          "dtime": "afternoon",
          "imgtag": "#samuelimg"
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
    var newdtime = $("select#time").val();
    var dcalendar = $("input#inputCalendar").val();
    var newDog = new Dog(newdname,newdage,newdsize,newdtime,0);
    newDog.sizeselect();
    newDog.ageselect();
    // newDog.timeselect();
    newDog.nameselect();

    var selector = newDog.appendvar[0].imgtag.toString();

    $(selector).show();

    $("#findDate").show();
    $("#dname").html(newDog.dname);
    $("#dage").html(newDog.dage);
    $("#dsize").html(newDog.dsize);
    $("#dtime").html(newdtime);
    $("#dcalendar").html(dcalendar);
    $("#match-dname").html(newDog.appendvar[0].dname);
    $("#match-dage").html(newDog.appendvar[0].dage);
    $("#match-dsize").html(newDog.appendvar[0].dsize);
  });
});
