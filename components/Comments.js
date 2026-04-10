
export default async function Comments() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>500 Comments</div>;
}