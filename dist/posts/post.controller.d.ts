import { PostService } from "./services/post.service";
import { UsersService } from "./services/users.service";
import { PostEntity } from 'src/posts/entity/post.entity';
import { Observable } from "rxjs";
import { Pagination } from "nestjs-typeorm-paginate";
import { PostModels } from "./models/post.model";
import { DeleteResult } from "./models/delete.model";
import { UserModel } from "./models/user.model";
export declare class PostController {
    private postservice;
    private usersService;
    constructor(postservice: PostService, usersService: UsersService);
    index(page?: number, limit?: number): Observable<Pagination<PostEntity>>;
    getSize(): any;
    add(newPost: PostModels): Observable<PostModels>;
    addNewUser(user: UserModel): Observable<UserModel>;
    ifExist(user: UserModel): Observable<UserModel>;
    delete(postId: number): Observable<DeleteResult>;
}
