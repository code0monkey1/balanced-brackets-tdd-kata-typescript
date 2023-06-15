import IBracketValidator from "./IBracketValidator";

export default class Brackets implements IBracketValidator{
  
  validate(str: string): string {
        
        str=str.trim()

        let result =''

         if(str===''){
          result = 'empty'
        }


        const arr = []
        
        for(let char of str ){

            if(char==='['){
              arr.push(char)
            }
            else{
              arr.pop()
            }
          
        }
       
        if(arr.length===0){
          result="OK"
        }
        else{
           result ="FAIL"
        }
    
        return result
  }
  

}