window.onload = function()
{
GetTable(12001801);
fetch('get_groups.php')
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. ' +
                    'Status Code: ' + response.status);
            }
            response.json().then(function (data) {
                const groups = data;
                const parent = document.querySelector('#group_select');
                for(let i = 0; i < groups.length; i++) {
                const element = document.createElement('option');
                element.innerText = groups[i].name;
                parent.appendChild(element);
                }
            });
        })
    .catch(function (err) { 
        console.log('Fetch Error :-S', err);
    });
}




function GetTable(group)
{
fetch('get_table.php?group=' + group)
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. ' +
                    'Status Code: ' + response.status);
            }
            response.json().then(function (data) {
                const table = data;


                const parent = document.querySelector('#schedule');
                 while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                    }   

                let size = table.length;


               
                    for (let i = 0; i < size; i++)
                    {
                        if (i == 0)
                        {
                            RenderDiv(i, table, parent);

                            RenderLessons(i, table);


                        }
                        else 
                        {
                                if (table[i].day != table[i-1].day)
                            {
                                RenderDiv(i, table, parent);
                            }

                                if (table[i].lesson_number != table[i-1].lesson_number)
                            {
                                RenderLessons(i, table); 
                            }
                        }

                        cell = document.querySelectorAll('.cell');
                        ToW_div = document.createElement('div');
                        ToW_div.innerText = table[i].ToW;
                        cell[cell.length-6].appendChild(ToW_div);
            

                        teacher_div = document.createElement('div');
                        teacher_div.innerText = table[i].name;
                        cell[cell.length-5].appendChild(teacher_div);



                        disc_div = document.createElement('div');
                        disc_div.innerText = table[i].discipline;
                        cell[cell.length-4].appendChild(disc_div);


                        type_div = document.createElement('div');
                        type_div.innerText = table[i].type;
                        cell[cell.length-3].appendChild(type_div);


                        subgroup_div = document.createElement('div');
                        subgroup_div.innerText = table[i].subgroup;
                        cell[cell.length-2].appendChild(subgroup_div);


                        number_div = document.createElement('div');
                        number_div.innerText = table[i].number;
                        cell[cell.length-1].appendChild(number_div);
                    }
            });

        })
    .catch(function (err) { 
        console.log('Fetch Error :-S', err);
    });
}




function RenderDiv (i, table, parent)
{
    let container = document.createElement('div');
    container.classList = 'schedule';
    let dayName = document.createElement('h2');
    dayName.innerText = table[i].day;
    container.appendChild(dayName);
    let header = document.createElement('table');
    let colums = `<table>
                    <tr>
                        <td>Пара</td>
                        <td class = 'tow_cell'>Тип недели</td>
                        <td class = 'teacher_cell'>Преподаватель</td>
                        <td class = 'disc_cell'>Дисциплина</td>
                        <td class = 'type_cell'>Тип занятия</td>
                        <td>Подгруппа</td>
                        <td>Аудитория</td>
                    </tr>
                </table>`;
    header.innerHTML += colums;
    header.setAttribute('data-day', table[i].day);
    header.classList = 'schedule_table';
    container.appendChild(header);
    parent.appendChild(container);
}




function RenderLessons (i, table)
{
    const header = document.querySelectorAll('.schedule_table');
    const row = document.createElement('tr');
    row.classList = 'table_row';
    let td_lesson_number = document.createElement('td');
    td_lesson_number.innerText = table[i].lesson_number;
    row.appendChild(td_lesson_number);
    header[header.length - 1].appendChild(row);
    RenderNext();
    RenderNext();
    RenderNext();
    RenderNext();
    RenderNext();
    RenderNext();
}



function RenderNext()
{
    row = document.querySelectorAll('.table_row');

    next = document.createElement('td');

    next.classList = 'cell';

    row[row.length - 1].appendChild(next);

}




