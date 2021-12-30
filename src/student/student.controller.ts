import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    ParseUUIDPipe,
} from '@nestjs/common';
import {
    CreateStudentDTO,
    FindStudentsResponseDTO,
    StudentsResponseDTO,
    UpdateStudentDTO,
} from './DTO/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    getStrudents(): FindStudentsResponseDTO[] {
        return this.studentService.getStudents();
    }

    @Get('/:studentId')
    getStudentById(
        @Param('studentId', new ParseUUIDPipe()) studentId: string,
    ): FindStudentsResponseDTO {
        return this.studentService.getStudentById(studentId);
    }

    @Post()
    createStudent(@Body() body: CreateStudentDTO): StudentsResponseDTO {
        return this.studentService.createStudent(body);
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId', new ParseUUIDPipe()) studentId: string,
        @Body() body: UpdateStudentDTO,
    ): StudentsResponseDTO {
        return this.studentService.updateStudent(body, studentId);
    }
}
