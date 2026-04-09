import React from "react";

export default function layout({ children }) {
  return (
    <>
      <header className="bg-gray-400">Header:Application</header>
      {children}
      <footer className="bg-gray-600">Footer:Application </footer>
    </>
  );
}
