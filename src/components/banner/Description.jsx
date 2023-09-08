export default function Description ({children, className}) {
    return(
            <section className={`w-full z-20 md:w-1/2 flex justify-center align-center md:mt-0 ${className}`}>
                <div className='md:block flex md:text-left md:flex-nowrap flex-col justify-center text-center space-y-2'>
                    {children}
                </div>
            </section>
    )
}