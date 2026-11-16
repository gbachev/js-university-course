// A type alias and an interface describe the shape of our book objects.
export type Book = {
    key: string;
    title: string;
    author: string;
    year: number | null;
    coverId: number | null;
    read: boolean;
};

export interface ReadingList {
    owner: string;
    books: Book[];
}
