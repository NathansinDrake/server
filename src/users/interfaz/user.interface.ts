export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    comparePassword(candidatePassword: string): Promise<boolean>; // agrega esta propiedad
  }