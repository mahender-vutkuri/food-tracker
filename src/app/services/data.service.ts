import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    _sessionInfo: any;
    _error: any;
    _isDataLoading: boolean;

    constructor() { }

    set sessionInfo(_sessionInfo: any) {
        this._sessionInfo = _sessionInfo;
    }

    get sessionInfo() {
        return this._sessionInfo;
    }

    set error(_error: any) {
        this._error = _error;
    }

    get error() {
        return this._error;
    }

    set isDataloading(_isDataLoading: boolean) {
        // console.log("Set data", this._isDataLoading);
        this._isDataLoading = _isDataLoading;
    }

    get isDataloading() {
        // console.log("Get data", this._isDataLoading);
        return this._isDataLoading;
    }
}
