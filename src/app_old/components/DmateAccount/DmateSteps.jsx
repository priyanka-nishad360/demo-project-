export default function DmateSteps({ steps, active, setSection }) {
  return (
    <div className="relative max-w-5xl w-full mx-auto mb-10">
      <ol className="list-none flex items-center justify-between">
        {steps.map((item, i) => (
          <li
            key={i}
            onClick={() => {
              setSection(item);
            }}
            className={`w-full text-center border-b-4 py-2 font-semibold cursor-pointer ${
              item === active ? "border-zinc-600" : "border-white"
            }`}
          >
            <span className="mr-2">{index + 1}</span>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}
