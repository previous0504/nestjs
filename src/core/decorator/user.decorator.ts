import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const User = createParamDecorator((data, cxt: ExecutionContext) => {
    const request = cxt.switchToHttp().getRequest();
    return request.user;
})