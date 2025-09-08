/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import plusicon from "../assets/images/icon-plus.svg";
function PlusIcon({ onClick }) {
  return (
    <>
      <img
        onClick={onClick}
        className="cursor-pointer w-5"
        src={plusicon}
        alt="minus"
      />
    </>
  );
}
export default PlusIcon;
