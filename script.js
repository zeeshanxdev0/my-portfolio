/* =========================================================
   ZEESHAN.DEV
   NAVBAR JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.getElementById("navbar");
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");


    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    function handleNavbarScroll() {

        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", handleNavbarScroll);

    handleNavbarScroll();


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    menuToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("active");

        menuToggle.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /* =====================================================
       CLOSE MOBILE MENU AFTER CLICK
    ===================================================== */

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.forEach((item) => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });

});

/* =========================================================
   VIP HERO JAVASCRIPT
========================================================= */


/* =========================================================
   TYPING EFFECT
========================================================= */

const typingText = document.getElementById("typingText");

if (typingText) {

    const typingWords = [
        "WEB DEVELOPER",
        "FRONT-END DEVELOPER",
        "UI DEVELOPER",
    ];

    let wordIndex = 0;
    let charIndex = 0;

    let isDeleting = false;


    function typeEffect() {

        const currentWord =
            typingWords[wordIndex];


        if (!isDeleting) {

            typingText.textContent =
                currentWord.substring(
                    0,
                    charIndex + 1
                );

            charIndex++;


            if (charIndex === currentWord.length) {

                isDeleting = true;

                setTimeout(
                    typeEffect,
                    1600
                );

                return;
            }

        } else {

            typingText.textContent =
                currentWord.substring(
                    0,
                    charIndex - 1
                );

            charIndex--;


            if (charIndex === 0) {

                isDeleting = false;

                wordIndex++;

                if (
                    wordIndex >=
                    typingWords.length
                ) {
                    wordIndex = 0;
                }

            }

        }


        const speed =
            isDeleting ? 45 : 85;

        setTimeout(
            typeEffect,
            speed
        );
    }


    typeEffect();

}


/* =========================================================
   HERO REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal-left, .reveal-right"
    );


function revealHero() {

    revealElements.forEach(
        (element, index) => {

            setTimeout(() => {

                element.classList.add("show");

            }, index * 180);

        }
    );

}


window.addEventListener(
    "load",
    revealHero
);


/* =========================================================
   COUNTER ANIMATION
========================================================= */

const counters =
    document.querySelectorAll(
        ".counter"
    );


let countersStarted = false;


function animateCounters() {

    if (countersStarted) return;

    countersStarted = true;


    counters.forEach(
        (counter) => {

            const target =
                Number(
                    counter.dataset.target
                );

            let current = 0;

            const increment =
                Math.max(
                    1,
                    Math.ceil(target / 50)
                );


            const updateCounter = () => {

                current += increment;


                if (current >= target) {

                    counter.textContent =
                        target;

                    return;
                }


                counter.textContent =
                    current;


                requestAnimationFrame(
                    updateCounter
                );

            };


            updateCounter();

        }
    );

}


/* Start counters when Hero is visible */

const heroSection =
    document.querySelector(".hero");


if (heroSection) {

    const counterObserver =
        new IntersectionObserver(
            (entries) => {

                if (
                    entries[0].isIntersecting
                ) {

                    animateCounters();

                    counterObserver.disconnect();

                }

            },
            {
                threshold: 0.3
            }
        );


    counterObserver.observe(
        heroSection
    );

}


/* =========================================================
   HERO IMAGE PARALLAX
========================================================= */

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );


const heroImage =
    document.querySelector(
        ".hero-image"
    );


if (
    heroVisual &&
    heroImage &&
    window.innerWidth > 768
) {

    heroVisual.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                heroVisual.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const moveX =
                (x - rect.width / 2) /
                35;


            const moveY =
                (y - rect.height / 2) /
                35;


            heroImage.style.transform =
                `scale(1.025)
                 translate(${moveX}px, ${moveY}px)`;

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        () => {

            heroImage.style.transform =
                "scale(1) translate(0, 0)";

        }
    );

}

/* =========================================================
   ABOUT SCROLL REVEAL
========================================================= */

const scrollRevealElements =
    document.querySelectorAll(
        ".reveal-on-scroll"
    );


if (scrollRevealElements.length) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    scrollRevealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

}

/* =========================================================
   SERVICE CARD MAGNETIC HOVER
========================================================= */

const serviceCards =
    document.querySelectorAll(".service-card");


if (
    serviceCards.length &&
    window.innerWidth > 900
) {

    serviceCards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                (y - centerY) / 35;

            const rotateY =
                (centerX - x) / 35;


            card.style.transform =
                `translateY(-8px)
                 perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "";

        });

    });

}

/* =========================================================
   SKILLS PROGRESS ANIMATION
========================================================= */

const skillCards =
    document.querySelectorAll(".skill-card");


if (skillCards.length) {

    const skillsObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        const progress =
                            entry.target.querySelector(
                                ".skill-progress"
                            );


                        if (progress) {

                            const width =
                                progress.dataset.width;


                            progress.style.setProperty(
                                "--skill-width",
                                width
                            );


                            setTimeout(() => {

                                progress.classList.add(
                                    "animate"
                                );

                            }, 150);

                        }


                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.3
            }
        );


    skillCards.forEach((card) => {

        skillsObserver.observe(card);

    });

}

/* =========================================================
   PROJECT CARD 3D TILT
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");


if (
    projectCards.length &&
    window.innerWidth > 900
) {

    projectCards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    (y - centerY) / 55;

                const rotateY =
                    (centerX - x) / 55;


                card.style.transform =
                    `translateY(-8px)
                     perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    });

}

/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");

const formStatus =
    document.getElementById("formStatus");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "contactName"
                ).value.trim();


            if (!name) {

                formStatus.textContent =
                    "Please enter your name.";

                return;

            }


            formStatus.textContent =
                `Thanks ${name}! Your message is ready to send.`;


            contactForm.reset();

        }
    );

}

/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}













