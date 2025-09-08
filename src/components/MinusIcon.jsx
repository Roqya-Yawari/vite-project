/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import minusicon from "../assets/images/icon-minus.svg";
function MinusIcon({ onClick }) {
  return (
    <>
      <img
        onClick={onClick}
        className="cursor-pointer w-5"
        src={minusicon}
        alt="minus"
      />
    </>
  );
}
export default MinusIcon;
