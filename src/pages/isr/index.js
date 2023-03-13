export function getStaticProps() {
    return {
      revalidate: 7,
      props: {
        number: Math.random()
      }
    }
}
  
export default function ssg(props) {
    return (
        <div>
            <h1>SSG</h1>
            {props.number}
        </div> 
    )
}
