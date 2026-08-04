
function getLength(val: string): string; // --> function overload
function getLength(val: any[]): number; // --> function overload
function getLength(val: string | any[]) { // --> function implementation
    if (typeof val === 'string') {
        const numberOfWords = val.split(' ').length;
        return `This string has ${numberOfWords} words`;
    }
    return val.length;
}

const numberOfWords = getLength("Hello my name is Cesar");
// numberOfWords.length; // --> Property 'length' does not exist on type 'string | number', why? typescript only knows that the function returns a string OR a number, not the specific type of the variable. But we can use the function overload to solve this problem.

const numItems = getLength([1, 2, 3, 4, 5]);
