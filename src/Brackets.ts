import IBracketValidator from "./IBracketValidator";

export default class Brackets implements IBracketValidator{
  
  validate(str: string): string {
        
        str=str.trim()

        let result =''

         if(str===''){
          result = 'empty'
        }


        const set= new Set()
        
        for(let char of str ){

            if(char==='')
        }
    
        return result
  }
  

}