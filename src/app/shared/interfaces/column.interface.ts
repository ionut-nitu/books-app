export interface Column {
    name: string;
    property: string;
    sortable: boolean;
    flex: number;
}
export type ColumnObserver =  {
  id: number;
  notify: (columns:Column[]) => void;
}
