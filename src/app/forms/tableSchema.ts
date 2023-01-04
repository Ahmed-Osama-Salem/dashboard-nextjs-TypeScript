import * as Yup from 'yup';

export const TableSchema = Yup.object({
  allText: Yup.object({
    angaz: Yup.string().required('يرجى ادخال نسبة الانجاز'),
    techNumber: Yup.string().required('يرجى ادخال عدد الفنين'),
    mosadNumber: Yup.string().required('يرجى ادخال عدد المساعدين'),
  }),
});
