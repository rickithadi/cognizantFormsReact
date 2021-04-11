 import * as Yup from 'yup';
 import type { Asserts } from 'yup';

export const RegisterFormSchema = Yup.object().shape({
    fullName: Yup.string()
     .required('Required'),
    address: Yup.object().shape({
        areaName: Yup.string().required(),
        cityName: Yup.string().required(),
        countryName: Yup.string().required(),
      })
      .required('Required'),
   hobbies: Yup.array()
      .required('Required'),
  });
  
export class User {
fullName:string;
address:Address;
hobbies:Hobby[];
public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
export class Hobby {
name:string;
public constructor(init?: Partial<Hobby>) {
    Object.assign(this, init);
  }
}
export class Address {
areaName:string;
cityName:string;
countryName:string;
public constructor(init?: Partial<Address>) {
    Object.assign(this, init);
  }

}