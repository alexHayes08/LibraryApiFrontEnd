export interface GenericLockable {
    name: string;
    createdOn: Date;
    categories: string[];
    data: {
        [key: string]: any
    };
}
