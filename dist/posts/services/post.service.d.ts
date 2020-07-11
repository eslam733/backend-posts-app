import { PostEntity } from 'src/posts/entity/post.entity';
import { Repository } from 'typeorm';
import { Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { Observable } from "rxjs";
import { PostModels } from "../models/post.model";
import { DeleteResult } from "../models/delete.model";
export declare class PostService {
    private postsRepository;
    constructor(postsRepository: Repository<PostEntity>);
    get(): Promise<PostEntity[]>;
    getSize(): Promise<number>;
    add(newPost: PostModels): Promise<PostModels>;
    delete(postId: number): Promise<DeleteResult>;
    paginate(options: IPaginationOptions): Observable<Pagination<PostEntity>>;
}
