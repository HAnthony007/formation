import { getI18n } from "@/locales/server";
import { Suspense } from "react";

export default async function Home() {
  const t = await getI18n()
  return (

    <Suspense fallback={<p>Loading main page ...</p>}>
      <div className="grid w-full h-full m-auto"
        
      >
        <div className="p-10 "
        >
          <h1>{t('new')}</h1>
        </div>
      </div>

    </Suspense>
  );
}
