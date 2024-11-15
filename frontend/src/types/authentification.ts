
export type AuthState = {
    user: User | null;
    token: string | null;

    setUser: (user: User ) => void;
    setToken: (token: string, role: string) => void;
    logout: () => void;
}

export type User = {
    id_empl: string;
    n_matricule: string;
    id_dep: string;
    id_suphier: string | null;
    nom_empl: string;
    prenom_empl: string;
    email_empl: string;
    passw_empl: string;
    role: UserRole;
    status: string;
}

export type UserRole = 'formateur' | 'etudiant' | 'admin'