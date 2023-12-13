export type User = {
  name: string;
  apelido: string;
  email: string;
  telefone: string;
  password: string;
  passwordResetToken: string;
  purchaseHistoric: Array<string>;
  participatingList: Array<string>;
  favoriteList: Array<string>;
};
