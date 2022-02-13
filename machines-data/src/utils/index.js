export const getSortedItems = (data, field, lastSortedField, inversed) => {
    data.sort((a, b) => {
        const result = typeof a[field] === 'number'
            ? a[field] - b[field]
            : a[field].toString().localeCompare(b[field].toString());

        if (field !== lastSortedField)
            return result;
        else {
            return inversed ? -result : result;
        }        
    });
    
    return [...data];
};