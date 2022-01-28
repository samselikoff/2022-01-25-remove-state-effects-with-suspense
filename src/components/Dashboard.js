export default function Dashboard({ name }) {
  return (
    <div className="px-4 pt-6">
      <h1 className="text-xl font-bold">Hello, {name}!</h1>
      <div className="mt-6 border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
    </div>
  );
}
