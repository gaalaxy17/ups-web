function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n<notifier-container></notifier-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/atendimento-tv/atendimento-tv.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/atendimento-tv/atendimento-tv.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAtendimentoTvAtendimentoTvComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<style>\n    .btn-theme {\n        background-color: #2f353b;\n        color: white;\n        border-color: #2f353b;\n    }\n\n    .btn-theme:hover {\n        background-color: #24292e;\n        color: white;\n        border-color: #24292e;\n    }\n\n    .btn-theme:enabled {\n        background-color: #24292e;\n        color: white;\n        border-color: #24292e;\n    }\n\n    .atendimento_pendente_confirmacao {\n        border-left: 15px solid grey;\n        background-color: #1d1c1ce5\n    }\n\n    .atendimento_em_aberto {\n        border-left: 15px solid #2c2ce8;\n        background-color: #1d1c1ce5\n    }\n\n    .atendimento_iniciado {\n        border-left: 15px solid #c5830a;\n        background-color: #1d1c1ce5\n    }\n\n    .atendimento_concluido {\n        border-left: 15px solid #009900;\n        background-color: #1d1c1ce5\n    }\n</style>\n\n\n<body style=\"background-color: #2d2c2c; padding: 40px\">\n\n    <button (click)=\"voltar()\" class=\"btn btn-theme btn-fill\">Voltar</button>\n    <span style=\"display: inline-block; margin-left: 50px;\">\n\n        <div style=\"background-color: grey; height: 30px; width: 30px; display: inline-block\"></div> <b\n            style=\"color: white; margin-right: 15px;\"> Pendente</b>\n        <div style=\"background-color: #2c2ce8; height: 30px; width: 30px; display: inline-block\"></div> <b\n            style=\"color: white; margin-right: 15px;\"> Confirmado</b>\n        <div style=\"background-color: #c5830a; height: 30px; width: 30px; display: inline-block\"></div> <b\n            style=\"color: white; margin-right: 15px;\"> Iniciado</b>\n        <div style=\"background-color: #009900; height: 30px; width: 30px; display: inline-block\"></div> <b\n            style=\"color: white; margin-right: 15px;\"> Finalizado</b>\n\n    </span>\n\n    <br><br>\n\n    <div class=\"card\" *ngFor=\"let a of atendimentos\" [class]=\"{\n        'atendimento_pendente_confirmacao':a.stStatus == 'atendimento_pendente_confirmacao',\n        'atendimento_em_aberto':a.stStatus == 'atendimento_em_aberto',\n        'atendimento_iniciado':a.stStatus == 'atendimento_iniciado',\n        'atendimento_concluido':a.stStatus == 'atendimento_concluido'\n}\" style=\"width: 350px; display: inline-block; margin-right: 25px;\">\n        <div class=\"header\" style=\"text-align: center; color: white\">\n            <!-- <b style=\"font-size: 25px;\">Nº {{a.cdAtendimento}}</b> -->\n            <b style=\"font-size: 30px;\">{{a.hrAtendimento}}</b><br>\n            <b style=\"font-size: 22px;\">{{a.dsTipoAtendimento}}</b>\n        </div>\n        <hr>\n        <div style=\"color: white\" class=\"content\">\n            <b>{{a.nmEmpresa}}</b> <br>\n            <b>{{a.nmUnidade}}</b> <br>\n            <br>\n            <b>Técnicos:</b> <br>\n            <span *ngFor=\"let t of a.tecnicos\">\n                {{t}} <br>\n            </span>\n            <br>\n\n            <b>Início:</b> {{a.dtInicio | date:'HH:mm'}}\n            <br>\n            <b>Fim: </b> {{a.dtFim | date:'HH:mm'}}\n            <br>\n            <!-- <hr> -->\n            <div style=\"text-align: center;\">\n                <h1><b>RAT: {{a.nrRat}}</b></h1>\n            </div>\n        </div>\n    </div>\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/atendimento/atendimento-consulta/atendimento-consulta.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/atendimento/atendimento-consulta/atendimento-consulta.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAtendimentoAtendimentoConsultaAtendimentoConsultaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n    input::-webkit-input-placeholder {\n        color: black;\n        /*Change the placeholder color*/\n        opacity: 0.5;\n        /*Change the opacity between 0 and 1*/\n    }\n</style>\n<ngx-spinner color=\"#ed1c24\" type=\"line-scale\" size=\"medium\"></ngx-spinner>\n\n<div class=\"container-fluid\" style=\"padding: 0 !important\">\n    <div class=\"col-sm-12 col-md-12 col-lg-12\" style=\"margin-top: 10px;\">\n        <div class=\"card\" style=\"border: none;\">\n            <div class=\"card-body\" style=\"padding: 0 !important;\">\n                <div class=\"card\">\n                    <div class=\"card-header\"\n                        style=\"background-color: #2f353b; color: white; padding: 15px; font-size: 20px;\">\n                        <b>\n                        </b>\n                    </div>\n                    <div class=\"card-body\">\n                        <div style=\"padding: 25px;\">\n                            <table width=\"100%\">\n                                <thead>\n                                    <tr style=\"width: 100%;\">\n                                        <td width=\"10%\"></td>\n                                        <td width=\"70%\"> </td>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr height=\"50px\">\n                                        <td> <label for=\"company\"><b>ID</b></label></td>\n                                        <td>\n                                            <input type=\"number\" class=\"form-control col-6\"\n                                                [(ngModel)]=\"filtro.cdAtendimento\" placeholder=\"Digite o ID do chamado\">\n                                        </td>\n                                    </tr>\n                                    <tr height=\"50px\">\n                                        <td> <label for=\"company\"><b>Empresa</b></label>\n                                        </td>\n                                        <td>\n                                            <input type=\"text\" class=\"form-control col-6\" [(ngModel)]=\"filtro.nmEmpresa\"\n                                                placeholder=\"Digite o nome da empresa\">\n                                        </td>\n                                    </tr>\n                                    <tr height=\"50px\">\n                                        <td> <label for=\"company\"><b>Tipo Atendimento</b></label>\n                                        </td>\n                                        <td>\n                                            <mat-form-field style=\"width: 100%;\">\n                                                <mat-select (selectionChange)=\"carregarEquipamentos()\"\n                                                    name=\"cdTipoAtendimento\" [(ngModel)]=\"filtro.cdTipoAtendimento\">\n                                                    <mat-option *ngFor=\"let t of tiposAtendimento\"\n                                                        [value]=\"t.cdTipoAtendimento\">\n                                                        {{t.dsTipoAtendimento}}\n                                                    </mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                        </td>\n                                    </tr>\n                                    <tr height=\"50px\">\n                                        <td> <label for=\"company\"><b>Tipo Equipamento</b></label>\n                                        </td>\n                                        <td>\n                                            <mat-form-field style=\"width: 100%;\">\n                                                <mat-select \n                                                    name=\"dsTipoEquipamento\" [(ngModel)]=\"filtro.dsTipoEquipamento\">\n                                                    <mat-option *ngFor=\"let e of tiposEquipamento\"\n                                                        [value]=\"e\">\n                                                        {{e}}\n                                                    </mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                        </td>\n                                    </tr>\n                                    <tr height=\"50px\">\n                                        <td> <label for=\"company\"><b>Técnico</b></label>\n                                        </td>\n                                        <td>\n                                            <mat-form-field style=\"width: 100%;\">\n                                                <mat-select name=\"cdLoginTecnico\" [(ngModel)]=\"filtro.cdLoginTecnico\">\n                                                    <mat-option *ngFor=\"let tec of tecnicos\" [value]=\"tec.cdLogin\">\n                                                        {{tec.nmUser}}\n                                                    </mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                        </td>\n                                    </tr>\n                                    <tr height=\"50px\">\n                                        <td> <label for=\"company\"><b>Status</b></label>\n                                        </td>\n                                        <td>\n                                            <mat-form-field style=\"width: 100%;\">\n                                                <mat-select name=\"cdLoginTecnico\" [(ngModel)]=\"filtro.stStatus\">\n                                                    <mat-option value=\"atendimento_pendente_confirmacao\"\n                                                        [selected]=\"true\">\n                                                        Aguardando Confirmação\n                                                    </mat-option>\n                                                    <mat-option value=\"atendimento_em_aberto\">\n                                                        Confirmado\n                                                    </mat-option>\n                                                    <mat-option value=\"atendimento_iniciado\">\n                                                        Iniciado\n                                                    </mat-option>\n                                                    <mat-option value=\"atendimento_concluido\">\n                                                        Finalizado\n                                                    </mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td> <label for=\"company\" class=\"control-label\"><b>Periodo Criação</b></label>\n                                        </td>\n                                        <td>\n                                            <mat-form-field style=\"margin-right: 20px;\">\n                                                <mat-label>De</mat-label>\n                                                <input matInput name=\"dtPeriodoDe\" (click)=\"dtPeriodoDe.open()\"\n                                                    [(ngModel)]=\"filtro.dtFiltroDe\" [matDatepicker]=\"dtPeriodoDe\">\n                                                <mat-datepicker-toggle matSuffix [for]=\"dtPeriodoDe\">\n                                                </mat-datepicker-toggle>\n                                                <mat-datepicker #dtPeriodoDe></mat-datepicker>\n                                            </mat-form-field>\n                                            <mat-form-field>\n                                                <mat-label>Até</mat-label>\n                                                <input matInput name=\"dtPeriodoAte\" (click)=\"dtPeriodoAte.open()\"\n                                                    [(ngModel)]=\"filtro.dtFiltroAte\" [matDatepicker]=\"dtPeriodoAte\">\n                                                <mat-datepicker-toggle matSuffix [for]=\"dtPeriodoAte\">\n                                                </mat-datepicker-toggle>\n                                                <mat-datepicker #dtPeriodoAte></mat-datepicker>\n                                            </mat-form-field>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td> <label for=\"company\" class=\"control-label\"><b>Periodo\n                                                    Atendimento</b></label>\n                                        </td>\n                                        <td>\n                                            <mat-form-field style=\"margin-right: 20px;\">\n                                                <mat-label>De</mat-label>\n                                                <input matInput name=\"dtPeriodoAtendimentoDe\"\n                                                    (click)=\"dtPeriodoAtendimentoDe.open()\"\n                                                    [(ngModel)]=\"filtro.dtFiltroAtendimentoDe\"\n                                                    [matDatepicker]=\"dtPeriodoAtendimentoDe\">\n                                                <mat-datepicker-toggle matSuffix [for]=\"dtPeriodoAtendimentoDe\">\n                                                </mat-datepicker-toggle>\n                                                <mat-datepicker #dtPeriodoAtendimentoDe></mat-datepicker>\n                                            </mat-form-field>\n                                            <mat-form-field>\n                                                <mat-label>Até</mat-label>\n                                                <input matInput name=\"dtPeriodoAtendimentoAte\"\n                                                    (click)=\"dtPeriodoAtendimentoAte.open()\"\n                                                    [(ngModel)]=\"filtro.dtFiltroAtendimentoAte\"\n                                                    [matDatepicker]=\"dtPeriodoAtendimentoAte\">\n                                                <mat-datepicker-toggle matSuffix [for]=\"dtPeriodoAtendimentoAte\">\n                                                </mat-datepicker-toggle>\n                                                <mat-datepicker #dtPeriodoAtendimentoAte></mat-datepicker>\n                                            </mat-form-field>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <hr><br>\n                            <div class=\"form-group\">\n                                <button class=\"btn btn-fill btn-theme\" (click)=\"buscar()\" style=\"margin-right: 5px\"><i\n                                        class=\"fa fa-search\"></i>&nbsp;Buscar</button>\n                                <!-- <button class=\"btn btn-fill btn-theme\" [routerLink]=\"['/chamado/detalhe']\"\n                                    [queryParams]=\"{new: 1}\"><i class=\"fa fa-file\"></i>&nbsp;Novo</button> -->\n                                <button class=\"btn btn-fill btn-primary\" (click)=\"confirmarSelecionados($event)\"\n                                    style=\"margin-right: 5px;\"><i class=\"fa fa-check\"></i>&nbsp;Confirmar\n                                    Selecionados</button>\n                                <button class=\"btn btn-fill btn-primary\" (click)=\"exportarDados()\"\n                                    style=\"margin-right: 5px;\"><i class=\"fa fa-file\"></i>&nbsp;Exportar Dados</button>\n                                <button style=\"margin-right: 5px;\" class=\"btn btn-fill btn-theme\"\n                                    (click)=\"limpar()\">Limpar</button>\n\n\n\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <div class=\"card-body\" style=\"padding: 0;\">\n                        <table class=\"table table-striped\">\n                            <thead style=\"background: #24292e; color: white;\">\n                                <tr>\n                                    <th style=\"padding: 15px; color: white;\"></th>\n                                    <th style=\"padding: 15px; color: white;\">ID</th>\n                                    <th style=\"padding: 15px; color: white;\">RAT</th>\n                                    <th style=\"padding: 15px; color: white;\">Dt. Criação</th>\n                                    <th style=\"padding: 15px; color: white;\">Dt. Atendimento</th>\n                                    <th style=\"padding: 15px; color: white;\">Empresa</th>\n                                    <th style=\"padding: 15px; color: white;\">Unidade</th>\n                                    <th style=\"padding: 15px; color: white;\">Tipo</th>\n                                    <th style=\"padding: 15px; color: white;\">Técnicos</th>\n                                    <th style=\"padding: 15px; color: white;\">Responsável</th>\n                                    <th style=\"padding: 15px; color: white;\">Status</th>\n                                    <th></th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr\n                                    *ngFor=\"let atendimento of atendimentos  | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize\">\n                                    <td><input *ngIf=\"atendimento.stStatus == 'atendimento_pendente_confirmacao'\"\n                                            type=\"checkbox\" class=\"checkbox\" value=true\n                                            [(ngModel)]=\"atendimento.fgChecked\" data-toggle=\"checkbox\"></td>\n                                    <td>{{atendimento.cdAtendimento}}</td>\n                                    <td>{{atendimento.nrRat}}</td>\n                                    <td>\n                                        <span>{{atendimento.dtCriacao | date:'dd/MM/yyyy' }}</span>\n                                    </td>\n                                    <td>\n                                        <span>{{atendimento.dtAtendimento | date:'dd/MM/yyyy HH:mm' }}</span>\n                                    </td>\n                                    <td><b>{{atendimento.nmEmpresa}}</b></td>\n                                    <td><b>{{atendimento.nmUnidade}}</b></td>\n                                    <td>{{atendimento.dsTipoAtendimento}}</td>\n                                    <td>\n                                        <span *ngFor=\"let tecnico of atendimento.tecnicos\">{{tecnico}} <br></span>\n                                    </td>\n                                    <td><span><b>Chamado aberto por:</b> {{atendimento.dsUserChamado}}</span> <br>\n                                        <span><b>Atendimento aberto por:</b> {{atendimento.dsUserAtendimento}}</span>\n                                    </td>\n                                    <td>\n                                        <span *ngIf=\"atendimento.stStatus == 'atendimento_pendente_confirmacao'\"><b\n                                                style=\"color: red;\">Pendente Confirmação</b></span>\n                                        <span *ngIf=\"atendimento.stStatus == 'atendimento_em_aberto'\"><b\n                                                style=\"color: rgb(49, 8, 196);\">Confirmado</b></span>\n                                        <span *ngIf=\"atendimento.stStatus == 'atendimento_iniciado'\"><b\n                                                style=\"color: orange;\">Iniciado</b></span>\n                                        <span *ngIf=\"atendimento.stStatus == 'atendimento_concluido'\"><b\n                                                style=\"color: green;\">Finalizado</b></span>\n                                    </td>\n                                    <td>\n                                        <button class=\"btn btn-theme\" [routerLink]=\"['/atendimento/detalhe']\"\n                                            [queryParams]=\"{cdAtendimento: atendimento.cdAtendimento}\">Detalhes</button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <ngb-pagination style=\"float: right; margin-right: 25px;\" [(page)]=\"page\" [pageSize]=\"pageSize\"\n                    [collectionSize]=\"atendimentos.length\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"\n                    *ngIf=\"atendimentos.length > 0\">\n                </ngb-pagination>\n\n            </div>\n        </div>\n\n\n    </div>\n    <!--/.col-->\n</div><!-- /.container-fluid -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/atendimento/atendimento-detalhe/atendimento-detalhe.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/atendimento/atendimento-detalhe/atendimento-detalhe.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAtendimentoAtendimentoDetalheAtendimentoDetalheComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n    input::-webkit-input-placeholder {\n        color: black;\n        /*Change the placeholder color*/\n        opacity: 0.5;\n        /*Change the opacity between 0 and 1*/\n    }\n\n    .modal-backdrop {\n        z-index: 2;\n    }\n\n    .input-error input {\n        border-color: red;\n    }\n\n    .input-error label {\n        color: red;\n    }\n</style>\n\n<ngx-spinner color=\"#ed1c24\" type=\"line-scale\" size=\"medium\"></ngx-spinner>\n\n<body>\n\n\n\n    <!-- breaking change 'cui-breadcrumb' -->\n    <!-- deprecation warning for 'app-breadcrumb' -->\n    <!--<ol class=\"breadcrumb\">-->\n    <!--<app-breadcrumb></app-breadcrumb>-->\n    <!--&lt;!&ndash; Breadcrumb Menu&ndash;&gt;-->\n    <!--<li class=\"breadcrumb-menu d-md-down-none\">-->\n    <!--<div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">-->\n    <!--<a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>-->\n    <!--<a class=\"btn\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>-->\n    <!--<a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\n    <!--</div>-->\n    <!--</li>-->\n    <!--</ol>-->\n    <div class=\"container-fluid\" style=\"padding: 0 !important\">\n        <div class=\"col-sm-12 col-md-12 col-lg-12\" style=\"margin-top: 25px;\">\n            <div class=\"card\" style=\"border: none;\">\n                <div class=\"card-body\" style=\"padding: 0;\">\n                    <div class=\"col-sm-12 col-md-12 col-lg-12\" style=\"padding: 0;\">\n                        <div class=\"card\">\n                            <div class=\"card-body\">\n                                <form style=\"padding: 30px;\">\n                                    <input type=\"hidden\">\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-lg-6 col-md-6 col-sm-12\"\n                                            [class]=\"{'input-error': chamadoFormSubmitted && !form.cdEmpresa}\">\n                                            <mat-form-field appearance=\"fill\" style=\"width: 100%;\">\n                                                <mat-label>Empresa <span style=\"color:red\">*</span></mat-label>\n                                                <mat-select (selectionChange)=\"carregarUnidades()\" name=\"cdEmpresa\"\n                                                    [disabled]=\"form.cdAtendimento\" [(ngModel)]=\"form.cdEmpresa\">\n                                                    <mat-option *ngFor=\"let e of empresas\" [value]=\"e.cdEmpresa\">\n                                                        {{e.nmEmpresa}}\n                                                    </mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"form-group col-lg-6 col-md-6 col-sm-12\"\n                                            [class]=\"{'input-error': chamadoFormSubmitted && !form.cdUnidade}\">\n                                            <mat-form-field appearance=\"fill\" style=\"width: 100%;\">\n                                                <mat-label>Unidade <span style=\"color:red\">*</span></mat-label>\n                                                <mat-select [(ngModel)]=\"form.cdUnidade\" name=\"cdUnidade\"\n                                                    [disabled]=\"form.cdAtendimento\">\n                                                    <mat-option *ngFor=\"let u of unidades\" [value]=\"u.cdUnidade\">\n                                                        {{u.nmUnidade}}\n                                                    </mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-lg-12 col-md-12 col-sm-12\"\n                                            [class]=\"{'input-error': chamadoFormSubmitted && !form.cdTipoAtendimento}\">\n                                            <mat-form-field appearance=\"fill\" style=\"width: 100%;\">\n                                                <mat-label>Tipo Atendimento <span style=\"color:red\">*</span></mat-label>\n                                                <mat-select (selectionChange)=\"carregarEquipamentos()\"\n                                                    name=\"cdTipoAtendimento\"\n                                                    [disabled]=\"form.cdAtendimento && form.stStatus == 'chamado'\"\n                                                    [(ngModel)]=\"form.cdTipoAtendimento\">\n                                                    <mat-option *ngFor=\"let t of tiposAtendimento\"\n                                                        [value]=\"t.cdTipoAtendimento\">\n                                                        {{t.dsTipoAtendimento}}\n                                                    </mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-lg-10 col-md-10 col-sm-12\"\n                                            [class]=\"{'input-error': chamadoFormSubmitted && !form.cdTipoAtendimento}\">\n                                            <mat-form-field appearance=\"fill\" style=\"width: 100%;\">\n                                                <mat-label>Data Atendimento <span style=\"color:red\">*</span></mat-label>\n                                                <input matInput name=\"dtAtendimento\" (click)=\"dtAtendimento.open()\"\n                                                    readonly [(ngModel)]=\"form.dtAtendimento\"\n                                                    [matDatepicker]=\"dtAtendimento\">\n                                                <mat-datepicker-toggle matSuffix [for]=\"dtAtendimento\">\n                                                </mat-datepicker-toggle>\n                                                <mat-datepicker #dtAtendimento></mat-datepicker>\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"form-group col-lg-2 col-md-2 col-sm-12\"\n                                            [class]=\"{'input-error': chamadoFormSubmitted && !form.hrAtendimento}\">\n                                            <mat-form-field appearance=\"fill\" style=\"width: 100%;\"\n                                                class=\"example-full-width\">\n                                                <mat-label>Horário Atendimento <span style=\"color:red\">*</span>\n                                                </mat-label>\n                                                <input matInput name=\"hrAtendimento\" [dropSpecialCharacters]=\"false\"\n                                                    mask=\"00:00\" [(ngModel)]=\"form.hrAtendimento\">\n                                            </mat-form-field>\n                                        </div>\n                                    </div>\n\n\n\n\n                                    <!-- <hr> -->\n                                    <h4>Descrição do Serviço <span style=\"color:red\">*</span></h4>\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                                            <textarea class=\"form-control\" type=\"text\" name=\"dsDescricao\"\n                                                [(ngModel)]=\"form.dsDescricao\"></textarea>\n                                        </div>\n                                    </div>\n\n                                    <!-- <hr> -->\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-10 col-md-10 col-sm-12\">\n                                            <h4>Status </h4>\n                                            <input *ngIf=\"form.stStatus == 'chamado'\" value='Chamado'\n                                                class=\"form-control\" type=\"text\" name=\"dsDescricao\" [disabled]=\"true\">\n                                            <input *ngIf=\"form.stStatus == 'atendimento_pendente_confirmacao'\"\n                                                value='Pendente Confirmação' class=\"form-control\" type=\"text\"\n                                                name=\"dsDescricao\" [disabled]=\"true\">\n                                            <input *ngIf=\"form.stStatus == 'atendimento_em_aberto'\" value='Confirmado'\n                                                class=\"form-control\" type=\"text\" name=\"dsDescricao\" [disabled]=\"true\">\n                                            <input *ngIf=\"form.stStatus == 'atendimento_iniciado'\" value='Iniciado'\n                                                class=\"form-control\" type=\"text\" name=\"dsDescricao\" [disabled]=\"true\">\n                                            <input *ngIf=\"form.stStatus == 'atendimento_concluido'\" value='Finalizado'\n                                                class=\"form-control\" type=\"text\" name=\"dsDescricao\" [disabled]=\"true\">\n                                        </div>\n                                        <div class=\"col-lg-2 col-md-2 col-sm-12\">\n                                            <h4>Nº RAT</h4>\n                                            <input value='{{form.nrRat}}' class=\"form-control\" type=\"text\" name=\"nrRat\"\n                                                [disabled]=\"true\">\n                                        </div>\n                                    </div>\n\n                                    <div class=\"row\">\n                                        <div  class=\"col-lg-3 col-md-3 col-sm-6\">\n                                            <h4>Iniciado Por</h4>\n                                            <input value='{{form.iniciadoPor}}' class=\"form-control\" type=\"text\"\n                                                name=\"dsDescricao\" [disabled]=\"true\">\n                                        </div>\n                                        <div  class=\"col-lg-3 col-md-3 col-sm-6\">\n                                            <h4>Iniciado Em</h4>\n                                            <input value='{{form.dtInicio | date:\"dd/MM/yyyy HH:mm\" }}' class=\"form-control\" type=\"text\" name=\"nrRat\"\n                                                [disabled]=\"true\">\n                                        </div>\n                                        <div  class=\"col-lg-3 col-md-3 col-sm-6\">\n                                            <h4>Finalizado Em </h4>\n                                            <input value='{{form.dtFim | date:\"dd/MM/yyyy HH:mm\" }}' class=\"form-control\" type=\"text\" name=\"dsDescricao\"\n                                                [disabled]=\"true\">\n                                        </div>\n                                        <div  class=\"col-lg-3 col-md-3 col-sm-6\">\n                                            <h4>Finalizado Por</h4>\n                                            <input value='{{form.finalizadoPor}}' class=\"form-control\" type=\"text\"\n                                                name=\"nrRat\" [disabled]=\"true\">\n                                        </div>\n                                    </div>\n\n                                    <hr>\n\n                                    <h4>Equipamentos <span *ngIf=\"!form.cdAtendimento\" style=\"color:red\">*</span></h4>\n                                    <div class=\"row\" *ngIf=\"!form.cdAtendimento\">\n                                        <div class=\"col-lg-5 col-md-5 col-sm-12\">\n                                            <input type=\"text\" class=\"form-control\" name=\"dsEquipamento\"\n                                                [disabled]=\"form.cdAtendimento && form.stStatus == 'chamado'\"\n                                                [(ngModel)]=\"equipamento.dsEquipamento\" style=\"display: inline-block;\">\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-5 col-sm-12\">\n                                            <mat-form-field style=\"width: 100%;\">\n                                                <mat-label>Tipo</mat-label>\n                                                <mat-select\n                                                    [disabled]=\"form.cdAtendimento && form.stStatus == 'chamado'\"\n                                                    [(ngModel)]=\"equipamento.dsTipo\" name=\"tiposEquipamento\">\n                                                    <mat-option *ngFor=\"let tipo of tiposEquipamento\" [value]=\"tipo\">\n                                                        {{tipo}}\n                                                    </mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"col-lg-2 col-md-2 col-sm-12\">\n\n                                            <button title=\"Editar\" style=\"float: right;\" (click)=\"addEquipamento()\"\n                                                [disabled]=\"form.cdAtendimento && form.stStatus == 'chamado'\"\n                                                class=\"btn btn-fill btn-info btn-simple btn-md\"\n                                                [disabled]=\"!equipamento.dsEquipamento || !equipamento.dsTipo\">\n                                                Adicionar\n                                                <i class=\"fa fa-plus\"></i>\n                                            </button>\n\n                                        </div>\n                                    </div>\n                                    <br>\n                                    <div class=\"content table-responsive table-full-width\">\n                                        <table class=\"table\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Nome</th>\n                                                    <th>Tipo</th>\n                                                    <th></th>\n\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n\n                                                <tr *ngFor=\"let e of form.equipamentos; let i = index\">\n                                                    <td><b>{{e.dsEquipamento}}</b></td>\n\n                                                    <td>{{e.dsTipo}}</td>\n\n                                                    <td class=\"td-actions text-right\">\n\n\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n\n                                    <hr>\n\n                                    <h4>Técnicos <span style=\"color:red\">*</span></h4>\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-10 col-md-10 col-sm-12\">\n                                            <mat-form-field style=\"width: 100%;\">\n                                                <mat-label>Técnico</mat-label>\n                                                <mat-select [(ngModel)]=\"tecnico\" name=\"tecnicos\">\n                                                    <mat-option *ngFor=\"let t of tecnicos\" [value]=\"t\">\n                                                        {{t.nmUser}}\n                                                    </mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"col-lg-2 col-md-2 col-sm-12\">\n\n                                            <button title=\"Editar\" style=\"float: right;\" (click)=\"addTecnico()\"\n                                                class=\"btn btn-fill btn-info btn-simple btn-md\" [disabled]=\"!tecnico\">\n                                                Adicionar\n                                                <i class=\"fa fa-plus\"></i>\n                                            </button>\n\n                                        </div>\n                                    </div>\n                                    <br>\n                                    <div class=\"content table-responsive table-full-width\">\n                                        <table class=\"table\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Nome</th>\n                                                    <th></th>\n\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n\n                                                <tr *ngFor=\"let t of form.tecnicos; let i = index\">\n                                                    <td><b>{{t.nmUser}}</b></td>\n\n                                                    <td class=\"td-actions text-right\">\n                                                        <a rel=\"tooltip\" title=\"Remove\" (click)=\"removerTecnico(i)\"\n                                                            class=\"btn btn-danger btn-fill btn-simple btn-md\">\n                                                            Deletar\n                                                            <i class=\"fa fa-trash\"></i>\n                                                        </a>\n\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n\n                                    <hr>\n\n                                    <div>\n\n                                        <button class=\"btn btn-fill btn-theme\" (click)=\"salvar($event)\"\n                                            style=\"margin-right: 10px;\">Salvar&nbsp; <i class=\"fa fa-save\"></i></button>\n                                        <button class=\"btn btn-fill btn-primary\" (click)=\"confirmarAtendimento($event)\"\n                                            *ngIf=\"form.stStatus == 'atendimento_pendente_confirmacao'\"\n                                            style=\"margin-right: 10px;\">Confirmar&nbsp; <i\n                                                class=\"fa fa-check\"></i></button>\n                                        <button class=\"btn btn-fill btn-theme\" [routerLink]=\"['/atendimento/consulta']\">\n                                            Voltar&nbsp; <i class=\"fa fa-arrow-left\"></i></button>\n                                        <!-- <button class=\"btn btn-danger\" style=\"margin-left: 5px;\" value=\"0\"\n                                        (click)=\"mudarStatusEmpresa($event)\"><i\n                                            class=\"fa fa-close\"></i>&nbsp;Inativar</button> -->\n                                        <!-- <button class=\"btn btn-fill btn-theme\" style=\"margin-left: 5px;\" value=\"1\"\n                                        (click)=\"mudarStatusEmpresa($event)\">Ativar</button> -->\n\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/.col-->\n                </div>\n            </div>\n\n\n        </div>\n        <!--/.col-->\n    </div><!-- /.container-fluid -->\n\n</body>\n<!-- Button trigger modal -->\n<!-- Modal -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chamado/chamado-consulta/chamado-consulta.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chamado/chamado-consulta/chamado-consulta.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChamadoChamadoConsultaChamadoConsultaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n    input::-webkit-input-placeholder {\n        color: black;\n        /*Change the placeholder color*/\n        opacity: 0.5;\n        /*Change the opacity between 0 and 1*/\n    }\n</style>\n<ngx-spinner color=\"#ed1c24\" type=\"line-scale\" size=\"medium\"></ngx-spinner>\n\n<div class=\"container-fluid\" style=\"padding: 0 !important\">\n    <div class=\"col-sm-12 col-md-12 col-lg-12\" style=\"margin-top: 10px;\">\n        <div class=\"card\" style=\"border: none;\">\n            <div class=\"card-body\" style=\"padding: 0 !important;\">\n                <div class=\"card\">\n                    <div class=\"card-header\"\n                        style=\"background-color: #2f353b; color: white; padding: 15px; font-size: 20px;\">\n                        <b>\n                        </b>\n                    </div>\n                    <div class=\"card-body\">\n                        <div style=\"padding: 25px;\">\n                            <table width=\"100%\">\n                                <thead>\n                                    <tr style=\"width: 100%;\">\n                                        <td width=\"10%\"></td>\n                                        <td width=\"70%\"> </td>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr height=\"50px\">\n                                        <td> <label for=\"company\"><b>ID</b></label></td>\n                                        <td>\n                                            <input type=\"number\" class=\"form-control col-6\"\n                                                [(ngModel)]=\"filtro.cdAtendimento\" placeholder=\"Digite o ID do chamado\">\n                                        </td>\n                                    </tr>\n                                    <tr height=\"50px\">\n                                        <td> <label for=\"company\"><b>Empresa</b></label>\n                                        </td>\n                                        <td>\n                                            <input type=\"text\" class=\"form-control col-6\" [(ngModel)]=\"filtro.nmEmpresa\"\n                                                placeholder=\"Digite o nome da empresa\">\n                                        </td>\n                                    </tr>\n                                    <tr height=\"50px\">\n                                        <td> <label for=\"company\"><b>Tipo</b></label>\n                                        </td>\n                                        <td>\n                                            <mat-form-field style=\"width: 100%;\">\n                                                <mat-select (selectionChange)=\"carregarEquipamentos()\"\n                                                    name=\"cdTipoAtendimento\" [(ngModel)]=\"filtro.cdTipoAtendimento\">\n                                                    <mat-option *ngFor=\"let t of tiposAtendimento\"\n                                                        [value]=\"t.cdTipoAtendimento\">\n                                                        {{t.dsTipoAtendimento}}\n                                                    </mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td> <label for=\"company\" class=\"control-label\">Periodo Criação</label>\n                                        </td>\n                                        <td>\n                                            <mat-form-field style=\"margin-right: 20px;\">\n                                                <mat-label>De</mat-label>\n                                                <input matInput name=\"dtPeriodoDe\" (click)=\"dtPeriodoDe.open()\"\n                                                    [(ngModel)]=\"filtro.dtFiltroDe\" [matDatepicker]=\"dtPeriodoDe\">\n                                                <mat-datepicker-toggle matSuffix [for]=\"dtPeriodoDe\">\n                                                </mat-datepicker-toggle>\n                                                <mat-datepicker #dtPeriodoDe></mat-datepicker>\n                                            </mat-form-field>\n                                            <mat-form-field>\n                                                <mat-label>Até</mat-label>\n                                                <input matInput name=\"dtPeriodoAte\" (click)=\"dtPeriodoAte.open()\"\n                                                    [(ngModel)]=\"filtro.dtFiltroAte\" [matDatepicker]=\"dtPeriodoAte\">\n                                                <mat-datepicker-toggle matSuffix [for]=\"dtPeriodoAte\">\n                                                </mat-datepicker-toggle>\n                                                <mat-datepicker #dtPeriodoAte></mat-datepicker>\n                                            </mat-form-field>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <hr><br>\n                            <div class=\"form-group\">\n                                <button class=\"btn btn-fill btn-theme\" (click)=\"buscar()\" style=\"margin-right: 5px\"><i\n                                        class=\"fa fa-search\"></i>&nbsp;Buscar</button>\n                                <!-- <button class=\"btn btn-fill btn-theme\" [routerLink]=\"['/chamado/detalhe']\"\n                                    [queryParams]=\"{new: 1}\"><i class=\"fa fa-file\"></i>&nbsp;Novo</button> -->\n                                <button class=\"btn btn-fill btn-theme\" (click)=\"limpar()\"\n                                    >Limpar</button>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <div class=\"card-body\" style=\"padding: 0;\">\n                        <table class=\"table table-striped\">\n                            <thead style=\"background: #24292e; color: white;\">\n                                <tr>\n                                    <th style=\"padding: 15px; color: white;\">ID</th>\n                                    <th style=\"padding: 15px; color: white;\">Dt. Criação</th>\n                                    <th style=\"padding: 15px; color: white;\">Empresa</th>\n                                    <th style=\"padding: 15px; color: white;\">Unidade</th>\n                                    <th style=\"padding: 15px; color: white;\">Tipo</th>\n                                    <th style=\"padding: 15px; color: white;\">Responsável</th>\n                                    <th></th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr\n                                    *ngFor=\"let chamado of chamados  | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize\">\n                                    <td>{{chamado.cdAtendimento}}</td>\n                                    <td>\n                                        <span>{{chamado.dtCriacao | date:'dd/MM/yyyy' }}</span>\n                                    </td>\n                                    <td><b>{{chamado.nmEmpresa}}</b></td>\n                                    <td><b>{{chamado.nmUnidade}}</b></td>\n                                    <td>{{chamado.dsTipoAtendimento}}</td>\n                                    <td>{{chamado.dsUserChamado}}</td>\n                                    <td>\n                                        <button class=\"btn btn-theme\" [routerLink]=\"['/chamado/detalhe']\"\n                                            [queryParams]=\"{cdAtendimento: chamado.cdAtendimento}\">Detalhes</button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <ngb-pagination style=\"float: right; margin-right: 25px;\" [(page)]=\"page\" [pageSize]=\"pageSize\"\n                    [collectionSize]=\"chamados.length\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"\n                    *ngIf=\"chamados.length > 0\">\n                </ngb-pagination>\n\n            </div>\n        </div>\n\n\n    </div>\n    <!--/.col-->\n</div><!-- /.container-fluid -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chamado/chamado-detalhe/chamado-detalhe.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chamado/chamado-detalhe/chamado-detalhe.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChamadoChamadoDetalheChamadoDetalheComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n    input::-webkit-input-placeholder {\n        color: black;\n        /*Change the placeholder color*/\n        opacity: 0.5;\n        /*Change the opacity between 0 and 1*/\n    }\n\n    .modal-backdrop {\n        z-index: 2;\n    }\n\n    .input-error input {\n        border-color: red;\n    }\n\n    .input-error label {\n        color: red;\n    }\n</style>\n\n<ngx-spinner color=\"#ed1c24\" type=\"line-scale\" size=\"medium\"></ngx-spinner>\n\n<body>\n\n\n\n    <!-- breaking change 'cui-breadcrumb' -->\n    <!-- deprecation warning for 'app-breadcrumb' -->\n    <!--<ol class=\"breadcrumb\">-->\n    <!--<app-breadcrumb></app-breadcrumb>-->\n    <!--&lt;!&ndash; Breadcrumb Menu&ndash;&gt;-->\n    <!--<li class=\"breadcrumb-menu d-md-down-none\">-->\n    <!--<div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">-->\n    <!--<a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>-->\n    <!--<a class=\"btn\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>-->\n    <!--<a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\n    <!--</div>-->\n    <!--</li>-->\n    <!--</ol>-->\n    <div class=\"container-fluid\" style=\"padding: 0 !important\">\n        <div class=\"col-sm-12 col-md-12 col-lg-12\" style=\"margin-top: 25px;\">\n            <div class=\"card\" style=\"border: none;\">\n                <div class=\"card-body\" style=\"padding: 0;\">\n                    <div class=\"col-sm-12 col-md-12 col-lg-12\" style=\"padding: 0;\">\n                        <div class=\"card\">\n                            <div class=\"card-body\">\n                                <form style=\"padding: 30px;\">\n                                    <input type=\"hidden\">\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-lg-6 col-md-6 col-sm-12\"\n                                            [class]=\"{'input-error': chamadoFormSubmitted && !form.cdEmpresa}\">\n                                            <mat-form-field appearance=\"fill\" style=\"width: 100%;\">\n                                                <mat-label>Empresa <span style=\"color:red\">*</span></mat-label>\n                                                <mat-select (selectionChange)=\"carregarUnidades()\" name=\"cdEmpresa\"\n                                                    [disabled]=\"form.cdAtendimento\" [(ngModel)]=\"form.cdEmpresa\">\n                                                    <mat-option *ngFor=\"let e of empresas\" [value]=\"e.cdEmpresa\">\n                                                        {{e.nmEmpresa}}\n                                                    </mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"form-group col-lg-6 col-md-6 col-sm-12\"\n                                            [class]=\"{'input-error': chamadoFormSubmitted && !form.cdUnidade}\">\n                                            <mat-form-field appearance=\"fill\" style=\"width: 100%;\">\n                                                <mat-label>Unidade <span style=\"color:red\">*</span></mat-label>\n                                                <mat-select [(ngModel)]=\"form.cdUnidade\" name=\"cdUnidade\"\n                                                    [disabled]=\"form.cdAtendimento\">\n                                                    <mat-option *ngFor=\"let u of unidades\" [value]=\"u.cdUnidade\">\n                                                        {{u.nmUnidade}}\n                                                    </mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-lg-12 col-md-12 col-sm-12\"\n                                            [class]=\"{'input-error': chamadoFormSubmitted && !form.cdTipoAtendimento}\">\n                                            <mat-form-field appearance=\"fill\" style=\"width: 100%;\">\n                                                <mat-label>Tipo Chamado <span style=\"color:red\">*</span></mat-label>\n                                                <mat-select (selectionChange)=\"carregarEquipamentos()\"\n                                                    name=\"cdTipoAtendimento\" [(ngModel)]=\"form.cdTipoAtendimento\">\n                                                    <mat-option *ngFor=\"let t of tiposAtendimento\"\n                                                        [value]=\"t.cdTipoAtendimento\">\n                                                        {{t.dsTipoAtendimento}}\n                                                    </mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                            <!-- <label for=\"company\">Tipo Chamado<span style=\"color:red\">*</span></label>\n                                            <select class=\"form-control\" name=\"cdTipoAtendimento\"\n                                                [(ngModel)]=\"form.cdTipoAtendimento\" placeholder=\"Tipo atendimento\"\n                                                required>\n                                                <option *ngFor=\"let ta of tiposAtendimento\"\n                                                    value=\"{{ta.cdTipoAtendimento}}\"\n                                                    [selected]=\"form.cdTipoAtendimento == ta.cdTipoAtendimento\">\n                                                    {{ta.dsTipoAtendimento}}\n                                                </option>\n\n                                            </select> -->\n                                        </div>\n                                    </div>\n\n                                    <!-- <hr> -->\n                                    <h4>Descrição do Serviço <span style=\"color:red\">*</span></h4>\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                                            <textarea class=\"form-control\" type=\"text\" name=\"dsDescricao\"\n                                                [(ngModel)]=\"form.dsDescricao\"></textarea>\n                                        </div>\n                                    </div>\n\n                                    <hr>\n\n                                    <h4>Equipamentos <span style=\"color:red\">*</span></h4>\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-5 col-md-5 col-sm-12\">\n                                            <input type=\"text\" class=\"form-control\" name=\"dsEquipamento\"\n                                                [(ngModel)]=\"equipamento.dsEquipamento\" style=\"display: inline-block;\">\n                                        </div>\n                                        <div class=\"col-lg-5 col-md-5 col-sm-12\">\n                                            <mat-form-field style=\"width: 100%;\">\n                                                <mat-label>Tipo</mat-label>\n                                                <mat-select [(ngModel)]=\"equipamento.dsTipo\" name=\"tiposEquipamento\">\n                                                    <mat-option *ngFor=\"let tipo of tiposEquipamento\" [value]=\"tipo\">\n                                                        {{tipo}}\n                                                    </mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                            <!-- <select class=\"form-control\" [(ngModel)]=\"equipamento.dsTipo\"  name=\"dsTipo\">\n                                                <option *ngFor=\"let tipo of tiposEquipamento\" value=\"{{tipo}}\"\n                                                    selected=\"{{tipo == 'GMG'}}\" >\n                                                    {{tipo}}\n                                                </option>\n                                            </select> -->\n                                        </div>\n                                        <div class=\"col-lg-2 col-md-2 col-sm-12\">\n\n                                            <button title=\"Editar\" style=\"float: right;\" (click)=\"addEquipamento()\"\n                                                class=\"btn btn-fill btn-info btn-simple btn-md\"\n                                                [disabled]=\"!equipamento.dsEquipamento || !equipamento.dsTipo\">\n                                                Adicionar\n                                                <i class=\"fa fa-plus\"></i>\n                                            </button>\n\n                                        </div>\n                                    </div>\n                                    <br>\n                                    <div class=\"content table-responsive table-full-width\">\n                                        <table class=\"table\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Nome</th>\n                                                    <th>Tipo</th>\n                                                    <th></th>\n\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n\n                                                <tr *ngFor=\"let e of form.equipamentos; let i = index\">\n                                                    <td><b>{{e.dsEquipamento}}</b></td>\n\n                                                    <td>{{e.dsTipo}}</td>\n\n                                                    <td class=\"td-actions text-right\">\n\n                                                        <a rel=\"tooltip\" title=\"Remove\" (click)=\"deletarEquipamento(i)\"\n                                                            class=\"btn btn-danger btn-fill btn-simple btn-md\"\n                                                            [disabled]=\"form.cdAtendimento\">\n                                                            Excluir\n                                                            <i class=\"fa fa-trash\"></i>\n                                                        </a>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n\n                                    <hr>\n\n                                    <div>\n\n                                        <button class=\"btn btn-fill btn-theme\" (click)=\"salvar($event)\"\n                                            style=\"margin-right: 10px;\">Salvar&nbsp; <i class=\"fa fa-save\"></i></button>\n                                        <button class=\"btn btn-fill btn-danger\" [routerLink]=\"['/atendimento/detalhe']\"\n                                            [queryParams]=\"{cdAtendimento: form.cdAtendimento}\" [disabled]=\"form.stStatus != 'chamado'\"\n                                             style=\"margin-right: 10px;\">Gerar\n                                            Atendimento&nbsp; <i class=\"fa fa-file\"></i></button>\n                                        <button class=\"btn btn-fill btn-theme\" [routerLink]=\"['/chamado/consulta']\">\n                                            Voltar&nbsp; <i class=\"fa fa-arrow-left\"></i></button>\n                                        <!-- <button class=\"btn btn-danger\" style=\"margin-left: 5px;\" value=\"0\"\n                                        (click)=\"mudarStatusEmpresa($event)\"><i\n                                            class=\"fa fa-close\"></i>&nbsp;Inativar</button> -->\n                                        <!-- <button class=\"btn btn-fill btn-theme\" style=\"margin-left: 5px;\" value=\"1\"\n                                        (click)=\"mudarStatusEmpresa($event)\">Ativar</button> -->\n\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/.col-->\n                </div>\n            </div>\n\n\n        </div>\n        <!--/.col-->\n    </div><!-- /.container-fluid -->\n\n</body>\n<!-- Button trigger modal -->\n<!-- Modal -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cliente/cliente-consulta/cliente-consulta.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cliente/cliente-consulta/cliente-consulta.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClienteClienteConsultaClienteConsultaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n    input::-webkit-input-placeholder {\n        color: black;\n        /*Change the placeholder color*/\n        opacity: 0.5;\n        /*Change the opacity between 0 and 1*/\n    }\n</style>\n<ngx-spinner color=\"#ed1c24\" type=\"line-scale\" size=\"medium\"></ngx-spinner>\n\n<div class=\"container-fluid\" style=\"padding: 0 !important\">\n    <div class=\"col-sm-12 col-md-12 col-lg-12\" style=\"margin-top: 10px;\">\n        <div class=\"card\" style=\"border: none;\">\n            <div class=\"card-body\" style=\"padding: 0 !important;\">\n                <div class=\"card\">\n                    <div class=\"card-header\"\n                        style=\"background-color: #2f353b; color: white; padding: 15px; font-size: 20px;\">\n                        <b>\n                        </b>\n                    </div>\n                    <div class=\"card-body\">\n                        <div style=\"padding: 25px;\">\n                            <table width=\"100%\">\n                                <thead>\n                                    <tr style=\"width: 100%;\">\n                                        <td width=\"10%\"></td>\n                                        <td width=\"70%\"> </td>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr height=\"50px\">\n                                        <td> <label for=\"company\"><b>Nome da Empresa</b></label></td>\n                                        <td> <input type=\"text\" class=\"form-control col-6\"\n                                                [(ngModel)]=\"filtro.nmEmpresa\" placeholder=\"Digite o nome da empresa\">\n                                        </td>\n                                    </tr>\n                                    <tr height=\"50px\">\n                                        <td> <label for=\"company\"><b>CNPJ</b></label>\n                                        </td>\n                                        <td> <input type=\"text\" class=\"form-control col-6\"\n                                                [(ngModel)]=\"filtro.nrDocumento\" placeholder=\"Digite o CNPJ\"></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <hr><br>\n                            <div class=\"form-group\">\n                                <button class=\"btn btn-fill btn-theme\" (click)=\"buscar()\" style=\"margin-right: 5px\"><i\n                                        class=\"fa fa-search\"></i>&nbsp;Buscar</button>\n                                <button class=\"btn btn-fill btn-theme\" [routerLink]=\"['/cliente/detalhe']\"\n                                    [queryParams]=\"{new: 1}\"><i class=\"fa fa-file\"></i>&nbsp;Novo</button>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <div class=\"card-body\" style=\"padding: 0;\">\n                        <table class=\"table table-striped\">\n                            <thead style=\"background: #24292e; color: white;\">\n                                <tr>\n                                    <th style=\"padding: 15px; color: white;\">ID</th>\n                                    <th style=\"padding: 15px; color: white;\">Empresa</th>\n                                    <th style=\"padding: 15px; color: white;\">CNPJ</th>\n                                    <th style=\"padding: 15px; color: white;\">I.E</th>\n                                    <th style=\"padding: 15px; color: white;\">Status</th>\n                                    <th style=\"padding: 15px; color: white;\"></th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr\n                                    *ngFor=\"let cliente of clientes  | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize\">\n                                    <td>{{cliente.cdEmpresa}}</td>\n                                    <td><b>{{cliente.nmEmpresa}}</b></td>\n                                    <td>\n                                        <span>{{cliente.nrDocumento | mask: '00.000.000/0000-00' }}</span></td>\n                                    <td>\n                                        <span *ngIf=\"cliente.nrInscricaoEstadual\">{{cliente.nrInscricaoEstadual}}</span>\n                                        <span *ngIf=\"!cliente.nrInscricaoEstadual\">Não informado</span>\n                                    </td>\n                                    <td *ngIf=\"cliente.stStatus == 'ativo'\">Ativo</td>\n                                    <td *ngIf=\"cliente.stStatus == 'inativo'\">Inativo</td>\n                                    <td>\n                                        <button class=\"btn btn-theme\"\n                                            [routerLink]=\"['/cliente/detalhe']\"\n                                            [queryParams]=\"{cdCliente: cliente.cdEmpresa}\">Editar</button>\n                                        <button class=\"btn btn-fill btn-primary\"  style=\"float: right;\" [routerLink]=\"['/chamado/detalhe']\"\n                                            [queryParams]=\"{cdEmpresa: cliente.cdEmpresa}\">Chamado</button>\n                                        \n\n\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <ngb-pagination style=\"float: right; margin-right: 25px;\" [(page)]=\"page\" [pageSize]=\"pageSize\"\n                    [collectionSize]=\"clientes.length\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"\n                    *ngIf=\"clientes.length > 0\">\n                </ngb-pagination>\n\n            </div>\n        </div>\n\n\n    </div>\n    <!--/.col-->\n</div><!-- /.container-fluid -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cliente/cliente-detalhe/cliente-detalhe.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cliente/cliente-detalhe/cliente-detalhe.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClienteClienteDetalheClienteDetalheComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n    input::-webkit-input-placeholder {\n        color: black;\n        /*Change the placeholder color*/\n        opacity: 0.5;\n        /*Change the opacity between 0 and 1*/\n    }\n\n    .modal-backdrop {\n        z-index: 2;\n    }\n\n    .input-error input {\n        border-color: red;\n    }\n\n    .input-error label{\n        color:red;\n    }\n</style>\n\n<ngx-spinner color=\"#ed1c24\" type=\"line-scale\" size=\"medium\"></ngx-spinner>\n\n<body>\n\n\n\n    <!-- breaking change 'cui-breadcrumb' -->\n    <!-- deprecation warning for 'app-breadcrumb' -->\n    <!--<ol class=\"breadcrumb\">-->\n    <!--<app-breadcrumb></app-breadcrumb>-->\n    <!--&lt;!&ndash; Breadcrumb Menu&ndash;&gt;-->\n    <!--<li class=\"breadcrumb-menu d-md-down-none\">-->\n    <!--<div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">-->\n    <!--<a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>-->\n    <!--<a class=\"btn\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>-->\n    <!--<a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\n    <!--</div>-->\n    <!--</li>-->\n    <!--</ol>-->\n    <div class=\"container-fluid\" style=\"padding: 0 !important\">\n        <div class=\"col-sm-12 col-md-12 col-lg-12\" style=\"margin-top: 25px;\">\n            <div class=\"card\" style=\"border: none;\">\n                <div class=\"card-body\" style=\"padding: 0;\">\n                    <div class=\"col-sm-12 col-md-12 col-lg-12\" style=\"padding: 0;\">\n                        <div class=\"card\">\n                            <div class=\"card-body\">\n                                <form style=\"padding: 30px;\">\n                                    <input type=\"hidden\">\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-lg-12 col-md-12 col-sm-12\" [class]=\"{'input-error': empresaFormSubmitted && !form.nmEmpresa}\"> \n                                            <label for=\"company\" >Nome da Empresa <span\n                                                    style=\"color:red\">*</span></label>\n                                            <input type=\"text\" class=\"form-control\" name=\"nmEmpresa\"\n                                                [(ngModel)]=\"form.nmEmpresa\" placeholder=\"Digite o nome da empresa\"\n                                                required>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-lg-6 col-md-6 col-sm-12\" [class]=\"{'input-error': empresaFormSubmitted && !form.nrDocumento}\">\n                                            <label for=\"vat\">CNPJ <span style=\"color:red\">*</span></label>\n                                            <input type=\"text\" class=\"form-control\" [dropSpecialCharacters]=\"false\"\n                                                [(ngModel)]=\"form.nrDocumento\" mask='00.000.000/0000-00' name=\"nrCnpj\"\n                                                id=\"vat\" placeholder=\"Digite o número do CNPJ\">\n                                        </div>\n                                        <div class=\"form-group col-lg-6 col-md-6 col-sm-12\" >\n                                            <label for=\"street\">Inscrição Estadual</label>\n                                            <input type=\"text\" class=\"form-control\" name=\"nrIe\"\n                                                [dropSpecialCharacters]=\"false\" mask='000.000.000.000'\n                                                [(ngModel)]=\"form.nrInscricaoEstadual\"\n                                                placeholder=\"Digite o número da Inscrição Estadual\">\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-lg-2 col-md-2 col-sm-12\" [class]=\"{'input-error': empresaFormSubmitted && !form.nrCep}\">\n                                            <label for=\"company\">CEP <span style=\"color:red\">*</span></label>\n                                            <input type=\"text\" class=\"form-control\" name=\"nrCep\"\n                                                [dropSpecialCharacters]=\"true\" mask='00000-000'\n                                                (blur)=\"carregarEnderecoEmpresaByCep()\" [(ngModel)]=\"form.nrCep\"\n                                                placeholder=\"Digite o CEP da empresa\" required>\n                                        </div>\n                                        <div class=\"form-group col-lg-8 col-md-8 col-sm-12\" [class]=\"{'input-error': empresaFormSubmitted && !form.nmRua}\">\n                                            <label for=\"company\">Endereço <span style=\"color:red\">*</span></label>\n                                            <input type=\"text\" class=\"form-control\" name=\"nmRua\"\n                                                [(ngModel)]=\"form.nmRua\" placeholder=\"Digite o endereço da empresa\"\n                                                required>\n                                        </div>\n                                        <div class=\"form-group col-lg-2 col-md-2 col-sm-12\" [class]=\"{'input-error': empresaFormSubmitted && !form.nrNumero}\">\n                                            <label for=\"company\">Número <span style=\"color:red\">*</span></label>\n                                            <input type=\"text\" class=\"form-control\" name=\"nrNumero\"\n                                                [(ngModel)]=\"form.nrNumero\" placeholder=\"Digite o número da empresa\"\n                                                required>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-lg-6 col-md-6 col-sm-12\" >\n                                            <label for=\"company\">Complemento \n                                                < </label>\n                                                    <input type=\"text\" class=\"form-control\" name=\"dsComplemento\"\n                                                        [(ngModel)]=\"form.dsComplemento\"\n                                                        placeholder=\"Digite o complemento\" required>\n                                        </div>\n                                        <div class=\"form-group col-lg-6 col-md-6 col-sm-12\" [class]=\"{'input-error': empresaFormSubmitted && !form.nmBairro}\">\n                                            <label for=\"company\">Bairro <span style=\"color:red\">*</span></label>\n                                            <input type=\"text\" class=\"form-control\" name=\"nmBairro\"\n                                                [(ngModel)]=\"form.nmBairro\" placeholder=\"Digite o bairro\" required>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-lg-6 col-md-6 col-sm-12\" [class]=\"{'input-error': empresaFormSubmitted && !form.nmCidade}\">\n                                            <label for=\"street\">Cidade <span style=\"color:red\">*</span></label>\n                                            <input type=\"text\" class=\"form-control\" name=\"nmCidade\"\n                                                [(ngModel)]=\"form.nmCidade\" placeholder=\"Digite a cidade\" required>\n                                        </div>\n                                        <div class=\"form-group col-lg-6 col-md-6 col-sm-12\" [class]=\"{'input-error': empresaFormSubmitted && !form.nmEstado}\">\n                                            <label for=\"vat\">Estado <span style=\"color:red\">*</span></label>\n                                            <input type=\"text\" class=\"form-control\" name=\"nmEstado\"\n                                                [(ngModel)]=\"form.nmEstado\" placeholder=\"Digite o estado\" required>\n                                        </div>\n\n                                    </div>\n                                    <hr>\n                                    <button title=\"Editar\" style=\"float: right;\" (click)=\"addUnidade()\"\n                                        data-target=\"#modalDetalheUnidade\" data-toggle=\"modal\"\n                                        class=\"btn btn-fill btn-info btn-simple btn-md\">\n                                        Novo\n                                        <i class=\"fa fa-edit\"></i>\n                                    </button>\n                                    <h4>Unidades</h4>\n                                    <br>\n                                    <div class=\"content table-responsive table-full-width\">\n                                        <table class=\"table\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Unidade</th>\n                                                    <th>Endereço</th>\n                                                    <th>Contato</th>\n                                                    <th>Telefone</th>\n                                                    <th>Contrato</th>\n                                                    <th></th>\n\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n\n                                                <tr *ngFor=\"let u of form.unidades; let i = index\">\n                                                    <td><b>{{u.nmUnidade}}</b></td>\n                                                    <td>\n                                                        {{u.nmRua}} {{u.nrNumero}} {{u.dsComplemento}}\n                                                        <br>{{u.nmBairro}}\n                                                        <br>{{u.nmCidade}}/{{u.nmEstado}}\n                                                    </td>\n                                                    <td>{{u.nmContatoCli}}</td>\n                                                    <td>{{u.nrTelefone}}</td>\n                                                    <td>\n                                                        <span *ngIf=\"u.fgClienteContrato == 0\">Não</span>\n                                                        <span *ngIf=\"u.fgClienteContrato == 1\">Sim</span>\n                                                    </td>\n                                                    <td class=\"td-actions text-right\">\n\n                                                        <button  *ngIf=\"u.fgClienteContrato\" [disabled]=\"!u.nrDuracaoContrato || !u.dtInicioContrato\" rel=\"tooltip\" title=\"Editar\" style=\"margin-right: 5px;\"\n                                                            (click)=\"gerarAtendimentosContrato(u)\"\n                                                            class=\"btn btn-fill btn-primary btn-simple btn-md\">\n                                                            Gerar Atendimentos\n                                                        </button>\n\n                                                        <button rel=\"tooltip\" title=\"Editar\" style=\"margin-right: 5px;\"\n                                                            (click)=\"editarUnidade(u)\"\n                                                            data-target=\"#modalDetalheUnidade\" data-toggle=\"modal\"\n                                                            class=\"btn btn-fill btn-info btn-simple btn-md\">\n                                                            Editar\n                                                            <i class=\"fa fa-edit\"></i>\n                                                        </button>\n\n                                                        <a rel=\"tooltip\" title=\"Remove\" (click)=\"inativarUnidade(u)\"\n                                                            *ngIf=\"u.fgAtivo == 1\"\n                                                            class=\"btn btn-danger btn-fill btn-simple btn-md\">\n                                                            Inativar\n                                                            <i class=\"fa fa-trash\"></i>\n                                                        </a>\n\n                                                        <a rel=\"tooltip\" title=\"Remove\" (click)=\"reativarUnidade(u)\"\n                                                            *ngIf=\"u.fgAtivo == 0\"\n                                                            class=\"btn btn-primary btn-fill btn-simple btn-md\">\n                                                            Reativar\n                                                            <i class=\"fa fa-check\"></i>\n                                                        </a>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                    <hr>\n                                    <div>\n\n                                        <button class=\"btn btn-fill btn-theme\" (click)=\"salvar($event)\"\n                                            style=\"margin-right: 10px;\">Salvar&nbsp;<i class=\"fa fa-save\"></i></button>\n                                        <button class=\"btn btn-fill btn-theme\" [routerLink]=\"['/cliente/consulta']\">\n                                            Voltar&nbsp; <i class=\"fa fa-arrow-left\"></i></button>\n                                        <!-- <button class=\"btn btn-danger\" style=\"margin-left: 5px;\" value=\"0\"\n                                        (click)=\"mudarStatusEmpresa($event)\"><i\n                                            class=\"fa fa-close\"></i>&nbsp;Inativar</button> -->\n                                        <!-- <button class=\"btn btn-fill btn-theme\" style=\"margin-left: 5px;\" value=\"1\"\n                                        (click)=\"mudarStatusEmpresa($event)\">Ativar</button> -->\n\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/.col-->\n                </div>\n            </div>\n\n\n        </div>\n        <!--/.col-->\n    </div><!-- /.container-fluid -->\n\n    <div class=\"modal fade\" id=\"modalDetalheUnidade\" role=\"dialog\" data-backdrop=\"false\" aria-hidden=\"true\"\n        style=\"z-index: 10;\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <h3><b>Informações Unidade</b></h3>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-12 col-md-12 col-sm-12\">\n                            <label for=\"company\">Nome da Unidade <span style=\"color:red\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" name=\"nmEmpresa\" [(ngModel)]=\"item.nmUnidade\"\n                                placeholder=\"Digite o nome da empresa\" required>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-2 col-md-2 col-sm-12\">\n                            <label for=\"company\">CEP <span style=\"color:red\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" name=\"nrCep\" [dropSpecialCharacters]=\"true\"\n                                mask='00000-000' (blur)=\"carregarEnderecoUnidadeByCep()\" [(ngModel)]=\"item.nrCep\"\n                                placeholder=\"Digite o CEP da empresa\" required>\n                        </div>\n                        <div class=\"form-group col-lg-8 col-md-8 col-sm-12\">\n                            <label for=\"company\">Endereço <span style=\"color:red\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" name=\"nmRua\" [(ngModel)]=\"item.nmRua\"\n                                placeholder=\"Digite o endereço da empresa\" required>\n                        </div>\n                        <div class=\"form-group col-lg-2 col-md-2 col-sm-12\">\n                            <label for=\"company\">Número <span style=\"color:red\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" name=\"nrNumero\" [(ngModel)]=\"item.nrNumero\"\n                                placeholder=\"Digite o número da empresa\" required>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-6 col-md-6 col-sm-12\">\n                            <label for=\"company\">Complemento </label>\n                            <input type=\"text\" class=\"form-control\" name=\"dsComplemento\"\n                                [(ngModel)]=\"item.dsComplemento\" placeholder=\"Complemento da Unidade\" required>\n                        </div>\n                        <div class=\"form-group col-lg-6 col-md-6 col-sm-12\">\n                            <label for=\"company\">Bairro  <span style=\"color:red\">*</span> </label>\n                            <input type=\"text\" class=\"form-control\" name=\"nmBairro\" [(ngModel)]=\"item.nmBairro\"\n                                placeholder=\"Bairro da Unidade\" required>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-6 col-md-6 col-sm-12\">\n                            <label for=\"street\">Cidade <span style=\"color:red\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" name=\"nmCidade\" [(ngModel)]=\"item.nmCidade\"\n                                placeholder=\"Cidade da Unidade\" required>\n                        </div>\n                        <div class=\"form-group col-lg-6 col-md-6 col-sm-12\">\n                            <label for=\"vat\">Estado <span style=\"color:red\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" name=\"nmEstado\" [(ngModel)]=\"item.nmEstado\"\n                                placeholder=\"Estado da Unidade\" required>\n                        </div>\n\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-12 col-md-12 col-sm-12\">\n                            <label for=\"street\">Contato Cliente <span style=\"color:red\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" name=\"nrTelefone\" [(ngModel)]=\"item.nmContatoCli\"\n                                placeholder=\"Responsável Cliente\" required>\n                        </div>\n\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-6 col-md-6 col-sm-12\">\n                            <label for=\"street\">Telefone <span style=\"color:red\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" name=\"nrTelefone\" [(ngModel)]=\"item.nrTelefone\"\n                                placeholder=\"Telefone para Contato\" [dropSpecialCharacters]=\"false\"\n                                mask='(00) 0000-0000' required>\n                        </div>\n                        <div class=\"form-group col-lg-6 col-md-6 col-sm-12\">\n                            <label for=\"vat\">Celular </label>\n                            <input type=\"text\" class=\"form-control\" name=\"nrCelular\" [(ngModel)]=\"item.nrCelular\"\n                                placeholder=\"Celular para Contato\" [dropSpecialCharacters]=\"false\"\n                                mask='(00) 00000-0000' required>\n                        </div>\n\n                    </div>\n                    <hr>\n                    <h3><b>Informações Contrato</b></h3>\n                    <div class=\"row\">\n                        <div class=\"checkbox col-lg-12 col-md-12 col-sm-12\">\n                            <input type=\"checkbox\" value=true [(ngModel)]=\"item.fgClienteContrato\" id=\"checkbox1\"\n                                data-toggle=\"checkbox\">\n                            <label for=\"checkbox1\">\n                                Contrato Regular?\n                            </label>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-6 col-md-6 col-sm-12\">\n                            <label for=\"street\">Duração Contrato <span style=\"color:red\">*</span></label>\n                            <input type=\"number\" class=\"form-control\" name=\"nrDuracaoContrato\"\n                                [(ngModel)]=\"item.nrDuracaoContrato\" [disabled]=\"!item.fgClienteContrato\"\n                                placeholder=\"Duração do contrato (Meses)\" required>\n                        </div>\n                        <div class=\"form-group col-lg-6 col-md-6 col-sm-12\">\n                            <label for=\"street\">Data de início do contrato <span style=\"color:red\">*</span></label>\n                            <mat-form-field style=\"display: block;\">\n                                <mat-label>Início</mat-label>\n                                <input matInput name=\"dtInicioContrato\" [matDatepicker]=\"inicioContratoPicker\"\n                                    [(ngModel)]=\"item.dtInicioContrato\" [disabled]=\"!item.fgClienteContrato\"\n                                    (click)=\"inicioContratoPicker.open()\">\n                                <mat-datepicker-toggle matSuffix [for]=\"inicioContratoPicker\">\n                                </mat-datepicker-toggle>\n                                <mat-datepicker #inicioContratoPicker></mat-datepicker>\n                            </mat-form-field>\n                        </div>\n\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-6 col-md-6 col-sm-12\">\n                            <label for=\"vat\">Dia Previsto </label>\n                            <input type=\"number\" class=\"form-control\" name=\"nrDiaPrevisto\"\n                                [(ngModel)]=\"item.nrDiaPrevisto\" [disabled]=\"!item.fgClienteContrato\"\n                                placeholder=\"Dia do mês previsto para o atendimento\" required>\n                        </div>\n                        <div class=\"form-group col-lg-6 col-md-6 col-sm-12\">\n                            <label for=\"vat\">Técnico Previsto </label>\n                            <select class=\"form-control\" name=\"nrDiaPrevisto\" [(ngModel)]=\"item.cdTecnicoPrevisto\"\n                                [disabled]=\"!item.fgClienteContrato\" placeholder=\"Técnico previsto para o atendimento\"\n                                required>\n                                <option *ngFor=\"let t of tecnicos\" value=\"{{t.cdLogin}}\"\n                                    [selected]=\"item.cdTecnicoPrevisto == t.cdLogin\">{{t.nmUser}}</option>\n\n                            </select>\n                        </div>\n                    </div>\n                    <hr>\n                    <h3><b>Equipamentos Contrato</b></h3>\n                    <div class=\"row\">\n                        <div class=\"col-lg-5 col-md-5 col-sm-12\">\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"equipamento.dsEquipamento\"\n                                style=\"display: inline-block;\" [disabled]=\"!item.fgClienteContrato\">\n                        </div>\n                        <div class=\"col-lg-5 col-md-5 col-sm-12\">\n\n                            <select class=\"form-control\" [(ngModel)]=\"equipamento.dsTipo\">\n                                <option *ngFor=\"let tipo of tiposEquipamento\" value=\"{{tipo}}\"\n                                    [disabled]=\"!item.fgClienteContrato\">{{tipo}}\n                                </option>\n                            </select>\n                        </div>\n                        <div class=\"col-lg-2 col-md-2 col-sm-12\">\n\n                            <button title=\"Editar\" style=\"float: right;\" (click)=\"addEquipamento(item)\" \n                                [disabled]=\"(!item.fgClienteContrato) || (!equipamento.dsEquipamento || !equipamento.dsTipo)\" class=\"btn btn-fill btn-info btn-simple btn-md\">\n                                Adicionar\n                                <i class=\"fa fa-plus\"></i>\n                            </button>\n\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                            <div class=\"content table-responsive table-full-width\"\n                                style=\"padding-left: 15px; padding-right: 15px;\">\n                                <table class=\"table\">\n                                    <thead>\n                                        <tr>\n                                            <th>Nome</th>\n                                            <th>Tipo</th>\n                                            <th></th>\n\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n\n                                        <tr *ngFor=\"let e of item.equipamentos; let i = index\">\n                                            <td>{{e.dsEquipamento}}</td>\n                                            <td>{{e.dsTipo}}</td>\n                                            <td class=\"td-actions text-right\">\n\n                                                <a rel=\"tooltip\" title=\"Remove\" (click)=\"removerEquipamento(item,i)\"\n                                                    class=\"btn btn-danger btn-fill btn-simple btn-md\">\n                                                    Deletar\n                                                    <i class=\"fa fa-trash\"></i>\n                                                </a>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-fill btn-secondary\" data-dismiss=\"modal\">Fechar</button>\n                    <button type=\"button\" class=\"btn btn-fill btn-danger\" [disabled]=\"(!item.fgClienteContrato && (!item.nmUnidade || !item.nmContatoCli || !item.nrTelefone || !item.nrCep \n                    || !item.nmRua || !item.nrNumero || !item.nmBairro \n                    || !item.nmCidade || !item.nmEstado) || (item.fgClienteContrato && (!item.nmUnidade || !item.nmContatoCli || !item.nrTelefone || !item.nrCep || item.equipamentos.length == 0\n                    || !item.nmRua || !item.nrNumero || !item.nmBairro \n                    || !item.nmCidade || !item.nmEstado || !item.nrDuracaoContrato || !item.dtInicioContrato)))\" (click)=\"salvarUnidade()\">Salvar</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</body>\n<!-- Button trigger modal -->\n<!-- Modal -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsAdminLayoutAdminLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n\n    @keyframes spin {\n        0% {\n            transform: rotate(0deg);\n        }\n\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n</style>\n<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"black\" data-image=\"\" style=\"z-index: 1;\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-5.jpg)\"></div>\n    </div>\n\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMap('maps')\">\n            <footer-cmp></footer-cmp>\n        </div>\n    </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/lbd/lbd-chart/lbd-chart.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lbd/lbd-chart/lbd-chart.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLbdLbdChartLbdChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n  <div class=\"header\">\n    <h4 class=\"title\">{{ title }}</h4>\n    <p class=\"category\">{{ subtitle }}</p>\n  </div>\n  <div class=\"content\">\n    <div [attr.id]=\"chartId\" class=\"ct-chart {{ chartClass }}\"></div>\n\n    <div class=\"footer\">\n      <div class=\"legend\">\n        <span *ngFor=\"let item of legendItems\">\n          <i [ngClass]=\"item.imageClass\"></i> {{ item.title }}\n        </span>\n      </div>\n      <hr *ngIf=\"withHr\">\n      <div class=\"stats\">\n        <i [ngClass]=\"footerIconClass\"></i> {{ footerText }}\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n    @media (min-width: 1200px) {\n        .padding-fix {\n            margin-left: 200px;\n        }\n    }\n\n    @media (min-width: 992px) and (max-width: 1199px) {\n        .padding-fix {\n            margin-left: 100px;\n        }\n    }\n\n\n    input::-webkit-input-placeholder {\n        color: black;\n        /*Change the placeholder color*/\n        opacity: 0.5;\n        /*Change the opacity between 0 and 1*/\n    }\n</style>\n\n<ngx-spinner></ngx-spinner>\n\n\n<body style=\"background-image: url('assets/img/back2.jpg'); \">\n\n    <!-- <div  style=\"text-align: center; padding: 280px;\"> -->\n    <div class=\"container\">\n        <div class=\"row\" style=\"margin-bottom: 220px;\"></div>\n        <div class=\"row\">\n            <div class=\"col-lg-8 col-md-10 col-lg-12 padding-fix\">\n                <div style=\"text-align: center; height: 400px; background-color: rgba(0,0,0,0.5); padding: 50px;\">\n                    <img width=\"300px\" src=\"assets/img/logo-ups-negativo.png\">\n                    <!-- <form> -->\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': submitted && !form.dsUser }\">\n\n                        <div class=\"input-group\" style=\"margin-bottom: 10px; margin-top: 20px;\">\n                            <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n\n                            <input type=\"text\" [(ngModel)]=\"form.dsUser\" class=\"form-control\" placeholder=\"Usuário\" />\n                        </div>\n                    </div>\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': submitted && !form.dsPass }\">\n                        <div class=\"input-group \" style=\"margin-bottom: 15px;\">\n                            <span class=\"input-group-addon\"><i class=\"fa pe-7s-key\"></i></span>\n\n                            <input type=\"password\" [(ngModel)]=\"form.dsPass\" class=\"form-control \"\n                                placeholder=\"Senha\" />\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <button (click)=\"login()\" [disabled]=\"loading\" class=\"btn btn-fill btn-danger\">\n                            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                            Login\n                        </button>\n                        &nbsp;\n                        <button (click)=\"limpar()\" [disabled]=\"loading\" class=\"btn btn-fill btn-secundary\">\n                            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                            Limpar\n                        </button>\n                    </div>\n                    <!-- </form> -->\n                </div>\n            </div>\n        </div>\n        <div class=\"row\"></div>\n    </div>\n</body>\n<!-- </div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <p class=\"copyright pull-right\">\n            Powered by <a href=\"http://gaalaxy17.github.io\">Igor Iwashita </a>\n        </p>\n    </div>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n    .btn-theme {\n        background-color: #2f353b;\n        color: white;\n        border-color: #2f353b;\n    }\n\n    .btn-theme:hover {\n        background-color: #24292e;\n        color: white;\n        border-color: #24292e;\n    }\n\n    .btn-theme:enabled {\n        background-color: #24292e;\n        color: white;\n        border-color: #24292e;\n    }\n</style>\n<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">UPS Tecnologia</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-left\">\n                <li>\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <!-- <i class=\"fa fa-dashboard\"></i> -->\n                        <!-- <p class=\"hidden-lg hidden-md\">{{getTitle()}}</p> -->\n                    </a>\n                </li>\n                <!-- <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-globe\"></i>\n                        <b class=\"caret\"></b>\n                        <span class=\"notification hidden-sm hidden-xs\">5</span>\n                        <p class=\"hidden-lg hidden-md\">\n                            5 Notifications\n                            <b class=\"caret\"></b>\n                        </p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Notification 1</a></li>\n                        <li><a href=\"#\">Notification 2</a></li>\n                        <li><a href=\"#\">Notification 3</a></li>\n                        <li><a href=\"#\">Notification 4</a></li>\n                        <li><a href=\"#\">Another notification</a></li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        <i class=\"fa fa-search\"></i>\n                        <p class=\"hidden-lg hidden-md\">Search</p>\n                    </a>\n                </li> -->\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n                <!-- <li>\n                    <a href=\"#\">\n                        <p>Account</p>\n                    </a>\n                </li> -->\n                <!-- <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <p>\n                            Dropdown\n                            <b class=\"caret\"></b>\n                        </p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Action</a></li>\n                        <li><a href=\"#\">Another action</a></li>\n                        <li><a href=\"#\">Something</a></li>\n                        <li><a href=\"#\">Another action</a></li>\n                        <li><a href=\"#\">Something</a></li>\n                        <li class=\"divider\"></li>\n                        <li><a href=\"#\">Separated link</a></li>\n                    </ul>\n                </li> -->\n                <li>\n                    <button class=\"btn btn-fill btn-theme\" (click)=\"auth.logout()\">{{user.dsUser}}</button>\n\n                </li>\n                <li class=\"separator hidden-lg hidden-md\"></li>\n            </ul>\n        </div>\n    </div>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"sidebar-wrapper\">\n    <div class=\"logo\">\n        <a href=\"\" class=\"simple-text\">\n            <div class=\"logo-img\">\n                <!-- <img src=\"/assets/img/angular2-logo-white.png\"/> -->\n            </div>\n            <!-- UPS Tecnologia -->\n            <img width=\"190px\" src=\"assets/img/logo-ups-negativo.png\"/>\n\n        </a>\n    </div>\n    <ul class=\"nav responsive-nav\">\n        <li *ngIf=\"isMobileMenu()\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"fa fa-dashboard\"></i>\n\t\t\t\t<p class=\"hidden-lg hidden-md\">Dashboard</p>\n            </a>\n        </li>\n        <li class=\"dropdown\" *ngIf=\"isMobileMenu()\">\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                    <i class=\"fa fa-globe\"></i>\n                    <b class=\"caret hidden-sm hidden-xs\"></b>\n                    <span class=\"notification hidden-sm hidden-xs\">5</span>\n\t\t\t\t\t<p class=\"hidden-lg hidden-md\">\n\t\t\t\t\t\t5 Notifications\n\t\t\t\t\t\t<b class=\"caret\"></b>\n\t\t\t\t\t</p>\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Notification 1555</a></li>\n                <li><a href=\"#\">Notification 2</a></li>\n                <li><a href=\"#\">Notification 3</a></li>\n                <li><a href=\"#\">Notification 4</a></li>\n                <li><a href=\"#\">Another notification</a></li>\n              </ul>\n        </li>\n        <li *ngIf=\"isMobileMenu()\">\n           <a>\n                <i class=\"fa fa-search\"></i>\n\t\t\t\t<p class=\"hidden-lg hidden-md\">Search</p>\n            </a>\n        </li>\n        <li *ngIf=\"isMobileMenu()\">\n           <a href=\"\">\n               <p>Account</p>\n            </a>\n        </li>\n        <li class=\"dropdown\" *ngIf=\"isMobileMenu()\">\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                    <p>\n    \t\t\t\t\tDropdown\n    \t\t\t\t\t<b class=\"caret\"></b>\n    \t\t\t\t</p>\n\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Action</a></li>\n                <li><a href=\"#\">Another action</a></li>\n                <li><a href=\"#\">Something</a></li>\n                <li><a href=\"#\">Another action</a></li>\n                <li><a href=\"#\">Something</a></li>\n                <li class=\"divider\"></li>\n                <li><a href=\"#\">Separated link</a></li>\n              </ul>\n        </li>\n        <li *ngIf=\"isMobileMenu()\">\n            <a>\n                <p>Log out</p>\n            </a>\n        </li>\n        <li class=\"separator hidden-lg hidden-md\" *ngIf=\"isMobileMenu()\"></li>\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n            <a  [routerLink]=\"[menuItem.path]\">\n                <i class=\"{{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./layouts/admin-layout/admin-layout.module": "./src/app/layouts/admin-layout/admin-layout.module.ts"
    };

    function webpackAsyncContext(req) {
      return Promise.resolve().then(function () {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        var id = map[req];
        return __webpack_require__.t(id, 7);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! no static exports found */

  /***/
  function srcAppAppComponentTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(location) {
        _classCallCheck(this, AppComponent);

        this.location = location;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isMap",
        value: function isMap(path) {
          var titlee = this.location.prepareExternalUrl(this.location.path());
          titlee = titlee.slice(1);

          if (path == titlee) {
            return false;
          } else {
            return true;
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: common_1.Location
      }];
    };

    AppComponent = __decorate([core_1.Component({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    }), __metadata("design:paramtypes", [common_1.Location])], AppComponent);
    exports.AppComponent = AppComponent;
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! no static exports found */

  /***/
  function srcAppAppModuleTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var animations_1 = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var forms_1 = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var http_1 = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var app_routing_1 = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");

    var navbar_module_1 = __webpack_require__(
    /*! ./shared/navbar/navbar.module */
    "./src/app/shared/navbar/navbar.module.ts");

    var footer_module_1 = __webpack_require__(
    /*! ./shared/footer/footer.module */
    "./src/app/shared/footer/footer.module.ts");

    var sidebar_module_1 = __webpack_require__(
    /*! ./sidebar/sidebar.module */
    "./src/app/sidebar/sidebar.module.ts");

    var app_component_1 = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var login_component_1 = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var pt_1 = __webpack_require__(
    /*! @angular/common/locales/pt */
    "./node_modules/@angular/common/locales/pt.js");

    var commons_module_1 = __webpack_require__(
    /*! ./commons/commons.module */
    "./src/app/commons/commons.module.ts");

    var angular_notifier_1 = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");

    var admin_layout_module_1 = __webpack_require__(
    /*! ./layouts/admin-layout/admin-layout.module */
    "./src/app/layouts/admin-layout/admin-layout.module.ts");

    var admin_layout_component_1 = __webpack_require__(
    /*! ./layouts/admin-layout/admin-layout.component */
    "./src/app/layouts/admin-layout/admin-layout.component.ts");

    var auth_interceptor_1 = __webpack_require__(
    /*! ./commons/auth.interceptor */
    "./src/app/commons/auth.interceptor.ts");

    var ng_bootstrap_1 = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var atendimento_tv_component_1 = __webpack_require__(
    /*! ./atendimento-tv/atendimento-tv.component */
    "./src/app/atendimento-tv/atendimento-tv.component.ts");

    common_1.registerLocaleData(pt_1["default"]);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([core_1.NgModule({
      imports: [commons_module_1.CommonsModule, animations_1.BrowserAnimationsModule, router_1.RouterModule, app_routing_1.AppRoutingModule, forms_1.FormsModule, admin_layout_module_1.AdminLayoutModule, forms_1.FormsModule, http_1.HttpClientModule, navbar_module_1.NavbarModule, footer_module_1.FooterModule, sidebar_module_1.SidebarModule, forms_1.ReactiveFormsModule, angular_notifier_1.NotifierModule.withConfig({
        position: {
          horizontal: {
            position: "right"
          },
          vertical: {
            position: "top"
          }
        },
        theme: "material"
      }), ng_bootstrap_1.NgbModule],
      declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, admin_layout_component_1.AdminLayoutComponent, atendimento_tv_component_1.AtendimentoTvComponent],
      providers: [{
        provide: http_1.HTTP_INTERCEPTORS,
        useClass: auth_interceptor_1.AuthInterceptor,
        multi: true
      }, {
        provide: core_1.LOCALE_ID,
        useValue: 'pt-BR'
      }],
      bootstrap: [app_component_1.AppComponent]
    })], AppModule);
    exports.AppModule = AppModule;
    /***/
  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! no static exports found */

  /***/
  function srcAppAppRoutingTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var platform_browser_1 = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var admin_layout_component_1 = __webpack_require__(
    /*! ./layouts/admin-layout/admin-layout.component */
    "./src/app/layouts/admin-layout/admin-layout.component.ts");

    var login_component_1 = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");

    var atendimento_tv_component_1 = __webpack_require__(
    /*! ./atendimento-tv/atendimento-tv.component */
    "./src/app/atendimento-tv/atendimento-tv.component.ts");

    var routes = [// {
    //   path: '',
    //   redirectTo: 'dashboard',
    //   pathMatch: 'full',
    // }, 
    {
      path: 'login',
      pathMatch: 'full',
      component: login_component_1.LoginComponent
    }, {
      path: 'atendimento/tv',
      pathMatch: 'full',
      component: atendimento_tv_component_1.AtendimentoTvComponent
    }, {
      path: '',
      component: admin_layout_component_1.AdminLayoutComponent,
      children: [{
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }]
    }, {
      path: '**',
      redirectTo: 'dashboard'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = __decorate([core_1.NgModule({
      imports: [common_1.CommonModule, platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(routes, {
        useHash: true
      })],
      exports: [router_1.RouterModule]
    })], AppRoutingModule);
    exports.AppRoutingModule = AppRoutingModule;
    /***/
  },

  /***/
  "./src/app/atendimento-tv/atendimento-tv.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/atendimento-tv/atendimento-tv.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAtendimentoTvAtendimentoTvComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F0ZW5kaW1lbnRvLXR2L2F0ZW5kaW1lbnRvLXR2LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/atendimento-tv/atendimento-tv.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/atendimento-tv/atendimento-tv.component.ts ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function srcAppAtendimentoTvAtendimentoTvComponentTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var atendimento_service_1 = __webpack_require__(
    /*! app/services/atendimento.service */
    "./src/app/services/atendimento.service.ts");

    var rxjs_1 = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AtendimentoTvComponent =
    /*#__PURE__*/
    function () {
      function AtendimentoTvComponent(atendimentoService, router) {
        _classCallCheck(this, AtendimentoTvComponent);

        this.atendimentoService = atendimentoService;
        this.router = router;
        this.atendimentos = [];
      }

      _createClass(AtendimentoTvComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.carregarDados();
          this.updateSubscription = rxjs_1.interval(15000).subscribe(function (val) {
            _this.carregarDados();
          });
        }
      }, {
        key: "voltar",
        value: function voltar() {
          this.updateSubscription.unsubscribe();
          this.router.navigateByUrl("/dashboard");
        }
      }, {
        key: "carregarDados",
        value: function carregarDados() {
          var _this2 = this;

          this.atendimentoService.getAtendimentos().then(function (results) {
            console.log(results);
            _this2.atendimentos = results;
          });
        }
      }]);

      return AtendimentoTvComponent;
    }();

    AtendimentoTvComponent.ctorParameters = function () {
      return [{
        type: atendimento_service_1.AtendimentoService
      }, {
        type: router_1.Router
      }];
    };

    AtendimentoTvComponent = __decorate([core_1.Component({
      selector: 'app-atendimento-tv',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./atendimento-tv.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/atendimento-tv/atendimento-tv.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./atendimento-tv.component.css */
      "./src/app/atendimento-tv/atendimento-tv.component.css"))["default"]]
    }), __metadata("design:paramtypes", [atendimento_service_1.AtendimentoService, router_1.Router])], AtendimentoTvComponent);
    exports.AtendimentoTvComponent = AtendimentoTvComponent;
    /***/
  },

  /***/
  "./src/app/atendimento/atendimento-consulta/atendimento-consulta.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/atendimento/atendimento-consulta/atendimento-consulta.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAtendimentoAtendimentoConsultaAtendimentoConsultaComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-theme{\n    background-color: #2f353b; \n    color: white;\n    border-color: #2f353b;\n  }\n  \n  .btn-theme:hover{\n    background-color: #24292e;  \n    color: white;\n    border-color: #24292e;\n  }\n  \n  .btn-theme:enabled{\n    background-color: #24292e;  \n    color: white;\n    border-color: #24292e;\n  }\n  \n  .btn-theme-secondary{\n    background-color: #3f4f5a;\n    border-color: #3f4f5a;\n    color: white;\n  }\n  \n  .btn-theme-secondary:hover{\n    background-color: #415461;\n    border-color: #415461;\n    color: white;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXRlbmRpbWVudG8vYXRlbmRpbWVudG8tY29uc3VsdGEvYXRlbmRpbWVudG8tY29uc3VsdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsWUFBWTtFQUNkOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9hdGVuZGltZW50by9hdGVuZGltZW50by1jb25zdWx0YS9hdGVuZGltZW50by1jb25zdWx0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi10aGVtZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzNTNiOyBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMmYzNTNiO1xuICB9XG4gIFxuICAuYnRuLXRoZW1lOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7ICBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjQyOTJlO1xuICB9XG5cbiAgLmJ0bi10aGVtZTplbmFibGVke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7ICBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjQyOTJlO1xuICB9XG4gIFxuICAuYnRuLXRoZW1lLXNlY29uZGFyeXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y0ZjVhO1xuICAgIGJvcmRlci1jb2xvcjogIzNmNGY1YTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5idG4tdGhlbWUtc2Vjb25kYXJ5OmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTU0NjE7XG4gICAgYm9yZGVyLWNvbG9yOiAjNDE1NDYxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/atendimento/atendimento-consulta/atendimento-consulta.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/atendimento/atendimento-consulta/atendimento-consulta.component.ts ***!
    \************************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppAtendimentoAtendimentoConsultaAtendimentoConsultaComponentTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var angular_notifier_1 = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");

    var atendimento_service_1 = __webpack_require__(
    /*! app/services/atendimento.service */
    "./src/app/services/atendimento.service.ts");

    var chamado_service_1 = __webpack_require__(
    /*! app/services/chamado.service */
    "./src/app/services/chamado.service.ts");

    var AtendimentoConsultaComponent =
    /*#__PURE__*/
    function () {
      function AtendimentoConsultaComponent(chamadoService, atendimentoService, notifierService) {
        _classCallCheck(this, AtendimentoConsultaComponent);

        this.chamadoService = chamadoService;
        this.atendimentoService = atendimentoService;
        this.notifierService = notifierService;
        this.page = 1;
        this.pageSize = 10;
        this.filtro = {
          cdAtendimento: null,
          nmEmpresa: null,
          cdTipoAtendimento: null,
          dsTipoEquipamento: null,
          dtFiltroDe: null,
          dtFiltroAte: null,
          cdLoginTecnico: null,
          dtFiltroAtendimentoDe: null,
          dtFiltroAtendimentoAte: null,
          stStatus: "atendimento_pendente_confirmacao"
        };
        this.atendimentos = [];
        this.empresas = [];
        this.unidades = [];
        this.tiposAtendimento = [];
        this.tecnicos = [];
        this.tiposEquipamento = ["GMG", "Nobreak", "Infraestrutura"];
        this.notifier = notifierService;
      }

      _createClass(AtendimentoConsultaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.carregarCombos();
          this.buscar();
        }
      }, {
        key: "carregarCombos",
        value: function carregarCombos() {
          var _this3 = this;

          this.chamadoService.carregarCombos().then(function (combos) {
            _this3.tiposAtendimento = combos.tiposAtendimento;
            _this3.empresas = combos.empresas;
            _this3.tecnicos = combos.tecnicos;
          });
        }
      }, {
        key: "buscar",
        value: function buscar() {
          var _this4 = this;

          this.atendimentoService.buscar(this.filtro).then(function (atendimentos) {
            _this4.atendimentos = atendimentos;

            if (atendimentos.length > 0) {
              atendimentos.forEach(function (item, i) {
                item.fgChecked = false;
              });
            }

            console.log(atendimentos);
          });
        }
      }, {
        key: "limpar",
        value: function limpar() {
          this.filtro = {
            cdAtendimento: null,
            nmEmpresa: null,
            cdTipoAtendimento: null,
            dtFiltroDe: null,
            dtFiltroAte: null,
            cdLoginTecnico: null,
            dtFiltroAtendimentoDe: null,
            dtFiltroAtendimentoAte: null,
            stStatus: "atendimento_pendente_confirmacao"
          };
        }
      }, {
        key: "confirmarSelecionados",
        value: function confirmarSelecionados() {
          var _this5 = this;

          var success = false;

          if (this.atendimentos.length > 0) {
            this.atendimentos.forEach(function (item, i) {
              if (item.fgChecked) {
                _this5.atendimentoService.confirmar(item.cdAtendimento).then(function (results) {
                  console.log(results);
                  success = true;

                  _this5.buscar();
                });
              }
            });

            if (success) {
              this.notifier.notify("success", "Atendimentos confirmado com sucesso!");
            }
          }
        }
      }, {
        key: "exportarDados",
        value: function exportarDados() {
          var data = this.atendimentos;
          var filename = "atendimentos";

          if (data.length > 0) {
            var csvData = this.convertToCSV(data, ['cdAtendimento', 'dtCriacao', 'dtAtendimento', 'nmEmpresa', 'nmUnidade', 'dsTipoAtendimento', 'tecnicos', 'dsUserChamado', 'dsUserAtendimento', 'stStatus']);
            console.log(csvData);
            var blob = new Blob(["\uFEFF" + csvData], {
              type: 'text/csv;charset=utf-8;'
            });
            var dwldLink = document.createElement("a");
            var url = URL.createObjectURL(blob);
            var isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;

            if (isSafariBrowser) {
              //if Safari open in new window to save file with random filename.
              dwldLink.setAttribute("target", "_blank");
            }

            dwldLink.setAttribute("href", url);
            dwldLink.setAttribute("download", filename + ".csv");
            dwldLink.style.visibility = "hidden";
            document.body.appendChild(dwldLink);
            dwldLink.click();
            document.body.removeChild(dwldLink);
          }
        }
      }, {
        key: "convertToCSV",
        value: function convertToCSV(objArray, headerList) {
          var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
          var str = '';
          var row = '-,';

          for (var index in headerList) {
            row += headerList[index] + ',';
          }

          row = row.slice(0, -1);
          str += row + '\r\n';

          for (var i = 0; i < array.length; i++) {
            var line = i + 1 + '';

            for (var _index in headerList) {
              var head = headerList[_index];
              line += ',' + array[i][head];
            }

            str += line + '\r\n';
          }

          return str;
        }
      }]);

      return AtendimentoConsultaComponent;
    }();

    AtendimentoConsultaComponent.ctorParameters = function () {
      return [{
        type: chamado_service_1.ChamadoService
      }, {
        type: atendimento_service_1.AtendimentoService
      }, {
        type: angular_notifier_1.NotifierService
      }];
    };

    AtendimentoConsultaComponent = __decorate([core_1.Component({
      selector: 'app-atendimento-consulta',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./atendimento-consulta.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/atendimento/atendimento-consulta/atendimento-consulta.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./atendimento-consulta.component.css */
      "./src/app/atendimento/atendimento-consulta/atendimento-consulta.component.css"))["default"]]
    }), __metadata("design:paramtypes", [chamado_service_1.ChamadoService, atendimento_service_1.AtendimentoService, angular_notifier_1.NotifierService])], AtendimentoConsultaComponent);
    exports.AtendimentoConsultaComponent = AtendimentoConsultaComponent;
    /***/
  },

  /***/
  "./src/app/atendimento/atendimento-detalhe/atendimento-detalhe.component.css":
  /*!***********************************************************************************!*\
    !*** ./src/app/atendimento/atendimento-detalhe/atendimento-detalhe.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAtendimentoAtendimentoDetalheAtendimentoDetalheComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-theme{\n    background-color: #2f353b; \n    color: white;\n    border-color: #2f353b;\n  }\n  \n  .btn-theme:hover{\n    background-color: #24292e;  \n    color: white;\n    border-color: #24292e;\n  }\n  \n  .btn-theme:enabled{\n    background-color: #24292e;  \n    color: white;\n    border-color: #24292e;\n  }\n  \n  .btn-theme-secondary{\n    background-color: #3f4f5a;\n    border-color: #3f4f5a;\n    color: white;\n  }\n  \n  .btn-theme-secondary:hover{\n    background-color: #415461;\n    border-color: #415461;\n    color: white;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXRlbmRpbWVudG8vYXRlbmRpbWVudG8tZGV0YWxoZS9hdGVuZGltZW50by1kZXRhbGhlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvYXRlbmRpbWVudG8vYXRlbmRpbWVudG8tZGV0YWxoZS9hdGVuZGltZW50by1kZXRhbGhlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXRoZW1le1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjM1M2I7IFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICMyZjM1M2I7XG4gIH1cbiAgXG4gIC5idG4tdGhlbWU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjkyZTsgIFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICMyNDI5MmU7XG4gIH1cblxuICAuYnRuLXRoZW1lOmVuYWJsZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjkyZTsgIFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICMyNDI5MmU7XG4gIH1cbiAgXG4gIC5idG4tdGhlbWUtc2Vjb25kYXJ5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjRmNWE7XG4gICAgYm9yZGVyLWNvbG9yOiAjM2Y0ZjVhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLmJ0bi10aGVtZS1zZWNvbmRhcnk6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNTQ2MTtcbiAgICBib3JkZXItY29sb3I6ICM0MTU0NjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/atendimento/atendimento-detalhe/atendimento-detalhe.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/atendimento/atendimento-detalhe/atendimento-detalhe.component.ts ***!
    \**********************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppAtendimentoAtendimentoDetalheAtendimentoDetalheComponentTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var angular_notifier_1 = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var chamado_service_1 = __webpack_require__(
    /*! app/services/chamado.service */
    "./src/app/services/chamado.service.ts");

    var cliente_service_1 = __webpack_require__(
    /*! app/services/cliente.service */
    "./src/app/services/cliente.service.ts");

    var tipoAtendimento_1 = __webpack_require__(
    /*! app/commons/enum/tipoAtendimento */
    "./src/app/commons/enum/tipoAtendimento.ts");

    var atendimento_service_1 = __webpack_require__(
    /*! app/services/atendimento.service */
    "./src/app/services/atendimento.service.ts");

    var AtendimentoDetalheComponent =
    /*#__PURE__*/
    function () {
      function AtendimentoDetalheComponent(chamadoService, notifierService, route, clienteService, atendimentoService) {
        _classCallCheck(this, AtendimentoDetalheComponent);

        this.chamadoService = chamadoService;
        this.notifierService = notifierService;
        this.route = route;
        this.clienteService = clienteService;
        this.atendimentoService = atendimentoService;
        this.cdCliente = null;
        this.chamadoFormSubmitted = false;
        this.cdEmpresa = null;
        this.cdAtendimento = null;
        this.tiposAtendimento = [];
        this.empresas = [];
        this.unidades = [];
        this.tecnicos = [];
        this.form = {
          cdEmpresa: null,
          cdUnidade: null,
          cdTipoAtendimento: null,
          equipamentos: [],
          tecnicos: []
        };
        this.equipamento = {
          dsEquipamento: null,
          dsTipo: null,
          fgAtivo: true
        };
        this.tecnico = null;
        this.tiposEquipamento = ["GMG", "Nobreak", "Infraestrutura"];
        this.notifier = notifierService;
      }

      _createClass(AtendimentoDetalheComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.carregarCombos().then(function (combos) {
            _this6.route.queryParams.subscribe(function (params) {
              if (params['cdAtendimento']) {
                _this6.cdAtendimento = params['cdAtendimento'];
                _this6.form.cdAtendimento = parseInt(params['cdAtendimento']);

                _this6.carregarUnidades();

                _this6.detalhar();
              }
            });
          });
        }
      }, {
        key: "carregarCombos",
        value: function carregarCombos() {
          var _this7 = this;

          return new Promise(function (resolve, reject) {
            _this7.chamadoService.carregarCombos().then(function (combos) {
              resolve(combos);
              console.log(combos);
              _this7.tiposAtendimento = combos.tiposAtendimento;
              _this7.empresas = combos.empresas;
              _this7.tecnicos = combos.tecnicos;
            })["catch"](function (fail) {
              console.log(fail);
              reject(fail);
            });
          });
        }
      }, {
        key: "carregarUnidades",
        value: function carregarUnidades() {
          var _this8 = this;

          this.clienteService.carregarUnidades(this.form.cdEmpresa).then(function (unidades) {
            console.log(unidades);
            _this8.unidades = unidades;

            if (_this8.unidades.length == 1) {
              _this8.form.cdUnidade = unidades[0].cdUnidade;
            }

            console.log(_this8.form);
          });
        }
      }, {
        key: "addEquipamento",
        value: function addEquipamento() {
          if (this.form.equipamentos) {
            if (this.equipamento) {
              var equipamento = {
                dsEquipamento: this.equipamento.dsEquipamento,
                dsTipo: this.equipamento.dsTipo,
                fgAtivo: this.equipamento.fgAtivo
              };
              this.form.equipamentos.push(equipamento);
            }
          }
        }
      }, {
        key: "addTecnico",
        value: function addTecnico() {
          var _this9 = this;

          var hasFound = false;

          if (this.form.tecnicos) {
            if (this.tecnico) {
              if (this.form.tecnicos.length > 0) {
                this.form.tecnicos.forEach(function (item, i) {
                  if (item.cdLogin == _this9.tecnico.cdLogin) {
                    hasFound = true;
                  }
                });
              }

              if (!hasFound) {
                this.form.tecnicos.push(this.tecnico);
              }
            }
          }
        }
      }, {
        key: "carregarEquipamentos",
        value: function carregarEquipamentos() {
          var _this10 = this;

          if (!this.form.cdAtendimento) {
            if (this.form.cdTipoAtendimento == tipoAtendimento_1.TipoAtendimento.PREVENTIVA || this.form.cdTipoAtendimento == tipoAtendimento_1.TipoAtendimento.PREVENTIVA_E_CORRETIVA) {
              this.chamadoService.carregarEquipamentos(this.form.cdUnidade).then(function (equipamentos) {
                _this10.form.equipamentos = [];

                if (equipamentos.length > 0) {
                  equipamentos.forEach(function (item, i) {
                    var equip = {
                      dsEquipamento: item.dsEquipamento,
                      dsTipo: item.dsTipo,
                      fgAtivo: true
                    };

                    _this10.form.equipamentos.push(equip);
                  });
                }
              });
            }
          }
        }
      }, {
        key: "deletarEquipamento",
        value: function deletarEquipamento(i) {
          this.form.equipamentos.splice(i, 1);
        }
      }, {
        key: "salvar",
        value: function salvar() {
          var _this11 = this;

          this.chamadoFormSubmitted = true;

          if (this.form.cdEmpresa && this.form.cdUnidade && this.form.cdTipoAtendimento && this.form.dsDescricao && this.form.equipamentos.length > 0 && this.form.tecnicos.length > 0 && this.form.dtAtendimento && this.form.hrAtendimento) {
            console.log(this.form);
            this.atendimentoService.salvar(this.form).then(function (results) {
              if (results) {
                _this11.form.cdAtendimento = results.cdAtendimento;
              }

              _this11.notifier.notify("success", "Dados salvos com sucesso.");
            });
          } else {
            this.notifier.notify("error", "Há campos de preenchimento obrigatório em branco");
          }
        }
      }, {
        key: "detalhar",
        value: function detalhar() {
          var _this12 = this;

          this.chamadoService.detalhar(this.cdAtendimento).then(function (chamado) {
            _this12.form = chamado;

            if (!chamado.dtAtendimento) {
              _this12.form.dtAtendimento = null;
            }

            if (!chamado.tecnicos) {
              _this12.form.tecnicos = [];
            }

            _this12.carregarUnidades();
          });
        }
      }, {
        key: "confirmarAtendimento",
        value: function confirmarAtendimento() {
          var _this13 = this;

          this.chamadoFormSubmitted = true;

          if (this.form.cdEmpresa && this.form.cdUnidade && this.form.cdTipoAtendimento && this.form.dsDescricao && this.form.equipamentos.length > 0 && this.form.tecnicos.length > 0 && this.form.dtAtendimento && this.form.hrAtendimento) {
            console.log(this.form);
            this.atendimentoService.salvar(this.form).then(function (results) {
              if (results) {
                _this13.form.cdAtendimento = results.cdAtendimento;
              } // this.notifier.notify("success", "Dados salvos com sucesso.");


              _this13.atendimentoService.confirmar(_this13.form.cdAtendimento).then(function (results) {
                _this13.notifier.notify("success", "Atendimento confirmado com sucesso!");

                _this13.detalhar();
              });
            });
          } else {
            this.notifier.notify("error", "Há campos de preenchimento obrigatório em branco");
          }
        }
      }, {
        key: "removerTecnico",
        value: function removerTecnico(i) {
          this.form.tecnicos.splice(i, 1);
        }
      }]);

      return AtendimentoDetalheComponent;
    }();

    AtendimentoDetalheComponent.ctorParameters = function () {
      return [{
        type: chamado_service_1.ChamadoService
      }, {
        type: angular_notifier_1.NotifierService
      }, {
        type: router_1.ActivatedRoute
      }, {
        type: cliente_service_1.ClienteService
      }, {
        type: atendimento_service_1.AtendimentoService
      }];
    };

    AtendimentoDetalheComponent = __decorate([core_1.Component({
      selector: 'app-atendimento-detalhe',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./atendimento-detalhe.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/atendimento/atendimento-detalhe/atendimento-detalhe.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./atendimento-detalhe.component.css */
      "./src/app/atendimento/atendimento-detalhe/atendimento-detalhe.component.css"))["default"]]
    }), __metadata("design:paramtypes", [chamado_service_1.ChamadoService, angular_notifier_1.NotifierService, router_1.ActivatedRoute, cliente_service_1.ClienteService, atendimento_service_1.AtendimentoService])], AtendimentoDetalheComponent);
    exports.AtendimentoDetalheComponent = AtendimentoDetalheComponent;
    /***/
  },

  /***/
  "./src/app/chamado/chamado-consulta/chamado-consulta.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/chamado/chamado-consulta/chamado-consulta.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChamadoChamadoConsultaChamadoConsultaComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-theme{\n    background-color: #2f353b; \n    color: white;\n    border-color: #2f353b;\n  }\n  \n  .btn-theme:hover{\n    background-color: #24292e;  \n    color: white;\n    border-color: #24292e;\n  }\n  \n  .btn-theme:enabled{\n    background-color: #24292e;  \n    color: white;\n    border-color: #24292e;\n  }\n  \n  .btn-theme-secondary{\n    background-color: #3f4f5a;\n    border-color: #3f4f5a;\n    color: white;\n  }\n  \n  .btn-theme-secondary:hover{\n    background-color: #415461;\n    border-color: #415461;\n    color: white;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbWFkby9jaGFtYWRvLWNvbnN1bHRhL2NoYW1hZG8tY29uc3VsdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsWUFBWTtFQUNkOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9jaGFtYWRvL2NoYW1hZG8tY29uc3VsdGEvY2hhbWFkby1jb25zdWx0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi10aGVtZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzNTNiOyBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMmYzNTNiO1xuICB9XG4gIFxuICAuYnRuLXRoZW1lOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7ICBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjQyOTJlO1xuICB9XG5cbiAgLmJ0bi10aGVtZTplbmFibGVke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7ICBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjQyOTJlO1xuICB9XG4gIFxuICAuYnRuLXRoZW1lLXNlY29uZGFyeXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y0ZjVhO1xuICAgIGJvcmRlci1jb2xvcjogIzNmNGY1YTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5idG4tdGhlbWUtc2Vjb25kYXJ5OmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTU0NjE7XG4gICAgYm9yZGVyLWNvbG9yOiAjNDE1NDYxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/chamado/chamado-consulta/chamado-consulta.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/chamado/chamado-consulta/chamado-consulta.component.ts ***!
    \************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppChamadoChamadoConsultaChamadoConsultaComponentTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var chamado_service_1 = __webpack_require__(
    /*! app/services/chamado.service */
    "./src/app/services/chamado.service.ts");

    var ChamadoConsultaComponent =
    /*#__PURE__*/
    function () {
      function ChamadoConsultaComponent(chamadoService) {
        _classCallCheck(this, ChamadoConsultaComponent);

        this.chamadoService = chamadoService;
        this.page = 1;
        this.pageSize = 10;
        this.filtro = {
          cdAtendimento: null,
          nmEmpresa: null,
          cdTipoAtendimento: null,
          dtFiltroDe: null,
          dtFiltroAte: null
        };
        this.chamados = [];
        this.empresas = [];
        this.unidades = [];
        this.tiposAtendimento = [];
      }

      _createClass(ChamadoConsultaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.carregarCombos();
          this.buscar();
        }
      }, {
        key: "carregarCombos",
        value: function carregarCombos() {
          var _this14 = this;

          this.chamadoService.carregarCombos().then(function (combos) {
            _this14.tiposAtendimento = combos.tiposAtendimento;
            _this14.empresas = combos.empresas;
          });
        }
      }, {
        key: "buscar",
        value: function buscar() {
          var _this15 = this;

          this.chamadoService.buscar(this.filtro).then(function (results) {
            _this15.chamados = results;
            console.log(results);
          });
        }
      }, {
        key: "limpar",
        value: function limpar() {
          this.filtro = {
            cdAtendimento: null,
            nmEmpresa: null,
            cdTipoAtendimento: null,
            dtFiltroDe: null,
            dtFiltroAte: null
          };
        }
      }]);

      return ChamadoConsultaComponent;
    }();

    ChamadoConsultaComponent.ctorParameters = function () {
      return [{
        type: chamado_service_1.ChamadoService
      }];
    };

    ChamadoConsultaComponent = __decorate([core_1.Component({
      selector: 'app-chamado-consulta',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./chamado-consulta.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chamado/chamado-consulta/chamado-consulta.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./chamado-consulta.component.css */
      "./src/app/chamado/chamado-consulta/chamado-consulta.component.css"))["default"]]
    }), __metadata("design:paramtypes", [chamado_service_1.ChamadoService])], ChamadoConsultaComponent);
    exports.ChamadoConsultaComponent = ChamadoConsultaComponent;
    /***/
  },

  /***/
  "./src/app/chamado/chamado-detalhe/chamado-detalhe.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/chamado/chamado-detalhe/chamado-detalhe.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChamadoChamadoDetalheChamadoDetalheComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-theme{\n    background-color: #2f353b; \n    color: white;\n    border-color: #2f353b;\n  }\n  \n  .btn-theme:hover{\n    background-color: #24292e;  \n    color: white;\n    border-color: #24292e;\n  }\n  \n  .btn-theme:enabled{\n    background-color: #24292e;  \n    color: white;\n    border-color: #24292e;\n  }\n  \n  .btn-theme-secondary{\n    background-color: #3f4f5a;\n    border-color: #3f4f5a;\n    color: white;\n  }\n  \n  .btn-theme-secondary:hover{\n    background-color: #415461;\n    border-color: #415461;\n    color: white;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbWFkby9jaGFtYWRvLWRldGFsaGUvY2hhbWFkby1kZXRhbGhlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvY2hhbWFkby9jaGFtYWRvLWRldGFsaGUvY2hhbWFkby1kZXRhbGhlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXRoZW1le1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjM1M2I7IFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICMyZjM1M2I7XG4gIH1cbiAgXG4gIC5idG4tdGhlbWU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjkyZTsgIFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICMyNDI5MmU7XG4gIH1cblxuICAuYnRuLXRoZW1lOmVuYWJsZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjkyZTsgIFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICMyNDI5MmU7XG4gIH1cbiAgXG4gIC5idG4tdGhlbWUtc2Vjb25kYXJ5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjRmNWE7XG4gICAgYm9yZGVyLWNvbG9yOiAjM2Y0ZjVhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLmJ0bi10aGVtZS1zZWNvbmRhcnk6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNTQ2MTtcbiAgICBib3JkZXItY29sb3I6ICM0MTU0NjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/chamado/chamado-detalhe/chamado-detalhe.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/chamado/chamado-detalhe/chamado-detalhe.component.ts ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function srcAppChamadoChamadoDetalheChamadoDetalheComponentTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var angular_notifier_1 = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var chamado_service_1 = __webpack_require__(
    /*! app/services/chamado.service */
    "./src/app/services/chamado.service.ts");

    var cliente_service_1 = __webpack_require__(
    /*! app/services/cliente.service */
    "./src/app/services/cliente.service.ts");

    var tipoAtendimento_1 = __webpack_require__(
    /*! app/commons/enum/tipoAtendimento */
    "./src/app/commons/enum/tipoAtendimento.ts");

    var ChamadoDetalheComponent =
    /*#__PURE__*/
    function () {
      function ChamadoDetalheComponent(chamadoService, notifierService, route, clienteService) {
        _classCallCheck(this, ChamadoDetalheComponent);

        this.chamadoService = chamadoService;
        this.notifierService = notifierService;
        this.route = route;
        this.clienteService = clienteService;
        this.cdCliente = null;
        this.chamadoFormSubmitted = false;
        this.cdEmpresa = null;
        this.cdAtendimento = null;
        this.tiposAtendimento = [];
        this.empresas = [];
        this.unidades = [];
        this.form = {
          cdEmpresa: null,
          cdUnidade: null,
          cdTipoAtendimento: null,
          equipamentos: []
        };
        this.equipamento = {
          dsEquipamento: null,
          dsTipo: null,
          fgAtivo: true
        };
        this.tiposEquipamento = ["GMG", "Nobreak", "Infraestrutura"];
        this.notifier = notifierService;
      }

      _createClass(ChamadoDetalheComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.carregarCombos().then(function (combos) {
            _this16.route.queryParams.subscribe(function (params) {
              if (params['cdEmpresa']) {
                _this16.cdEmpresa = params['cdEmpresa'];
                _this16.form.cdEmpresa = parseInt(params['cdEmpresa']);

                _this16.carregarUnidades(); // this.detalhar();

              }

              if (params['cdAtendimento']) {
                _this16.cdAtendimento = params['cdAtendimento'];
                _this16.form.cdAtendimento = parseInt(params['cdAtendimento']);

                _this16.carregarUnidades();

                _this16.detalhar();
              }
            });
          });
        }
      }, {
        key: "carregarCombos",
        value: function carregarCombos() {
          var _this17 = this;

          return new Promise(function (resolve, reject) {
            _this17.chamadoService.carregarCombos().then(function (combos) {
              resolve(combos);
              console.log(combos);
              _this17.tiposAtendimento = combos.tiposAtendimento;
              _this17.empresas = combos.empresas;
            })["catch"](function (fail) {
              console.log(fail);
              reject(fail);
            });
          });
        }
      }, {
        key: "carregarUnidades",
        value: function carregarUnidades() {
          var _this18 = this;

          this.clienteService.carregarUnidades(this.form.cdEmpresa).then(function (unidades) {
            console.log(unidades);
            _this18.unidades = unidades;

            if (_this18.unidades.length == 1) {
              _this18.form.cdUnidade = unidades[0].cdUnidade;
            }

            console.log(_this18.form);
          });
        }
      }, {
        key: "addEquipamento",
        value: function addEquipamento() {
          if (this.form.equipamentos) {
            if (this.equipamento) {
              var equipamento = {
                dsEquipamento: this.equipamento.dsEquipamento,
                dsTipo: this.equipamento.dsTipo,
                fgAtivo: this.equipamento.fgAtivo
              };
              this.form.equipamentos.push(equipamento);
            }
          }
        }
      }, {
        key: "carregarEquipamentos",
        value: function carregarEquipamentos() {
          var _this19 = this;

          if (!this.form.cdAtendimento) {
            if (this.form.cdTipoAtendimento == tipoAtendimento_1.TipoAtendimento.PREVENTIVA || this.form.cdTipoAtendimento == tipoAtendimento_1.TipoAtendimento.PREVENTIVA_E_CORRETIVA) {
              this.chamadoService.carregarEquipamentos(this.form.cdUnidade).then(function (equipamentos) {
                _this19.form.equipamentos = [];

                if (equipamentos.length > 0) {
                  equipamentos.forEach(function (item, i) {
                    var equip = {
                      dsEquipamento: item.dsEquipamento,
                      dsTipo: item.dsTipo,
                      fgAtivo: true
                    };

                    _this19.form.equipamentos.push(equip);
                  });
                }
              });
            }
          }
        }
      }, {
        key: "deletarEquipamento",
        value: function deletarEquipamento(i) {
          this.form.equipamentos.splice(i, 1);
        }
      }, {
        key: "salvar",
        value: function salvar() {
          var _this20 = this;

          this.chamadoFormSubmitted = true;

          if (this.form.cdEmpresa && this.form.cdUnidade && this.form.cdTipoAtendimento && this.form.dsDescricao && this.form.equipamentos.length > 0) {
            console.log(this.form);
            this.chamadoService.salvar(this.form).then(function (results) {
              if (results) {
                _this20.form.cdAtendimento = results.cdAtendimento;
              }

              _this20.notifier.notify("success", "Dados salvos com sucesso.");
            });
          } else {
            this.notifier.notify("error", "Há campos de preenchimento obrigatório em branco");
          }
        }
      }, {
        key: "detalhar",
        value: function detalhar() {
          var _this21 = this;

          this.chamadoService.detalhar(this.cdAtendimento).then(function (chamado) {
            _this21.form = chamado;

            _this21.carregarUnidades();
          });
        }
      }]);

      return ChamadoDetalheComponent;
    }();

    ChamadoDetalheComponent.ctorParameters = function () {
      return [{
        type: chamado_service_1.ChamadoService
      }, {
        type: angular_notifier_1.NotifierService
      }, {
        type: router_1.ActivatedRoute
      }, {
        type: cliente_service_1.ClienteService
      }];
    };

    ChamadoDetalheComponent = __decorate([core_1.Component({
      selector: 'app-chamado-detalhe',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./chamado-detalhe.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chamado/chamado-detalhe/chamado-detalhe.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./chamado-detalhe.component.css */
      "./src/app/chamado/chamado-detalhe/chamado-detalhe.component.css"))["default"]]
    }), __metadata("design:paramtypes", [chamado_service_1.ChamadoService, angular_notifier_1.NotifierService, router_1.ActivatedRoute, cliente_service_1.ClienteService])], ChamadoDetalheComponent);
    exports.ChamadoDetalheComponent = ChamadoDetalheComponent;
    /***/
  },

  /***/
  "./src/app/cliente/cliente-consulta/cliente-consulta.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/cliente/cliente-consulta/cliente-consulta.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppClienteClienteConsultaClienteConsultaComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-theme{\n    background-color: #2f353b; \n    color: white;\n    border-color: #2f353b;\n  }\n  \n  .btn-theme:hover{\n    background-color: #24292e;  \n    color: white;\n    border-color: #24292e;\n  }\n  \n  .btn-theme:enabled{\n    background-color: #24292e;  \n    color: white;\n    border-color: #24292e;\n  }\n  \n  .btn-theme-secondary{\n    background-color: #3f4f5a;\n    border-color: #3f4f5a;\n    color: white;\n  }\n  \n  .btn-theme-secondary:hover{\n    background-color: #415461;\n    border-color: #415461;\n    color: white;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZS9jbGllbnRlLWNvbnN1bHRhL2NsaWVudGUtY29uc3VsdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsWUFBWTtFQUNkOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRlL2NsaWVudGUtY29uc3VsdGEvY2xpZW50ZS1jb25zdWx0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi10aGVtZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzNTNiOyBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMmYzNTNiO1xuICB9XG4gIFxuICAuYnRuLXRoZW1lOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7ICBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjQyOTJlO1xuICB9XG5cbiAgLmJ0bi10aGVtZTplbmFibGVke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7ICBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjQyOTJlO1xuICB9XG4gIFxuICAuYnRuLXRoZW1lLXNlY29uZGFyeXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y0ZjVhO1xuICAgIGJvcmRlci1jb2xvcjogIzNmNGY1YTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5idG4tdGhlbWUtc2Vjb25kYXJ5OmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTU0NjE7XG4gICAgYm9yZGVyLWNvbG9yOiAjNDE1NDYxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/cliente/cliente-consulta/cliente-consulta.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/cliente/cliente-consulta/cliente-consulta.component.ts ***!
    \************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppClienteClienteConsultaClienteConsultaComponentTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var cliente_service_1 = __webpack_require__(
    /*! app/services/cliente.service */
    "./src/app/services/cliente.service.ts");

    var ClienteConsultaComponent =
    /*#__PURE__*/
    function () {
      function ClienteConsultaComponent(clienteService) {
        _classCallCheck(this, ClienteConsultaComponent);

        this.clienteService = clienteService;
        this.clientes = [];
        this.page = 1;
        this.pageSize = 10;
        this.filtro = {
          nmEmpresa: null,
          nrDocumento: null
        };
      }

      _createClass(ClienteConsultaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.buscar();
        }
      }, {
        key: "buscar",
        value: function buscar() {
          var _this22 = this;

          this.clienteService.buscar(this.filtro).then(function (results) {
            _this22.clientes = results;
            console.log(results);
          });
        }
      }]);

      return ClienteConsultaComponent;
    }();

    ClienteConsultaComponent.ctorParameters = function () {
      return [{
        type: cliente_service_1.ClienteService
      }];
    };

    ClienteConsultaComponent = __decorate([core_1.Component({
      selector: 'app-cliente-consulta',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./cliente-consulta.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cliente/cliente-consulta/cliente-consulta.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./cliente-consulta.component.css */
      "./src/app/cliente/cliente-consulta/cliente-consulta.component.css"))["default"]]
    }), __metadata("design:paramtypes", [cliente_service_1.ClienteService])], ClienteConsultaComponent);
    exports.ClienteConsultaComponent = ClienteConsultaComponent;
    /***/
  },

  /***/
  "./src/app/cliente/cliente-detalhe/cliente-detalhe.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/cliente/cliente-detalhe/cliente-detalhe.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppClienteClienteDetalheClienteDetalheComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-theme{\n    background-color: #2f353b; \n    color: white;\n    border-color: #2f353b;\n  }\n  \n  .btn-theme:hover{\n    background-color: #24292e;  \n    color: white;\n    border-color: #24292e;\n  }\n  \n  .btn-theme:enabled{\n    background-color: #24292e;  \n    color: white;\n    border-color: #24292e;\n  }\n  \n  .btn-theme-secondary{\n    background-color: #3f4f5a;\n    border-color: #3f4f5a;\n    color: white;\n  }\n  \n  .btn-theme-secondary:hover{\n    background-color: #415461;\n    border-color: #415461;\n    color: white;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZS9jbGllbnRlLWRldGFsaGUvY2xpZW50ZS1kZXRhbGhlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50ZS9jbGllbnRlLWRldGFsaGUvY2xpZW50ZS1kZXRhbGhlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXRoZW1le1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjM1M2I7IFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICMyZjM1M2I7XG4gIH1cbiAgXG4gIC5idG4tdGhlbWU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjkyZTsgIFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICMyNDI5MmU7XG4gIH1cblxuICAuYnRuLXRoZW1lOmVuYWJsZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjkyZTsgIFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICMyNDI5MmU7XG4gIH1cbiAgXG4gIC5idG4tdGhlbWUtc2Vjb25kYXJ5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjRmNWE7XG4gICAgYm9yZGVyLWNvbG9yOiAjM2Y0ZjVhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLmJ0bi10aGVtZS1zZWNvbmRhcnk6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNTQ2MTtcbiAgICBib3JkZXItY29sb3I6ICM0MTU0NjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/cliente/cliente-detalhe/cliente-detalhe.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/cliente/cliente-detalhe/cliente-detalhe.component.ts ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function srcAppClienteClienteDetalheClienteDetalheComponentTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var angular_notifier_1 = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");

    var cliente_service_1 = __webpack_require__(
    /*! app/services/cliente.service */
    "./src/app/services/cliente.service.ts");

    var ng_bootstrap_1 = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var uuid = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/dist/esm-browser/index.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var atendimento_service_1 = __webpack_require__(
    /*! app/services/atendimento.service */
    "./src/app/services/atendimento.service.ts");

    var ClienteDetalheComponent =
    /*#__PURE__*/
    function () {
      function ClienteDetalheComponent(clienteService, notifierService, modalService, route, atendimentoService) {
        _classCallCheck(this, ClienteDetalheComponent);

        this.clienteService = clienteService;
        this.notifierService = notifierService;
        this.modalService = modalService;
        this.route = route;
        this.atendimentoService = atendimentoService;
        this.cdCliente = null;
        this.empresaFormSubmitted = false;
        this.form = {
          nmEmpresa: null,
          nrDocumento: null,
          nrInscricaoEstadual: null,
          nrCep: null,
          nmRua: null,
          nrNumero: null,
          dsComplemento: null,
          nmBairro: null,
          nmEstado: null,
          nmCidade: null,
          unidades: []
        };
        this.item = {
          nmUnidade: null,
          nrCep: null,
          nmRua: null,
          nrNumero: null,
          dsComplemento: null,
          nmBairro: null,
          nmEstado: null,
          nmCidade: null,
          nmContatoCli: null,
          nrTelefone: null,
          nrCelular: null,
          fgClienteContrato: false,
          nrDuracaoContrato: null,
          dtInicioContrato: null,
          nrDiaPrevisto: null,
          tecnicoPrevisto: null,
          fgAtivo: true,
          equipamentos: []
        };
        this.equipamento = {
          dsEquipamento: null,
          dsTipo: null,
          fgAtivo: true
        };
        this.tiposEquipamento = ["GMG", "Nobreak", "Infraestrutura"];
        this.tecnicos = [];
        this.closeResult = '';
        this.notifier = notifierService;
      }

      _createClass(ClienteDetalheComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.carregarCombos();
          this.route.queryParams.subscribe(function (params) {
            if (params['cdCliente']) {
              _this23.cdCliente = params['cdCliente'];

              _this23.detalhar();
            }
          });
        }
      }, {
        key: "carregarEnderecoEmpresaByCep",
        value: function carregarEnderecoEmpresaByCep() {
          var _this24 = this;

          if (this.form.nrCep) {
            this.clienteService.carregarEndereco(this.form.nrCep).then(function (results) {
              console.log(results);

              if (results.erro) {
                _this24.notifier.notify("error", "O CEP inserido é inválido");
              } else {
                if (results.logradouro) {
                  _this24.form.nmRua = results.logradouro;
                }

                if (results.bairro) {
                  _this24.form.nmBairro = results.bairro;
                }

                if (results.uf) {
                  _this24.form.nmEstado = results.uf;
                }

                if (results.localidade) {
                  _this24.form.nmCidade = results.localidade;
                }
              }
            });
          }
        }
      }, {
        key: "carregarEnderecoUnidadeByCep",
        value: function carregarEnderecoUnidadeByCep() {
          var _this25 = this;

          if (this.item.nrCep) {
            this.clienteService.carregarEndereco(this.item.nrCep).then(function (results) {
              console.log(results);

              if (results.erro) {
                _this25.notifier.notify("error", "O CEP inserido é inválido");
              } else {
                if (results.logradouro) {
                  _this25.item.nmRua = results.logradouro;
                }

                if (results.bairro) {
                  _this25.item.nmBairro = results.bairro;
                }

                if (results.uf) {
                  _this25.item.nmEstado = results.uf;
                }

                if (results.localidade) {
                  _this25.item.nmCidade = results.localidade;
                }
              }
            });
          }
        }
      }, {
        key: "carregarCombos",
        value: function carregarCombos() {
          var _this26 = this;

          this.clienteService.carregarCombos().then(function (combos) {
            console.log(combos);
            _this26.tecnicos = combos.tecnicos;
          });
        }
      }, {
        key: "openModalDetalheEndereco",
        value: function openModalDetalheEndereco() {}
      }, {
        key: "openModalDetalheUnidade",
        value: function openModalDetalheUnidade() {}
      }, {
        key: "addUnidade",
        value: function addUnidade() {
          var id = uuid.v4();
          this.item = {
            nmUnidade: null,
            nrCep: null,
            nmRua: null,
            nrNumero: null,
            dsComplemento: null,
            nmBairro: null,
            nmEstado: null,
            nmCidade: null,
            nmContatoCli: null,
            nrTelefone: null,
            nrCelular: null,
            fgClienteContrato: false,
            nrDuracaoContrato: null,
            nrDiaPrevisto: null,
            tecnicoPrevisto: null,
            fgAtivo: true,
            equipamentos: [],
            uuid: id
          };
        }
      }, {
        key: "addEquipamento",
        value: function addEquipamento(item) {
          if (item.equipamentos) {
            if (this.equipamento) {
              var equipamento = {
                dsEquipamento: this.equipamento.dsEquipamento,
                dsTipo: this.equipamento.dsTipo,
                fgAtivo: this.equipamento.fgAtivo
              };
              item.equipamentos.push(equipamento);
            }
          }
        }
      }, {
        key: "salvarUnidade",
        value: function salvarUnidade() {
          var _this27 = this;

          if (this.item) {
            if (this.form.unidades.length > 0) {
              var foundItem = false;
              this.form.unidades.forEach(function (item, i) {
                if (item.uuid && _this27.item.uuid) {
                  if (item.uuid == _this27.item.uuid) {
                    foundItem = true;
                    item.nmUnidade = _this27.item.nmUnidade;
                    item.nrCep = _this27.item.nrCep;
                    item.nmRua = _this27.item.nmRua;
                    item.nrNumero = _this27.item.nrNumero;
                    item.dsComplemento = _this27.item.dsComplemento;
                    item.nmBairro = _this27.item.nmBairro;
                    item.nmEstado = _this27.item.nmEstado;
                    item.nmCidade = _this27.item.nmCidade;
                    item.nmContatoCli = _this27.item.nmContatoCli;
                    item.nrTelefone = _this27.item.nrTelefone;
                    item.nrCelular = _this27.item.nrCelular;
                    item.fgClienteContrato = _this27.item.fgClienteContrato;
                    item.nrDuracaoContrato = _this27.item.nrDuracaoContrato;
                    item.nrDiaPrevisto = _this27.item.nrDiaPrevisto;
                    item.tecnicoPrevisto = _this27.item.tecnicoPrevisto;
                    item.fgAtivo = _this27.item.fgAtivo;
                    item.equipamentos = _this27.item.equipamentos;
                  }
                } else {
                  if (item.cdUnidade == _this27.item.cdUnidade) {
                    foundItem = true;
                    item.nmUnidade = _this27.item.nmUnidade;
                    item.nrCep = _this27.item.nrCep;
                    item.nmRua = _this27.item.nmRua;
                    item.nrNumero = _this27.item.nrNumero;
                    item.dsComplemento = _this27.item.dsComplemento;
                    item.nmBairro = _this27.item.nmBairro;
                    item.nmEstado = _this27.item.nmEstado;
                    item.nmCidade = _this27.item.nmCidade;
                    item.nmContatoCli = _this27.item.nmContatoCli;
                    item.nrTelefone = _this27.item.nrTelefone;
                    item.nrCelular = _this27.item.nrCelular;
                    item.fgClienteContrato = _this27.item.fgClienteContrato;
                    item.nrDuracaoContrato = _this27.item.nrDuracaoContrato;
                    item.nrDiaPrevisto = _this27.item.nrDiaPrevisto;
                    item.tecnicoPrevisto = _this27.item.tecnicoPrevisto;
                    item.fgAtivo = _this27.item.fgAtivo;
                    item.equipamentos = _this27.item.equipamentos;
                  }
                }
              });

              if (!foundItem) {
                this.form.unidades.push(this.item);
              }
            } else {
              this.form.unidades.push(this.item);
            }

            $("#modalDetalheUnidade").modal("hide");
          }
        }
      }, {
        key: "editarUnidade",
        value: function editarUnidade(u) {
          this.item = u;
        }
      }, {
        key: "removerUnidade",
        value: function removerUnidade(index) {
          this.form.unidades.splice(index, 1);
        }
      }, {
        key: "removerEquipamento",
        value: function removerEquipamento(item, index) {
          item.equipamentos.splice(index, 1);
        }
      }, {
        key: "salvar",
        value: function salvar() {
          var _this28 = this;

          this.empresaFormSubmitted = true;

          if (this.form.nmEmpresa && this.form.nrDocumento && this.form.nrCep && this.form.nmRua && this.form.nrNumero && this.form.nmBairro && this.form.nmCidade && this.form.nmEstado) {
            this.clienteService.salvar(this.form).then(function (results) {
              if (results) {
                _this28.form.cdEmpresa = results.cdEmpresa;
              }

              _this28.notifier.notify("success", "Dados salvos com sucesso.");
            });
          } else {
            this.notifier.notify("error", "Há campos de preenchimento obrigatório em branco");
          }
        }
      }, {
        key: "detalhar",
        value: function detalhar() {
          var _this29 = this;

          this.clienteService.detalhar(this.cdCliente).then(function (empresa) {
            _this29.form = empresa;
            console.log(empresa);
          });
        }
      }, {
        key: "inativarUnidade",
        value: function inativarUnidade(unidade) {
          var _this30 = this;

          this.clienteService.mudarStatusUnidade(unidade.cdUnidade, 0).then(function (results) {
            _this30.detalhar();

            console.log(results);
          });
        }
      }, {
        key: "reativarUnidade",
        value: function reativarUnidade(unidade) {
          var _this31 = this;

          this.clienteService.mudarStatusUnidade(unidade.cdUnidade, 1).then(function (results) {
            _this31.detalhar();

            console.log(results);
          });
        }
      }, {
        key: "gerarAtendimentosContrato",
        value: function gerarAtendimentosContrato(unidade) {
          var _this32 = this;

          this.empresaFormSubmitted = true;

          if (this.form.nmEmpresa && this.form.nrDocumento && this.form.nrCep && this.form.nmRua && this.form.nrNumero && this.form.nmBairro && this.form.nmCidade && this.form.nmEstado) {
            this.clienteService.salvar(this.form).then(function (results) {
              if (results) {
                _this32.form.cdEmpresa = results.cdEmpresa;
              }

              _this32.atendimentoService.gerarAtendimentosContrato(unidade.cdUnidade).then(function (results) {
                _this32.notifier.notify("success", "Atendimentos gerados com sucesso.");
              }); // this.notifier.notify("success", "Dados salvos com sucesso.");

            });
          } else {
            this.notifier.notify("error", "Há campos de preenchimento obrigatório em branco");
          }
        }
      }]);

      return ClienteDetalheComponent;
    }();

    ClienteDetalheComponent.ctorParameters = function () {
      return [{
        type: cliente_service_1.ClienteService
      }, {
        type: angular_notifier_1.NotifierService
      }, {
        type: ng_bootstrap_1.NgbModal
      }, {
        type: router_1.ActivatedRoute
      }, {
        type: atendimento_service_1.AtendimentoService
      }];
    };

    ClienteDetalheComponent = __decorate([core_1.Component({
      selector: 'app-cliente-detalhe',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./cliente-detalhe.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cliente/cliente-detalhe/cliente-detalhe.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./cliente-detalhe.component.css */
      "./src/app/cliente/cliente-detalhe/cliente-detalhe.component.css"))["default"]]
    }), __metadata("design:paramtypes", [cliente_service_1.ClienteService, angular_notifier_1.NotifierService, ng_bootstrap_1.NgbModal, router_1.ActivatedRoute, atendimento_service_1.AtendimentoService])], ClienteDetalheComponent);
    exports.ClienteDetalheComponent = ClienteDetalheComponent;
    /***/
  },

  /***/
  "./src/app/commons/auth.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/commons/auth.guard.ts ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function srcAppCommonsAuthGuardTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var auth_service_1 = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(auth, router) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          return __awaiter(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var user;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.auth.getUser();

                  case 2:
                    user = _context.sent;

                    if (!user) {
                      _context.next = 5;
                      break;
                    }

                    return _context.abrupt("return", true);

                  case 5:
                    // redireciona para o login para realizar a autenticacao
                    this.router.navigate(['/login'], {
                      queryParams: {
                        returnUrl: state.url
                      }
                    }); // this.alertService.presentAlert('Atenção', 'Você precisa estar logado para acessar esse conteúdo.');

                    return _context.abrupt("return", false);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: auth_service_1.AuthService
      }, {
        type: router_1.Router
      }];
    };

    AuthGuard = __decorate([core_1.Injectable({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])], AuthGuard);
    exports.AuthGuard = AuthGuard;
    /***/
  },

  /***/
  "./src/app/commons/auth.interceptor.ts":
  /*!*********************************************!*\
    !*** ./src/app/commons/auth.interceptor.ts ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function srcAppCommonsAuthInterceptorTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var rxjs_1 = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var operators_1 = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var auth_service_1 = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var environment_1 = __webpack_require__(
    /*! environments/environment */
    "./src/environments/environment.ts");

    var AuthInterceptor =
    /*#__PURE__*/

    /**
     * Intercepta todas as requisicoes HTTP, adiciona cabecalhos default e realiza logica de autenticacao
     */
    function () {
      function AuthInterceptor(authService) {
        _classCallCheck(this, AuthInterceptor);

        this.authService = authService;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          return this.authService.getUserAsObservable().pipe(operators_1.mergeMap(function (user) {
            if (user && user.dsToken && req.url.split('/')[2] == environment_1.environment.API_ENDPOINT.split('/')[2]) {
              req = req.clone({
                setHeaders: {
                  Authorization: "".concat(user.dsToken)
                }
              });
            }

            return next.handle(req);
          })).pipe(operators_1.catchError(function (error) {
            var errorMessage = '';

            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = "Error: ".concat(error.error.message);
            } else {
              // server-side error
              errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
            }

            console.log(errorMessage);
            return rxjs_1.throwError(error);
          }));
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: auth_service_1.AuthService
      }];
    };

    AuthInterceptor = __decorate([core_1.Injectable({
      providedIn: 'root'
    })
    /**
     * Intercepta todas as requisicoes HTTP, adiciona cabecalhos default e realiza logica de autenticacao
     */
    , __metadata("design:paramtypes", [auth_service_1.AuthService])], AuthInterceptor);
    exports.AuthInterceptor = AuthInterceptor;
    /***/
  },

  /***/
  "./src/app/commons/commons.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/commons/commons.module.ts ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function srcAppCommonsCommonsModuleTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CommonsModule = function CommonsModule() {
      _classCallCheck(this, CommonsModule);
    };

    CommonsModule = __decorate([core_1.NgModule({
      imports: [],
      declarations: [],
      providers: []
    })], CommonsModule);
    exports.CommonsModule = CommonsModule;
    /***/
  },

  /***/
  "./src/app/commons/enum/tipoAtendimento.ts":
  /*!*************************************************!*\
    !*** ./src/app/commons/enum/tipoAtendimento.ts ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function srcAppCommonsEnumTipoAtendimentoTs(module, exports, __webpack_require__) {
    "use strict";

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TipoAtendimento;

    (function (TipoAtendimento) {
      TipoAtendimento[TipoAtendimento["ATENDIMENTO_EMERGENCIAL"] = 1] = "ATENDIMENTO_EMERGENCIAL";
      TipoAtendimento[TipoAtendimento["CORRETIVA"] = 2] = "CORRETIVA";
      TipoAtendimento[TipoAtendimento["PREVENTIVA"] = 3] = "PREVENTIVA";
      TipoAtendimento[TipoAtendimento["PREVENTIVA_E_CORRETIVA"] = 4] = "PREVENTIVA_E_CORRETIVA";
      TipoAtendimento[TipoAtendimento["VISITA_TECNICA"] = 5] = "VISITA_TECNICA";
      TipoAtendimento[TipoAtendimento["OUTROS"] = 6] = "OUTROS";
    })(TipoAtendimento = exports.TipoAtendimento || (exports.TipoAtendimento = {}));
    /***/

  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function srcAppHomeHomeComponentTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var auth_service_1 = __webpack_require__(
    /*! app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(authService) {
        _classCallCheck(this, HomeComponent);

        this.authService = authService;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: auth_service_1.AuthService
      }];
    };

    HomeComponent = __decorate([core_1.Component({
      selector: 'app-home',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    }), __metadata("design:paramtypes", [auth_service_1.AuthService])], HomeComponent);
    exports.HomeComponent = HomeComponent;
    /***/
  },

  /***/
  "./src/app/layouts/admin-layout/admin-layout.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsAdminLayoutAdminLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layouts/admin-layout/admin-layout.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function srcAppLayoutsAdminLayoutAdminLayoutComponentTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    __webpack_require__(
    /*! rxjs/add/operator/filter */
    "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var perfect_scrollbar_1 = __webpack_require__(
    /*! perfect-scrollbar */
    "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");

    var AdminLayoutComponent =
    /*#__PURE__*/
    function () {
      function AdminLayoutComponent(location, router) {
        _classCallCheck(this, AdminLayoutComponent);

        this.location = location;
        this.router = router;
        this.yScrollStack = [];
      }

      _createClass(AdminLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this33 = this;

          console.log(this.router);
          var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

          if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
          } else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
          }

          var elemMainPanel = document.querySelector('.main-panel');
          var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
          this.location.subscribe(function (ev) {
            _this33.lastPoppedUrl = ev.url;
          });
          this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
              if (event.url != _this33.lastPoppedUrl) _this33.yScrollStack.push(window.scrollY);
            } else if (event instanceof router_1.NavigationEnd) {
              if (event.url == _this33.lastPoppedUrl) {
                _this33.lastPoppedUrl = undefined;
                window.scrollTo(0, _this33.yScrollStack.pop());
              } else window.scrollTo(0, 0);
            }
          });
          this._router = this.router.events.filter(function (event) {
            return event instanceof router_1.NavigationEnd;
          }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
          });

          if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar_1["default"](elemMainPanel);
            ps = new perfect_scrollbar_1["default"](elemSidebar);
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.runOnRouteChange();
        }
      }, {
        key: "isMap",
        value: function isMap(path) {
          var titlee = this.location.prepareExternalUrl(this.location.path());
          titlee = titlee.slice(1);

          if (path == titlee) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "runOnRouteChange",
        value: function runOnRouteChange() {
          if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar_1["default"](elemMainPanel);
            ps.update();
          }
        }
      }, {
        key: "isMac",
        value: function isMac() {
          var bool = false;

          if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
          }

          return bool;
        }
      }]);

      return AdminLayoutComponent;
    }();

    AdminLayoutComponent.ctorParameters = function () {
      return [{
        type: common_1.Location
      }, {
        type: router_1.Router
      }];
    };

    AdminLayoutComponent = __decorate([core_1.Component({
      selector: 'app-admin-layout',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./admin-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./admin-layout.component.scss */
      "./src/app/layouts/admin-layout/admin-layout.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [common_1.Location, router_1.Router])], AdminLayoutComponent);
    exports.AdminLayoutComponent = AdminLayoutComponent;
    /***/
  },

  /***/
  "./src/app/layouts/admin-layout/admin-layout.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function srcAppLayoutsAdminLayoutAdminLayoutModuleTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var forms_1 = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var lbd_module_1 = __webpack_require__(
    /*! ../../lbd/lbd.module */
    "./src/app/lbd/lbd.module.ts");

    var map_1 = __webpack_require__(
    /*! @ngui/map */
    "./node_modules/@ngui/map/__ivy_ngcc__/esm2015/ngui-map.js");

    var admin_layout_routing_1 = __webpack_require__(
    /*! ./admin-layout.routing */
    "./src/app/layouts/admin-layout/admin-layout.routing.ts");

    var home_component_1 = __webpack_require__(
    /*! ../../home/home.component */
    "./src/app/home/home.component.ts");

    var cliente_consulta_component_1 = __webpack_require__(
    /*! app/cliente/cliente-consulta/cliente-consulta.component */
    "./src/app/cliente/cliente-consulta/cliente-consulta.component.ts");

    var cliente_detalhe_component_1 = __webpack_require__(
    /*! app/cliente/cliente-detalhe/cliente-detalhe.component */
    "./src/app/cliente/cliente-detalhe/cliente-detalhe.component.ts"); // import { IConfig } from 'ngx-mask/lib/config';


    var ngx_mask_1 = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");

    var datepicker_1 = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");

    var core_2 = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var form_field_1 = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

    var input_1 = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var ng_bootstrap_1 = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var ngx_spinner_1 = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");

    var select_1 = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");

    var chamado_consulta_component_1 = __webpack_require__(
    /*! app/chamado/chamado-consulta/chamado-consulta.component */
    "./src/app/chamado/chamado-consulta/chamado-consulta.component.ts");

    var chamado_detalhe_component_1 = __webpack_require__(
    /*! app/chamado/chamado-detalhe/chamado-detalhe.component */
    "./src/app/chamado/chamado-detalhe/chamado-detalhe.component.ts");

    var autocomplete_1 = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");

    var atendimento_consulta_component_1 = __webpack_require__(
    /*! app/atendimento/atendimento-consulta/atendimento-consulta.component */
    "./src/app/atendimento/atendimento-consulta/atendimento-consulta.component.ts");

    var atendimento_detalhe_component_1 = __webpack_require__(
    /*! app/atendimento/atendimento-detalhe/atendimento-detalhe.component */
    "./src/app/atendimento/atendimento-detalhe/atendimento-detalhe.component.ts"); // export let options: Partial<IConfig> | (() => Partial<IConfig>) = null;


    var AdminLayoutModule = function AdminLayoutModule() {
      _classCallCheck(this, AdminLayoutModule);
    };

    AdminLayoutModule = __decorate([core_1.NgModule({
      providers: [{
        provide: core_2.MAT_DATE_LOCALE,
        useValue: 'pt-BR'
      }],
      imports: [common_1.CommonModule, ng_bootstrap_1.NgbModule, router_1.RouterModule.forChild(admin_layout_routing_1.AdminLayoutRoutes), forms_1.ReactiveFormsModule, forms_1.FormsModule, lbd_module_1.LbdModule, map_1.NguiMapModule.forRoot({
        apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'
      }), datepicker_1.MatDatepickerModule, core_2.MatNativeDateModule, form_field_1.MatFormFieldModule, input_1.MatInputModule, ngx_mask_1.NgxMaskModule.forRoot(), ng_bootstrap_1.NgbModule, ngx_spinner_1.NgxSpinnerModule, select_1.MatSelectModule, autocomplete_1.MatAutocompleteModule],
      declarations: [home_component_1.HomeComponent, cliente_consulta_component_1.ClienteConsultaComponent, cliente_detalhe_component_1.ClienteDetalheComponent, chamado_consulta_component_1.ChamadoConsultaComponent, chamado_detalhe_component_1.ChamadoDetalheComponent, atendimento_consulta_component_1.AtendimentoConsultaComponent, atendimento_detalhe_component_1.AtendimentoDetalheComponent]
    })], AdminLayoutModule);
    exports.AdminLayoutModule = AdminLayoutModule;
    /***/
  },

  /***/
  "./src/app/layouts/admin-layout/admin-layout.routing.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function srcAppLayoutsAdminLayoutAdminLayoutRoutingTs(module, exports, __webpack_require__) {
    "use strict";

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var atendimento_consulta_component_1 = __webpack_require__(
    /*! app/atendimento/atendimento-consulta/atendimento-consulta.component */
    "./src/app/atendimento/atendimento-consulta/atendimento-consulta.component.ts");

    var atendimento_detalhe_component_1 = __webpack_require__(
    /*! app/atendimento/atendimento-detalhe/atendimento-detalhe.component */
    "./src/app/atendimento/atendimento-detalhe/atendimento-detalhe.component.ts");

    var chamado_consulta_component_1 = __webpack_require__(
    /*! app/chamado/chamado-consulta/chamado-consulta.component */
    "./src/app/chamado/chamado-consulta/chamado-consulta.component.ts");

    var chamado_detalhe_component_1 = __webpack_require__(
    /*! app/chamado/chamado-detalhe/chamado-detalhe.component */
    "./src/app/chamado/chamado-detalhe/chamado-detalhe.component.ts");

    var cliente_consulta_component_1 = __webpack_require__(
    /*! app/cliente/cliente-consulta/cliente-consulta.component */
    "./src/app/cliente/cliente-consulta/cliente-consulta.component.ts");

    var cliente_detalhe_component_1 = __webpack_require__(
    /*! app/cliente/cliente-detalhe/cliente-detalhe.component */
    "./src/app/cliente/cliente-detalhe/cliente-detalhe.component.ts");

    var auth_guard_1 = __webpack_require__(
    /*! app/commons/auth.guard */
    "./src/app/commons/auth.guard.ts");

    var login_component_1 = __webpack_require__(
    /*! app/login/login.component */
    "./src/app/login/login.component.ts");

    var home_component_1 = __webpack_require__(
    /*! ../../home/home.component */
    "./src/app/home/home.component.ts");

    exports.AdminLayoutRoutes = [{
      path: 'dashboard',
      component: home_component_1.HomeComponent,
      canActivate: [auth_guard_1.AuthGuard]
    }, {
      path: 'cliente/consulta',
      component: cliente_consulta_component_1.ClienteConsultaComponent,
      canActivate: [auth_guard_1.AuthGuard]
    }, {
      path: 'cliente/detalhe',
      component: cliente_detalhe_component_1.ClienteDetalheComponent,
      canActivate: [auth_guard_1.AuthGuard]
    }, {
      path: 'chamado/consulta',
      component: chamado_consulta_component_1.ChamadoConsultaComponent,
      canActivate: [auth_guard_1.AuthGuard]
    }, {
      path: 'chamado/detalhe',
      component: chamado_detalhe_component_1.ChamadoDetalheComponent,
      canActivate: [auth_guard_1.AuthGuard]
    }, {
      path: 'atendimento/consulta',
      component: atendimento_consulta_component_1.AtendimentoConsultaComponent,
      canActivate: [auth_guard_1.AuthGuard]
    }, {
      path: 'atendimento/detalhe',
      component: atendimento_detalhe_component_1.AtendimentoDetalheComponent,
      canActivate: [auth_guard_1.AuthGuard]
    }, {
      path: 'login',
      component: login_component_1.LoginComponent
    }];
    /***/
  },

  /***/
  "./src/app/lbd/lbd-chart/lbd-chart.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/lbd/lbd-chart/lbd-chart.component.ts ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function srcAppLbdLbdChartLbdChartComponentTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LbdChartComponent_1;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Chartist = __webpack_require__(
    /*! chartist */
    "./node_modules/chartist/dist/chartist.js");

    var ChartType;

    (function (ChartType) {
      ChartType[ChartType["Pie"] = 0] = "Pie";
      ChartType[ChartType["Line"] = 1] = "Line";
      ChartType[ChartType["Bar"] = 2] = "Bar";
    })(ChartType = exports.ChartType || (exports.ChartType = {}));

    var LbdChartComponent = LbdChartComponent_1 =
    /*#__PURE__*/
    function () {
      function LbdChartComponent() {
        _classCallCheck(this, LbdChartComponent);
      }

      _createClass(LbdChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.chartId = "lbd-chart-".concat(LbdChartComponent_1.currentId++);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          switch (this.chartType) {
            case ChartType.Pie:
              new Chartist.Pie("#".concat(this.chartId), this.chartData, this.chartOptions, this.chartResponsive);
              break;

            case ChartType.Line:
              new Chartist.Line("#".concat(this.chartId), this.chartData, this.chartOptions, this.chartResponsive);
              break;

            case ChartType.Bar:
              new Chartist.Bar("#".concat(this.chartId), this.chartData, this.chartOptions, this.chartResponsive);
              break;
          }
        }
      }]);

      return LbdChartComponent;
    }();

    LbdChartComponent.currentId = 1;

    __decorate([core_1.Input(), __metadata("design:type", String)], LbdChartComponent.prototype, "title", void 0);

    __decorate([core_1.Input(), __metadata("design:type", String)], LbdChartComponent.prototype, "subtitle", void 0);

    __decorate([core_1.Input(), __metadata("design:type", String)], LbdChartComponent.prototype, "chartClass", void 0);

    __decorate([core_1.Input(), __metadata("design:type", Number)], LbdChartComponent.prototype, "chartType", void 0);

    __decorate([core_1.Input(), __metadata("design:type", Object)], LbdChartComponent.prototype, "chartData", void 0);

    __decorate([core_1.Input(), __metadata("design:type", Object)], LbdChartComponent.prototype, "chartOptions", void 0);

    __decorate([core_1.Input(), __metadata("design:type", Array)], LbdChartComponent.prototype, "chartResponsive", void 0);

    __decorate([core_1.Input(), __metadata("design:type", String)], LbdChartComponent.prototype, "footerIconClass", void 0);

    __decorate([core_1.Input(), __metadata("design:type", String)], LbdChartComponent.prototype, "footerText", void 0);

    __decorate([core_1.Input(), __metadata("design:type", Array)], LbdChartComponent.prototype, "legendItems", void 0);

    __decorate([core_1.Input(), __metadata("design:type", Boolean)], LbdChartComponent.prototype, "withHr", void 0);

    LbdChartComponent = LbdChartComponent_1 = __decorate([core_1.Component({
      selector: 'lbd-chart',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./lbd-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/lbd/lbd-chart/lbd-chart.component.html"))["default"],
      changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }), __metadata("design:paramtypes", [])], LbdChartComponent);
    exports.LbdChartComponent = LbdChartComponent;
    /***/
  },

  /***/
  "./src/app/lbd/lbd.module.ts":
  /*!***********************************!*\
    !*** ./src/app/lbd/lbd.module.ts ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function srcAppLbdLbdModuleTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var lbd_chart_component_1 = __webpack_require__(
    /*! ./lbd-chart/lbd-chart.component */
    "./src/app/lbd/lbd-chart/lbd-chart.component.ts");

    var LbdModule = function LbdModule() {
      _classCallCheck(this, LbdModule);
    };

    LbdModule = __decorate([core_1.NgModule({
      imports: [common_1.CommonModule, router_1.RouterModule],
      declarations: [lbd_chart_component_1.LbdChartComponent],
      exports: [lbd_chart_component_1.LbdChartComponent]
    })], LbdModule);
    exports.LbdModule = LbdModule;
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function srcAppLoginLoginComponentTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var forms_1 = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var auth_service_1 = __webpack_require__(
    /*! app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(formBuilder, route, router, authService) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.form = {
          dsUser: null,
          dsPass: null
        };
        this.loading = false;
        this.submitted = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// get return url from route parameters or default to '/'
        } // convenience getter for easy access to form fields

      }, {
        key: "login",
        value: function login() {
          var _this34 = this;

          this.submitted = true;
          this.authService.login(this.form.dsUser, this.form.dsPass).subscribe(function (results) {
            _this34.router.navigateByUrl("/dashboard");
          });
        }
      }, {
        key: "limpar",
        value: function limpar() {
          this.form = {
            dsUser: null,
            dsPass: null
          };
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: forms_1.FormBuilder
      }, {
        type: router_1.ActivatedRoute
      }, {
        type: router_1.Router
      }, {
        type: auth_service_1.AuthService
      }];
    };

    LoginComponent = __decorate([core_1.Component({
      selector: 'app-login',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    }), __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, auth_service_1.AuthService])], LoginComponent);
    exports.LoginComponent = LoginComponent;
    /***/
  },

  /***/
  "./src/app/services/atendimento.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/atendimento.service.ts ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function srcAppServicesAtendimentoServiceTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var http_1 = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var environment_1 = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var angular_notifier_1 = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");

    var ngx_spinner_1 = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");

    var AtendimentoService =
    /*#__PURE__*/
    function () {
      function AtendimentoService(httpClient, notifierService, spinner) {
        _classCallCheck(this, AtendimentoService);

        this.httpClient = httpClient;
        this.notifierService = notifierService;
        this.spinner = spinner;
        this.notifier = notifierService;
      }

      _createClass(AtendimentoService, [{
        key: "salvar",
        value: function salvar(form) {
          var _this35 = this;

          this.spinner.show();
          return new Promise(function (resolve, reject) {
            _this35.httpClient.post(environment_1.environment.API_ENDPOINT + "/atendimento/salvar", form).subscribe(function (res) {
              _this35.spinner.hide();

              if (!res.hasError) {
                resolve(res.data);
              } else {
                if (res.erro) {
                  _this35.notifier.notify("error", res.erro);

                  reject(res.erro);
                } else {
                  _this35.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

                  reject(false);
                }
              }
            }, function (error) {
              _this35.spinner.hide();

              _this35.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

              reject(error);
            });
          });
        }
      }, {
        key: "buscar",
        value: function buscar(filtro) {
          var _this36 = this;

          this.spinner.show();
          return new Promise(function (resolve, reject) {
            _this36.httpClient.post(environment_1.environment.API_ENDPOINT + "/atendimento/buscar", filtro).subscribe(function (res) {
              _this36.spinner.hide();

              if (!res.hasError) {
                resolve(res.data);
              } else {
                if (res.erro) {
                  _this36.notifier.notify("error", res.erro);

                  reject(res.erro);
                } else {
                  _this36.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

                  reject(false);
                }
              }
            }, function (error) {
              _this36.spinner.hide();

              _this36.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

              reject(error);
            });
          });
        }
      }, {
        key: "confirmar",
        value: function confirmar(cdAtendimento) {
          var _this37 = this;

          this.spinner.show();
          return new Promise(function (resolve, reject) {
            _this37.httpClient.get(environment_1.environment.API_ENDPOINT + "/atendimento/confirmar/" + cdAtendimento).subscribe(function (res) {
              _this37.spinner.hide();

              if (!res.hasError) {
                resolve(res.data);
              } else {
                if (res.erro) {
                  _this37.notifier.notify("error", res.erro);

                  reject(res.erro);
                } else {
                  _this37.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

                  reject(false);
                }
              }
            }, function (error) {
              _this37.spinner.hide();

              _this37.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

              reject(error);
            });
          });
        }
      }, {
        key: "gerarAtendimentosContrato",
        value: function gerarAtendimentosContrato(cdUnidade) {
          var _this38 = this;

          this.spinner.show();
          return new Promise(function (resolve, reject) {
            _this38.httpClient.get(environment_1.environment.API_ENDPOINT + "/atendimento/gerarAtendimentos/" + cdUnidade).subscribe(function (res) {
              _this38.spinner.hide();

              if (!res.hasError) {
                resolve(res.data);
              } else {
                if (res.erro) {
                  _this38.notifier.notify("error", res.erro);

                  reject(res.erro);
                } else {
                  _this38.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

                  reject(false);
                }
              }
            }, function (error) {
              _this38.spinner.hide();

              _this38.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

              reject(error);
            });
          });
        }
      }, {
        key: "getAtendimentos",
        value: function getAtendimentos() {
          var _this39 = this;

          this.spinner.show();
          return new Promise(function (resolve, reject) {
            _this39.httpClient.get(environment_1.environment.API_ENDPOINT + "/atendimento").subscribe(function (res) {
              _this39.spinner.hide();

              if (!res.hasError) {
                resolve(res.data);
              } else {
                if (res.erro) {
                  _this39.notifier.notify("error", res.erro);

                  reject(res.erro);
                } else {
                  _this39.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

                  reject(false);
                }
              }
            }, function (error) {
              _this39.spinner.hide();

              _this39.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

              reject(error);
            });
          });
        }
      }]);

      return AtendimentoService;
    }();

    AtendimentoService.ctorParameters = function () {
      return [{
        type: http_1.HttpClient
      }, {
        type: angular_notifier_1.NotifierService
      }, {
        type: ngx_spinner_1.NgxSpinnerService
      }];
    };

    AtendimentoService = __decorate([core_1.Injectable({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [http_1.HttpClient, angular_notifier_1.NotifierService, ngx_spinner_1.NgxSpinnerService])], AtendimentoService);
    exports.AtendimentoService = AtendimentoService;
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function srcAppServicesAuthServiceTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var rxjs_1 = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var http_1 = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var operators_1 = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var environment_1 = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var angular_notifier_1 = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ngx_spinner_1 = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");

    var TOKEN_KEY = 'auth-token';
    var USER_KEY = 'user';

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(httpClient, notifierService, router, spinner) {
        _classCallCheck(this, AuthService);

        this.httpClient = httpClient;
        this.notifierService = notifierService;
        this.router = router;
        this.spinner = spinner;
        this.isAuthenticated = false;
        this.notifier = notifierService;
      }

      _createClass(AuthService, [{
        key: "checkToken",
        value: function checkToken() {
          // token expirado?? tratar cenario, aqui ou no service
          var data = JSON.parse(localStorage.getItem(USER_KEY));
        }
      }, {
        key: "login",
        value: function login(username, password) {
          var _this40 = this;

          this.spinner.show();
          var body = {
            dsUser: username,
            dsPass: password
          };
          console.log(body);
          return this.httpClient.post(environment_1.environment.API_ENDPOINT + '/auth', body).pipe(operators_1.map(function (res) {
            _this40.spinner.hide();

            if (!res.hasError) {
              var user = res.data;
              console.log(user);
              localStorage.setItem(USER_KEY, JSON.stringify(user));
              _this40.isAuthenticated = true;
              return user;
            } else {
              // alert(res.erro);
              if (Object.entries(res.erro).length != 0) {
                _this40.notifier.notify("error", res.erro);

                throw rxjs_1.throwError(new Error(res.error));
              } else {
                _this40.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

                throw rxjs_1.throwError(new Error(res.error));
              }
            }
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.clear();
          this.router.navigateByUrl("/login");
        }
      }, {
        key: "getUserAsObservable",
        value: function getUserAsObservable() {
          return rxjs_1.from(this.getUser());
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return new Promise(function (resolve, reject) {
            var key = JSON.parse(localStorage.getItem(USER_KEY));

            if (key) {
              resolve(key);
            } else {
              resolve(null);
            }
          });
        }
      }, {
        key: "getPerfil",
        value: function getPerfil() {
          return new Promise(function (resolve, reject) {
            var key = JSON.parse(localStorage.getItem(USER_KEY));

            if (key) {
              resolve(key.cdPerfil);
            } else {
              reject(-1);
            }
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: http_1.HttpClient
      }, {
        type: angular_notifier_1.NotifierService
      }, {
        type: router_1.Router
      }, {
        type: ngx_spinner_1.NgxSpinnerService
      }];
    };

    AuthService = __decorate([core_1.Injectable({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [http_1.HttpClient, angular_notifier_1.NotifierService, router_1.Router, ngx_spinner_1.NgxSpinnerService])], AuthService);
    exports.AuthService = AuthService;
    /***/
  },

  /***/
  "./src/app/services/chamado.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/chamado.service.ts ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function srcAppServicesChamadoServiceTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var http_1 = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var environment_1 = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var angular_notifier_1 = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");

    var ngx_spinner_1 = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");

    var ChamadoService =
    /*#__PURE__*/
    function () {
      function ChamadoService(httpClient, notifierService, spinner) {
        _classCallCheck(this, ChamadoService);

        this.httpClient = httpClient;
        this.notifierService = notifierService;
        this.spinner = spinner;
        this.notifier = notifierService;
      }

      _createClass(ChamadoService, [{
        key: "carregarCombos",
        value: function carregarCombos() {
          var _this41 = this;

          this.spinner.show();
          return new Promise(function (resolve, reject) {
            _this41.httpClient.get(environment_1.environment.API_ENDPOINT + "/chamado/combosDetalhe").subscribe(function (res) {
              _this41.spinner.hide();

              if (!res.hasError) {
                resolve(res.data);
              } else {
                if (res.erro) {
                  _this41.notifier.notify("error", res.erro);

                  reject(res.erro);
                } else {
                  _this41.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

                  reject(false);
                }
              }
            }, function (error) {
              _this41.spinner.hide();

              _this41.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

              reject(error);
            });
          });
        }
      }, {
        key: "buscar",
        value: function buscar(filtro) {
          var _this42 = this;

          this.spinner.show();
          return new Promise(function (resolve, reject) {
            _this42.httpClient.post(environment_1.environment.API_ENDPOINT + "/chamado/buscar", filtro).subscribe(function (res) {
              _this42.spinner.hide();

              if (!res.hasError) {
                resolve(res.data);
              } else {
                if (res.erro) {
                  _this42.notifier.notify("error", res.erro);

                  reject(res.erro);
                } else {
                  _this42.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

                  reject(false);
                }
              }
            }, function (error) {
              _this42.spinner.hide();

              _this42.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

              reject(error);
            });
          });
        }
      }, {
        key: "carregarEquipamentos",
        value: function carregarEquipamentos(cdUnidade) {
          var _this43 = this;

          this.spinner.show();
          return new Promise(function (resolve, reject) {
            _this43.httpClient.get(environment_1.environment.API_ENDPOINT + "/chamado/equipamentos/" + cdUnidade).subscribe(function (res) {
              _this43.spinner.hide();

              if (!res.hasError) {
                resolve(res.data);
              } else {
                if (res.erro) {
                  _this43.notifier.notify("error", res.erro);

                  reject(res.erro);
                } else {
                  _this43.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

                  reject(false);
                }
              }
            }, function (error) {
              _this43.spinner.hide();

              _this43.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

              reject(error);
            });
          });
        }
      }, {
        key: "salvar",
        value: function salvar(form) {
          var _this44 = this;

          this.spinner.show();
          return new Promise(function (resolve, reject) {
            _this44.httpClient.post(environment_1.environment.API_ENDPOINT + "/chamado/salvar", form).subscribe(function (res) {
              _this44.spinner.hide();

              if (!res.hasError) {
                resolve(res.data);
              } else {
                if (res.erro) {
                  _this44.notifier.notify("error", res.erro);

                  reject(res.erro);
                } else {
                  _this44.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

                  reject(false);
                }
              }
            }, function (error) {
              _this44.spinner.hide();

              _this44.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

              reject(error);
            });
          });
        }
      }, {
        key: "detalhar",
        value: function detalhar(cdAtendimento) {
          var _this45 = this;

          this.spinner.show();
          return new Promise(function (resolve, reject) {
            _this45.httpClient.get(environment_1.environment.API_ENDPOINT + "/chamado/detalhar/" + cdAtendimento).subscribe(function (res) {
              _this45.spinner.hide();

              if (!res.hasError) {
                resolve(res.data);
              } else {
                if (res.erro) {
                  _this45.notifier.notify("error", res.erro);

                  reject(res.erro);
                } else {
                  _this45.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

                  reject(false);
                }
              }
            }, function (error) {
              _this45.spinner.hide();

              _this45.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

              reject(error);
            });
          });
        }
      }]);

      return ChamadoService;
    }();

    ChamadoService.ctorParameters = function () {
      return [{
        type: http_1.HttpClient
      }, {
        type: angular_notifier_1.NotifierService
      }, {
        type: ngx_spinner_1.NgxSpinnerService
      }];
    };

    ChamadoService = __decorate([core_1.Injectable({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [http_1.HttpClient, angular_notifier_1.NotifierService, ngx_spinner_1.NgxSpinnerService])], ChamadoService);
    exports.ChamadoService = ChamadoService;
    /***/
  },

  /***/
  "./src/app/services/cliente.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/cliente.service.ts ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function srcAppServicesClienteServiceTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var http_1 = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var environment_1 = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var angular_notifier_1 = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");

    var ngx_spinner_1 = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");

    var ClienteService =
    /*#__PURE__*/
    function () {
      function ClienteService(httpClient, notifierService, spinner) {
        _classCallCheck(this, ClienteService);

        this.httpClient = httpClient;
        this.notifierService = notifierService;
        this.spinner = spinner;
        this.notifier = notifierService;
      }

      _createClass(ClienteService, [{
        key: "carregarEndereco",
        value: function carregarEndereco(cep) {
          var _this46 = this;

          this.spinner.show();
          return new Promise(function (resolve, reject) {
            _this46.httpClient.get(environment_1.environment.VIA_CEP_API_ENDPOINT + '/' + cep + "/json").subscribe(function (res) {
              _this46.spinner.hide();

              resolve(res);
            }, function (error) {
              _this46.spinner.hide();

              _this46.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

              reject(error);
            });
          });
        }
      }, {
        key: "carregarCombos",
        value: function carregarCombos() {
          var _this47 = this;

          this.spinner.show();
          return new Promise(function (resolve, reject) {
            _this47.httpClient.get(environment_1.environment.API_ENDPOINT + "/empresa/combos/detalhe").subscribe(function (res) {
              _this47.spinner.hide();

              if (!res.hasError) {
                resolve(res.data);
              } else {
                if (res.erro) {
                  _this47.notifier.notify("error", res.erro);

                  reject(res.erro);
                } else {
                  _this47.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

                  reject(false);
                }
              }
            }, function (error) {
              _this47.spinner.hide();

              _this47.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

              reject(error);
            });
          });
        }
      }, {
        key: "salvar",
        value: function salvar(form) {
          var _this48 = this;

          this.spinner.show();
          return new Promise(function (resolve, reject) {
            _this48.httpClient.post(environment_1.environment.API_ENDPOINT + "/empresa/salvar", form).subscribe(function (res) {
              _this48.spinner.hide();

              if (!res.hasError) {
                resolve(res.data);
              } else {
                if (res.erro) {
                  _this48.notifier.notify("error", res.erro);

                  reject(res.erro);
                } else {
                  _this48.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

                  reject(false);
                }
              }
            }, function (error) {
              _this48.spinner.hide();

              _this48.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

              reject(error);
            });
          });
        }
      }, {
        key: "buscar",
        value: function buscar(filtro) {
          var _this49 = this;

          this.spinner.show();
          console.log(this.spinner);
          return new Promise(function (resolve, reject) {
            _this49.httpClient.post(environment_1.environment.API_ENDPOINT + "/empresa/buscar", filtro).subscribe(function (res) {
              _this49.spinner.hide();

              if (!res.hasError) {
                resolve(res.data);
              } else {
                if (res.erro) {
                  _this49.notifier.notify("error", res.erro);

                  reject(res.erro);
                } else {
                  _this49.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

                  reject(false);
                }
              }
            }, function (error) {
              _this49.spinner.hide();

              _this49.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

              reject(error);
            });
          });
        }
      }, {
        key: "detalhar",
        value: function detalhar(cdEmpresa) {
          var _this50 = this;

          this.spinner.show();
          return new Promise(function (resolve, reject) {
            _this50.httpClient.get(environment_1.environment.API_ENDPOINT + "/empresa/" + cdEmpresa).subscribe(function (res) {
              _this50.spinner.hide();

              if (!res.hasError) {
                resolve(res.data);
              } else {
                if (res.erro) {
                  _this50.notifier.notify("error", res.erro);

                  reject(res.erro);
                } else {
                  _this50.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

                  reject(false);
                }
              }
            }, function (error) {
              _this50.spinner.hide();

              _this50.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

              reject(error);
            });
          });
        }
      }, {
        key: "carregarUnidades",
        value: function carregarUnidades(cdEmpresa) {
          var _this51 = this;

          this.spinner.show();
          return new Promise(function (resolve, reject) {
            _this51.httpClient.get(environment_1.environment.API_ENDPOINT + "/empresa/unidades/" + cdEmpresa).subscribe(function (res) {
              _this51.spinner.hide();

              if (!res.hasError) {
                resolve(res.data);
              } else {
                if (res.erro) {
                  _this51.notifier.notify("error", res.erro);

                  reject(res.erro);
                } else {
                  _this51.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

                  reject(false);
                }
              }
            }, function (error) {
              _this51.spinner.hide();

              _this51.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

              reject(error);
            });
          });
        }
      }, {
        key: "mudarStatusUnidade",
        value: function mudarStatusUnidade(cdUnidade, fgAtivo) {
          var _this52 = this;

          this.spinner.show();
          return new Promise(function (resolve, reject) {
            _this52.httpClient.get(environment_1.environment.API_ENDPOINT + "/empresa/alterarStatus/" + cdUnidade + "/" + fgAtivo).subscribe(function (res) {
              _this52.spinner.hide();

              if (!res.hasError) {
                resolve(res.data);
              } else {
                if (res.erro) {
                  _this52.notifier.notify("error", res.erro);

                  reject(res.erro);
                } else {
                  _this52.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

                  reject(false);
                }
              }
            }, function (error) {
              _this52.spinner.hide();

              _this52.notifier.notify("error", "Ocorreu um erro inesperado, favor tentar novamente em alguns instantes.");

              reject(error);
            });
          });
        }
      }]);

      return ClienteService;
    }();

    ClienteService.ctorParameters = function () {
      return [{
        type: http_1.HttpClient
      }, {
        type: angular_notifier_1.NotifierService
      }, {
        type: ngx_spinner_1.NgxSpinnerService
      }];
    };

    ClienteService = __decorate([core_1.Injectable({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [http_1.HttpClient, angular_notifier_1.NotifierService, ngx_spinner_1.NgxSpinnerService])], ClienteService);
    exports.ClienteService = ClienteService;
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/footer/footer.component.ts ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function srcAppSharedFooterFooterComponentTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = function FooterComponent() {
      _classCallCheck(this, FooterComponent);

      this.test = new Date();
    };

    FooterComponent = __decorate([core_1.Component({
      selector: 'footer-cmp',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html"))["default"]
    })], FooterComponent);
    exports.FooterComponent = FooterComponent;
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.module.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/footer/footer.module.ts ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function srcAppSharedFooterFooterModuleTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var footer_component_1 = __webpack_require__(
    /*! ./footer.component */
    "./src/app/shared/footer/footer.component.ts");

    var FooterModule = function FooterModule() {
      _classCallCheck(this, FooterModule);
    };

    FooterModule = __decorate([core_1.NgModule({
      imports: [router_1.RouterModule, common_1.CommonModule],
      declarations: [footer_component_1.FooterComponent],
      exports: [footer_component_1.FooterComponent]
    })], FooterModule);
    exports.FooterModule = FooterModule;
    /***/
  },

  /***/
  "./src/app/shared/navbar/navbar.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/navbar/navbar.component.ts ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function srcAppSharedNavbarNavbarComponentTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var sidebar_component_1 = __webpack_require__(
    /*! ../../sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var auth_service_1 = __webpack_require__(
    /*! app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(location, element, auth, router) {
        _classCallCheck(this, NavbarComponent);

        this.element = element;
        this.auth = auth;
        this.router = router;
        this.user = {
          dsUser: ""
        };
        this.location = location;
        this.sidebarVisible = false;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadUser();
          this.listTitles = sidebar_component_1.ROUTES.filter(function (listTitle) {
            return listTitle;
          });
          var navbar = this.element.nativeElement;
          this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        }
      }, {
        key: "sidebarOpen",
        value: function sidebarOpen() {
          var toggleButton = this.toggleButton;
          var body = document.getElementsByTagName('body')[0];
          setTimeout(function () {
            toggleButton.classList.add('toggled');
          }, 500);
          body.classList.add('nav-open');
          this.sidebarVisible = true;
        }
      }, {
        key: "sidebarClose",
        value: function sidebarClose() {
          var body = document.getElementsByTagName('body')[0];
          this.toggleButton.classList.remove('toggled');
          this.sidebarVisible = false;
          body.classList.remove('nav-open');
        }
      }, {
        key: "sidebarToggle",
        value: function sidebarToggle() {
          // const toggleButton = this.toggleButton;
          // const body = document.getElementsByTagName('body')[0];
          if (this.sidebarVisible === false) {
            this.sidebarOpen();
          } else {
            this.sidebarClose();
          }
        }
      }, {
        key: "getTitle",
        value: function getTitle() {
          var titlee = this.location.prepareExternalUrl(this.location.path());

          if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
          }

          for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
              return this.listTitles[item].title;
            }
          }

          return 'Dashboard';
        }
      }, {
        key: "loadUser",
        value: function loadUser() {
          return __awaiter(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var user;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.auth.getUser();

                  case 2:
                    user = _context2.sent;
                    console.log(user);
                    this.user = user;

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: common_1.Location
      }, {
        type: core_1.ElementRef
      }, {
        type: auth_service_1.AuthService
      }, {
        type: router_1.Router
      }];
    };

    NavbarComponent = __decorate([core_1.Component({
      // moduleId: module.id,
      selector: 'navbar-cmp',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html"))["default"]
    }), __metadata("design:paramtypes", [common_1.Location, core_1.ElementRef, auth_service_1.AuthService, router_1.Router])], NavbarComponent);
    exports.NavbarComponent = NavbarComponent;
    /***/
  },

  /***/
  "./src/app/shared/navbar/navbar.module.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/navbar/navbar.module.ts ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function srcAppSharedNavbarNavbarModuleTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var navbar_component_1 = __webpack_require__(
    /*! ./navbar.component */
    "./src/app/shared/navbar/navbar.component.ts");

    var NavbarModule = function NavbarModule() {
      _classCallCheck(this, NavbarModule);
    };

    NavbarModule = __decorate([core_1.NgModule({
      imports: [router_1.RouterModule, common_1.CommonModule],
      declarations: [navbar_component_1.NavbarComponent],
      exports: [navbar_component_1.NavbarComponent]
    })], NavbarModule);
    exports.NavbarModule = NavbarModule;
    /***/
  },

  /***/
  "./src/app/sidebar/sidebar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.ts ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function srcAppSidebarSidebarComponentTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    exports.ROUTES = [{
      path: '/dashboard',
      title: 'Dashboard',
      icon: 'pe-7s-graph',
      "class": ''
    }, {
      path: '/cliente/consulta',
      title: 'Clientes',
      icon: 'pe-7s-portfolio',
      "class": ''
    }, {
      path: '/chamado/consulta',
      title: 'Chamados',
      icon: 'pe-7s-albums',
      "class": ''
    }, {
      path: '/atendimento/consulta',
      title: 'Atendimentos',
      icon: 'pe-7s-note2',
      "class": ''
    }, {
      path: '/atendimento/tv',
      title: 'Atendimentos TV',
      icon: 'pe-7s-monitor',
      "class": ''
    }];

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menuItems = exports.ROUTES.filter(function (menuItem) {
            return menuItem;
          });
        }
      }, {
        key: "isMobileMenu",
        value: function isMobileMenu() {
          if ($(window).width() > 991) {
            return false;
          }

          return true;
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent = __decorate([core_1.Component({
      selector: 'app-sidebar',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html"))["default"]
    }), __metadata("design:paramtypes", [])], SidebarComponent);
    exports.SidebarComponent = SidebarComponent;
    /***/
  },

  /***/
  "./src/app/sidebar/sidebar.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/sidebar/sidebar.module.ts ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function srcAppSidebarSidebarModuleTs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var router_1 = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var sidebar_component_1 = __webpack_require__(
    /*! ./sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");

    var SidebarModule = function SidebarModule() {
      _classCallCheck(this, SidebarModule);
    };

    SidebarModule = __decorate([core_1.NgModule({
      imports: [router_1.RouterModule, common_1.CommonModule],
      declarations: [sidebar_component_1.SidebarComponent],
      exports: [sidebar_component_1.SidebarComponent]
    })], SidebarModule);
    exports.SidebarModule = SidebarModule;
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function srcEnvironmentsEnvironmentTs(module, exports, __webpack_require__) {
    "use strict"; // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `angular-cli.json`.

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.environment = {
      production: false,
      // API_ENDPOINT: 'http://localhost:3000',
      API_ENDPOINT: 'https://ups-node-api.herokuapp.com',
      VIA_CEP_API_ENDPOINT: 'https://viacep.com.br/ws'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no static exports found */

  /***/
  function srcMainTs(module, exports, __webpack_require__) {
    "use strict";

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /*!
    
     =========================================================
     * Light Bootstrap Dashboard Angular - v1.6.0
     =========================================================
    
     * Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-angular2
     * Copyright 2016 Creative Tim (http://www.creative-tim.com)
     * Licensed under MIT
    
     =========================================================
    
     * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
     */

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var platform_browser_dynamic_1 = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");

    var app_module_1 = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");

    var environment_1 = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (environment_1.environment.production) {
      core_1.enableProdMode();
    }

    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/macbookpro/ups-angular-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map