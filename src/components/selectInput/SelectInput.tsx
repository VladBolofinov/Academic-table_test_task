import {useAppSelector} from "../../hooks/redux";
import './SelectInput.scss';

interface ISelectInputProps {
    disabledSelect?: boolean;
}

interface ITeachersData {
    id: string;
    name: string;
}

export const SelectInput: React.FC<ISelectInputProps> = ({disabledSelect}) => {
    const {teachers} = useAppSelector(state => state.apiRequestReducer);
    const renderTeachersOptions = teachers.map((item:ITeachersData) => {
        return (
            <option value={item.id}>{item.name}</option>
        )
    })
    return (
        <>
            <select name="teachers" disabled={disabledSelect} onChange={(e) => console.log(e.target.value)}>
                <option value="">Вакансия</option>
                {renderTeachersOptions}
            </select>
        </>
    );
};
export default SelectInput;