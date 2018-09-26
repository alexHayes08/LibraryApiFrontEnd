import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Lockable } from '../models/lockable';
import { Paginate } from 'src/app/models/paginate';
import { GenericLockable } from '../models/generic-lockable';
import { GenericLock } from '../models/generic-lock';

@Injectable({
    providedIn: 'root'
})
export class LockablesService {
    private serverUrl = 'http://35.231.143.84/api/';

    constructor(private http: HttpClient) { }

    paginateLockables(paginate: Paginate<Lockable>): Observable<Lockable[]> {
        const lockables = this.http.post<Lockable[]>(
            this.serverUrl + 'lockable/paginate',
            paginate);
        return lockables;
    }

    retrieveLockable(id: string): Observable<Lockable> {
        const lockable = this.http.post<Lockable>(
            this.serverUrl + 'lockable/retrieve',
            {
                field: 'id',
                value: id
            }
        );

        return lockable;
    }

    updateLockable(lockable: Lockable): void {
        this.http.post(
            this.serverUrl + 'lockable/update',
            lockable
        );
    }

    createLockable(genericLockable: GenericLockable): Observable<Lockable> {
        const lockable = this.http.post<Lockable>(
            this.serverUrl + 'lockable/create',
            genericLockable
        );
        return lockable;
    }

    deleteLockable(id: string): void {
        this.http.post(
            this.serverUrl + 'lockable/delete',
            {
                field: 'id',
                value: id
            }
        );
    }

    lock(lockableId: string, lock: GenericLock): Observable<Lockable> {
        const lockable = this.http.post<Lockable>(
            this.serverUrl + 'lockable/lock',
            { lockableId, lock }
        );

        return lockable;
    }

    unlock(lockId: string, lockableId: string): Observable<Lockable> {
        const lockable = this.http.post<Lockable>(
            this.serverUrl + 'lockable/unlock',
            { lockId, lockableId }
        );

        return lockable;
    }
}
