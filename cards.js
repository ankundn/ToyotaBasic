const order = () =>{
    document.getElementById('customer').focus();
}


const ValidData = () => {

    // adding an event listener so that the alert message styles can be seen after an alert is read
document.getElementById('the-form').addEventListener('submit', (e)=>{
e.preventDefault();
});

    /* validation so that Customer ID isn't missing and doesnt contain any blank spaces */ 
    const custid = document.getElementById('customer');
    const space = new RegExp(" ");
    if (custid.value == '' || custid.value.match(space)) {
        alert('This field is required and should not have any blank spaces');
        custid.style.border = '2px red solid';
    }

 /* validation so that the name field isnt left empty */
    const name =document.getElementById('name');
    if (name.value == ''){
        alert('This field is required.Please input your name.');
        name.style.border = '2px red solid';
    }

    /* validation so that the part number field isnt empty */
  const partnum = document.getElementById('pn');
  if (partnum.value == ''){
      alert('This field is required. Please input your part number.');
      partnum.style.border = '2px red solid';
  }
   
/*validation so that description field isnt empty*/
const describe = document.getElementById('desc');
if(describe.value == ''){
    alert('This field is required. Please put a description. ');
    describe.style.border = '2px red solid';
}


  /* validation so that the price is a value greater than zero */
const price = document.getElementById('ppp');
if(price.value <0){
    alert('The price should be a value greater than zero');
    price.style.border = '2px red solid';
}



/* vaidation so that the quantity is a value greater than zero*/
const quantity = document.getElementById('qty');
if(quantity.value <0){
    alert('The price should be a value greater than zero');
    quantity.style.border = '2px red solid';
}

const UPS = document.getElementById("ups");
    const FedExg = document.getElementById("fed");
    const USPostA = document.getElementById("us");
    const FedExA = document.getElementById("feda");
    if (UPS.checked == false || FedExg.checked == false ||USPostA.checked == false || FedExA.checked == false ) {

        alert('This field is required. Please select one');

    }


}

