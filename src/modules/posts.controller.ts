import { Controller, Get, Req, Query, Headers, Param, Post, Body, HttpException, HttpStatus, UseFilters, UsePipes, ValidationPipe, ParseIntPipe, UseGuards, SetMetadata, UseInterceptors, ForbiddenException } from '@nestjs/common';
import { CreatePostDto } from './post.dto';
import { DemoService } from './providers/demo/demo.service';
import { DemoFilter } from 'src/core/filters/demo.filter';
import { DemoAuthGuard } from 'src/core/guards/demo-auth.guard';
import { Roles } from 'src/core/decorator/roles.decorator';
import { LoggingInterceptor } from 'src/core/interceptors/logging.interceptor';
import { TransformInterceptor } from 'src/core/interceptors/transform.interceptor';
import { ErrorsInterceptor } from 'src/core/interceptors/errors.interceptor';
import { request } from 'express';
import { User } from 'src/core/decorator/user.decorator';
import { DemoPipe } from 'src/core/pipes/demo.pipe';

@Controller('posts')
// @UseGuards(DemoAuthGuard)
// @UseInterceptors(LoggingInterceptor)
export class PostsController {

    constructor(private readonly demoService: DemoService) {


    }
    @Get()
    // @UseInterceptors(ErrorsInterceptor)
    index() {

        // return this.demoService.findAll();
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
    store(@Body() post: CreatePostDto, @User(DemoPipe) user) {
        // throw new HttpException('没有权限', HttpStatus.FORBIDDEN)

        this.demoService.create(post);

    }
}
