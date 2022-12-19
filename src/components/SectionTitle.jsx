const SectionTitle = ({ innerText = "" }) => {
    return (
        <h3 className="w-fit py-2 px-4 md:py-3 mx-auto mb-20 block rounded-2xl text-3xl bg-dark-2 text-custom-blue
        text-center capitalize select-none animate-top-bottom">
            {innerText}
        </h3>
    )
}

export default SectionTitle;