import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { FindTeachersResponseDTO } from './DTO/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
    constructor(private readonly teacherService: TeacherService) {}

    @Get()
    getTeachers(): FindTeachersResponseDTO[] {
        return this.teacherService.getTeachers();
    }

    @Get('/:teacherId')
    getTeacherById(
        @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
    ): FindTeachersResponseDTO {
        return this.teacherService.getTeacherById(teacherId);
    }
}
