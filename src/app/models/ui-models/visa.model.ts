import { Document } from "./Document.model";
export interface Visa {
  name: string;
  workAuth: string;
  expireDate: string;
  dayLeft: number;
  isActionRequired: boolean;
  isFilledByEmployeeRequired: boolean;
  isSigendByHrRequired: boolean;
  personID: number;
  startDate: string;
  documents: Document[];
}
