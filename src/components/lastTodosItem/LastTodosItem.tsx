import { FC, useMemo } from "react";
import { monthText } from "../../core/constants/date";
import { shortStr } from "../../core/utils/shortStr";

type LastTodosItemProps = {
    todo: {
        title: string,
        time: string,
    },
    date: number
}
const LastTodosItem: FC<LastTodosItemProps> = ({todo, date}) => {
    const {title, time} = todo;

    const validDate = useMemo(() => {
        const strDate = date.toString();
        
        const year = strDate.slice(0,4);
        const monthNum = strDate.slice(4,5) === "0" ? Number(strDate.slice(5,6)) : Number(strDate.slice(4,6));
        const day = date.toString().slice(6,8);

        return `${day} ${monthText[monthNum]}, ${year}. ${time}`;
    }, []);

    return (
        <li className="last-todos__item">
            <span className="last-todos__date">{validDate}</span>
            <p className="last-todos__text">{shortStr(title, 30, "...")}</p>
        </li>
    )
}

export default LastTodosItem;