//constructor function
function Student(studentId){
    this.studentId = studentId;
    this.answers =[];

}
Student.prototype.addAnswer= function(question){
  this.answers.push(question);

}

function Question(qid,answer){
    this.qid = qid;
    this.answer = answer;
}
Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;

}

function Quiz(){
    this.questions = new Map()
    this.students =[];
}
Quiz.prototype.scoreStudent= function(sid){
    

}
Quiz.prototype.getAverageScore = function(){

}