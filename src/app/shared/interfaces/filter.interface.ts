
export enum SortType {
    ASC,
    DESC
}
export interface SortFilter {
    field: string | null;
    type: SortType;
}
export interface SearchFilter {
    field: string | null;
    value: null | string;
}
export interface PaginationFilter {
    page: number;
    pageSize: number;
}
export enum FilterTypes {
    SORT,
    SEARCH,
    PAGINATION
}
export interface GridFilter {
    [FilterTypes.SORT]:SortFilter;
    [FilterTypes.SEARCH]: SearchFilter;
    [FilterTypes.PAGINATION]: PaginationFilter;
}
export type Filter = SortFilter | PaginationFilter | SearchFilter
export type FilterObserver =  {
  id: number;
  notify: () => void;
}
