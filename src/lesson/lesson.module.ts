import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from '../student/student.module';
import { LessonResolver } from './graphql/lesson.resolver';
import { Lesson } from './lesson.entity';
import { LessonService } from './lesson.service';

@Module({
  imports: [StudentModule, TypeOrmModule.forFeature([Lesson])],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
