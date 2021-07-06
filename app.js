const text = document.querySelector('.text');

let resultfontSize = 18;

function isActive(butt) {
    return document.querySelector('.' + butt).classList.toggle('active')
}

function color(colorID) {
    text.style.color = colorID;
}

function reduce() {
    resultfontSize +=2
    text.style.fontSize = resultfontSize + 'px';
}

function increase() {
    resultfontSize -=2
    text.style.fontSize = resultfontSize + 'px';
}

function Bold() {
    if (isActive('bold')) {
        text.style.fontWeight = 'bold'
    }else{
        text.style.fontWeight = '100'
    }
}

function Italic() {
    if (isActive('italic')) {
        text.style.fontStyle = 'italic';
    } else {
        text.style.fontStyle = 'normal'
    }
}

function Left() {
    if (isActive('left')) {
        text.style.textAlign = 'left';
        if (document.querySelector('.center').classList.contains('active')) {
            isActive('center')
        }
        if (document.querySelector('.right').classList.contains('active')) {
            isActive('right')
        }
    }else{
        text.style.textAlign = '';
    }
}

function Center() {
    if (isActive('center')) {
        text.style.textAlign = 'center';
        if (document.querySelector('.left').classList.contains('active')) {
            isActive('left')
        }
        if (document.querySelector('.right').classList.contains('active')) {
            isActive('right')
        }
    }else{
        text.style.textAlign = '';
    }
}

function Right() {
    if (isActive('right')) {
        text.style.textAlign = 'right';
        if (document.querySelector('.center').classList.contains('active')) {
            isActive('center')
        }
        if (document.querySelector('.left').classList.contains('active')) {
            isActive('left')
        }
    }else{
        text.style.textAlign = '';
    }
}