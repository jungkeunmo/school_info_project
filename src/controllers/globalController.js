export const mainController = (req, res) => {
    res.render("global/main");
};

export const resultController = (req, res) => {
    const { s, g, c } = req.query;

    if (s === "--선택--" || g === "--선택--" || c === "--선택--") {
        res.render("global/main", { errorMsg: "학교, 학년, 반을 선택하세요." });
    } else {
        console.log(s);
        console.log(g);
        console.log(c);

        res.render("global/result");
    }
};