import { OrderBy } from './orderBy';
import { Filter } from './filter';

export interface Paginate<T> {
    orderBy?: OrderBy[];
    limit: number;
    filters?: Filter<T>[];
    skip?: number;
}

export function isPaginate<T>(value: any): value is Paginate<T> {
    return value !== undefined
        && value.limit !== undefined;
}
