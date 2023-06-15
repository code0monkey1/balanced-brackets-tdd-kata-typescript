import IBracketValidator from "./IBracketValidator";

export default class Brackets implements IBracketValidator{
  
  validate(str: string): string {
        
        str=str.trim()

         if(str.length===0)
          return 'empty'
        
        const arr = []
        
        let result :string

        for(let char of str ){

           if(char==='[')
              arr.push(char)
            
            else
              arr.pop()
            
        }
       
        result = arr.length===0?"OK":"FAIL"

        return result
      
  }
  

}