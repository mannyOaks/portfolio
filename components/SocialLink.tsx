import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'


interface SocialLinkProps {
  icon: IconProp,
  href: string,
  first?: boolean
}


function SocialLink({ icon, href, first }: SocialLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      className={`h-9 w-9 rounded-full flex border-2 border-transparent hover:border-white ${first ? "mr-1" : "m-1"}`}
    >
      <FontAwesomeIcon
        icon={icon}
        className="m-auto text-white text-xl"
      />
    </a>
  )
}

export default SocialLink