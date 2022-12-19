const MainButton = ({ productID = "", icon = "", text = "" }) => (
    <button to={`details/${productID}`} type="button" className="custom-btn text-xl">
        {icon}
    </button>
);

export default MainButton;