type FileSource = { type: 'file', path: string }; // --> type works as an identifier to distinguish between the different types in the union
const fileSource: FileSource = {
    type: 'file',
    path: 'some/path/to/file.csv',
};

type DBSource = { type: 'db', connectionUrl: string }; // --> type works as an identifier to distinguish between the different types in the union
const dbSource: DBSource = {
    type: 'db',
    connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

function isFile(source: Source) { // --> typescript returns returns a boolean but also checks the type of source, returning true means source is a FileSource
    return source.type === 'file';
}

function loadData(source: Source) {
    // Open + read file OR reach out to database server


    /* if ('path' in source) {
         console.log(`Loading data from file: ${source.path}`);
     } else {
         console.log(`Loading data from database: ${source.connectionUrl}`);
     }*/

    if (source.type === 'file') { // --> discriminated unions allow us to create type guards
        console.log(`Loading data from file: ${source.path}`);
        return;
    }

    console.log(`Loading data from database: ${source.connectionUrl}`);

}


//

