function People(username,time,neighborhood,activity,comments) {
  this.username =username;
  this.time = time;
  this.neighborhood = neighborhood;
  this.activity = activity;
  this.comments = comments;
  this.score = 0;
}

function Burton(time1,neighborhood2,activity3) {
  this.time1 = time;
  this.neighborhood2 = neighborhood;
  this.activity3 = activity;
}
People.prototype.time = function(){
  if (this.time === this.time1] ) {
        this.score += 1;
        return this.score;
      }
  else {
    (this.time !== this.time1){
      this.score +=-1
      return this.score;
  }
}
People.prototype.neighborhood = function(){
  if (this.neighborhood === this.neighborhood2] ) {
        this.score += 1;
        return this.score;
      }
  else {
    (this.neighborhood !== this.neighborhood2){
      this.score +=-1
      return this.score;
  }
}
People.prototype.activity = function(){
  if (this.activity === this.activity3] ) {
        this.score += 1;
        return this.score;
      }
  else {
    (this.activity === this.activity3){
      this.score +=-1
      return this.score;
  }
}
