import IBracketValidator from "./IBracketValidator";

export default class Brackets implements IBracketValidator{
  
  validate(str: string): string {
        let result =''

         if(str.trim()===''){
          result = 'empty'
        }


        return result
  }
  

}