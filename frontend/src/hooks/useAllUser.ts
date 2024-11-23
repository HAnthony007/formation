'use client'
import axiosInstance, { apiUrl } from "@/utils/axiosInstance";
import { fetcher } from "@/utils/fetcher";
import { toast } from "sonner";
import useSWR, { mutate } from "swr";

export function useAllCourses() {
    const { data: courses, error, isLoading } = useSWR<any>(`/Course`,
        fetcher,
        {
            onError: (error) => {
                console.error("An error occurred during fetch", error)
            },
        },
    );


    const updateCoursesData = async () => {
        try {
            await mutate(`${apiUrl}/Course`);
        } catch (error) {
            console.error("Error updating user data", error);
        }
    }

    return {
        courses: courses?.data || [],
        isLoading,
        error: error?.message || null,
        updateCoursesData
    };
}

export function useAllUserCours() {
    const { data: cours, error, isLoading } = useSWR<any>(`/UserCours`,
        fetcher,
        {
            onError: (error) => {
                console.error("An error occurred during fetch", error)
            },
        },
    );

    const updateCoursesData = async () => {
        try {
            await mutate(`${apiUrl}/UserCours`);
        } catch (error) {
            console.error("Error updating user data", error);
        }
    }

    return {
        userCourses: cours?.data || [],
        isLoading,
        error: error?.message || null,
        updateCoursesData
    };
}

export const useCourseId = (id: string) => {
    const { data: coursId, error, isLoading } = useSWR<any>(`/Course/${id}`,
        fetcher,
        {
            onError: (error) => {
                console.error("An error occurred during fetch", error)
            },
        },
    );


    return {
        courseId: coursId?.data || [],
        isLoading,
        error: error?.message || null,
    };
}

export const useCourse = (id: string) => {
    const { data: cours, error, isLoading } = useSWR<any>(`/Course/selected/${id}`,
        fetcher,
        {
            onError: (error) => {
                console.error("An error occurred during fetch", error)
            },
        },
    );


    return {
        course: cours?.data || [],
        isLoading,
        error: error?.message || null,
    };
}

export const useChapter = (id: string) => {
    const { data: chapter, error, isLoading } = useSWR<any>(`/Chapter/${id}`,
        fetcher,
        {
            onError: (error) => {
                console.error("An error occurred during fetch", error)
            },
        },
    );

    return {
        chapter: chapter?.data || [],
        isLoading,
        error: error?.message || null,
    };
}

export const useChapterId = (id: string) => {
    const { data: chapter, error, isLoading } = useSWR<any>(`/Chapter/selected/${id}`,
        fetcher,
        {
            onError: (error) => {
                console.error("An error occurred during fetch", error)
            },
        },
    );

    return {
        chapterId: chapter?.data || [],
        isLoading,
        error: error?.message || null,
    };
}

export const useQuestion = (id: string) => {
    const { data: question, error, isLoading } = useSWR<any>(`/Question/selected/${id}`,
        fetcher,
        {
            onError: (error) => {
                console.error("An error occurred during fetch", error)
            },
        },
    );

    return {
        question: question?.data || [],
        isLoading,
        error: error?.message || null,
    };
}

export const useQuestionExo = (id: string) => {
    const { data: question, error, isLoading } = useSWR<any>(`/Question/${id}`,
        fetcher,
        {
            onError: (error) => {
                console.error("An error occurred during fetch", error)
            },
        },
    );

    return {
        questionId: question?.data || [],
        isLoading,
        error: error?.message || null,
    };
}

export const useDeleteUsersCours = () => {
    // const { updateDepartementData } = useAllDepartement();
    // const { updateCoursesData } = useAllUserCours();
    const DeleteUserCours = async (id: string) => {
        try {
            const res = await axiosInstance.delete(`/UserCours/${id}`);

            toast.success("Success: ", res.data.message);
            // updateCoursesData()
            return res.data;
        } catch (error) {
            toast.error("An error occured during delete UserCours: " + error);
            throw error;
        }
    }

    return { DeleteUserCours };
}


export function useAllChapiter() {
    const { data: chapiter, error, isLoading } = useSWR<any>(`/Chapter`,
        fetcher,
        {
            onError: (error) => {
                console.error("An error occurred during fetch", error)
            },
        },
    );


    const updateChapiterData = async () => {
        try {
            await mutate(`${apiUrl}/Chapter`);
        } catch (error) {
            console.error("Error updating user data", error);
        }
    }

    return {
        chapiter: chapiter?.data || [],
        isLoading,
        error: error?.message || null,
        updateChapiterData
    };
}


export function useAllQuestion() {
    const { data: question, error, isLoading } = useSWR<any>(`/Question`,
        fetcher,
        {
            onError: (error) => {
                console.error("An error occurred during fetch", error)
            },
        },
    );


    const updateQuestionData = async () => {
        try {
            await mutate(`${apiUrl}/Question`);
        } catch (error) {
            console.error("Error updating user data", error);
        }
    }

    return {
        question: question?.data || [],
        isLoading,
        error: error?.message || null,
        updateQuestionData
    };
}

export function useUser() {
    const { data: user, error, isLoading } = useSWR<any>(`/User`,
        fetcher,
        {
            onError: (error) => {
                console.error("An error occurred during fetch", error)
            },
        },
    );


    const updateUser = async () => {
        try {
            await mutate(`${apiUrl}/User`);
        } catch (error) {
            console.error("Error updating user data", error);
        }
    }

    return {
        user: user?.data || [],
        isLoading,
        error: error?.message || null,
        updateUser
    };
}