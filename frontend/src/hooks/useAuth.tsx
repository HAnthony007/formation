import { useAuthStore } from "@/stores/AuthStore";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export const useSignup = () => {
    const router = useRouter();


    const signup = async (firstName:string, lastName: string, email: string, password: string) => {
        try {
            const res = await axiosInstance.post('/register', { firstName, lastName, email, password });

            console.log(res.data)
            // if (!res.data.success) return console.log(res.data.message);
            // toast.success("Register Successfully");
            // router.push('/login');
            // return res.data;
        } catch (error) {
            console.error(error);
            toast.error('error: '+error.message);
        }
    }
    return { signup };
}

export const useLogin = () => {
    const router = useRouter()
    const setToken = useAuthStore((state) => state.setToken);
    const setUser = useAuthStore((state) => state.setUser);
    const login = async (email: string, password: string) => {
        try {
            const res: any = await axiosInstance.post('/login', { email, password });

            console.log(res)
            const { user, token } = res.data;
            const emailuser = user.email
            const role = user.role.toLowerCase();
            console.log("Voici le user: " + emailuser);
            console.log("Voici le token: " + token);
            console.log("Voici le role: " + role);
            // setUser(emailuser);
            // setToken(token, role);
            // toast.success("Login Successfully");
            // router.push(`/${user.role.toLowerCase()}`);
            // return res.data;
        } catch (error) {
            console.error(error);
            // toast.error("Quelque chose ne va pas avec le serveur pour le Login");
            throw error;
        }
    }
    return { login };
}
