import dayjs from 'dayjs';
import { IUser } from 'app/shared/model/user.model';

export interface IApplicationUser {
  id?: number;
  inGame?: string | null;
  name?: string | null;
  phone?: string | null;
  age?: number | null;
  startDate?: string | null;
  endDate?: string | null;
  user?: IUser | null;
}

export const defaultValue: Readonly<IApplicationUser> = {};
