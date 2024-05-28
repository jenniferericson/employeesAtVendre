import { IVendreResponse } from "../models/IVendreResponse";
import { get } from "./serviceBase";

let url =
  "https://reqres.in/api/users?page=";

export const getEmployees = async (pageNumber:number): Promise<IVendreResponse> => {
  const page = pageNumber.toString()
  const response =  await get<IVendreResponse>(url + page);
  return response
};