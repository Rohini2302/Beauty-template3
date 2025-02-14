import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div className="bg-[#1E2C30] w-full sm:relative">
      <div className="bg-bg1 w-full flex sm:py-20 py-24 sm:px-0 px-6 justify-center flex-col items-center">
        <p className="text-[#FFF] text-center font-manrope text-[15px] font-normal leading-[154.5%] tracking-wide uppercase">
          Our Services
        </p>
        <h4 className="text-[#FFF] text-center font-playfair sm:text-[50px] text-[40px] font-semibold leading-[120%] tracking-tight max-w-[650px]">
          Well Experience Beauty at your Service...!
        </h4>
        <NavLink to="/Reservation">
          <button
            type="button"
            className="flex justify-center items-start py-4 sm:px-8 px-4 bg-[#7A9CA5] sm:mt-8 mt-4 rounded-[4px] group overflow-hidden relative"
          >
            <div className="absolute inset-0 w-0 bg-[#5C8692] transition-all duration-[200ms] ease-out group-hover:w-full"></div>
            <span className="text-[#FFF] text-center font-Manrope sm:text-[14px] text-[12px] font-normal tracking-widest leading-[125%] uppercase relative">
              Make a reservation
            </span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Banner;
