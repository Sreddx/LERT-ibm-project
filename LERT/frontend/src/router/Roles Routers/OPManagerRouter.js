import { Navigate, Route, Routes } from 'react-router';
import { HomeOP } from '../../components/OPManager/HomeOP'
import { TypesOP } from "../../components/OPManager/TypesOP"
import { ExtraHoursOP } from "../../components/OPManager/ExtraHoursOP"
import { ExpensesTable } from '../../components/OPManager/ExpensesTypes';

export const OPManagerRouter = () => {
    return (
        <Routes>
            <Route index element={<HomeOP/>} />
            <Route path="/types" element={<TypesOP />} />
            <Route path="/icas" element={<div>ICAS</div>} />
            <Route path="/expenses" element={<ExpensesTable />} />
            <Route path="/hours" element={<ExtraHoursOP />} />
            <Route
                path="/manage"
                element={<div>Manage Manager Functions</div>}
            />
            <Route path="/edit" element={<div>Edit Manager Information</div>} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};
