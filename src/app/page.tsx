import CopyToClipboard from "@/components/CopyToClipboard"
import Link from "next/link";

export const metadata = {
  title: 'Ultimate Dad Joke Generator',
  keywords: 'dad jokes, humor, funny jokes, joke generator, laughter',
  openGraph: {
    title: 'Ultimate Dad Joke Generator',
    description: 'Generate dad jokes and share the fun with friends. Dive into the world of dad humor now!',
    url: 'https://ultimate-dad-joke-generator.netlify.app',
    siteName: 'Ultimate Dad Joke Generator',
    images: [
      {
        url: 'https://ultimate-dad-joke-generator.netlify.app/og-image.png'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ultimate Dad Joke Generator',
    description: 'Generate dad jokes and share the fun with friends. Dive into the world of dad humor now!',
    images: ['https://ultimate-dad-joke-generator.netlify.app/og-image.png'],
  },
};

export default async function Home() {

  const res = await fetch(`${process.env.API_BASE_URL}/api/v1/joke`, { cache: 'no-store' })

  if (res.status != 200) {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
              <h1>Whoops! All jokes are taken!</h1>
              <h2>🤡</h2>
          </main>
      </div>
    )
  }
  
  const data = await res.json()
  const joke = data.item.joke


  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <header className='fixed top-0 left-0 right-0 p-3 bg-slate-900 flex justify-center gap-2'>
          <h1 className="font-bold">Ultimate Dad Joke Generator</h1>
        </header>
        <main className="flex flex-col gap-8 row-start-2 items-center">
          <h1 className="text-4xl md:text-5xl font-bold">{joke?.setup}</h1>
          <h2  className="text-2xl md:text-3xl">{joke?.punchline}</h2>

          <div className="mt-8 flex gap-x-2">
            <Link href="/" className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-md" >
              Generate Another!
            </Link>
            <CopyToClipboard joke={joke} />
          </div>

        </main>

        <footer className="fixed bottom-0 left-0 right-0 p-3 bg-slate-900 flex justify-center gap-2">
          <div>
            App by <a className="font-bold text-blue-700" target='_blank' href="https://github.com/sanjeevmalagi1/">@sanjeevmalagi1</a>
          </div>
          <div>
          | Jokes by <a className="text-blue-700" target='_blank' href="https://platform.openai.com/">OpenAI</a>
          </div>
        </footer>
      </div>
    </>
  );
}
