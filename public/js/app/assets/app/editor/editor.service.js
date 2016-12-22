import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/rx";
import { Injectable, EventEmitter } from "@angular/core";
import { Solution } from "./models/solution";
import { Footer } from "./models/footer";
import { Header } from "./models/header";
import { Main } from "./models/main";
import { Nav } from "./models/nav";
import { Page } from "./models/page";
import { AuthService } from "../auth/auth.service";
export var EditorService = (function () {
    function EditorService(_http) {
        this._http = _http;
        this.solutionRetrieved = new EventEmitter();
        this.pageAddedDeleted = new EventEmitter();
        this.solutions = [];
    }
    EditorService.prototype.getSolutions = function () {
        var _this = this;
        var userId = localStorage.getItem('userId');
        var body = JSON.stringify({ userId: userId });
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this._http.post('/solution/list', body, { headers: headers })
            .map(function (response) {
            var data = response.json().solutions;
            var solutions = [];
            for (var i = 0; i < data.length; i++) {
                solutions.push(data[i]);
            }
            _this.solutions = solutions;
            return _this.solutions;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    EditorService.prototype.getSolutionById = function (uid) {
        var _this = this;
        if (this.solutions.length == 0) {
            this.getSolutions().subscribe(function (solutions) {
                var solution = solutions.find(function (solution) { return solution._id === uid; });
                _this.solutionRetrieved.emit(solution);
            });
        }
        else {
            return this.solutions.find(function (solution) { return solution._id === uid; });
        }
    };
    EditorService.prototype.createSolution = function (obj) {
        var _this = this;
        var header = new Header();
        var footer = new Footer();
        var main = new Main();
        var nav = new Nav();
        var page = new Page(header, nav, main, footer, 1);
        var pages = new Array();
        pages.push(page);
        var solution = new Solution(AuthService.getUserId(), obj.name, pages);
        var body = JSON.stringify(solution);
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this._http.post('/solution/create', body, { headers: headers })
            .map(function (response) {
            var data = response.json().obj;
            solution._id = data._id;
            console.log(_this.solutions);
            _this.solutions.push(solution);
            return solution;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    EditorService.prototype.deleteSolution = function (solution) {
        this.solutions.splice(this.solutions.indexOf(solution), 1);
        return this._http.delete('/solution/' + solution._id)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error); });
    };
    EditorService.prototype.saveSolution = function (solution) {
        var body = JSON.stringify(solution);
        var headers = new Headers({ 'Content-type': 'application/json' });
        return this._http.put('/solution/' + solution._id, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error); });
    };
    EditorService.prototype.onPageAddedDeleted = function (pages) {
        this.pageAddedDeleted.emit(pages);
    };
    EditorService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    EditorService.ctorParameters = [
        { type: Http, },
    ];
    return EditorService;
}());
