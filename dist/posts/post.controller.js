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
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("./services/post.service");
const users_service_1 = require("./services/users.service");
const post_entity_1 = require("./entity/post.entity");
const rxjs_1 = require("rxjs");
const post_model_1 = require("./models/post.model");
const user_model_1 = require("./models/user.model");
let PostController = class PostController {
    constructor(postservice, usersService) {
        this.postservice = postservice;
        this.usersService = usersService;
    }
    index(page = 1, limit = 10) {
        return this.postservice.paginate({ page, limit, route: 'http://localhost:3000/posts' });
    }
    getSize() {
        return this.postservice.getSize();
    }
    add(newPost) {
        return rxjs_1.from(this.postservice.add(newPost));
    }
    addNewUser(user) {
        return rxjs_1.from(this.usersService.addNewUser(user));
    }
    ifExist(user) {
        return rxjs_1.from(this.usersService.ifExist(user));
    }
    delete(postId) {
        return rxjs_1.from(this.postservice.delete(postId));
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('page')), __param(1, common_1.Query('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], PostController.prototype, "index", null);
__decorate([
    common_1.Get('/size'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], PostController.prototype, "getSize", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_model_1.PostModels]),
    __metadata("design:returntype", rxjs_1.Observable)
], PostController.prototype, "add", null);
__decorate([
    common_1.Post('/auth/new'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.UserModel]),
    __metadata("design:returntype", rxjs_1.Observable)
], PostController.prototype, "addNewUser", null);
__decorate([
    common_1.Post('/auth/check'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.UserModel]),
    __metadata("design:returntype", rxjs_1.Observable)
], PostController.prototype, "ifExist", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", rxjs_1.Observable)
], PostController.prototype, "delete", null);
PostController = __decorate([
    common_1.Controller('posts'),
    __metadata("design:paramtypes", [post_service_1.PostService, users_service_1.UsersService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map