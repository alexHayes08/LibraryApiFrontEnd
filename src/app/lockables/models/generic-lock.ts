export interface GenericLock {
    ownerToken: string;
    isShared: boolean;
    lockedAt: Date;
    maxLeaseDate: Date;
}
