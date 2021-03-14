window.addEventListener('load', start) //executo os métodos somente quando a página estiver totalmente carregada

function start(){
    doMap()
    doFilter()
    doForEach()
    doReduce()
    doFind()
    doSome()
    doEvery()
    doSort()
}

/*
Para cada método, coloco algo para retorno, pois a ideia é que o método
percorra o array (tipo o for) e retorne alguma coisa dentro dele. No caso, retorna dados de 
algumas pessoas (person)
*/

//Map -  Monto um novo array com os dados do atual (people.results), busco apenas as informações que preciso 
function doMap(){
  const map = people.results.map(person =>{
      return{
          name: person.name.first,
          age: person.dob.age,
          city: person.location.city,
      }
  })
   console.log(map)
   return map //para ser reaproveitado, dou return nele
}

//Filter- Dou return com base em uma regra - Ele retorna todas as pessoas com a idade que busquei 
function doFilter(){
    const filter = people.results.filter(person =>{
        //regra
        return person.dob.age === 43
    })
    console.log(filter)
}

//forEach - Inclusão de uma nova propriedade no objeto
function doForEach(){
    const mappedPeople = doMap()
    mappedPeople.forEach(person =>{
        //fiz a inclusão de citySize no objeto (conto a quantidade de letras)
        //city está mencionada em doMap
        person.citySize = person.city.length
    })

    console.log(mappedPeople)
}


//Reduce - Retorna apenas um valor e no método abaixo vou somar as idades
function doReduce(){
    //quando tiver dois parâmetros => colocar ()
    const reduce = people.results.reduce((accumulator, ages) =>{
        return accumulator+ages.dob.age
    }, 0 ) //parâmetro para começar a contagem no 0

    console.log(reduce); //soma das idades = 5006
}

//Find - Retorna apenas a primeira pessoa encontrada de Minas Gerais
function doFind(){
    var find = people.results.find(person =>{
        return person.location.state === 'Minas Gerais'
    })

    console.log(find)
}

//Some - Retorna verdadeiro ou falso - se existe algum que atende o critério, retorna true
function doSome(){
    const some = people.results.some(person =>{
        return person.location.state === 'Amazonas'
    }) 
    console.log(some)
}

//Every - Filtro de nomes em português (nat = 'BR') - Retorna TRUE, pois TODOS estão como BR
//retorna true quando todos atenderem o critério e retorna false caso haja um que não atenda o critério 
function doEvery(){
    const every = people.results.every(person =>{
        return person.nat === 'BR'
    })
    console.log(every)
}

 //Sort - ordenando nomes com a letra A => ASC e DESC
 
function doSort(){
    const mappedName = people.results.map(person =>{
        return{
            name:person.name.first
        }
    })
    .filter(person=>person.name.startsWith('A'))
    .sort((a,b)=>{
        return a.name.length - b.name.length
    })

    console.log(mappedName)
}

//Sort - Exemplo mais simples
const array1 = [1,2,3,4,5,6,7,8,9,10]
//para números é necessário atribuir 2 parâmetros para comparar:
console.log(array1.sort((a,b)=>{ return a - b}))


const array2 = ['Neusa', 'Ana', 'Bianca', 'Jason']
//Boa prática para strings -> utilizar o localCompare
console.log(array2.sort((a,b)=>{
    return a.localeCompare(b)
}))

