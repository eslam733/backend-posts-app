import { Controller, Get, Post, Query, Body, Param } from "@nestjs/common";
import { PostService } from "./services/post.service";
import { UsersService } from "./services/users.service";
import {PostEntity} from 'src/posts/entity/post.entity';
import { Observable, from } from "rxjs";
import { Pagination } from "nestjs-typeorm-paginate";
import { PostModels } from "./models/post.model";
import { DeleteResult } from "./models/delete.model";
import { UserModel } from "./models/user.model";

@Controller('posts')
export class PostController {

    constructor(private postservice: PostService, private usersService: UsersService){}

    @Get()
    index(@Query('page') page = 1, @Query('limit') limit = 10,) : Observable<Pagination<PostEntity>>{
        return this.postservice.paginate({page, limit,route:'http://localhost:3000/posts'});
    }

    @Get('/size')
    getSize() : any{
        return this.postservice.getSize();
    }

    @Post()
    add(@Body() newPost: PostModels) : Observable<PostModels>{
        return from(this.postservice.add(newPost));
    }

    @Post('/auth/new')
    addNewUser(@Body() user: UserModel) : Observable<UserModel>{
        return from(this.usersService.addNewUser(user));
    }

    @Post('/auth/check')
    ifExist(@Body() user: UserModel) : Observable<UserModel>{
        return from(this.usersService.ifExist(user));
    }

    

    @Get(':id')
    delete(@Param() postId: number) : Observable<DeleteResult>{
        return from(this.postservice.delete(postId));
    }

}