import { OrderByDirection, FieldPath } from '@google-cloud/firestore';

export interface OrderBy {
    fieldPath: string|FieldPath;
    directionStr?: OrderByDirection;
}

export function isOrderBy(value: any): value is OrderBy {
    return value !== undefined
        && value.fieldPath !== undefined;
}
