# Blog Post Bookmarking App

## 📌 Overview
This is a **React.js** project that displays a list of blog posts where users can bookmark their favorite posts. The bookmarked posts are stored in **localStorage** and displayed in a sidebar for easy access. Users can also click on bookmarked posts to navigate to a **Read More** page dynamically.

## 🚀 Features
- 📝 Display blog posts with title, author, image, and tags.
- 🔖 Bookmark and unbookmark posts.
- 📌 Bookmarked posts appear in a sidebar.
- 🛤️ **Dynamic Routing**: Click on a bookmarked post to view more details on a separate page.
- 🔙 **Go Back Button**: Navigate back from the Read More page.
- 💾 Bookmarks are saved in **localStorage** (persist after refresh).
- 🎨 Responsive and modern UI.

## 🖥️ Tech Stack
- **React.js** (Vite)
- **React Router** (for dynamic routing)
- **Tailwind CSS** (for styling)
- **React Icons** (for bookmark icons)

## 📂 Project Structure
```
📦 Blog-Post-Bookmarking-App
├── 📂 src
│   ├── 📂 components
│   │   ├── 📜 BlogPost.jsx (Main blog post component)
│   │   ├── 📜 SideBookmarkBar.jsx (Displays bookmarked posts with links)
│   │   ├── 📜 ReadMore.jsx (Displays full post content with a Go Back button)
│   ├── 📜 App.jsx (Root component)
│   ├── 📜 index.js (Entry point with React Router setup)
├── 📜 public
│   ├── 📜 data.json (Sample blog post data)
├── 📜 package.json
├── 📜 README.md
└── 📜 .gitignore
```

## 📥 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/rahyanakil/blog-post-bookmarking.git
cd blog-post-bookmarking
```
### 2️⃣ Install Dependencies
```sh
npm install
```
### 3️⃣ Run the Project
```sh
npm run dev
```

## 🛠️ How It Works
### ➤ **Adding a Bookmark**
- Click the **bookmark button** 🔖 on a post to save it in the sidebar.
- A **filled bookmark icon** indicates the post is bookmarked.

### ➤ **Viewing a Bookmarked Post**
- Click on any **bookmarked post** in the sidebar to navigate to a **dynamic Read More page**.
- The route follows this structure: `/post/:id`

### ➤ **Read More Page**
- Displays **full post details**, including title, content, image, tags, and author profile.
- A **Go Back button** allows users to return to the main page.

### ➤ **Removing a Bookmark**
- Click the **filled bookmark button** again to remove it from the sidebar.

### ➤ **Persisting Bookmarks**
- Bookmarks are stored in **localStorage**, so they remain saved even after reloading the page.

## 🖼️ UI Preview
![App Screenshot](https://i.ibb.co.com/xKswbJCc/Screenshot-2025-02-05-144212.png)

## 📦 Dependencies
```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^6.",
    "react-icons": "^4.3.1",
    "tailwindcss": "^3.0.0"
  }
}
```

## 💡 Future Enhancements
- ✨ Add a **search feature** to filter blog posts.
- 🌙 Implement a **dark mode** toggle.
- 📌 Allow users to categorize bookmarks.
- 📝 Add a comment section under each post.

## 📜 License
This project is open-source and available under the **MIT License**.

## 🙌 Contributions
Feel free to **fork** this repository and contribute! Pull requests are welcome.

## 📧 Contact
- **GitHub**: [rahyanakil](https://github.com/rahyanakil)
- **Email**: rahyanakil89@gmail.com

