console.log("User register");
//create constructor
class User{
    constructor(email, pass, first, last, age, address, phone, payment, color){
        //this.attribute = parameter
        this.email=email;
        this.password=pass;
        this.fname=first;
        this.lname=last;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;

    }
}

function registerUser(){
    let email=$("#txtEmail").val(); //email id on html
    let password=$("#txtPassword").val();//password id
    let fname=$("#txtFirstName").val();
    let lname=$("#txtLastName").val();
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val();
    let phone=$("#txtPhone").val();
    let payment=$("#selPayment").val();
    let color=$("#txtColor").val();
   
    //create an object
    let user=new User(email, password, fname, lname, age, address, phone, payment, color);
    
    console.log(user);
}

function init(){
    console.log("Init Function");

}

window.onload=init;