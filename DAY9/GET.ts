const data:string = 'https://hn.algolia.com/api/v1/search?query=batman';
fetch(data)
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});