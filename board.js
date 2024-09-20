document.getElementById("postForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const postsContainer = document.getElementById("postsContainer");

    if (username === "" || title === "" || content === "") {
        alert("Please fill in all fields.");
        return;
    }

    const now = new Date();
    const formattedDate = now.toLocaleDateString() + " " + now.toLocaleTimeString();

    const post = document.createElement("div");
    post.className = "post";

    const postTitle = document.createElement("h2");
    postTitle.textContent = title;

    const postContent = document.createElement("p");
    postContent.textContent = content;

    const postInfo = document.createElement("div");
    postInfo.className = "info";
    postInfo.textContent = `Posted by ${username} on ${formattedDate}`;

    post.appendChild(postTitle);
    post.appendChild(postContent);
    post.appendChild(postInfo);

    postsContainer.appendChild(post);

    document.getElementById("postForm").reset();
});

document.getElementById("homeButton").addEventListener("click", function() {
    window.location.href = "home.html";  
});
document.getElementById("maintimetableButton").addEventListener("click", function() {
        window.location.href = "maintimetable.html";  
});