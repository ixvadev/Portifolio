// BlogList.js
import React from "react";
import BlogPost from "./BlogPost"; // Post komponentini import qildik

const blogs = [
  {
    id: 1,
    title: "setTimeout(callback, 0) qachon kerak?",
    date: "2024-09-21",
    content: "setTimeout() hodisalar sikliga yangi makrovazifa qo‘shadi..."
  },
  {
    id: 2,
    title: "Render sikl",
    date: "2024-09-19",
    content: "Brauzerda asosiy ikkita sikl mavjud: 1. Event Loop..."
  },
  {
    id: 3,
    title: "EventListener obyekti",
    date: "2022-09-11",
    content: "Yaqinda 'addEventListener' metodini callback sifatida ishlatdim..."
  }
];

function BlogList() {
  return (
    <div className="bg-gray-900 min-h-screen p-5 text-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-5 text-center">Recent Blogs</h2>

        {/* Grid Layout: Responsiv ko'rinish uchun grid ishlatiladi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogPost
              key={blog.id}
              title={blog.title}
              date={blog.date}
              content={blog.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
