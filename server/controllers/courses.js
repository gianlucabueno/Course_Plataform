import mysql from "mysql"

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password :"Gi@n1598",
    database: "crud"
})

export const getCourses = (_, res) => {
  const q = "SELECT * FROM courses";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addCourses = (req, res) => {
  const q =
  "INSERT INTO courses(`courseName`, `courseTeacher`, `courseCategory`, `courseDescription`) VALUES(?)";

  const values = [
      req.body.courseName,
      req.body.courseTeacher,
      req.body.courseCategory,
      req.body.courseDescription,
  ];

  db.query(q, [values], (err) =>{
      if(err) return res.json(err);

      return res.status(200).json("O Novo curso cadastrado com sucesso!");
  });
};

export const updateCourses= (req, res) => {
  const q =
  "UPDATE courses SET `courseName` = ?, `courseTeacher` = ?, `courseCategory` = ?, `courseDescription` = ? WHERE `idCourse` = ?";

  const values = [
    req.body.courseName,
    req.body.courseTeacher,
    req.body.courseCategory,
    req.body.courseDescription,
  ];

  db.query(q, [...values, req.params.idCourse], (err) =>{
      if (err) return res.json(err);

      return res.status(200).json("O curso atualizado com sucesso!");
  });
};

export const deleteCourses = (req, res) => {
  const q = "DELETE FROM courses WHERE `idCourse` = ?";

  db.query(q, [req.params.idCourse], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("O curso deletado com sucesso.");
  });
};