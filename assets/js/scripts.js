function showMarketingMore(){
    $('#skill-marketing-default').hide();
    $('#skill-marketing-detail').fadeIn();
};
function showMarketingLess(){
    $('#skill-marketing-detail').hide();
    $('#skill-marketing-default').fadeIn();
};

function showEntrepeneurshipMore(){
    $('#skill-entrepeneurship-default').hide();
    $('#skill-entrepeneurship-detail').fadeIn();
};
function showEntrepeneurshipLess(){
    $('#skill-entrepeneurship-detail').hide();
    $('#skill-entrepeneurship-default').fadeIn();
};
function showSalesMore(){
    $('#skill-sales-default').hide();
    $('#skill-sales-detail').fadeIn();
};
function showSalesLess(){
    $('#skill-sales-detail').hide();
    $('#skill-sales-default').fadeIn();
};
function showCommunicationMore(){
    $('#skill-communication-default').hide();
    $('#skill-communication-detail').fadeIn();
};
function showCommunicationLess(){
    $('#skill-communication-detail').hide();
    $('#skill-communication-default').fadeIn();
};
function showLeadershipMore(){
    $('#skill-leadership-default').hide();
    $('#skill-leadership-detail').fadeIn();
};
function showLeadershipLess(){
    $('#skill-leadership-detail').hide();
    $('#skill-leadership-default').fadeIn();
};


$(document).ready(function(){

    AOS.init();
    
    $('#skill-marketing-more').click(function(){
        showMarketingMore();
    });
    $('#skill-marketing-less').click(function(){
        showMarketingLess();
    });
    $('#skill-entrepeneurship-more').click(function(){
        showEntrepeneurshipMore();
    });
    $('#skill-entrepeneurship-less').click(function(){
        showEntrepeneurshipLess();
    });
    $('#skill-sales-more').click(function(){
        showSalesMore();
    });
    $('#skill-sales-less').click(function(){
        showSalesLess();
    });
    $('#skill-communication-more').click(function(){
        showCommunicationMore();
    });
    $('#skill-communication-less').click(function(){
        showCommunicationLess();
    });
    $('#skill-leadership-more').click(function(){
        showLeadershipMore();
    });
    $('#skill-leadership-less').click(function(){
        showLeadershipLess();
    });
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

