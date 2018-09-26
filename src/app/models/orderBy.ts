import { OrderByDirection } from './google-cloud.types';

export interface OrderBy {
    fieldPath: string;
    directionStr?: OrderByDirection;
}

export function isOrderBy(value: any): value is OrderBy {
    return value !== undefined
        && value.fieldPath !== undefined;
}
