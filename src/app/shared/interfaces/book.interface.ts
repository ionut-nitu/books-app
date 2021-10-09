export interface Book {
    id: number | null;
    title: string;
    shortDescription: string;
    longDescription:string;
    thumbnailUrl: string;
    status:string;
    authors: string[];
    categories: string[];
    pageCount:number;
    publishedDate: {
        $date: Date
    }
}