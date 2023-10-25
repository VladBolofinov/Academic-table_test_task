import SelectInput from "../selectInput/SelectInput";

interface ITableCardProps {
    lecturesHours:number;
    laboratoryHours:number;
    practicHours:number;
    seminarHours:number;
    exam:boolean;
    offset:boolean;
    podgroups: any; //исправь потом нормально
}
const TableCard:React.FC<ITableCardProps> = ({lecturesHours, laboratoryHours, practicHours, seminarHours, exam, offset, podgroups}) => {
    return (
        <table>
            <tr>
                <th>Занятие</th>
                <th>Часы</th>
                {(podgroups.length > 1)
                    ? <>
                        <th>Подгруппа 1</th>
                        <th>Подгруппа 2</th>
                      </>

                    : <th>Преподаватель +</th>}
            </tr>
            <tr>
                <td>Лекции</td>
                <td>{lecturesHours}</td>
                <td><SelectInput disabledSelect={lecturesHours > 0 ? false : true}/></td>
                {(podgroups.length > 1) //countPodgroups на это поменяй
                    ? <td><SelectInput disabledSelect={lecturesHours > 0 ? false : true}/></td>
                    : null}
            </tr>

            <tr>
                <td>Лабораторные работы</td>
                <td>{laboratoryHours}</td>
                <td><SelectInput disabledSelect={laboratoryHours > 0 ? false : true}/></td>
                {(podgroups.length > 1)
                    ? <td><SelectInput disabledSelect={lecturesHours > 0 ? false : true}/></td>
                    : null}
            </tr>

            <tr>
                <td>Практические</td>
                <td>{practicHours}</td>
                <td><SelectInput disabledSelect={practicHours > 0 ? false : true}/></td>
                {(podgroups.length > 1)
                    ? <td><SelectInput disabledSelect={lecturesHours > 0 ? false : true}/></td>
                    : null}
            </tr>

            <tr>
                <td>Семинарские</td>
                <td>{seminarHours}</td>
                <td><SelectInput disabledSelect={seminarHours > 0 ? false : true}/></td>
                {(podgroups.length > 1)
                    ? <td><SelectInput disabledSelect={seminarHours > 0 ? false : true}/></td>
                    : null}
            </tr>
            <tr>
                {(!exam && !offset)  //с API во втором эл-те приходят exam и ofsset со значением true, в пояснении к заданию об этом не указано
                    ? null
                    : <td>{(exam && !offset) ? 'Экзамен' : 'Зачёт'}</td>}
                <td></td>
                <td><SelectInput/></td>
                {(podgroups.length > 1)
                    ? <td><SelectInput disabledSelect={lecturesHours > 0 ? false : true}/></td>
                    : null}
            </tr>
            {(podgroups.length > 1)
                ?
                <tr>
                    <td>Количество человек</td>
                    <td></td>
                    <td>{podgroups[0].countStudents}</td>
                    <td>{podgroups[1].countStudents}</td>
                </tr> : null}
            <tr>
                <td>Примечание (для составления расписания)</td>
                <td></td>
                <td colSpan={2}><textarea></textarea></td>
            </tr>
        </table>
    );
};

export default TableCard;