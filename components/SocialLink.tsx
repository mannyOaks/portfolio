import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface SocialLinkProps {
  icon: IconProp;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  icon,
  href,
}: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    className="h-9 w-9 rounded-full flex border-2 border-transparent hover:border-white m-1"
  >
    <FontAwesomeIcon icon={icon} className="m-auto text-white text-xl" />
  </a>
);

export default SocialLink;
