function getUserData() {
  const username = document.getElementById("usernameInput").value;
  const apiUrl = `https://api.github.com/users/${username}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.message === "Not Found") {
        // User not found
        displayErrorMessage("User not found.");
      } else {
        displayUserData(data);
      }
    })
    .catch(error => {
      displayErrorMessage("An error occurred while fetching user data.");
      console.error(error);
    });
}

function displayErrorMessage(message) {
  document.getElementById("userContainer").classList.add("hidden");
  alert(message);
}

function displayUserData(user) {
  const userContainer = document.getElementById("userContainer");
  const avatar = document.getElementById("avatar");
  const name = document.getElementById("name");
  const portfolio = document.getElementById("portfolio");
  const location = document.getElementById("location");
  const publicRepos = document.getElementById("publicRepos");
  const followers = document.getElementById("followers");
  const bio = document.getElementById("bio");

  avatar.src = user.avatar_url;
  name.textContent = user.name || "Name not provided";
  portfolio.textContent = user.blog || "Portfolio not provided";
  location.textContent = user.location || "Location not provided";
  publicRepos.textContent = `Public Repos: ${user.public_repos}`;
  followers.textContent = `Followers: ${user.followers}`;
  bio.textContent = user.bio || "Bio not provided";

  userContainer.classList.remove("hidden");
}
