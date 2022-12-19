const MainButton = ({ productID = "", icon = "", text = "" }) => (
    <button to={`details/${productID}`} type="button" className="custom-btn bg-custom-blue">
        {icon}
    </button>
);

export default MainButton;