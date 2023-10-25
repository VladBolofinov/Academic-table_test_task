import {useAppSelector} from "../../hooks/redux";
import './SubjectCard.scss';
import TableCard from "../TableCard/TableCard";
import {useAppDispatch} from "../../hooks/redux";
import {apiRequestSlice} from "../../providers/store/reducers/ApiRequestSlice";
const SubjectCard = () => {
    const {data} = useAppSelector(state => state.apiRequestReducer);
    const dispatch = useAppDispatch();
    const {changeTeacher} = apiRequestSlice.actions;
    const renderCards = data.map((item:any) => {
        return (
            <div key={item.uniqueId} className='card-wrapper' onClick={() => dispatch(changeTeacher(false))}>
                <header>{item.subjectName}</header>
                <p><strong>Группа</strong></p><span>{item.groupName}</span>
                <p><strong>Кол-во курсантов</strong></p><span>{item.studentsNumber}</span>
                <p><strong>Курс</strong></p><span>{item.course}</span>
                <p><strong>Семестр</strong></p><span>{item.semestr}</span>
                <TableCard lecturesHours={item.lecturesHours}
                           laboratoryHours={item.laboratoryHours}
                           practicHours={item.practicHours}
                           seminarHours={item.seminarHours}
                           exam={item.exam}
                           offset={item.offset}
                           podgroups={item.podgroups}/>
            </div>)
    })
    return (
        <>
            {renderCards}
        </>
    );
};

export default SubjectCard;