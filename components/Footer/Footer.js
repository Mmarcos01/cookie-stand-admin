import { useSelector } from "react-redux";

export default function Footer() {
  const count = useSelector((state) => state.count.value);
  return (
    <footer className="p-4 bg-indigo-900 text-gray-50">
      <nav className="flex items-center justify-left space-x-10">
        <p className="text-xl">{count} Locations Worldwide</p>
      </nav>
    </footer>
  );
}
