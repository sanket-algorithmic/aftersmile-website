// Blog posts data
const blogPosts = [
  {
    title: "The Portfolio Effect: Why Your Best Work Is Your Best Marketing",
    date: "2025-01-22",
    excerpt: "How visual proof increases case acceptance by up to 73% and attracts premium patients who say yes.",
    url: "posts/2025-01-22-portfolio-effect.html",
    readTime: "2 min",
    author: "AfterSmile Team",
    authorUrl: "../author.html",
  },
  {
    title: "5 Photography Secrets That Convert Consultations Into Cases",
    date: "2025-01-20",
    excerpt: "Simple techniques that transform good photos into powerful marketing assets that close deals.",
    url: "posts/2025-01-20-photography-secrets.html",
    readTime: "2 min",
    author: "AfterSmile Team",
    authorUrl: "../author.html",
  },
  {
    title: "Why Showing Beats Telling Every Time",
    date: "2025-01-18",
    excerpt: "The psychology behind visual proof and how it eliminates objections instantly.",
    url: "posts/2025-01-18-visual-proof-psychology.html",
    readTime: "2 min",
    author: "AfterSmile Team",
    authorUrl: "../author.html",
  },
  {
    title: "Build Your Portfolio in 30 Days: The Action Plan",
    date: "2025-01-15",
    excerpt: "A simple daily routine that creates a stunning portfolio attracting ideal patients.",
    url: "posts/2025-01-15-30-day-portfolio-plan.html",
    readTime: "2 min",
    author: "AfterSmile Team",
    authorUrl: "../author.html",
  },
  {
    title: "Turn Your Cases Into Social Media Growth",
    date: "2025-01-12",
    excerpt: "How to showcase transformations on Instagram and Facebook to build a waiting list of dream patients.",
    url: "posts/2025-01-12-social-media-growth.html",
    readTime: "2 min",
    author: "AfterSmile Team",
    authorUrl: "../author.html",
  },
];

// Function to format date
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

// Function to render blog posts
function renderBlogPosts() {
  const container = document.getElementById("blog-posts");

  if (blogPosts.length === 0) {
    container.innerHTML = "<p>No blog posts yet. Check back soon!</p>";
    return;
  }

  // Sort posts by date (newest first)
  const sortedPosts = blogPosts.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const postsHTML = sortedPosts
    .map(
      (post) => `
        <article class="blog-card">
            <h2><a href="${post.url}">${post.title}</a></h2>
            <div class="post-meta">
                <time datetime="${post.date}">${formatDate(post.date)}</time>
                <span class="reading-time">${post.readTime} read</span>
                ${
                  post.author
                    ? `<span class="post-author-with-image">by 
                    <a href="${post.authorUrl}" class="post-author">
                        <img src="blogImages/john_doe.png" alt="${post.author}" class="post-author-image">
                        ${post.author}
                    </a>
                </span>`
                    : ""
                }
            </div>
            <p>${post.excerpt}</p>
            <a href="${post.url}" class="read-more">Read more →</a>
        </article>
    `
    )
    .join("");

  container.innerHTML = postsHTML;
}

// Render posts when page loads
document.addEventListener("DOMContentLoaded", renderBlogPosts);
