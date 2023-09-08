export default function FloatCard({children, image}) {
    return(
        <div className="w-56 h-44 bg-primary-700 flex flex-col justify-center items-center rounded-tl-3xl rounded-br-3xl relative shadow-[12px_12px_0px_0px_rgba(0,0,0,0.25)]">
            <img src={`/${image}`} alt="Logo" className="scale-75 pb-8"></img>
            <p className="text-white font-semibold absolute bottom-0 pb-4">{children}</p>
        </div>
    )
}