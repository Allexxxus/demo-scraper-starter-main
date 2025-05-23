"use client";

import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [result, setResults] = useState<object>();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent default form submission
    if (url) { // Only proceed if URL is not empty
      handleOnClick(url);
    }
  };

  async function handleOnClick(urlParameter: string) {
    const results = await fetch('api/scraper', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: urlParameter })
    }).then(r => r.json());
    setResults(results);
  }



  return (
    <main className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-8">Let&apos;s scrape something!</h1>
          <p className="mb-2">
            Click the button to test out your new scraper.
          </p>
          <p className="text-sm text-zinc-700 italic mb-6">
            Psst. Make sure you <a className="text-blue-500 underline" href="https://spacejelly.dev" target="_blank">build it first</a>!
          </p>

          <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Paste URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="input input-bordered w-full max-w-xs"
        />
        <button 
          type="submit" 
          className="btn btn-primary ml-2"
        >
          Get Started
        </button>
      </form>

          {result && (
            <div className="grid">
              <pre className="bg-zinc-200 text-left py-4 px-5 rounded overflow-x-scroll">
                <code>{JSON.stringify(result, undefined, 2)}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}




// "use client";

// import { useState } from 'react';

// export default function Home() {
//   const [result, setResults] = useState<object>();

//   async function handleOnClick() {
//     const results = await fetch('api/scraper', {
//       method: 'POST',
//       body: JSON.stringify({})
//     }).then(r => r.json())
//     setResults(results)
//   }

//   return (
//     <main className="hero bg-base-200 min-h-screen">
//       <div className="hero-content text-center">
//         <div className="max-w-xl">
//           <h1 className="text-5xl font-bold mb-8">Let&apos;s scrape something!</h1>
//           <p className="mb-2">
//             Click the button to test out your new scraper.
//           </p>
//           <p className="text-sm text-zinc-700 italic mb-6">
//             Psst. Make sure you <a className="text-blue-500 underline" href="https://spacejelly.dev" target="_blank">build it first</a>!
//           </p>
//           <p className="mb-6">
            
//             <button className="btn btn-primary" onClick={handleOnClick}>Get Started</button>
//           </p>
//           {result && (
//             <div className="grid">
//               <pre className="bg-zinc-200 text-left py-4 px-5 rounded overflow-x-scroll">
//                 <code>{JSON.stringify(result, undefined, 2)}</code>
//               </pre>
//             </div>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// }