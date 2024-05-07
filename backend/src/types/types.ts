export interface IUser {
    id: string
    login: string
    role: string
}


export type ProjectStatus = "NotWorking" | "InWork" | "Stopped" | "Ending";
