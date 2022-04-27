// ======== navbar ===========

function viewNavLink(){

    console.log('hello');

    let navLinkSection = document.getElementById("nav-link");

    if (navLinkSection.className === "nav-link-section") {
        navLinkSection.className += " nav-link-section-show";
    } else {
        navLinkSection.className = "nav-link-section";
    }

}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzcryJdfvq5HkVeBGuNwpMop531NbQ-jPPEIeyUciB_XX8A8-ceonbbExLO5cb75bfflQ/exec'
const form = document.forms['enroll-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})



// ============= enroll form ==============

// const scriptURL = 'https://script.google.com/macros/s/AKfycbzcryJdfvq5HkVeBGuNwpMop531NbQ-jPPEIeyUciB_XX8A8-ceonbbExLO5cb75bfflQ/exec'

// const form = document.getElementById("enroll-form");


// form.addEventListener('submit', e => {
//     e.preventDefault();
//     let userFormData = {
//         "category": document.getElementById("category").value,
//         "name": document.getElementById("name").value,
//         "dob": document.getElementById("dob").value,
//         "gender": document.getElementById("gender").value,
//         "community": document.getElementById("community").value,
//         "father-name": document.getElementById("father-name").value,
//         "mother-name": document.getElementById("mother-name").value,
//         "address": document.getElementById("address").value,
//         "city": document.getElementById("city").value,
//         "pincode": document.getElementById("pincode").value,
//         "email": document.getElementById("email").value,
//         "father-number": document.getElementById("father-number").value,
//         "mother-number": document.getElementById("mother-number").value,
//         "present-school": document.getElementById("present-school").value,
//         "school-name": document.getElementById("school-name").value,
//         "year": document.getElementById("year").value,
//         "board": document.getElementById("board").value,
//         "maths": document.getElementById("maths").value,
//         "science": document.getElementById("science").value,
//         "aggr": document.getElementById("aggr").value,
//         "total": document.getElementById("total").value,
//         "competitive-examinations": document.getElementById("competitive-examinations").value
    
//     }
    
//     console.log(userFormData);
//   fetch(scriptURL, { method: 'POST', body: JSON.stringify(userFormData)})
//     .then(form.reset())
//     .catch(error => console.error('Error!', error.message))
// })

