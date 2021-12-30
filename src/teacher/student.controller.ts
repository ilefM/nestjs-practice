import { Controller, Get, Param, ParseUUIDPipe, Put } from '@nestjs/common';
import {
    FindStudentsResponseDTO,
    StudentsResponseDTO,
} from 'src/student/DTO/student.dto';
import { StudentService } from 'src/student/student.service';
@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    getStudents(
        @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
    ): FindStudentsResponseDTO[] {
        return this.studentService.getStudentsByTeacherId(teacherId);
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
        @Param('studentId', new ParseUUIDPipe()) studentId: string,
    ): StudentsResponseDTO {
        return this.studentService.updateStudentTeacherId(teacherId, studentId);
    }
}

//This is another controller for the teacher route cause
//all methodes here have the same prefix route
