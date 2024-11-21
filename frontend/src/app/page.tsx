'use client'
import { Suspense } from "react";

export default function Home() {
  return (

    <Suspense fallback={<p>Loading main page ...</p>}>
      <div className="grid w-full h-full m-auto"
        
      >
        <div className="p-10 "
        >
          <h1>Hello World</h1>
        </div>
      </div>

    </Suspense>
  );
}
