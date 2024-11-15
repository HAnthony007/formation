import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (

    <Suspense fallback={<p>Loading main page ...</p>}>
      <div className="grid max-w-screen-xl w-full h-full m-auto"
        
      >
        <div className="p-10 "
          style={{
          background: "linear-gradient(180deg,rgba(251,251,255,0) 79.36%,#f4f4fd 100%),linear-gradient(180deg,#fafaff 0,rgba(250,250,255,.678) 24.48%,rgba(250,250,255,0) 77.6%,#fafaff 100%),var(--hex-bg-image),#fafaff",
          backgroundPosition: '-190px',
          backgroundSize: "100%"
        }}
        >
          <h1>Hello World</h1>
        </div>
      </div>

    </Suspense>
  );
}
