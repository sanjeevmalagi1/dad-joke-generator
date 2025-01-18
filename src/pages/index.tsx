export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_BASE_URL}/api/v1/joke`)

  if (res.status != 200) {
    return { props: { isError: true } }
  }
  
  const data = await res.json()

  return { props: { joke: data.item.joke } }
}

export default function Home(props: any) {

  if (props.isError) {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1>Whoops! All jokes are taken!</h1>
                <h2>🤡</h2>
            </main>
        </div>
    )
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>{props.joke.setup}</h1>
        <h2>{props.joke.punchline}</h2>
      </main>
    </div>
  );
}
