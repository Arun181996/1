// Function to fetch a random user and display the data
async function fetchRandomUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];

    // Extract user details
    const name = `${user.name.first} ${user.name.last}`;
    const email = user.email;
    const picture = user.picture.large;

    // Update the DOM
    document.getElementById("user-name").innerText = name;
    document.getElementById("user-email").innerText = email;
    document.getElementById("user-pic").src = picture;
  } catch (error) {
    console.error("Error fetching random user:", error);
  }
}

// Event listener for button click
document
  .getElementById("new-user-btn")
  .addEventListener("click", fetchRandomUser);

// Fetch a random user on page load
window.onload = fetchRandomUser;
