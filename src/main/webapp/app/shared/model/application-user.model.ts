import { IUser } from 'app/shared/model/user.model';

export interface IApplicationUser {
  id?: number;
  inGame?: string | null;
  zaloName?: string | null;
  phone?: string | null;
  age?: number | null;
  fullName?: string | null;
  user?: IUser | null;
}

export const defaultValue: Readonly<IApplicationUser> = {};
