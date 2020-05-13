import { Post } from 'src/posts/interfaces/post.interface';
export declare class DemoService {
    private readonly posts;
    findAll(): Post[];
    create(post: Post): void;
}
