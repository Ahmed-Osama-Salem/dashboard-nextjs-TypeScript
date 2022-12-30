export const tableHeader: ITableHeader[] = [
  {
    id: 0,
    title: 'الرقم المسلسل',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
    reefer: 'num',
  },
  {
    id: 1,
    title: 'التاريخ',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
  },
  {
    id: 2,
    title: 'الوقت',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
  },
  {
    id: 3,
    title: 'الوحــدة',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
  },
  {
    id: 4,
    title: 'البنــد',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
  },
  {
    id: 5,
    title: 'نـوع المصنـعيـات',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
  },
  {
    id: 6,
    title: 'نـوع المقاولة	',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
  },
  {
    id: 7,
    title: 'عـدد الفنين ',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
  },
];

export const TechHeaders: ITableHeader[] = [
  {
    id: 8,
    title: 'اسـم الفنى',
    classname:
      'py-3 px-24 text-center text-lg flex items-center justify-center ',
  },
  {
    id: 9,
    title: 'الاعمال',
    classname:
      'py-3 px-24 text-center text-lg flex items-center justify-center ',
  },
];

export const MosadNumbersHead: ITableHeader[] = [
  {
    id: 10,
    title: 'عدد المســاعدين',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
  },
];

export const MosadHeaders: ITableHeader[] = [
  {
    id: 11,
    title: 'اسم المساعد',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
  },
  {
    id: 12,
    title: 'الاعمال',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
  },
];

export const LastHeaders: ITableHeader[] = [
  {
    id: 13,
    title: 'من',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
  },
  {
    id: 14,
    title: 'الى',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
  },
  {
    id: 15,
    title: 'عدد الساعات',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
  },
  {
    id: 16,
    title: 'مذكرة الخصم / الاضافة',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
  },
  {
    id: 16,
    title: 'كميات المون',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
  },
  {
    id: 17,
    title: 'الموقف التنفيذى',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
  },
  {
    id: 18,
    title: 'نسبة الانجاز',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
  },
  {
    id: 19,
    title: 'ملاحظات',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
  },
  {
    id: 20,
    title: 'التوقيعات',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
  },
  {
    id: 21,
    title: 'تعديلات',
    classname: 'py-3 px-24 text-center text-lg !sticky top-0 ',
  },
];

export interface ITableHeader {
  id: number;
  title: string;
  classname: string;
  reefer?: string;
}
