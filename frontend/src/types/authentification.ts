
export type AuthState = {
    user: User | null;
    token: string | null;

    setUser: (user: User ) => void;
    setToken: (token: string, role: string) => void;
    logout: () => void;
}

export type SignUp = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

export type User = {
    iduser: number;
    firstname: string;
    lastname: string;
    email: string;
    role: UserRole;
    level: UserLevel;
    status: string;
}

export type UserRole = 'formateur' | 'etudiant' | 'admin'
export type UserLevel = 'beginner' | 'intermediate' | 'advanced'