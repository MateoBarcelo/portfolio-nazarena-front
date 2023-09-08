export default function Button({children, className, type, onClick}) {
    return(
        <button type={type} className={`bg-secondary-300 py-1 px-3 font-semibold text-primary-900 text-lg
         rounded-lg hover:bg-secondary-100 hover:shadow-md transition-all active:transform 
         active:translate-y-1 z-20 ${className}` } onClick={onClick}>
            {children}
        </button>
    )
}