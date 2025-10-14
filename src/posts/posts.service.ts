import { Injectable } from "@nestjs/common";
import { PostDto } from "./dto";

@Injectable()
export class PostService {
    create(dto: PostDto) { }

    read(dto: PostDto) { }

    update(dto: PostDto) { }

    delete(dto: PostDto) { }
}