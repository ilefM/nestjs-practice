import { Injectable } from '@nestjs/common';
import { teachers } from 'src/db';
import { FindTeachersResponseDTO } from './DTO/teacher.dto';

@Injectable()
export class TeacherService {
    private teachers = teachers;

    getTeachers(): FindTeachersResponseDTO[] {
        return this.teachers;
    }

    getTeacherById(teacherId: string): FindTeachersResponseDTO {
        return this.teachers.find((teacher) => {
            return teacher.id === teacherId;
        });
    }
}
