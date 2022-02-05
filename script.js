class Student {
  constructor() {
    this.arrayStudent = [];
  }

  submit() {
    let student = this.getValues();

    this.add(student);
    this.tableDisplay();
  }

  tableDisplay() {
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";

    for (let i = 0; i < this.arrayStudent.length; i++) {
      let tr = tbody.insertRow();

      let td_name = tr.insertCell();
      let td_tel = tr.insertCell();
      let td_date = tr.insertCell();
      let td_grade = tr.insertCell();

      td_name.innerText = this.arrayStudent[i].studentName;
      td_tel.innerText = this.arrayStudent[i].studentTel;
      td_date.innerText = this.arrayStudent[i].studentDate;
      td_grade.innerText = this.arrayStudent[i].studentGrade;
    }
  }

  add(student) {
    this.arrayStudent.push(student);
  }

  getValues() {
    let student = {};

    student.studentName = document.getElementById("name").value;
    student.studentTel = document.getElementById("tel").value;
    student.studentDate = document.getElementById("date").value;
    student.studentGrade = document.getElementById("grade").value;

    return student;
  }
}

var student = new Student();
