import { Link } from 'react-router-dom'

export default function HeaderItem({ children, to }) {

    return (
        <li className="h-full text-primary-700 list-none text-center flex items-center 
        p-4 relative before:content-[' '] before:block before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:inset-0 before:border-b-4 before:border-primary-700 before:-z-[1] before:transition before:duration-500 before:ease-in-out before:transform before:scale-x-0 before:origin-bottom-right hover:before:transform hover:before:scale-x-100 hover:before:origin-bottom-left">
            <span className="w-full text-primary-700">
                <Link to={to}>{children}</Link>
            </span>
        </li>
    )

}