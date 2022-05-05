import SearchIcon from "@mui/icons-material/Search";
import { useState, useRef } from "react";

/*____________________________________________________________________________________*/

const SearchField = (props) => {
  const [active, setActive] = useState(false);
  const input = useRef();

  return (
    <div
      className={`${
        active && "active"
      } search d-flex bg-light align-items-center overflow-hidden mb-5 mx-auto`}
    >
      <div
        className="search_icon"
        onClick={() => {
          setActive(!active);
          if (!active) {
            setTimeout(() => {
              input.current.focus();
            }, 500);
          }
        }}
      >
        <SearchIcon />
      </div>

      <div className="input top-0 position-relative  ">
        <input
          ref={input}
          onChange={(e) => props.searchApi(e.currentTarget.value)}
          className="border-0 h-100 w-100 "
          type="text"
          placeholder="Enter API.."
        />

        <span
          className=" text-black-50 position-absolute end-0 p-1 pt-2 fw-bold"
          onClick={() => {
            props.searchApi("");
            input.current.value = "";
            input.current.focus();
          }}
        >
          x
        </span>
      </div>
    </div>
  );
};

export default SearchField;

/*____________________________________________________________________________________*/
