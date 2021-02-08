import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialLink({ icon, href, className }) {
  return (
    <a
      href={href}
      target='_blank'
      className="rounded-full m-2 border-2 border-white"
      style={{ width: '2.1rem', height: '2.1rem' }}
    >
      {/* <FontAwesomeIcon
        icon={icon}
        className="m-auto text-white text-xl"
      /> */}
      <span className="text-white text-xl mx-auto">A</span>
    </a>

  )
}
