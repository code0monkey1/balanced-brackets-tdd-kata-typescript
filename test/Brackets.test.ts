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

     describe('Single String ',()=>{
        
         it('should give `empty` when empty string is give for validation',()=>{
           
               
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
