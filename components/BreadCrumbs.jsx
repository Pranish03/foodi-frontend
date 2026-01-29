import Link from "next/link";

const BreadCrumbs = ({ items }) => {
  return (
    <nav className="text-base text-gray-700 flex gap-1 mb-10">
      <Link href="/" className="hover:underline">
        Home
      </Link>

      {items.map((item, index) => (
        <span key={index} className="flex gap-1">
          <span>/</span>

          {item.link ? (
            <Link href={item.link} className="hover:underline text-gray-700">
              {item.title}
            </Link>
          ) : (
            <span className="text-gray-900">{item.title}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default BreadCrumbs;
