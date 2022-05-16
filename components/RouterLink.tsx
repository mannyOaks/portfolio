import Link from 'next/link';

interface RouterLinkProps {
  href: string;
  pathname: string;
  block?: boolean;
}

const currentClass = 'bg-gray-900 text-white';
const defaultClass = 'text-gray-300 hover:bg-gray-700 hover:text-white';

const RouterLink: React.FC<RouterLinkProps> = ({
  href,
  pathname,
  block = false,
  children,
}) => {
  return (
    <Link href={href}>
      <a
        className={`px-3 py-2 rounded-md text-base font-medium ${
          pathname === href ? currentClass : defaultClass
        } ${block && 'block'}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default RouterLink;
