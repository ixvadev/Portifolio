// BlogPost.js
import React from "react";

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("uz-UZ", options).format(date);
}

function BlogPost({ title, date, content }) {
  return (
    <div className="p-5 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition">
      <p className="text-sm text-gray-400 mb-2">{formatDate(date)}</p>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300">
        {content.substring(0, 100)}... {/* Kontentni qisqartirish */}
      </p>
    </div>
  );
}

export default BlogPost;
