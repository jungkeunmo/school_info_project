import Student from "../models/Student";

export const mainController = (req, res) => {
    res.render("global/main");
};

export const resultController = async (req, res) => {
    const { s, g, c } = req.query;
    // 값이 정상적으로 들어오지 않았을 때, 메인으로 다시 보내주는 역할 
    if (s === "--선택--" || g === "--선택--" || c === "--선택--") {
        res.render("global/main", { errorMsg: "학교, 학년, 반을 선택하세요." });
    }
    // 값이 정삭적으로 들어왔다면, -> 데이터베이스에서 일치하는데이터 검색 -> 화면으로 전송
    else {

        try {
            const studentList = await Student.find({
                school: s,
                grade: parseInt(g),
                ban: parseInt(c),
            }, {});
            console.log(studentList)
            res.render("global/result", { list: studentList });
        } catch (e) {
            console.log(e);
            mainController(req, res);
        }
    }
};
