import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialLink({ icon, href, className }) {
  return <div className="ml-3 p-1 relative max-w-full max-h-full min-w-min rounded-full border-1 hover:border-red-500">
    <a href={href} target='_blank' className="rounded-full">
      <div className="max-w-full max-h-full rounded-full flex items-center text-sm">
        <FontAwesomeIcon icon={icon} style={{ fontSize: 24, color: 'white' }} className={className} />
      </div>
    </a>
  </div>
}

/*

return <div className="bg-gray-800 p-1 rounded-full text-gray-400  hover:border-white ">
    <div className="ml-3 relative	">
      <a href={href} target='_blank'>
        <div className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
          <FontAwesomeIcon icon={icon} style={{ fontSize: 24, color: 'white' }} />
        </div>
      </a>
    </div>
  </div>
*/