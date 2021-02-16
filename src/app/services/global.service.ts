import { Injectable } from '@angular/core';
import { ApiConfig } from '../config/api-config.config';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    constructor(
        private apiService: ApiService
    ) { }

    async userLogin(type) {
        return await this.apiService.post(ApiConfig.LOGIN_URL, type)
            .toPromise().then(
                data => {
                    return data;
                },
                error => {
                    return error;
                }
            );
    }

}