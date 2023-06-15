import IBracketValidator from "./IBracketValidator";

export default class Brackets implements IBracketValidator{
  
  validate(str: string): string {
        let result =''

         if(str.trim()===''){
          result = 'empty'
        }

        // const strArr = str.split('')
        
        if(str[0]=='[' && str[1]===']'){
          result = 'OK'
        }
    
        return result
  }
  

}