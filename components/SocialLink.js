import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialLink({ icon, href, first }) {
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
