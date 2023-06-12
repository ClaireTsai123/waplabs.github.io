const student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade)
    },
    computeAverageGrade: function () {
        return this.grades.reduce(
            (previousValue, currentValue, index, array) => previousValue + currentValue / array.length, 0);
    }
}

let stu1 = Object.create(student)
stu1.firstName = 'Jim';
stu1.lastName ='Green';
stu1.inputNewGrade(90);
stu1.inputNewGrade(80);
stu1.inputNewGrade(90);
stu1.inputNewGrade(85);
let stu2 = Object.create(student)
stu2.firstName = 'Tom';
stu2.lastName ='Green';
stu2.inputNewGrade(88);
stu2.inputNewGrade(90);
stu2.inputNewGrade(86);
stu2.inputNewGrade(80);

const students = [stu1, stu2]
const res = students.reduce(
    (average, stu,index, array) => average + stu.computeAverageGrade()/array.length,0);
console.log(res);

