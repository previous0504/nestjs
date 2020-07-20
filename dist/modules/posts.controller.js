"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const post_dto_1 = require("./post.dto");
const demo_service_1 = require("./providers/demo/demo.service");
const demo_filter_1 = require("../core/filters/demo.filter");
const demo_auth_guard_1 = require("../core/guards/demo-auth.guard");
const roles_decorator_1 = require("../core/decorator/roles.decorator");
const logging_interceptor_1 = require("../core/interceptors/logging.interceptor");
const transform_interceptor_1 = require("../core/interceptors/transform.interceptor");
const errors_interceptor_1 = require("../core/interceptors/errors.interceptor");
const user_decorator_1 = require("../core/decorator/user.decorator");
const demo_pipe_1 = require("../core/pipes/demo.pipe");
let PostsController = class PostsController {
    constructor(demoService) {
        this.demoService = demoService;
    }
    index() {
    }
    show(id) {
        console.log('id:', typeof id);
        return {
            title: `Post ${id}`
        };
    }
    store(post, user) {
        this.demoService.create(post);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "index", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "show", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    roles_decorator_1.Roles('member'),
    __param(0, common_1.Body()), __param(1, user_decorator_1.User(demo_pipe_1.DemoPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_dto_1.CreatePostDto, Object]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "store", null);
PostsController = __decorate([
    common_1.Controller('posts'),
    __metadata("design:paramtypes", [demo_service_1.DemoService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map