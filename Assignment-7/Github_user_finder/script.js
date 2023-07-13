function getUserData() {
    const username = document.getElementById('username').value;
  
    // Make a GET request to the GitHub API
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        // Update the user information
        document.getElementById('avatar').src = data.avatar_url;
        document.getElementById('name').textContent = data.name;
      })
      .catch(error => {
        console.log('Error:', error);
        alert('An error occurred. Please try again.');
      });
  }
  