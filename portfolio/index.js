var typed = new Typed('#element', {
    strings: ['Web Developer', 'Hardare Engineer', 'Web Designer',],
    typeSpeed: 210,
    loop: true,
});

function downloadCV() {
    // Replace 'path/to/your/cv.pdf' with the actual path to your CV file
    var cvFilePath = 'Images/cv.pdf';

    // Creating a virtual anchor element to trigger the download
    var link = document.createElement('a');
    link.href = cvFilePath;
    link.download = 'Images/cv.pdf';

    // Triggering the click event on the anchor element
    document.body.appendChild(link);
    link.click();

    // Removing the anchor element from the DOM
    document.body.removeChild(link);
}

// Adding a click event listener to the button
document.getElementById('downloadBtn').addEventListener('click', downloadCV);
document.getElementById('GitHub').addEventListener('click', function () {
    // Change the URL to the desired page
    window.location.href = 'https://github.com/Anmolguptapro';
});

