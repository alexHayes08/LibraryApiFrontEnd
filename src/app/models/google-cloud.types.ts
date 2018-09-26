// Due to errors regarding importing @google-cloud/firestore, copied needed definitions
// from '@google-cloud/firestore'.
//
// Error was: ERROR in node_modules/@google-cloud/firestore/types/firestore.d.ts(894,15): error TS2503: Cannot find namespace 'NodeJS'.

/**
 * Filter conditions in a `Query.where()` clause are specified using the
 * strings '<', '<=', '==', '>=', '>', and 'array-contains'.
 */
export type WhereFilterOp = '<' | '<=' | '==' | '>=' | '>' | 'array-contains';

/**
 * The direction of a `Query.orderBy()` clause is specified as 'desc' or 'asc'
 * (descending or ascending).
 */
export type OrderByDirection = 'desc' | 'asc';
