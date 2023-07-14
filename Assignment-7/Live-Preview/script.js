const form = document.getElementById('preview-form');
const titleInput= document.getElementById('title');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const imageUrlInput = document.getElementById('image-url');
const titlePreview=document.getElementById('title-preview') ;
const namePreview = document.getElementById('name-preview');
const emailPreview = document.getElementById('email-preview');
const messagePreview = document.getElementById('message-preview');
const imagePreview = document.getElementById('image-preview');
const nameAuthor = document.getElementById('name-author');

// Update the live preview on form input change
form.addEventListener('input', function() {
  namePreview.textContent = nameInput.value;
  emailPreview.textContent = emailInput.value;
  messagePreview.textContent = messageInput.value;
  titlePreview.textContent= titleInput.value;

});


// Set the name as the author name in the written by section
nameInput.addEventListener('input', function() {
  nameAuthor.textContent = nameInput.value;
});

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  // You can perform additional tasks with the form data here, such as sending it to a server

  // Clear the form inputs
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
  imageUrlInput.value = '';
  titleInput.value='';

  // Reset the live preview
  titlePreview.textContent='';
  namePreview.textContent = '';
  emailPreview.textContent = '';
  messagePreview.textContent = '';
  imagePreview.style.backgroundImage = '';
});

// Display the image preview
imageUrlInput.addEventListener('input', function() {
  const imageUrl = imageUrlInput.value;
  imagePreview.style.backgroundImage = `url('${imageUrl}')`;
});
