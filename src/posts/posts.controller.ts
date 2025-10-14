import { Body, Controller, Get, Post } from "@nestjs/common";
import { PostService } from "./posts.service";
import { PostDto } from "./dto";

@Controller('posts')
export class PostController {
    constructor(private postService: PostService) { }

    @Post('create')
    create(@Body() dto: PostDto) {
        return this.postService.create(dto)
    }

    @Post('read')
    read(@Body() dto: PostDto) {
        return this.postService.read(dto)
    }

    @Post('update')
    update(@Body() dto: PostDto) {
        return this.postService.update(dto)
    }

    @Post('delete')
    delete(@Body() dto: PostDto) {
        return this.postService.delete(dto)
    }
}