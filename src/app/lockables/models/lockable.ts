import { GenericLockable } from './generic-lockable';

export class Lockable implements GenericLockable {
    public createdOn: Date;
    public categories: string[];
    public name: string;
    public id: string;
    public data: object;
}
