import { FC } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import CalendarPage from "../../pages/calendarPage/CalendarPage";
import TodosPage from "../../pages/todosPage/TodosPage";
import Header from "../header/Header";

const App: FC = () => {

    return (
        <div className="app">
            <HashRouter> 
                <Header/>
                <Routes>
                    <Route path="/" element={<CalendarPage />}/>
                    <Route path="/:todosId" element={<TodosPage />}/>
                </Routes>
            </HashRouter>
        </div>
    )
}
export default App