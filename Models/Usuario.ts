import { Persona } from "./Persona";
export interface Usuario {
    id_usuario: number;
    usuario: string;
    email: string;
    persona: Persona;
}