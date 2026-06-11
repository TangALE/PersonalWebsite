document.addEventListener("DOMContentLoaded", () => {
  // Fake online status
  document.getElementById("status").textContent = "ONLINE";

  // Load blog posts
  const posts = [
    { title: "Hello World!", date: "2025-07-16" },
    { title: "Books I Loved", date: "2025-07-15" }
  ];

  const blogDiv = document.getElementById("blog-posts");
  blogDiv.innerHTML = "";
  posts.forEach(post => {
    const el = document.createElement("p");
    el.innerHTML = `<strong>${post.title}</strong> — <em>${post.date}</em>`;
    blogDiv.appendChild(el);
  });
});
