import { Injectable } from "@nestjs/common";
import {PostEntity} from 'src/posts/entity/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {paginate, Pagination, IPaginationOptions} from 'nestjs-typeorm-paginate';
import { Observable } from "rxjs";
import { from } from 'rxjs';
import { PostModels } from "../models/post.model";
import { DeleteResult } from "../models/delete.model";

@Injectable()
export class PostService {

    constructor(
        @InjectRepository(PostEntity)
        private postsRepository: Repository<PostEntity>,
      ) {}
    
    async get(): Promise<PostEntity[]> {
        return this.postsRepository.find();
    }

    async getSize():  Promise<number>{
        return this.postsRepository.count();
    }

    async add(newPost: PostModels): Promise<PostModels> {
        return this.postsRepository.save(newPost);
    }

    async delete(postId: number): Promise<DeleteResult> {
        return this.postsRepository.delete(postId);
    }

    

    paginate(options: IPaginationOptions): Observable<Pagination<PostEntity>> {
        return from(paginate<PostEntity>(this.postsRepository, options,{ order: { "id": "DESC" } },));
    }



    
}

