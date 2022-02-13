export const getSortedItems = (data, id) => {
    data.sort((a, b) => {
        if (typeof a[id] === 'number') {
            return a[id] - b[id];
        } 
        else {
            return a[id].toString().localeCompare(b[id].toString());
        }
    });
    
    return [...data];
};