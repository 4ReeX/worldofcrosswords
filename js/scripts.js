$(".sm-btn").click(function () {
    $('#popups').toggleClass("hide");
});
function startGame() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup-content').load('difficult.html');
}
function play() {
    $('.popup, .shadow').toggleClass("hide");
    window.location.href = "game-telepat.html";
}
function agree() {
    $('#loadContent').load('agree.html');
}
function loginscreen() {
    $('#background').load('default.html');
}
function loadWin() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup').load('win.html');
}
function loadLose() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup').load('lose.html');
}
function closeBtn() {
    $('.popup, .shadow').toggleClass("hide");
}
function loading() {
    $('.send').toggleClass("hide");
    $('.loading').toggleClass("hide");
}

function loadRules() {
    $('.popup, .shadow').addClass("hide");
    $('.popup-content').load('rules.html');
}
function nextRules() {
    $('.popup').toggleClass("overflow-v");
    $('.popup-content').load('bonus.html');
    $('.close').addClass('hide');
}
function loadPuzzle() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup-content').load('puzzle.html');
}

function wellcome() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup').toggleClass("overflow-v");
    $('.popup-content').load("wellcome.html");
}
function closeWellcome() {
    $('.popup, .shadow').toggleClass("hide");
}

function letter1() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup-content').load('letter1.html');
}

function letter2() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup-content').load('letter2.html');
}

function goToURL() {
    window.location.href = "index.html";
}

function buyLink() {
    $('.popup, .shadow').addClass("hide");
    window.location.href = "store.html";
}

function couponOpen() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup-content').load('couponDescription.html');
}
function rulesSudoku() {
    $('.rules-pop').toggleClass("hide");
    $('.rules-pop').load('rules-sudoku.html');
}
function rulesJapan() {
    $('.rules-pop').toggleClass("hide");
    $('.rules-pop').load('rules-japan.html');
}
function rulesFillWords() {
    $('.rules-pop').toggleClass("hide");
    $('.rules-pop').load('rules-fillwords.html');
}


setTimeout(function closeFooter() {
    $(".footer").toggleClass("closed");
    $(".menu-toggle").toggleClass("closed");
    $(".header").toggleClass("closed");
}, 5000)

$(".menu-toggle").click(function () {
    $(".menu-toggle").toggleClass("closed");
    $(".footer").toggleClass("closed");
    $(".header").toggleClass("closed");
    setTimeout(function closeFooter() {
        $(".footer").toggleClass("closed");
        $(".menu-toggle").toggleClass("closed");
        $(".header").toggleClass("closed");
    }, 5000)
});


function loadJWin() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup').load('jwin.html');
}
function loadJLose() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup').load('jlose.html');
}

function loadSWin() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup').load('swin.html');
}
function loadSLose() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup').load('slose.html');
}

function loadFWin() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup').load('fwin.html');
}
function loadFLose() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup').load('flose.html');
}



function setZoom(zoom,el) {
    transformOrigin = [0,0];
    el = el || instance.getContainer();
    var p = ["webkit", "moz", "ms", "o"],
        s = "scale(" + zoom + ")",
        oString = (transformOrigin[0] * 100) + "% " + (transformOrigin[1] * 100) + "%";

    for (var i = 0; i < p.length; i++) {
        el.style[p[i] + "Transform"] = s;
        el.style[p[i] + "TransformOrigin"] = oString;
    }
    el.style["transform"] = s;
    el.style["transformOrigin"] = oString;
}
//setZoom(5,document.getElementsByClassName('container')[0]);
function showVal(a){
    var zoomScale = Number(a)/10;
    setZoom(zoomScale,document.getElementsByClassName('container')[0])
}
