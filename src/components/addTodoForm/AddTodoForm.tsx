import { FC, FormEventHandler, FormEvent, ReactElement, useState, ChangeEventHandler, ChangeEvent } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch} from "../../core/store/hooks";
import { addTodo } from "../../core/slices/todosSlice";
import useInput from "../../core/hooks/useInput";
import { getTime } from "../../core/utils/getTime";
import "./addTodoForm.scss"


type AddTodoFormProps = {
    readonly date: number
}

const AddTodoForm: FC<AddTodoFormProps> = ({date}) => {
    const dispatch = useAppDispatch();

    const title = useInput("", 4);
    const descr = useInput("", 12);
    
    const [time, setTime] = useState<string>(getTime());
    
    const resetForm = (): void => {
        title.resetValue(); descr.resetValue()
        title.resetDirty(); descr.resetDirty();
        setTime(time => getTime())
    }


    const timeHandler: ChangeEventHandler<HTMLInputElement> = (event: ChangeEvent<HTMLInputElement>) => {
        setTime(time => event.target.value);
    }

    const onFormSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (!title.valid || !descr.valid) return;

        const todoTime = time !== "" ? time : getTime();
        const todo = { title: title.value.trim(), descr: descr.value, id: uuidv4(), time: todoTime };
        dispatch(addTodo({ todo, date }));

        resetForm();
    }

    return (
        <form className="add-todo__form" onSubmit={onFormSubmit}>

            <div className="add-todo__time">
                <fieldset className="add-todo__fieldset">
                    <div>
                        <input value={time} onChange={timeHandler} className="add-todo__input-time" type="time" name="selected_time" list="time-list"/>
                    </div>
                    <datalist id="time-list">
                        <option value="07:00" label="Morning"/>
                        <option value="14:00" label="Lunch"/>
                        <option value="20:00" label="Evening"/>
                    </datalist>
                </fieldset>
            </div>

            <FormItemLayout label="title" isValid={title.valid} isDirty={title.isDirty}>
                <input className="add-todo__input" 
                       onChange={title.changeHandler} 
                       value={title.value}
                       onBlur={title.blurHandler}/>    
            </FormItemLayout>

            <FormItemLayout label="description" isValid={descr.valid} isDirty={descr.isDirty}>
                <textarea className="add-todo__textarea" 
                          onChange={descr.changeHandler} 
                          value={descr.value}
                          onBlur={descr.blurHandler}></textarea>
            </FormItemLayout>

            <button className="add-todo__button" type="submit">Add todo</button>
        </form>
    )
}

type FormItemLayoutProps = {
    label: string,
    isValid: boolean,
    isDirty: boolean,
    children: ReactElement<HTMLInputElement | HTMLTextAreaElement>
}

const FormItemLayout: FC<FormItemLayoutProps> = ({label, children, isValid, isDirty}) => {
    return (

        <label className="add-todo__label">
            {(isDirty && !isValid) ? <span className="add-todo__label-error-text">short length</span> : null}
            <span className="add-todo__label-text">{label}</span>
            {children}
        </label>
    )
}

export default AddTodoForm