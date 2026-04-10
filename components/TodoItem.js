export default async function Todoitem() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=6",
  );
  const data = await response.json();
  return (
    <div className="mt-10 flex flex-col gap-2 ">
      {data.map(({ id, title, completed }) => (
        <div
          key={id}
          className="rounded-lg p-5 border flex flex-wrap gap-2 items-center"
        >
          <input type="checkbox" checked={completed} readOnly />
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}
