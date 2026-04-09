import React from "react";

export default function layout({ children }) {
  return (
    <>
      <header className="bg-blue-200">Header:Marketing</header>
      {children}
      <footer className="bg-blue-300">Footer:Marketing </footer>
    </>
  );
}
