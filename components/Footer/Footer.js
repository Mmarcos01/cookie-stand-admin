import useResource from "../../hooks/useResource";

export default function Footer() {
  const { resources } = useResource();
  return (
    <footer className="p-4 bg-indigo-900 text-gray-50">
      <nav className="flex items-center justify-left space-x-10">
        <p className="text-xl">
          {" "}
          {resources ? resources.length : 0} Locations Worldwide
        </p>
      </nav>
    </footer>
  );
}
