export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="bg-white rounded-lg flex flex-col justify-center items-center mt-40 self-center"
      style={{ width: '70vw' }}
    >
      {children}
    </div>
  );
}
