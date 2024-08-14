const phones = [
    {pName: 'iPhone 13', price: 50000},
    {pName: 'iPhone 14', price: 60000},
    {pName: 'oppo plus', price: 30000},
    {pName: 'nokia 30', price: 20000},
    {pName: 'Nokia 40', price: 25000},
    {pName: 'one plus', price: 30000}
]
let findingPhones = (phones,search)=>{
    let matchingPhones = []
    for(let phone of phones){
        if(phone.pName.toLowerCase().includes(search.toLowerCase())){
            matchingPhones.push(phone)
        }
    }
    return matchingPhones
}
let result = findingPhones(phones, 'Nokia')
console.log(result);