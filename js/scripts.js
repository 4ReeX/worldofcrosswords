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
function letter3() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup-content').load('letter3.html');
}

function jletter1() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup-content').load('jletter1.html');
}

function jletter2() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup-content').load('jletter2.html');
}
function jletter3() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup-content').load('jletter3.html');
}

function sletter1() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup-content').load('sletter1.html');
}

function sletter2() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup-content').load('sletter2.html');
}
function sletter3() {
    $('.popup, .shadow').toggleClass("hide");
    $('.popup-content').load('sletter3.html');
}

function agreement() {
    $('.rules-pop').toggleClass("hide");
    $('.rules-pop').load('legal.html');
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
}, 8000)

$(".menu-toggle").click(function () {
    $(".menu-toggle").toggleClass("closed");
    $(".footer").toggleClass("closed");
    $(".header").toggleClass("closed");
    setTimeout(function closeFooter() {
        $(".footer").toggleClass("closed");
        $(".menu-toggle").toggleClass("closed");
        $(".header").toggleClass("closed");
    }, 8000)
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

