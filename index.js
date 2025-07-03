//1 Площа квадрата
 function getSquareOfSquare (a) {
    return a*a;
 }

 //2 Квадратне рівняння

 function getRoots(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log('Невірні вхідні дані)');
        return false
    }
    let d = b**2 -4*a*c;
    if (d<0) {
        console.log('Рівняння не має коренівє');
    } else if (d===0) {
        let x = -b /(2*a);
        console.log('Рівняння має корінь '+ x);
    } else {
        let x1 = (-b + Math.sqrt())/(2*a);
        let x2 = (-b - Math.sqrt())/(2*a);
        console.log('x1 = '+x1);
        console.log('x2 = ' +x2);
    }
 }

 //3 Menu

 function getMenu() {
    let userOption = prompt('Виберіть напій:\n1-Juice\n2-Water\3-Tea');
    switch(userOption) {
        case '1': {
            alert('Ви вибрали сік')
            break;
        }
        case '2': {
            alert('Ви вибрали воду')
            break;
        }
        case '3': {
            alert('Ви вибрали чай')
            break;
        }
        case null:
        case '': 
        { 
            alert('Ви нічого не обрали');
        }
        default: {
            alert('Такого напою немає')
        }
    }
 }

 //4 
 function monthOfYear() {
    let month = prompt('Введіть номер місяця')
    switch(month) {
        case '1':
        case '2':
        case '12':
            {
                alert("Winter");
                break;
            }
        case '3':
        case '4':
        case '5':
            {
                alert('Spring');
                break;
            }
        case '6':
        case '7':
        case '8':
            {
                alert('Summer');
                break;
            }
        case '9':
        case '10':
        case '11':
            {
                alert('Autumn');
                break;
            }
        case null:
        case '': 
            { 
                alert('Ви нічого не обрали');
                break;
            }
        default: {
            alert('Такого місяца немає')
             }
    }
 }
 