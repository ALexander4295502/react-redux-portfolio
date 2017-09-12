export default {
  forum_api: process.env.NODE_ENV === "production" ? "https://api.zheng.town/api/" : "https://localhost:3000/api/",
  github_api: `https://api.github.com/users/ALexander4295502/repos`
};