import { getI18n } from "@/locales/server";
import { useAuthStore } from "@/stores/AuthStore";

export default async function DashboardPage() {
    const t = await getI18n()

    const { user } = useAuthStore((state) => state);
    console.log(user)
    
    return (
        <h1>{t('new')}</h1>

    )
}