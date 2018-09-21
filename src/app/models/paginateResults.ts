import { Paginate } from './paginate';

export interface PaginationResults<T> {
    results: T[];
    next?: Paginate<T>;
    previous?: Paginate<T>;
}

export function isPaginationResults<T>(value: any): value is PaginationResults<T> {
    return value !== undefined
        && value.results !== undefined
        && Array.isArray(value.results);
}
