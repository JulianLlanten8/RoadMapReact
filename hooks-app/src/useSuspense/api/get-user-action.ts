export interface User {
  id: number;
  name: string,
  location: string,
  role: string,
}

export const getUserAction = async (id: number) => {
  console.log('función llamada')
  await new Promise(res => setTimeout(res, 2000));
  console.log('función Resolvió')

  return {
    id: id,
    name: "Hugo Julian",
    location: "Cali, Valle del Cauca",
    role: "desarrollador de software"
  }
}