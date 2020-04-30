const dicho = require("./recherche");

describe("test recherche dicho d'un element dans tableau ", ()=>{
test("le tableau doit etre trié", ()=>{
    const array=[6,3,5,2,4,8];
    expect(()=>dicho(element,array)).toThrowError(/non trie/gi);
})

test("le tableau ne doit pas etre vide", ()=>{
    const array=[];
      
    expect(()=>dicho(element,array)).toThrowError(/vide/gi);
})

        test("les éléments de la table doivent etre des entiers", ()=>{
            const array=[6,'h','k',2,4,8];
              
            expect(()=>dicho(element,array)).toThrowError(/tableau doit contenir des entiers/gi);
        })
 
        test("recherche d'un élément inexistant dans le tableau ", ()=>{
                const array=[3,5,6,8,12],
                        element=9
                const expected=false
           expect(dicho(element,array)).toBe(expected);
        })     
        test("recherche d'un élément existe dans le tableau ", ()=>{
                const array=[3,5,6,8,12],
                        element=5
                const expected=true
           expect(dicho(element,array)).toBe(expected);
        })    

        test("le type d'élément recherché doit etre entier", ()=>{
                        const array=[6,3,5,2,4,8]
                      const  element="s";

                      
        expect(()=>dicho(element,array)).toThrowError(/element à rechercher doit etre entier/gi);
        })        

        test("si c'est n'est pas un tableau", ()=>{
                const array={
                        list:[10],
                        capacity:2
                }
                      
        expect(()=>dicho(element,array)).toThrowError(/n'est pas tableau/gi);
        })

        test("recherche d'un élément existant dans un tableau impaire", ()=>{
                const array=[1,3,6,8,9]
                const  element = 3                
                expected = true
                expect(dicho(element,array)).toBe(expected);
                }) 

    test("recherche d'un élément existant dans un tableau paire", ()=>{
                 const array=[2,3,5,7,8,9]
                const  element=7
                expected= true
                expect(dicho(element,array)).toBe(expected);
        })
})  
      