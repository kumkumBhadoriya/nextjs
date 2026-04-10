"use client";

export default function Button() {
  return (
    <button className="border p-2 rounded-2xl"
      onClick={() => {
        console.log("Button Clicked");
      }}
    >
      Click Me
    </button>
  );
}