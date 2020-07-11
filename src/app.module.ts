import { Module } from '@nestjs/common';
import {PostModule} from './posts/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {PostEntity} from 'src/posts/entity/post.entity';
import { UserEntity } from './posts/entity/user.entity';

@Module({
  imports: [PostModule, TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "remotemysql.com",
    "port": 3306,
    "username": "c0vOvPovUA", 
    "database": "c0vOvPovUA",
    "password": "oUQW5po7GL", 
    "synchronize": true,
    "logging": true,
    "entities": [PostEntity, UserEntity],
    
   })],
  controllers: [],
  providers: [],
})
export class AppModule {}
