export interface UserForRegister {
  nom:string,
  prenom:string,
  email:string,
  password:string,
  role:"USER",
}

export interface UserForLogin {
  email:string,
  password:string,
  token:string,
}

