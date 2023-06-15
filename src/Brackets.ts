import IValidator from "./IValidator";

export default class Brackets implements IValidator{
  
  validate(str: string): string {

         if(str.trim()===''){
          return 'empty'
        }

        return ''
  }
   
 

}