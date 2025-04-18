import PropTypes from 'prop-types'

export default function InfoCard({title, children, image, color, center}) {

    return (
        <article className={`flex flex-col w-56 h-auto items-center py-6 transform`}>
            <div className={`w-56 h-56 flex justify-center items-center relative rounded-xl shadow-xl ${color || "bg-primary-900"}`}>
                <img src={`/${image}`} alt="Pen Vector" className='scale-75'></img>
            </div>
            <div className='flex flex-col justify-center items-center text-white text-center'>
                <h1 className='text-4xl font-semibold py-5'>{title}</h1>
                <span className={`flex w-full text-center`}>
                    <p className='text-xl tracking-wide'>{children}</p>
                </span>
            </div>
      </article>
    )
} 

InfoCard.propTypes = {
    title: PropTypes.string,
    children: PropTypes.string,
    image: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    center: PropTypes.bool
}