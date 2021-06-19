import Student from "../models/Student";

export const classController = (req, res) => {
    res.render("admin/class");
};

export const studentController = (req, res) => {
    res.render("admin/student");
};

export const createStudentController = async (req, res) => {
    const { body: {
        stu_name,
        stu_gender,
        stu_school,
        stu_grade,
        stu_class,
        stu_hobby,
    }, } = req;
    try {
        const result = await Student.create({
            name: stu_name,
            gender: stu_gender,
            school: stu_school,
            grade: parseInt(stu_grade),
            ban: parseInt(stu_class),
            birth: "2003/20/20",
            hobby: stu_hobby,
        })

        res.render("admin/student", { msg: "데이터가 추가되었습니다." });
    } catch (e) {
        console.log(e)
        studentController(req, res);
    }
};