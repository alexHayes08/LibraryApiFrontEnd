import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Lockable } from '../models/lockable';

@Injectable({
    providedIn: 'root'
})
export class LockablesService {
    private serverUrl: String = '';

    constructor() { }

    getLockables(): Observable<Lockable[]> {
        throw new Error();
    }
}
