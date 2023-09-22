let user = {
    name: "Harry",
    age: 40,
    nationality: "Filipino",
    greet: function(){
        alert(`Hello ${this.name}!`);
    },
    hobbies: ["gaming","sports","riding"],
    cartlist: ["burger","footlong","fries"],
    show(){
        this.cartlist.forEach(
            function(iteminthelist){
                //parent
                let cart = document.getElementById("cart")
                //child
                let list = document.createElement('li');
                list.innerHTML = iteminthelist;
                cart.appendChild(list);
            }
        );
        
    }
}
document.getElementById("user").innerHTML = `Welcome, ${user.name}!`;
user.show()

function add(){
    let order = document.getElementById("order").value;
    if(order == ""){
        alert("order Empty!");
    } else{
        user.cartlist.push(order);
        // console.log(order);
    
        let cart = document.getElementById("cart");
        let nlist = document.createElement('li');
        nlist.innerHTML = order;
        cart.appendChild(nlist);
        document.getElementById("order").value = "";
    
    }


}

