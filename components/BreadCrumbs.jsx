import Link from "next/link";

const BreadCrumbs = ({ items }) => {
  return (
    <nav className="sm:text-base text-sm text-gray-700 flex gap-1 md:mt-0 mt-4 md:mb-10 mb-7">
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
