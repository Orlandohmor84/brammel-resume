var browserWidth = $(window).width();

function marketingShowDesc() {
    var marketingHeight = $('#skill-marketing').height();
    var marketingHeightPx = marketingHeight + 'px';
    $('.skill-marketing-half').css('height',marketingHeightPx);
    if (browserWidth < 576) {
        console.log('Browser is less than 576px');
        $('#skill-marketing-img-full').show();
        $('#skill-marketing-img-half').hide();
        $('#skill-marketing-text-half').fadeIn();
    }
    else if (browserWidth < 992) {
        console.log('Browser is less than 992px');
        $('#skill-marketing-img-full').hide();
        $('#skill-marketing-img-half').fadeIn();
        $('#skill-marketing-text-half').fadeIn();
    } else {
        console.log('Browser is greater than 992px');
        $('#skill-marketing-img-full').hide();
        $('#skill-marketing-img-half').fadeIn();
        $('#skill-marketing-text-half').fadeIn();
    }
};
function marketingHideDesc() {
    $('#skill-marketing-img-half').hide();
    $('#skill-marketing-text-half').hide();
    $('#skill-marketing-img-full').fadeIn();
};

function entrepeneurshipShowDesc() {
    var entrepeneurshipHeight = $('#skill-entrepeneurship').height();
    var entrepeneurshipHeightPx = entrepeneurshipHeight + 'px';
    $('.skill-entrepeneurship-half').css('height',entrepeneurshipHeightPx);
    if (browserWidth < 992) {
        $('#skill-entrepeneurship-img-full').show();
        $('#skill-entrepeneurship-img-half').hide();
        $('#skill-entrepeneurship-text-half').fadeIn();
    } else {
        $('#skill-entrepeneurship-img-full').hide();
        $('#skill-entrepeneurship-img-half').fadeIn();
        $('#skill-entrepeneurship-text-half').fadeIn();
    }
};
function entrepeneurshipHideDesc() {
    $('#skill-entrepeneurship-img-half').hide();
    $('#skill-entrepeneurship-text-half').hide();
    $('#skill-entrepeneurship-img-full').fadeIn();
};

function salesShowDesc() {
    var salesHeight = $('#skill-sales').height();
    var salesHeightPx = salesHeight + 'px';
    $('.skill-sales-half').css('height',salesHeightPx);
    if (browserWidth < 992) {
        $('#skill-sales-img-full').show();
        $('#skill-sales-img-half').hide();
        $('#skill-sales-text-half').fadeIn();
    } else {
        $('#skill-sales-img-full').hide();
        $('#skill-sales-img-half').fadeIn();
        $('#skill-sales-text-half').fadeIn();
    }  
};
function salesHideDesc() {
    $('#skill-sales-img-half').hide();
    $('#skill-sales-text-half').hide();
    $('#skill-sales-img-full').fadeIn();
};

function communicationShowDesc() {
    var communicationHeight = $('#skill-communication').height();
    var communicationHeightPx = communicationHeight + 'px';
    $('.skill-communication-half').css('height',communicationHeightPx);
    if (browserWidth < 992) {
        $('#skill-communication-img-full').show();
        $('#skill-communication-img-half').hide();
        $('#skill-communication-text-half').fadeIn();
    } else {
        $('#skill-communication-img-full').hide();
        $('#skill-communication-img-half').fadeIn();
        $('#skill-communication-text-half').fadeIn();
    }
};
function communicationHideDesc() {
    $('#skill-communication-img-half').hide();
    $('#skill-communication-text-half').hide();
    $('#skill-communication-img-full').fadeIn();
};

function leadershipShowDesc() {
    var leadershipHeight = $('#skill-leadership').height();
    var leadershipHeightPx = leadershipHeight + 'px';
    $('.skill-leadership-half').css('height',leadershipHeightPx);
    if (browserWidth < 992) {
        $('#skill-leadership-img-full').show();
        $('#skill-leadership-img-half').hide();
        $('#skill-leadership-text-half').fadeIn();
    } else {
        $('#skill-leadership-img-full').hide();
        $('#skill-leadership-img-half').fadeIn();
        $('#skill-leadership-text-half').fadeIn();
    }
    
};
function leadershipHideDesc() {
    $('#skill-leadership-img-half').hide();
    $('#skill-leadership-text-half').hide();
    $('#skill-leadership-img-full').fadeIn();
};

$(document).ready(function(){
    AOS.init();
    console.log(browserWidth);
    if (browserWidth < 576) {
        $('.skills-img').show();
        $('.skills-img-half').hide();
        $('.skill-text').fadeIn();
    } else if (browserWidth < 992) {
        $('.skills-img').hide();
        $('.skills-img-half').fadeIn();
        $('.skill-text').fadeIn();
    } else {
        $('#skill-marketing').hover( marketingShowDesc, marketingHideDesc );
        $('#skill-entrepeneurship').hover( entrepeneurshipShowDesc, entrepeneurshipHideDesc );
        $('#skill-sales').hover( salesShowDesc, salesHideDesc );
        $('#skill-communication').hover( communicationShowDesc, communicationHideDesc );
        $('#skill-leadership').hover( leadershipShowDesc, leadershipHideDesc );
    }
     
});


/*
// Not working
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

var progressInit = 400;
window.onscroll = function(){scrollScripts()};

function scrollScripts(){
    // Display footer progress bar after 400px scrolling
    var scrollValue = window.scrollY;
    //console.log(scrollValue);
    if (scrollValue >= progressInit) {
        $('#footer-progress-bar').css('visibility','visible');
    }
}

function clearFooterBgs(){
    $('.footerElem').css('background','none');
};

// Intro
var observerIntro = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true) 
		console.log('Intro has just become visible in screen');
        clearFooterBgs();
        $('#prog-about').css('background-color','red');
}, { threshold: [0] });
observerIntro.observe(document.querySelector("#intro"));

// Skills
var observerSkills = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true)
		console.log('Skills has just become visible in screen');
        clearFooterBgs();
        $('#prog-skills').css('background-color','red');
}, { threshold: [0] });
observerSkills.observe(document.querySelector("#skills"));

// Experience
var observerExperience = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true)
		console.log('Experience has just become visible in screen');
        clearFooterBgs();
        $('#prog-exp').css('background-color','red');
}, { threshold: [0] });
observerExperience.observe(document.querySelector("#experience"));

// Contact
var observerContact = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true)
		console.log('Contact has just become visible in screen');
        clearFooterBgs();
        $('#prog-contact').css('background-color','red');
}, { threshold: [0] });
observerContact.observe(document.querySelector("#contact"));

*/

