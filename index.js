
// Setting firebase for Musale 
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAyBcyichUunv3BO0FGt3gy-Q6ZG5DPNEc",
  authDomain: "musauth-bc3b9.firebaseapp.com",
  projectId: "musauth-bc3b9",
  storageBucket: "musauth-bc3b9.appspot.com",
  messagingSenderId: "225963543348",
  appId: "1:225963543348:web:404490fbc7856f77817361"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign Up Function
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password)
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in 
      document.write("You Are Sucessfully Signed Up")
      console.log(result)
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);

    });
}

// Sign In Function
const signIn = () =>{
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    // document.write("Admin You are Sucessfully Loged In")
    let output = "Admin You are Sucessfully Loged In";
    document.getElementById("form").innerHTML = output;
    console.log(result)
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });
}
