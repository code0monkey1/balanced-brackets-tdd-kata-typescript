import Brackets from '../src/Brackets';

describe('Brackets', () => {
     
     describe('Should be defined',()=>{
         
         it('the class `Brackets` class and `validate` function is defined',()=>{
              
              //arrange/ act
              expect(Brackets).toBeDefined()
              const brackets = new Brackets()
              
              //assert
              expect(brackets.validate).toBeInstanceOf(Function)
         })

     })
        
      describe('Empty String',()=>{


        it.each([{str:''},{str:'  '},{str:'      '}])('should give `empty` for empty string',({str})=>{
          

             // act
             const brackets = new Brackets()

             const result = brackets.validate(str)

             // assert
             expect(result).toBe('empty')

        })
       

      })
      describe('Single Parenthesis Pair',()=>{

            it('should give `OK` for `[]`',()=>{
              
   
                 // arrange
   
                 const brackets = new Brackets()
   
                 //act
                 const result = brackets.validate('[]')
   
                 // assert
                 expect(result).toBe('OK')
   
            })


          })

          describe('Double Parenthesis Pair', () => {
              
            it('should give `OK` for `[][]`',()=>{

                 // arrange
                 const brackets = new Brackets()
   
                 //act
                 const result = brackets.validate('[][]')
   
                 // assert
                 expect(result).toBe('OK')

            })

          })

          describe('Multiple Parenthesis \n',()=>{

            describe('Should return `FAIL`', () => {
              
              it.each([{str:']['},{str:'][]['},{str:'[][]]['}])('for $str',({str})=>{
  
                  // arrange
                  const brackets = new Brackets()
    
                  //act
                  const result = brackets.validate(str)
    
                  // assert
                  expect(result).toBe('FAIL')
  
             })

            })
            
            describe('Should return `OK`',()=>{

              it.each([{str:'[[]]'},{str:'[[[][]]]'}])(' for $str',({str})=>{
  
               // arrange
               const brackets = new Brackets()
  
               //act
               const result = brackets.validate(str)
  
               // assert
               expect(result).toBe('OK')
  
             })

            })


          })
          
             

     })
