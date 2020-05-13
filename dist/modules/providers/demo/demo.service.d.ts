import { Post } from 'src/modules/interfaces/post.interface';
export declare class DemoService {
    private readonly posts;
    findAll(): Post[];
    create(post: Post): void;
}
