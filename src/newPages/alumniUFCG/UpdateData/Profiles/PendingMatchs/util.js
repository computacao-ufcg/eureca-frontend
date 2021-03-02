const sortData = (data, sortType) => {

    return data.sort((a, b) => {
        let x = a.alumnus.fullName;
        let y = b.alumnus.fullName;
        if (typeof x === 'string') {
            x = x.charCodeAt();
        }
        if (typeof y === 'string') {
            y = y.charCodeAt();
        }
        if (sortType === 'asc') {
            return x - y;
        } else {
            return y - x;
        }
    });
}

export { sortData };