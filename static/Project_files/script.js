
//loop through children of the table body
const children = $('tbody').children();

//convert children to array
let children_arr = [];
for(let i = 0; i < children.length; i++){
    children_arr.push(children[i]);
}
const items = [];
children_arr.forEach(element => {
    const rowDetails = {
        name: element.getAttribute('data-name'),
        size: parseInt(element.getAttribute('data-size')),
        time: parseInt(element.getAttribute('data-time')),
        html: element.outerHTML
    };
    items.push(rowDetails);
});

//Sort names
const sort = (items, option, type) => {
    items.sort((item1, item2) => {
        let value1, value2;
        if (type === 'name'){
            value1 = item1.name.toUpperCase();
            value2 = item2.name.toUpperCase();
        }
        else if (type === 'size'){
            value1 = item1.size;
            value2 = item2.size;
        }
        else if (type === 'time'){
            value1 = item1.time;
            value2 = item2.time;
        }
        if (value1 < value2){
                return -1;
            }
        if (value1 > value2){
                return 1;
            }
        return 0;
    });
    if (option === 'down'){
        items.reverse();
    }
};

//Order Status
const sortStatus = {
    name: 'none',
    size: 'none',
    time: 'none'
    //none, up, or down
};

//fill table with items
const fillTableBody = items => {
    const content = items.map(element => element.html).join('');
    console.log(content);
    $('tbody').html(content);
}


//eventListeners
document.getElementById('table_head_row').addEventListener('click', event => {
    if(event.target){
        $('.arrow').remove();

        if(['none', 'down'].includes(sortStatus[event.target.id])){
            //sort in ascending
            sort(items, 'up', event.target.id);
            sortStatus[event.target.id] = 'up';
            //add icon
            event.target.innerHTML += '<img class="arrow" src="/Project_files/icon/up.png">'
        }
        else if(sortStatus[event.target.id] === 'up'){
            //sort in descending
            sort(items, 'down', event.target.id);
            sortStatus[event.target.id] = 'down';
            event.target.innerHTML += '<img class="arrow" src="/Project_files/icon/down.png">'
        }
        fillTableBody(items);
    }
});


let pathnum = pathname.split('/');
pathnum = pathnum.filter(element => element !== '');

let styling = '';
if (pathnum.length > 1){
    for (let i = 0; i < pathnum.length - 1; i++){
        styling += '../';
    }
}
styling += 'Project_files/style.css';

$("#style").href = styling;

