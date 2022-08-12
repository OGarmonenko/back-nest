"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecordModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var record_controller_1 = require("./record.controller");
var record_schema_1 = require("./schemas/record.schema");
var record_service_1 = require("./record.service");
var RecordModule = /** @class */ (function () {
    function RecordModule() {
    }
    RecordModule = __decorate([
        (0, common_1.Module)({
            imports: [mongoose_1.MongooseModule.forFeature([{ name: record_schema_1.Record.name, schema: record_schema_1.RecordSchema }])],
            controllers: [record_controller_1.RecordController],
            providers: [record_service_1.RecordService]
        })
    ], RecordModule);
    return RecordModule;
}());
exports.RecordModule = RecordModule;
