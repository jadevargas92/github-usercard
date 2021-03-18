/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// Creating global variables for the cardDiv that we append our component to
let cardDiv = document.querySelector('.cards');

//Created Global array of users
const followersArray = ['jadevargas92','tetondan','dustinmyers','justsml','luishrd','bigknell'];

//Iterating over each user in our 'Followers Array' and using axios to get the data.
//When that data is successful, using '.then' we call our componentCreator function
//pass in the response to component creator, and store that the returned value of component creator
//into  our newComponent variable.
//We then append that newComponent variable child, to the cardDiv (which we created above as a global variable)

followersArray.forEach(user => {
  axios.get('https://api.github.com/users/' + user)
  .then(response => {
    console.log(response)
    let newComponent = componentCreator(response);
    cardDiv.appendChild(newComponent);
  })
  .catch(err=> {
    console.log(err)
  })
})


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

//Here - we are creating our componentCreator based on the info above.
//The obj parameter will take in the data from our axios.get from above.

function componentCreator(obj){
  //Creating all the elements needed

  let mainDiv = document.createElement('div');
  let img = document.createElement('img');
  let innerDiv = document.createElement('div');
  let h3 = document.createElement('h3');
  let pUsername = document.createElement('p');
  let pLocation = document.createElement('p');
  let pProfile = document.createElement('p');
  let aProfile = document.createElement('a');
  let pFollowers = document.createElement('p');
  let pFollowing = document.createElement('p');
  let pBio = document.createElement('p');

  // Adding classes and attributes to elements

  mainDiv.classList.add('card');
  img.setAttribute('src', obj.data.avatar_url)
  innerDiv.classList.add('card-info');
  h3.classList.add('name')
  h3.textContent = obj.data.name;
  pUsername.classList.add('username');
  pUsername.textContent = obj.data.login;
  pLocation.textContent = `Location: ` + obj.data.location;
  pProfile.textContent = 'Profile: ' + aProfile;
  aProfile.setAttribute('href', obj.data.html_url);
  aProfile.textContent = obj.data.html_url;
  pFollowers.textContent = `Followers: ` + obj.data.followers;
  pFollowing.textContent = `Follwing: ` + obj.data.following;
  pBio.textContent = `Bio: ` + obj.data.bio;

  //Formatting the Component Properly (Inside out)
  pProfile.appendChild(aProfile);
  innerDiv.appendChild(h3);
  innerDiv.appendChild(pUsername);
  innerDiv.appendChild(pLocation);
  innerDiv.appendChild(pProfile);
  innerDiv.appendChild(pFollowers);
  innerDiv.appendChild(pFollowing);
  innerDiv.appendChild(pBio);
  mainDiv.appendChild(img);
  mainDiv.appendChild(innerDiv);

  return mainDiv;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
