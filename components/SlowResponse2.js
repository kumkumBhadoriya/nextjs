export default async function SlowResponse() {
  const slowResponse = await fetch("https://procodrr.vercel.app/?sleep=3000");
  const data = await slowResponse.json();
  return <div>{JSON.stringify(data)}</div>;
}
