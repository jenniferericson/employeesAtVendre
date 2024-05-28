import { IVendreResponse } from "../models/IVendreResponse";
import { get } from "./serviceBase";

let url =
  "https://reqres.in/api/users";

export const getEmployees = async (): Promise<IVendreResponse> => {
  const response =  await get<IVendreResponse>(url);
  return response
};