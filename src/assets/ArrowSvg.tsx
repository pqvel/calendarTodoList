import { FC } from "react";


const ArrowSvg: FC = () => {

    return (
        <svg className="calendar__button-img" xmlns="http://www.w3.org/2000/svg" 
             width="24" 
             height="24" 
             viewBox="0 0 24 24"
             fill="#fff"
             >
                <path d="M24 12l-12-9v5h-12v8h12v5l12-9z"/>
        </svg>
    )
}

export default ArrowSvg;