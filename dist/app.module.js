"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const posts_module_1 = require("./modules/posts.module");
const demo_middleware_1 = require("./core/middlewares/demo.middleware");
const core_1 = require("@nestjs/core");
const demo_roles_guard_1 = require("./core/guards/demo-roles.guard");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(demo_middleware_1.DemoMiddleware)
            .forRoutes('posts');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [posts_module_1.PostsModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: demo_roles_guard_1.DemoRolesGuard
            }
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map