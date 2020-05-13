"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const demo_filter_1 = require("./core/filters/demo.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new demo_filter_1.DemoFilter());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map