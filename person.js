
const apiUrl = "https://randomuser.me/api/"
  function getData(){ 
   fetch(apiUrl)
   .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const dat = data.results;
    const sex = "Gender: " + dat[0].gender
    const name = "Name: " + dat[0].name.title + " " + dat[0].name.first + " " + dat[0].name.last
   const address = "Address: " + dat[0].location.street.number + " " + dat[0].location.street.name + ", " + dat[0].location.city
   const location = "Location: " + dat[0].location.state + ",  " + dat[0].location.country
    const postcode = "Postcode: " + dat[0].location.postcode
   const email = "Email: " + dat[0].email
   const username = "Username: " + dat[0].login.username
   const password = "Password: " + dat[0].login.password
    const dob = "Date of Birth: " + dat[0].dob.date
   const age = "Age: " + dat[0].dob.age
   const phone = "Phone: " + dat[0].phone
   const mobile = "Mobile: " + dat[0].cell
    const pic1 = dat[0].picture.large
     document.querySelector('#name').innerHTML = name
     document.querySelector('#dob').innerHTML = dob
     document.querySelector('#age').innerHTML = age
     document.querySelector('#pic1').src = pic1
  document.querySelector('#password').innerHTML = password
     document.querySelector('#phone').innerHTML = phone
     document.querySelector('#cell').innerHTML = mobile
     document.querySelector('#email').innerHTML = email
  document.querySelector('#postcode').innerHTML = postcode
  document.querySelector('#sex').innerHTML = sex
  document.querySelector('#username').innerHTML = username
  document.querySelector('#location').innerHTML = location
  document.querySelector('#address').innerHTML = address  
  })
  .catch(function(error) {
    console.error(error);
  })  
}
