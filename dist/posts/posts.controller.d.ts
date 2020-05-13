import { CreatePostDto } from './post.dto';
import { DemoService } from './providers/demo/demo.service';
export declare class PostsController {
    private readonly demoService;
    constructor(demoService: DemoService);
    index(): any;
    show(params: any): {
        title: string;
    };
    store(post: CreatePostDto): void;
}
