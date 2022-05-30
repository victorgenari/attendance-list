// Hooks
import { useState, useEffect } from "react";

// API
// import api from '../../services/api'

// Components
import { Card } from "../../components/Card";

// CSS Home
import { Container, Content, Header, InputAndButton } from "./styles";


export function Home() {
    const [studentName, setStudentName] = useState()
    const [students, setStudents] = useState([])

    function handleAddStudent() {
        const newStudent = {
            name: studentName,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            })
        }

        setStudents(prevState => [...prevState, newStudent])
    }



    const [gitUser, setGitUser] = useState({ name: '', avatar: '' })

    useEffect(() => {
        fetch('https://api.github.com/users/victorgenari')
            .then(response => response.json())
            .then(data => {
                setGitUser({
                    id: data.id,
                    avatar: data.avatar_url,
                })
            })

        // api.get().then(response => {
        //     if (response.status === 200) {
        //         console.log(response)
        //     }
        // })

    }, [])


    return (
        <Container>
            <Content>

                <Header>
                    <h1>Lista de presença</h1>

                    <div>
                        <span>#{gitUser.id}</span>
                        <img src={gitUser.avatar} alt="Imagem Usuário" />
                    </div>
                </Header>

                <InputAndButton>
                    <input type="text" placeholder="Insira um nome" onChange={(e) => setStudentName(e.target.value)} />
                    <button type="button" onClick={handleAddStudent}>Adiconar</button>
                </InputAndButton>

                {students && students.map((student) => {
                    return (
                        <Card key={student.time} name={student.name} time={student.time} />
                    )
                })}
            </Content>
        </Container>
    )
}