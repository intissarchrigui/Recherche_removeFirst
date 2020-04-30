const {
        init,
        getCapacity,
        getSize,
        isEmpty,
        isFull,
        addLast,
        removeFirst
      } = require("./queue.js")
      
      
      
      
      describe("test remove element from a queue ", ()=>{
      
          test("should the queue not be empty ", ()=>{
              const queue={
                      list:[],
                      capacity:2
              }                
             
              expect(()=> removeFirst(queue)).toThrow();
              
              
          })
       
      })
      test("should the queue be empty if  it was with one element ", ()=>{
        const queue={
                list:[10],
                capacity:1
        }
        const expected={
                list:[],
                capacity:1
        }
        expect( removeFirst(queue)).toStrictEqual(expected);
        
        
      })
       test("should the first element  be removed from  queue with 2 elements", ()=>{
       
         const queue={
                list:[10,20],
                capacity:2
        }
        
        const expected={
                list:[20],
                capacity:2
        }
         expect( removeFirst(queue)).toStrictEqual(expected)
        
        
      }) 
      test("should the first element  be removed from  a full queue ", ()=>{
       
        const queue={
               list:[10,20,30,40],
               capacity:10
           
       }
       
       const expected={
               list:[20,30,40],
               capacity:10
       }
        expect( removeFirst(queue)).toStrictEqual(expected)
       
       
      }) 