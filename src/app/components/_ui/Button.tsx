export default function Button({ text }: { text: string }) {
  return (
    <button
      className="self-start bg-white  hover:bg-gray-200 p-2 rounded-lg w-28 font-bold"
      style={{ marginTop: -20 }}
    >
      {text}
    </button>
  );
}
