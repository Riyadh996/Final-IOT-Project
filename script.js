document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (link.hash) {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop;
                    const scrollOptions = {
                        top: offsetTop,
                        behavior: 'smooth'
                    };

                    window.scroll(scrollOptions);
                }
            });
        }
    });
});
