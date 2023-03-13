export async function getServerSideProps() {
    const resp = await fetch(`http://localhost:3000/api/students`);
    const students = await resp.json()

    return {
      props: {
        students
      }
    }
}

export default function ssr(props) {
    function renderstudents() {
        return (
            <div>
                {props.students.map(student => {
                    return <li key={student.id}>{student.name}</li>
                })}
            </div>
        )
    }

    return (
      <div>
        <h1>SSR</h1>
        {renderstudents()}
      </div> 
    )
}
    