export const fieldsData: IFields[] = [
  {
    label: 'الوقت',
    name: 'time',
    type: 'text',
    placeholder: 'time',
  },
  {
    label: 'تاريخ',
    name: 'dateNow',
    type: 'text',
    placeholder: 'dateNow',
  },

  {
    label: 'البنــد',
    name: 'elbnd',
    type: 'text',
    placeholder: 'elbnd',
  },
  {
    label: 'الوحــدة',
    name: 'rkmElw7da',
    type: 'text',
    placeholder: 'rkmElw7da',
  },

  {
    label: 'الى',
    name: 'to',
    type: 'time',
    placeholder: 'to',
  },
  {
    label: 'من',
    name: 'from',
    type: 'time',
    placeholder: 'from',
  },
  {
    label: 'مذكرة الخصم / الاضافة',
    name: 'noteAdd',
    type: 'text',
    placeholder: 'noteAdd',
  },
  {
    label: 'كمية المون',
    name: 'kmiatMon',
    type: 'text',
    placeholder: 'kmiatMon',
  },

  {
    label: 'نسبة الانجاز',
    name: 'angaz',
    type: 'text',
    placeholder: 'angaz',
  },
  {
    label: 'الموقف التنفيذى',
    name: 'tnfizState',
    type: 'text',
    placeholder: 'tnfizState',
  },
  {
    label: ' عدد الفنـيـن',
    name: 'techNumber',
    type: 'text',
    placeholder: 'techNumber',
  },
  {
    label: 'عدد المســاعدين',
    name: 'mosadNumber',
    type: 'text',
    placeholder: 'mosadNumber',
  },
];

export const selectTopicsFields = [
  { name: 'نجاره', id: 1 },
  { name: 'حدادة', id: 2 },
  { name: 'فرمجة', id: 3 },
  { name: 'مبانى', id: 4 },
  { name: 'بياض', id: 5 },
  { name: 'كهرباء', id: 6 },
  { name: 'عمارةنجاره', id: 7 },
];

export const selectContractTypeFields = [
  { name: 'يوميات', id: 1 },
  { name: 'متر', id: 2 },
  { name: 'مقطوعية', id: 3 },
];

export const TechObject = {
  text1: '',
  text2: '',
};
export const MosadObject = {
  mosadName: '',
  mosadJob: '',
};

export interface IFields {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

export const fieldsUpdate: IFields[] = [
  {
    label: 'تاريخ',
    name: 'dateNowUpdate',
    type: 'text',
    placeholder: 'dateNow',
  },
  {
    label: 'الوقت',
    name: 'timeUpdate',
    type: 'text',
    placeholder: 'time',
  },
  {
    label: 'الوحــدة',
    name: 'rkmElw7daUpdate',
    type: 'text',
    placeholder: 'rkmElw7da',
  },
  {
    label: 'البنــد',
    name: 'elbndUpdate',
    type: 'text',
    placeholder: 'elbnd',
  },

  {
    label: 'الفنـيـن',
    name: 'techNumberUpdate',
    type: 'text',
    placeholder: 'techNumber',
  },
  {
    label: 'المســاعدين',
    name: 'mosadNumberUpdate',
    type: 'text',
    placeholder: 'mosadNumber',
  },
  {
    label: 'من',
    name: 'fromUpdate',
    type: 'time',
    placeholder: 'from',
  },
  {
    label: 'الى',
    name: 'toUpdate',
    type: 'time',
    placeholder: 'to',
  },
  {
    label: 'مذكرة',
    name: 'noteAddUpdate',
    type: 'text',
    placeholder: 'noteAdd',
  },
  {
    label: 'المون',
    name: 'kmiatMonUpdate',
    type: 'text',
    placeholder: 'kmiatMon',
  },
  {
    label: 'الموقف',
    name: 'tnfizStateUpdate',
    type: 'text',
    placeholder: 'tnfizState',
  },
  {
    label: 'الانجاز',
    name: 'angazUpdate',
    type: 'text',
    placeholder: 'angaz',
  },
];
