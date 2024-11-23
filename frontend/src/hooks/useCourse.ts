
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useCreateCourse= () => {


    const createCourse= async (title:string, description: string, language: string, category: string) => {
        
        try {
            const res = await axiosInstance.post('/Course', { title, description, language, category});
            console.log(res.data)
            return res
        } catch (error) {
            console.error(error);
            toast.error('error: '+error);
        }
    }
    return { createCourse };
}

export const useCreateLesson = () => {
    const createLesson = async (formData: FormData) => {
        try {
            const res = await axiosInstance.post('/Chapter', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("Response:", res.data);
            return res.data;
        } catch (error) {
            console.error("Error uploading lesson:", error);
            toast.error(error.message)
        }
    };

    return { createLesson };
};


export const useCreateQuestion= () => {

    const createQuestion= async (description:string, type: string, points: string, chpt_id: number) => {
        try {
            const res = await axiosInstance.post('/Question', { description, type, points, chpt_id});
            console.log(res.data)
            return res
        } catch (error) {
            console.error(error);
            toast.error('error: '+error);
        }
    }
    return { createQuestion};
}

export const useCreateResponse = () => {

    const createResponse= async (value:string, isTrue: boolean, quest_id: number) => {
        try {
            const res = await axiosInstance.post('/Response', { value, isTrue, quest_id});
            console.log(res.data)
            return res
        } catch (error) {
            console.error(error);
            toast.error('error: '+error);
        }
    }
    return { createResponse };
}

export const useCreateUserCours= () => {
    const createUserCours= async (cours_id: number, ) => {
        try {
            const res = await axiosInstance.post('/UserCours', { cours_id });
            console.log(res.data)
            return res
        } catch (error) {
            console.error(error);
            toast.error('error: '+error);
        }
    }
    return { createUserCours };
}

export const useUpdatePoint= () => {


    const updatePoint= async (points: number) => {
        
        try {
            const res = await axiosInstance.post('/User/updatePts', { points });
            console.log(res.data)
            return res
        } catch (error) {
            console.error(error);
            toast.error('error: '+error);
        }
    }
    return { updatePoint };
}