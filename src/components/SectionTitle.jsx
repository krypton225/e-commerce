const SectionTitle = ({ innerText = "", marginBottom = true, styleAdditions = "" }) => {
    return (
        <h3 className={`w-full mx-auto ${marginBottom ? "mb-20" : ""} inline-block text-xl lg:text-3xl text-center capitalize select-none ${styleAdditions}`}>
            <span className={`py-2 px-4 md:py-3 rounded-2xl bg-dark-2 text-custom-blue`}>{innerText}</span>
        </h3 >
    )
}

export default SectionTitle;