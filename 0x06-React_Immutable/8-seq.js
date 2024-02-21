import { seq } from 'immutable';

export default function printBestStudents(object) {
  const students = seq(object);
  const grades = students
    .map((student) => student.get('grade'))
    .filter((grade) => grade > 70);
  const names = students
    .map((student) => student.get('name'))
    .filter((_, index) => grades.get(index));
  names.forEach((name) => console.log(name));
}
