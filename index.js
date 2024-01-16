const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const container = document.querySelector(".container")
const imgEl = document.getElementById("img-el")

function renderPosts() {
  let html = ""
  for (let i = 0; i < posts.length; i++) {
    html += `
    <section class="post">
      <div class="poster">
      <img src="${posts[i].avatar}" class="avatar">
        <div class="user">
          <h1 class="bold-text">${posts[i].name}</h1>
          <h4>${posts[i].location}</h4>
        </div>
      </div>
      <img src="${posts[i].post}" class="img-post" id="img-el">
      <div class="icons">
        <img src="images/icon-heart.png" alt="Heart Icon" class="icon">
        <img src="images/icon-comment.png" alt="comment Icon" class="icon">
        <img src="images/icon-dm.png" alt="dm Icon" class="icon">
      </div>
      <div class="caption">
        <h3 class="bold-text">${posts[i].likes} likes</h3>
        <p><span class="bold-text">${posts[i].username}</span>${posts[i].comment}</p>
      </div>
    </section>
    `
  }
  container.innerHTML += html
}

renderPosts()
