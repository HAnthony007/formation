import { useAuthStore } from "@/stores/AuthStore";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";


export const useSignup = () => {
    const router = useRouter();


    const signup = async (name:string, email: string, role: string, password: string) => {
        try {
            const res = await axiosInstance.post('/register', { name, email, role, password });

            if (!res.data.success) return console.log(res.data.message);
            // const { user, token } = res.data.data;
            // const role = user.role.toLowerCase();
            // // setUser(user);
            // // setToken(token, role);
            // // toast.success("Login Successfully");
            // router.push(`/${user.role.toLowerCase()}/dashboard`);
            // console.log("Voici le user: ")
            // console.log(user);

            return res.data;
        } catch (error) {
            console.error(error);
            // toast.error("Quelque chose ne va pas avec le serveur pour le Login");
            throw error;
        }
    }
    return { signup };
}

export const useLogin = () => {
    
    const setToken = useAuthStore((state) => state.setToken);
    const setUser = useAuthStore((state) => state.setUser);
    const login = async (email: string, password: string) => {
        try {
            const res: any = await axiosInstance.post('/login', { email, password });

            const { user, token } = res.data;
            const emailuser = user.email
            const role = user.role.toLowerCase();
            console.log("Voici le user: " + emailuser);
            console.log("Voici le token: " + token);
            console.log("Voici le role: " + role);
            setUser(emailuser);
            setToken(token, role);
            // toast.success("Login Successfully");
            // router.push(`/${user.role.toLowerCase()}/dashboard`);
            return res.data;
        } catch (error) {
            console.error(error);
            // toast.error("Quelque chose ne va pas avec le serveur pour le Login");
            throw error;
        }
    }
    return { login };
}
