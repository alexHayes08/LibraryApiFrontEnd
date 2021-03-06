import { WhereFilterOp } from './google-cloud.types';

export interface Filter<T> {
    field: string|keyof T;
    comparator: WhereFilterOp;
    value: any;
}

export function isFilter<T>(value: any): value is Filter<T> {
    return value !== undefined
        && value.field !== undefined
        && value.comparator !== undefined
        && value.value !== undefined;
}
