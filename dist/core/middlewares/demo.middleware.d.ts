import { NestMiddleware } from '@nestjs/common';
export declare class DemoMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
