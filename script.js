var w = document.documentElement.clientWidth * 1.2;
var h = document.documentElement.clientHeight * 1.2;
var star = document.getElementsByClassName("stars")[0];
var n = 1000;

function randomNum(m, n) {
    return Math.floor(Math.random() * (n - m + 1) + m);
}

var str = '';
for (var i = 0; i < n; i++) {
    var numX = randomNum(-w, w);
    var numY = randomNum(-h, h);
    var color = 'rgb(' + randomNum(0, 255) + ',' + randomNum(0, 255) + ',' + randomNum(0, 255) + ')';
    str += numX + 'px' + ' ' + numY + 'px' + ' ' + color + ',';
}

str = str.slice(0, -1);
star.style.boxShadow = str; var oImg = document.getElementsByTagName("img");
var oWrap = document.getElementById("wrap");
var nowX, nowY, lastX, lastY, minusX, minusY, roX = -10, roY = 0;
(function (i) {
    var imgLength = oImg.length;
    var deg = 360 / imgLength;
    for (; i < imgLength; i++) {
        oImg[i].style.transform = "rotateY(" + deg * i + "deg) translateZ(300px)";
    };
})(0);

document.onmousedown = function (e) {
    var e = e || window.event;
    lastX = e.clientX;
    lastY = e.clientY;
    this.onmousemove = function (e) {
        var e = e || window.event;
        nowX = e.clientX;
        nowY = e.clientY;

        minusX = nowX - lastX;
        minusY = nowY - lastY;
        console.log(minusX, minusY);
        roY += minusX * 0.15;
        roX -= minusY * 0.15;
        oWrap.style.transform = 'rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)';

        lastX = nowX;
        lastY = nowY;
    }

    this.onmouseup = function () {
        this.onmousemove = null;
        timer = setInterval(function () {
            minusX *= 0.95;
            minusY *= 0.95;
            roY += minusX * 0.15;
            roX -= minusY * 0.15;
            oWrap.style.transform = 'rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)';
            if (Math.abs(minusX) < 0.1 || Math.abs(minusY) < 0.1) {
                clearInterval(timer);
            }
        }, 1000 / 60);
    }
};

function touchStart(e) {
    e.preventDefault();
    var touch = e.touches[0];
    lastX = touch.pageX;
    lastY = touch.pageY;
}

function touchMove(e) {
    e.preventDefault();
    var touch = e.touches[0];
    nowX = touch.pageX;
    nowY = touch.pageY;
    minusX = nowX - lastX;
    minusY = nowY - lastY;
    console.log(minusX, minusY);
    roY += minusX * 0.2;
    roX -= minusY * 0.15;
    console.log(roY, roX);
    oWrap.style.transform = 'rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)';

    lastX = nowX;
    lastY = nowY;
}

function touchEnd(e) {
    e.preventDefault();

    timer = setInterval(function () {
        minusX *= 0.95;
        minusY *= 0.95;
        roY += minusX * 0.15;
        roX -= minusY * 0.15;
        oWrap.style.transform = 'rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)';
        if (Math.abs(minusX) < 0.1 || Math.abs(minusY) < 0.1) {
            clearInterval(timer);
        }
    }, 1000 / 60);
}

document.addEventListener('touchstart', touchStart, false);
document.addEventListener('touchmove', touchMove, false);
document.addEventListener('touchend', touchEnd, false);

document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function (e) {
    // Ctrl - U
    // Ctrl - S 
    if (e.ctrlKey &&
        (e.keyCode === 67 ||
            e.keyCode === 86 ||
            e.keyCode === 83 ||
            e.keyCode === 85 ||
            e.keyCode === 117)) {
        alert('Ơ, bạn định làm gì thế :))))))))))))))))))))))))))))) ');
        return false;
        // F12
    } else if (e.keyCode === 123) {
        alert('Thôi nào, làm việc đi :)))))))))))))))))))))))))))))) ');
        return false;
        // Ctrl - Shift - I
    } else if (e.ctrlKey && e.keyCode == 73) {
        alert('Uầy, Cần trô ship i mà cũng biết nữa, bạn giỏi đấy :3 ');
        return false;
    } else {
        return true;
    }
};
  