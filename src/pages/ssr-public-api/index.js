export async function getServerSideProps() {
    const resp = await fetch(`https://www.boredapi.com/api/activity`);
    const activity = await resp.json()

    return {
      props: {
        activity
      }
    }
}

export default function ssr(props) {
    function renderActivity() {
        return (
            <div>
                <p>{props.activity.activity}</p>
                <p>{props.activity.type}</p>
                <p>{props.activity.participants}</p>
                <p>{props.activity.price}</p>
                <p>{props.activity.link}</p>
                <p>{props.activity.key}</p>
                <p>{props.activity.accessibility}</p>
            </div>
        )
    }

    return (
      <div>
        <h1>SSR</h1>
        {renderActivity()}
      </div> 
    )
}
    