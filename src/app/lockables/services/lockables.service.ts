import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Lockable } from '../models/lockable';
import { Paginate } from 'src/app/models/paginate';

@Injectable({
    providedIn: 'root'
})
export class LockablesService {
    private serverUrl = 'http://35.231.143.84/api/';

    constructor(private http: HttpClient) { }

    paginateLockables(paginate: Paginate): Observable<Lockable[]> {
        const lockables = this.http.post<Lockable[]>(
            this.serverUrl,
            {
                todo: 'enter data here'
            });
        return lockables;
    }
}
