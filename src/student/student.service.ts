import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { students } from 'src/db';
import {
    CreateStudentDTO,
    FindStudentsResponseDTO,
    StudentsResponseDTO,
    UpdateStudentDTO,
} from './DTO/student.dto';
@Injectable()
export class StudentService {
    private students = students;

    getStudents(): FindStudentsResponseDTO[] {
        return this.students;
    }

    getStudentById(studentId: string): FindStudentsResponseDTO {
        return this.students.find((student) => {
            return student.id === studentId;
        });
    }

    createStudent(payload: CreateStudentDTO): StudentsResponseDTO {
        const newStudent = {
            id: uuid(),
            ...payload,
        };
        this.students.push(newStudent);
        return newStudent;
    }

    updateStudent(
        payload: UpdateStudentDTO,
        studentId: string,
    ): StudentsResponseDTO {
        let updatedStudent: StudentsResponseDTO;

        const updatedStudentList = this.students.map((student) => {
            if (student.id === studentId) {
                updatedStudent = {
                    id: studentId,
                    ...payload,
                };
                return updatedStudent;
            } else return student;
        });

        this.students = updatedStudentList;

        return updatedStudent;
    }

    getStudentsByTeacherId(teacherId: string): FindStudentsResponseDTO[] {
        return this.students.filter((student) => {
            return student.teacher === teacherId;
        });
    }

    updateStudentTeacherId(
        teacherId: string,
        studentId: string,
    ): StudentsResponseDTO {
        let updatedStudent: StudentsResponseDTO;

        const updatedStudentList = this.students.map((student) => {
            if (student.id === studentId) {
                updatedStudent = {
                    ...student,
                    teacher: teacherId,
                };
                return updatedStudent;
            } else return student;
        });

        this.students = updatedStudentList;

        return updatedStudent;
    }
}
