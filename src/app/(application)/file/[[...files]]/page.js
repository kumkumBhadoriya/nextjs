export const metadata={
  title:"Files"
}
export default async function FilePage({ params }) {
  const { files } = await params;
  return <div>File Page of /{files?.join("/")}</div>;
}
