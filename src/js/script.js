var projectLinks = document.getElementsByClassName('to-projects');

for (var i = 0; i < projectLinks.length; ++i) {
    var element = projectLinks[i];
    element.onclick = function () {
        document.querySelector('.projects').scrollIntoView({
            behavior: 'smooth'
        });
    };
}