import { IApplicationUser } from 'app/shared/model/application-user.model';
import { Type } from 'app/shared/model/enumerations/type.model';
import { XacNhan } from 'app/shared/model/enumerations/xac-nhan.model';

export interface IReview {
  id?: number;
  point?: number | null;
  userReviewId?: number | null;
  type?: Type | null;
  status?: XacNhan | null;
  applicationUser?: IApplicationUser | null;
}

export const defaultValue: Readonly<IReview> = {};
