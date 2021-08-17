export type weatherByDaysType = {
  name: string,
  date: string,
  maxtemp_c: number,
  avgtemp_c: number,
  mintemp_c: number,
  maxwind_kph: number,
  avghumidity: number,
  text: string,
  icon: string,
  uv: number,
}

export type propsType = {
  param: Array<weatherByDaysType>
}