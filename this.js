const user = {
    firstName: 'mashiur',
    lastName: 'rahman',
    message: function(){
        console.log(`my name is ${this.firstName} and product name is ${product.productName}`);
    }
}

const product = {
    productName: 'ipad',
    price: 30000
}
user.message()
user.firstName = 'jabed'
user.message()