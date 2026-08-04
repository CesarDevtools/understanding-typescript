type FileData = {
    path: string;
    content: string;
}

type Database = {
    connnectionUrl: string;
    credentials: string;
}

type Status = {
    isOpen: boolean;
    errorMessage?: string;
}

type AccessedFileData = FileData & Status; // --> intersection types allow us to combine multiple types into one.
type AccessedDataBaseData = Database & Status;