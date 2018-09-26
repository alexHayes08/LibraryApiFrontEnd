import { GenericLock } from './generic-lock';

export class Lock implements GenericLock {
    public id: string|undefined;
    public ownerToken: string;
    public isShared: boolean;
    public lockedAt: Date;
    public unlockedAt?: Date;
    public maxLeaseDate: Date;

    public constructor(data?: GenericLock) {
        if (data !== undefined) {
            this.ownerToken = data.ownerToken;
            this.isShared = data.isShared;
            this.lockedAt = data.lockedAt;
            this.maxLeaseDate = data.maxLeaseDate;
        }
    }
}
