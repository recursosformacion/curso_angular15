"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var usuario_model_1 = require("src/app/models/usuario.model");
var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.usuario = new usuario_model_1.UsuarioModel();
    }
    RegistroComponent.prototype.ngOnInit = function () {
        this.usuario = new usuario_model_1.UsuarioModel();
    };
    RegistroComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        this.auth.nuevoUsuario(this.usuario)
            .subscribe(function (resp) {
            _this.router.navigateByUrl('/home');
            console.log('Respuesta:', resp);
        }, function (err) {
            console.log('ERROR', err.error.error.message);
        });
    };
    RegistroComponent = __decorate([
        core_1.Component({
            selector: 'app-registro',
            templateUrl: './registro.component.html',
            styleUrls: ['./registro.component.css']
        })
    ], RegistroComponent);
    return RegistroComponent;
}());
exports.RegistroComponent = RegistroComponent;
