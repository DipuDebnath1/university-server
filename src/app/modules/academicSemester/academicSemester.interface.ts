export type TMonths =
            "January"
            |"February"
            |"March"
            |"April"
            |"May"
            |"June"
            |"July"
            |"August"
            |"September"
            |"October"
            |"November"
            |"December"
export type TName = "Autumn" | "Summer" | "Fall"
export type TCode = "01" | "02" | "03";

export type TAcademicSemester = {
  name:TName;
  code: TCode;
  date: String;
  startMonth:TMonths,
  endMonth:TMonths,
};
export  type TAcademicSemesterNameCodeMapper = {
  [key:string]:string
}