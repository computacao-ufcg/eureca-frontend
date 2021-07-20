const getYear = term => Number(term.substring(0, 4));

export default {
  generate: (from, to) => {
    const from_year = getYear(from);
    const to_year = getYear(to);

    let terms = [];
    let from_flag = Number(from.slice(-1));

    for (let year = from_year; year <= to_year; year++) {
      const to_flag = year === to_year && to.slice(-1) === "1" ? 1 : 2;
      for (let i = from_flag; i <= to_flag; i++) {
        if (from_flag === 2) {
          from_flag = 1;
        }
        terms.push(`${year}.${i}`);
      }
    }

    return terms;
  },
};
