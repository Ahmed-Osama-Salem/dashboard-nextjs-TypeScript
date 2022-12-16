export interface ITableApiData {
  __v?: number;
  _id?: string;
  time?: string;
  allText: IAllText;
  text: { text1: string; text2: string }[];
  textMosad: { mosadName: string; mosadJob: string }[];
}

interface IAllText {
  dateNow: string;
  time: string;
  rkmElw7da: string;
  elbnd: string;
  topics: string;
  contractType: string;
  techNumber: string;
  mosadNumber: string;
  from: string;
  to: string;
  noteAdd: string;
  kmiatMon: string;
  tnfizState: string;
  angaz: string;
  notes: string;
  twqi3: string;
}
