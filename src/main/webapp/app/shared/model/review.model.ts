import dayjs from 'dayjs';
import { IApplicationUser } from 'app/shared/model/application-user.model';
import { Type } from 'app/shared/model/enumerations/type.model';

export interface IReview {
  id?: number;
  point?: number | null;
  userReviewId?: number | null;
  type?: Type | null;
  startDate?: string | null;
  endDate?: string | null;
  ppplicationUser?: IApplicationUser | null;
}

export const defaultValue: Readonly<IReview> = {};
