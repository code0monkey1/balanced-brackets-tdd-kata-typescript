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
        
         it.each([{str:''},{str:'  '},{str:'      '}])('should give `empty` when given empty string : $str ',({str})=>{
           
               
              // arrange
              expect(Brackets).toBeDefined()

              // act
              const brackets = new Brackets()

              const result = brackets.validate(str)

              // assert
              expect(result).toBe('empty')

         })

             
         it('should give `OK` when empty string is give for validation',()=>{
           
               
              // arrange
              expect(Brackets).toBeDefined()

              // act
              const brackets = new Brackets()

              const result = brackets.validate('')

              // assert
              expect(result).toBe('empty')

         })

     })
})
