import React, { useEffect, useRef } from "react";
import "./CourseRegister.css"
import { toast } from "react-toastify";
import axios from "axios";


const Courseregister = ({ getUsers, onEdit, setOnEdit }) =>{


  const ref = useRef();

    useEffect(() => {
        if (onEdit){
            const user = ref.current;

            user.courseName.value = onEdit.courseName;
            user.courseTeacher.value = onEdit.courseTeacher;
            user.courseCategory.value = onEdit.courseCategory;
            user.courseDescription.value = onEdit.courseDescription;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if (
            !user.courseName.value ||
            !user.courseTeacher.value ||
            !user.courseCategory.value ||
            !user.courseDescription.value 
        ) {
            return toast.warn("Preencha todos os campos!");
        }

        if(onEdit){
            await axios
            .put("http://localhost:8800/courses" + onEdit.idCourse, { //localhost:8800 caso dê errado
                nome: user.courseName.value,
                professor_resp: user.courseTeacher.value,
                categoria: user.courseCategory.value,
                descricao: user.courseDescription.value, 
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        } else {
            await axios
            .post("http://localhost:8800/courses", {
                nome: user.courseName.value,
                professor_resp: user.courseTeacher.value,
                categoria: user.courseCategory.value,
                descricao: user.courseDescription.value, 
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        }

        user.courseName.value = "";
        user.courseTeacher.value = "";
        user.courseCategory.value = "";
        user.courseDescription.value = "";

        setOnEdit(null);
        getUsers();
    };

    return (
        <div className='form__container'>
          <div className='form__area'>
            <form ref={ref} onSubmit={handleSubmit}>
              <h1>Cadastro do Curso</h1>
              <label>Nome do Curso</label>
              <input type='text' placeholder='Adminsitração e etc.'/>
              <label>Professor Responsavel</label>
              <input type='text' placeholder='Rogério Dias'/>
              <label>Categoria do Curso</label>
              <input type='text' placeholder='Gerencia'/>
              <label>Descrição do Curso</label>
              <input type='text' placeholder='Curso de Administração...'/>
              <label>Imagem do Curso</label>
              <input type='file' className='input__image'/>
              <button type='submit'>Enviar</button>
            </form>
          </div>
        </div>
      )
}

export default Courseregister;