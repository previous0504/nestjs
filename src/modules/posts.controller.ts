import { Controller, Get, Req, Query, Headers, Param, Post, Body, HttpException, HttpStatus, UseFilters, UsePipes, ValidationPipe, ParseIntPipe, UseGuards, SetMetadata } from '@nestjs/common';
import { CreatePostDto } from './post.dto';
import { DemoService } from './providers/demo/demo.service';
import { DemoFilter } from 'src/core/filters/demo.filter';
import { DemoAuthGuard } from 'src/core/guards/demo-auth.guard';
import { Roles } from 'src/core/decorator/roles.decorator';

@Controller('posts')
// @UseGuards(DemoAuthGuard)
export class PostsController {

    constructor(private readonly demoService: DemoService) {


    }
    @Get()
    index() {
        return this.demoService.findAll();
    }

    @Get(':id')
    show(@Param('id', ParseIntPipe) id) {
        console.log('id:', typeof id);

        return {
            title: `Post ${id}`
        }
    }

    @Post()
    // @UseFilters(DemoFilter)
    @UsePipes(ValidationPipe)
    @Roles('member')
    store(@Body() post: CreatePostDto) {
        // throw new HttpException('没有权限', HttpStatus.FORBIDDEN)
        this.demoService.create(post);

    }
}
