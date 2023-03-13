import { useState, useEffect } from "react"
  
export default function CSR() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/api/students`)
      .then((res) => res.json())
      .then((students) => {
        setStudents(students)
      })
  }, [])

  return (
    <div>
      <h1>CSR</h1>
      {students.map(student => {
        return <li key={student.id}>{student.name}</li>
      })}
    </div> 
  )
}
  