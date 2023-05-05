export const jwtConstants = {
  secret: process.env.JWT_SECRET || 'default_secret',
};

export enum Role {
  Admin = 'admin',
  User = 'user',
}
