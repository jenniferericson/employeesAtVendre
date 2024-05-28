import { IEmployee } from "./IEmployee";

export interface IVendreResponse {
  total_pages: 2
  data: IEmployee[];
}