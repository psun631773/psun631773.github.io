$(document).ready(function () {
    resizeSkillsContainer();

});



$(window).scroll(function () {
    if ($(window).scrollTop() <= 40) {
        $('#navbar').removeClass('navbar-scroll');
    } else {
        $('#navbar').addClass('navbar-scroll');
    }
});

// Showcase functions
function initProjectShowcase() {
    $("#button-project").addClass("showcase-button-activate");
    $("#art-showcase").hide();
    $("#project-showcase").slideDown(500);
}



// Resize skills showcase
function resizeSkillsContainer() {
    var maxHeight = 0;
    $("#skills-showcase").children().each(function () {
        $(this).find("div.skills-container").height("auto");
    });
    $("#skills-showcase").children().each(function () {
        maxHeight = Math.max(maxHeight, $(this).find(".skills-container").height());
    });
    $("#skills-showcase").children().each(function () {
        $(this).find("div.skills-container").height(maxHeight);
    });
}

$(window).resize(resizeSkillsContainer);

// Showcase buttos event listeners


$("#button-project").click(function () {
    $("#button-project").addClass("showcase-button-activate");
    $("#project-showcase").slideDown(500);
});



const typewriterText = `Hi, I'm Peter Sun.

A solution-driven Full Stack Software Engineer with over 5 years of experience working at IBM, TekoAI, Guili Investment, and Huayelian.

Holds a degree in Electrical and Computer Engineering from the University of Windsor, Canada.`;

// The element to typewrite into
const typewriterElement = document.getElementById('typewriter-text');

// Typewriter effect function
let i = 0;
function typeWriter() {
    if (i === 0) {
        typewriterElement.style.visibility = 'visible';
    }
    if (i < typewriterText.length) {
        // Add next character
        typewriterElement.textContent += typewriterText.charAt(i);
        i++;
        // Wait before adding next character
        setTimeout(typeWriter, 50);
    } else {
        setTimeout(resetTypewriter, 5000); // Wait for 5 seconds
    }
}
// Reset the typewriter effect
function resetTypewriter() {
    typewriterElement.textContent = '';
    i = 0;
    typeWriter();
}

// Initiate the typewriter effect
typeWriter();