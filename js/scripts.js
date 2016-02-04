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
if (this.dage <= 2 && this.dage > 0 ) {
  this.score += 1;
} else if (this.dage <= 5 && this.dage >2 ) {
  this.score += 2;
} else if (this.dage <= 6 && this.dage >5 ) {
    this.score += 3;
}else if (this.dage <= 9 && this.dage > 6) {
    this.score += 4;
}else if (this.dage <= 15 && this.dage > 9) {
    this.score += 5;
  }else if (this.dage > 15) {
      this.score += 9000;
    }
};
// Dog.prototype.timeselect = function(){
// if (this.dtime === database.dogs[0].dtime) {
//   this.score += 5;
// } else if (this.dtime === database.dogs[1].dtime ) {
//   this.score += 3;
// } else if (this.dtime === database.dogs[2].dtime) {
//     this.score += 5;
// }else if (this.dtime === database.dogs[3].dtime) {
//     this.score += 5;
// }else if (this.dtime === database.dogs[4].dtime) {
//     this.score += 3;
//   }
//   };

Dog.prototype.nameselect = function(){
  if (this.score > 0 && this.score <= 2 ) {
    this.appendvar.push(database.dogs[0]);
  } else if (this.score > 2 && this.score <= 4) {
      this.appendvar.push(database.dogs[1]);
  } else if (this.score >4 && this.score <= 6) {
      this.appendvar.push(database.dogs[2]);
  } else if (this.score > 6 && this.score <= 8) {
      this.appendvar.push(database.dogs[3]);
  } else if (this.score > 8 && this.score <= 10) {
      this.appendvar.push(database.dogs[4]);
  }else if (this.score > 10 && this.score <= 10000) {
      this.appendvar.push(database.dogs[5]);
    }
};
  // Fake JSON Database //
var database = {
  "dogs": [
      {
          "dname": "Gimli",
          "dage": "15",
          "dsize": "X-large",
          "dtime": "Morning",
          "imgtag": "#gimliimg"
      },
      {
          "dname": "Snoop Dog",
          "dage": "5",
          "dsize": "Small",
          "dtime": "Afternoon",
          "imgtag": "#snoopimg"
      },
      {
          "dname": "Sandy",
          "dage": "2",
          "dsize": "X-small",
          "dtime": "Evening",
          "imgtag": "#sandyimg"
      },
      {
          "dname": "Apollo",
          "dage": "6",
          "dsize": "Large",
          "dtime": "Morning",
          "imgtag": "#apolloimg"
      },
      {
          "dname": "Samuel",
          "dage": "9",
          "dsize": "Medium",
          "dtime": "Afternoon",
          "imgtag": "#samuelimg"
      },
      {
          "dname": "Charlie, Destroyer of Worlds", //7//
          "dage": "968",
          "dsize": "x-small",
          "imgtag": "#charlieimg"
      }
  ]
};
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
    $("#newForm").show();
    $("#dogForm").show();
    $("#submitButton").hide();
  });
  });
  $("form#newForm").submit(function(event) {
    event.preventDefault();
    $("#dogForm").hide();
    $("#submitButton").show();

});
