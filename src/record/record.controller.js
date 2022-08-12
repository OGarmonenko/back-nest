"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.RecordController = void 0;
var common_1 = require("@nestjs/common");
var RecordController = /** @class */ (function () {
    function RecordController(recordService) {
        this.recordService = recordService;
    }
    ;
    RecordController.prototype.findAll = function () {
        return this.recordService.findAll();
    };
    RecordController.prototype.findOne = function (id) {
        return this.recordService.findOne(id);
    };
    RecordController.prototype.create = function (CreateRecordDto) {
        return this.recordService.create(CreateRecordDto);
    };
    /*@Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `update`;
    }*/
    RecordController.prototype.remove = function (id) {
        return this.recordService.remove(id);
    };
    __decorate([
        (0, common_1.Get)()
    ], RecordController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], RecordController.prototype, "findOne");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], RecordController.prototype, "create");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], RecordController.prototype, "remove");
    RecordController = __decorate([
        (0, common_1.Controller)('api/record')
    ], RecordController);
    return RecordController;
}());
exports.RecordController = RecordController;
