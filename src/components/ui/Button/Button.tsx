export const Button = ({ text }: { text: string }) => {
  return (
    <button
      className="bg-white p-2 h-10 hover:bg-gray-200  rounded-lg min-w-20 flex justify-center items-center text-xs"
      style={{ marginTop: -20 }}
    >
      {text}
    </button>
  );
}
