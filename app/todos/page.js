// import { Suspense } from "react";
// import Todoitem from "@/components/TodoItem";
// import SlowResponse1 from "@/components/SlowResponse1";
// import SlowResponse2 from "@/components/SlowResponse2";

export default async function Todos() {
  //Sequential data fetching
  //   const slowResponse1 = await fetch("https://procodrr.vercel.app/?sleep=2000");
  //   const slowData1 = await slowResponse1.json();
  //   console.log(slowData1);

  //   const slowResponse2 = await fetch("https://procodrr.vercel.app/?sleep=2000");
  //   const slowData2 = await slowResponse2.json();
  //   console.log(slowData2);

  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos?_limit=6",
  //   );
  //   const data = await response.json();

  // Parallel data fetching
  const [todosResponse, slowResponse1, slowResponse2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=6"),
    fetch("https://procodrr.vercel.app/?sleep=2000"),
    fetch("https://procodrr.vercel.app/?sleep=3000"),
  ]);

  const [todos, data1, data2] = await Promise.all([
    todosResponse.json(),
    slowResponse1.json(),
    slowResponse2.json(),
  ]);

  return (
    <div className="h-screen p-5 bg-black text-white flex flex-col pt-10 items-center">
      <h1 className="text-3xl">Todos</h1>
      {/* <Suspense fallback="Loading todos...">
        <Todoitem />
      </Suspense>
      <Suspense fallback={<div>Loading data 1...</div>}>
        <SlowResponse1 />
      </Suspense>
      <Suspense fallback={<div>Loading data 1...</div>}>
        <SlowResponse2 />
      </Suspense> */}

      <div className="mt-10 flex flex-col gap-2 ">
        {todos.map(({ id, title, completed }) => (
          <div
            key={id}
            className="rounded-lg p-5 border flex flex-wrap gap-2 items-center"
          >
            <input type="checkbox" checked={completed} readOnly />
            <p>{title}</p>
          </div>
        ))}
        <div>{JSON.stringify(data1)}</div>
        <div>{JSON.stringify(data2)}</div>
      </div>
    </div>
  );
}
