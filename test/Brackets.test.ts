import Brackets from '../src/Brackets';

describe('Brackets', () => {
     
     describe('parts are defined',()=>{
         
         it('the class `Brackets` class and `validate` function is defined',()=>{
              
              //arrange/ act
              expect(Brackets).toBeDefined()
              const brackets = new Brackets()
              
              //assert
              expect(brackets.validate).toBeInstanceOf(Function)

         })

     })

     describe('validate ',()=>{
        
      describe('Empty String',()=>{


        it.each([{str:''},{str:'  '},{str:'      '}])('should give `empty` when given empty string : $str ',({str})=>{
          

             // act
             const brackets = new Brackets()

             const result = brackets.validate(str)

             // assert
             expect(result).toBe('empty')

        })
       

      })
          describe('Single Parenthesis Pair',()=>{

            it('should give `OK` when `[]`string is give for validation',()=>{
              
   
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

          describe('Multiple Parenthesis',()=>{
             it.each([{str:']['},{str:'][]['},{str:'[][]]['}])('should give `FAIL` for $str',({str})=>{

                 // arrange
                 const brackets = new Brackets()
   
                 //act
                 const result = brackets.validate(str)
   
                 // assert
                 expect(result).toBe('FAIL')

            })

                it.each([{str:'[[]]'},{str:'[[[][]]]'}])('should give `OK` for $str',({str})=>{

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
