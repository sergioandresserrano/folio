$(window).ready(function () {
});

$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});

$(window).load(function () {




    gsap.to(".transitionbox", { y: "100%", duration: 1, delay: .2, ease: "power1.inOut", })



    //SKEW EFFECT
    let skewSetter = gsap.quickTo(".jello1", "skewY"), // fast
        clamp = gsap.utils.clamp(-2, 2); // don't let the skew go beyond 20 degrees.


    //SMOOTHER
    let smoother = ScrollSmoother.create({
        smooth: 3,
        normalizeScroll: true,
        effects: true,
        onUpdate: self => skewSetter(clamp(self.getVelocity() / -100)),
        onStop: () => skewSetter(0)
    });



    //MAGNETIC
    var magnets1 = document.querySelectorAll('.magnetic')
    var strength1 = 50

    magnets1.forEach((magnet) => {
        magnet.addEventListener('mousemove', moveMagnet);
        magnet.addEventListener('mouseout', function (event) {
            gsap.to(event.currentTarget, 1, { x: 0, y: 0, ease: "elastic.out(1, 0.3)" })
        });
    });

    function moveMagnet(event) {
        var magnetButton = event.currentTarget
        var bounding = magnetButton.getBoundingClientRect()
        gsap.to(magnetButton, 1, {
            x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength1,
            y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength1,
            ease: "Power4.easeOut"
        })
    }

    var magnets2 = document.querySelectorAll('.magnetic2')
    var strength2 = 100

    magnets2.forEach((magnet) => {
        magnet.addEventListener('mousemove', moveMagnet2);
        magnet.addEventListener('mouseout', function (event) {
            gsap.to(event.currentTarget, 1, { x: 0, y: 0, ease: "elastic.out(1, 0.3)" })
        });
    });

    function moveMagnet2(event) {
        var magnetButton = event.currentTarget
        var bounding = magnetButton.getBoundingClientRect()
        gsap.to(magnetButton, 1, {
            x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength2,
            y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength2,
            ease: "Power4.easeOut"
        })
    }



    /////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////INTRO SEC1///////
    ////////////////////////////////////////////////////////////////////////////////////////////

    gsap.to(".header0", {
        x: '150%', duration: 1, ease: "power3.inOut",
        scrollTrigger: {
            trigger: ".sec2",
            start: "-100%",
            end: "=+100%",
            scrub: true,
        }
    })

    gsap.from(".header1", { y: "100%", delay: .5, duration: 2, ease: "power3.inOut", })
    gsap.to(".header1", { opacity: 1, delay: .5, duration: 1, ease: "power3.inOut", })
    gsap.from(".ears1", { y: "200%", delay: .8, duration: 2, ease: "power3.inOut", })
    gsap.to(".ears1", { opacity: 1, delay: .8, duration: 1, ease: "power3.inOut", })
    gsap.from(".nose1", { y: "200%", delay: .8, duration: 2, ease: "power4.inOut", })
    gsap.to(".nose1", { opacity: 1, delay: .8, duration: 1, ease: "power4.inOut", })
    gsap.from(".mouth1", { y: "200%", delay: .8, duration: 2, ease: "power4.inOut", })
    gsap.to(".mouth1", { opacity: 1, delay: .8, duration: 1, ease: "power4.inOut", })
    gsap.from(".fins", { y: "200%", delay: .6, duration: 2, ease: "power4.inOut", })
    gsap.to(".fins", { opacity: 1, delay: .6, duration: 1, ease: "power4.inOut", })

    gsap.from(".hands1", { x: -1000, delay: 1, duration: 1, ease: "power3.inOut", })
    gsap.from(".hands2", { x: 1000, delay: 1, duration: 1, ease: "power3.inOut", })
    gsap.from(".finger1", { x: -1000, delay: 1, duration: 1, ease: "power3.inOut", })
    gsap.from(".finger2", { x: 1000, delay: 1, duration: 1, ease: "power3.inOut", })

    gsap.from(".square1", { scale: 0, opacity: 0, delay: 1.4, duration: .8, ease: "power3.inOut", })
    gsap.from(".circle1", { scale: 0, opacity: 0, delay: 1.5, duration: .9, ease: "power3.inOut", })
    gsap.from(".circle2", { scale: 0, opacity: 0, delay: 1.2, duration: .7, ease: "power3.inOut", })
    gsap.from(".triangle1", { scale: 0, opacity: 0, delay: 1.3, duration: .8, ease: "power3.inOut", })


    gsap.from(".line1", { height: 0, delay: 1.2, duration: .8, ease: "elastic.out(1, .7)", })
    gsap.from(".social1", { scale: 0, opacity: 0, delay: 1.2, stagger: -.15, duration: .8, ease: "elastic.out(1, .7)", })

    gsap.from(".line2", { height: 0, delay: 1.5, duration: .8, ease: "power3.inOut", })
    gsap.from(".language", { scale: 0, opacity: 0, delay: 1.7, duration: .8, ease: "power3.inOut", })
    gsap.from(".link_language", { scale: 0, delay: 1.9, duration: .8, stagger: .1, ease: "power3.inOut", })
    gsap.from(".link_language2", { scale: 0, delay: 1, duration: .8, stagger: .1, ease: "power3.inOut", })


    gsap.from(".menu_item", { y: -300, delay: 1.2, stagger: -.15, duration: .8, ease: "elastic.out(.8, .7)", })
    gsap.from(".logo", { y: -300, delay: 1.4, duration: .8, ease: "elastic.out(.8, .7)" })





    /////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////MY NAME IS SEC2//////
    ////////////////////////////////////////////////////////////////////////////////////////////


    gsap.from(".title1", {
        x: '500%', duration: 1, ease: "elastic.out(.4, 0.2)",
        scrollTrigger: {
            trigger: ".sec2",
            start: "-50%",
            end: "=-20%",
        },
        onComplete: function () {
            tl1.resume()
        }
    })
    gsap.from(".title2", {
        x: '-500%', duration: 2, ease: "elastic.out(.4, 0.2)",
        scrollTrigger: {
            trigger: ".sec2",
            start: "-50%",
            end: "=-20%",
        }
    })
    gsap.from(".title3", {
        x: '300%', duration: 2, ease: "elastic.out(.4, 0.2)",
        scrollTrigger: {
            trigger: ".sec2",
            start: "-50%",
            end: "=-20%",
        }
    })
    gsap.from(".button", {
        x: '-500%', duration: 1, ease: "elastic.out(.4, 0.2)",
        scrollTrigger: {
            trigger: ".sec2",
            start: "-50%",
            end: "=-20%",
        }
    })

    $(".arrow_button").click(function () {
        gsap.to(window, { duration: 1, scrollTo: ".sec3" });
    })

    /*
    gsap.from(".title2", {
        opacity: 0, duration: 1, ease: "expo.inOut",
        scrollTrigger: {
            trigger: ".sec2",
            start: "-80%",
            end: "=+1%",
            scrub: true,
            markers: true
        }
    })*/



    var tl1duration = .5;
    var tl1delay = 2;



    var tl1 = gsap.timeline({ repeat: -1 });
    tl1.pause()
    tl1.from(".st1", { opacity: 0, y: "-80px", duration: tl1duration, ease: "back.inOut" });
    tl1.to(".st1", { opacity: 0, y: "80px", delay: tl1delay, duration: tl1duration, ease: "back.inOut" });
    tl1.from(".st2", { opacity: 0, y: "-80px", duration: tl1duration, ease: "back.inOut" });
    tl1.to(".st2", { opacity: 0, y: "80px", delay: tl1delay, duration: tl1duration, ease: "back.inOut" });
    tl1.from(".st3", { opacity: 0, y: "-80px", duration: tl1duration, ease: "back.inOut" });
    tl1.to(".st3", { opacity: 0, y: "80px", delay: tl1delay, duration: tl1duration, ease: "back.inOut" });
    tl1.from(".st4", { opacity: 0, y: "-80px", duration: tl1duration, ease: "back.inOut" });
    tl1.to(".st4", { opacity: 0, y: "80px", delay: tl1delay, duration: tl1duration, ease: "back.inOut" });
    tl1.from(".st5", { opacity: 0, y: "-80px", duration: tl1duration, ease: "back.inOut" });
    tl1.to(".st5", { opacity: 0, y: "80px", delay: tl1delay, duration: tl1duration, ease: "back.inOut" });
    tl1.from(".st6", { opacity: 0, y: "-80px", duration: tl1duration, ease: "back.inOut" });
    tl1.to(".st6", { opacity: 0, y: "80px", delay: tl1delay, duration: tl1duration, ease: "back.inOut" });
    tl1.from(".st7", { opacity: 0, y: "-80px", duration: tl1duration, ease: "back.inOut" });
    tl1.to(".st7", { opacity: 0, y: "80px", delay: tl1delay, duration: tl1duration, ease: "back.inOut" });
    tl1.from(".st8", { opacity: 0, y: "-80px", duration: tl1duration, ease: "back.inOut" });
    tl1.to(".st8", { opacity: 0, y: "80px", delay: tl1delay, duration: tl1duration, ease: "back.inOut" });
    tl1.from(".st9", { opacity: 0, y: "-80px", duration: tl1duration, ease: "back.inOut" });
    tl1.to(".st9", { opacity: 0, y: "80px", delay: tl1delay, duration: tl1duration, ease: "back.inOut" });
    tl1.from(".st10", { opacity: 0, y: "-80px", duration: tl1duration, ease: "back.inOut" });
    tl1.to(".st10", { opacity: 0, y: "80px", delay: tl1delay, duration: tl1duration, ease: "back.inOut" });
    tl1.from(".st11", { opacity: 0, y: "-80px", duration: tl1duration, ease: "back.inOut" });
    tl1.to(".st11", { opacity: 0, y: "80px", delay: tl1delay, duration: tl1duration, ease: "back.inOut" });
    tl1.from(".st12", { opacity: 0, y: "-80px", duration: tl1duration, ease: "back.inOut" });
    tl1.to(".st12", { opacity: 0, y: "80px", delay: tl1delay, duration: tl1duration, ease: "back.inOut" });
    tl1.from(".st13", { opacity: 0, y: "-80px", duration: tl1duration, ease: "back.inOut" });
    tl1.to(".st13", { opacity: 0, y: "80px", delay: tl1delay, duration: tl1duration, ease: "back.inOut" });
    tl1.from(".st14", { opacity: 0, y: "-80px", duration: tl1duration, ease: "back.inOut" });
    tl1.to(".st14", { opacity: 0, y: "80px", delay: tl1delay, duration: tl1duration, ease: "back.inOut" });




    gsap.to(".arrow", { y: 5, duration: .3, repeat: -1, yoyo: true, ease: "sine.inOut" })

    gsap.to(".arrow_button", {
        y: '500%', duration: 1, ease: "expo.inOut",
        scrollTrigger: {
            trigger: ".sec3",
            start: "-120%",
            end: "=+20%",
            scrub: true,
        }
    })
    gsap.to(".arrow_button", {
        scale: 4, duration: 1, ease: "expo.inOut",
        scrollTrigger: {
            trigger: ".sec3",
            start: "-120%",
            end: "=+20%",
            scrub: true,
        }
    })


    /////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////ABOUT ME SEC3//////
    ////////////////////////////////////////////////////////////////////////////////////////////


    gsap.to(".header2", { y: 40, duration: 1, ease: "sine.inOut", repeat: -1, yoyo: true })
    gsap.to(".header2shadow", { scale: 0.7, duration: 1, ease: "sine.inOut", repeat: -1, yoyo: true })

    gsap.from(".sec3_sub1", {
        x: "-100%", duration: 1, ease: "sine.inOut",
        scrollTrigger: {
            trigger: ".sec3",
            start: "-80%",
            end: "=-10%",
            scrub: true,
        }
    })
    gsap.from(".sec3_sub2", {
        x: "100%", duration: 1, ease: "sine.inOut",
        scrollTrigger: {
            trigger: ".sec3",
            start: "-80%",
            end: "=-10%",
            scrub: true,
        }
    })

    gsap.from(".aboutme_title1", {
        x: "300%", duration: 1, ease: "sine.inOut",
        scrollTrigger: {
            trigger: ".sec3",
            start: "-100%",
            end: "=-10%",
            scrub: true,
        }
    })
    gsap.from(".title1_line", {
        x: "300%", duration: 1, ease: "sine.inOut",
        scrollTrigger: {
            trigger: ".sec3",
            start: "-100%",
            end: "=-10%",
            scrub: true,
        }
    })
    gsap.from(".aboutme_title2", {
        x: "380%", duration: 1, ease: "sine.inOut",
        scrollTrigger: {
            trigger: ".sec3",
            start: "-100%",
            end: "=-10%",
            scrub: true,
        }
    })
    gsap.from(".aboutme_title3", {
        x: "80%", duration: 1, ease: "sine.inOut",
        scrollTrigger: {
            trigger: ".sec3",
            start: "-100%",
            end: "=-10%",
            scrub: true,
        }
    })

    gsap.from(".aboutme_title4", {
        x: "20%", duration: 1, ease: "sine.inOut",
        scrollTrigger: {
            trigger: ".sec3",
            start: "-100%",
            end: "=-10%",
            scrub: true,
        }
    })


    gsap.to(".about1", { x: 0, duration: 0 })
    gsap.to(".about2", { x: "150%", duration: 0 })
    gsap.to(".about3", { x: "150%", duration: 0 })
    gsap.to(".about4", { x: "150%", duration: 0 })

    $(".learnmore1").click(function () {
        gsap.to(".about1", { x: "150%", scale: 0.5, duration: 1, ease: "sine.inOut" })
        gsap.to(".about2", { x: 0, scale: 1, duration: 1, ease: "sine.inOut" })
        gsap.to(".aboutme", { "min-height": "650px", duration: 1, ease: "sine.inOut" })
    })

    $(".back1").click(function () {
        gsap.to(".about2", { x: "150%", scale: 0.5, duration: 1, ease: "sine.inOut" })
        gsap.to(".about1", { x: 0, scale: 1, duration: 1, ease: "sine.inOut" })
        gsap.to(".aboutme", { "min-height": "450px", duration: 1, ease: "sine.inOut" })
    })

    $(".learnmore2").click(function () {
        gsap.to(".about2", { x: "150%", scale: 0.5, duration: 1, ease: "sine.inOut" })
        gsap.to(".about3", { x: 0, scale: 1, duration: 1, ease: "sine.inOut" })
    })

    $(".back2").click(function () {
        gsap.to(".about3", { x: "150%", scale: 0.5, duration: 1, ease: "sine.inOut" })
        gsap.to(".about2", { x: 0, scale: 1, duration: 1, ease: "sine.inOut" })
    })

    $(".learnmore3").click(function () {
        gsap.to(".about3", { x: "150%", scale: 0.5, duration: 1, ease: "sine.inOut" })
        gsap.to(".about4", { x: 0, scale: 1, duration: 1, ease: "sine.inOut" })
    })

    $(".back3").click(function () {
        gsap.to(".about4", { x: "150%", scale: 0.5, duration: 1, ease: "sine.inOut" })
        gsap.to(".about3", { x: 0, scale: 1, duration: 1, ease: "sine.inOut" })
    })










    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////FOLIO SEC4//////
    ////////////////////////////////////////////////////////////////////////////////////////////

    $(".btnfolio").click(function () {
        gsap.to(".transitionbox", {
            y: 0, duration: 1, ease: "power1.inOut",
            onComplete: function () {
                location.href = "folio.html";
            }
        })
    })


    gsap.from(".s4a", {
        y: "25%", duration: 4, ease: "sine.inOut",
        scrollTrigger: {
            trigger: ".sec4",
            start: "-100%",
            end: "=+100%",
            scrub: true
        }
    })
    gsap.from(".s4b", {
        y: "10%", duration: 4, ease: "sine.inOut",
        scrollTrigger: {
            trigger: ".sec4",
            start: "-100%",
            end: "=+100%",
            scrub: true
        }
    })
    gsap.from(".s4c", {
        y: "25%", duration: 4, ease: "sine.inOut",
        scrollTrigger: {
            trigger: ".sec4",
            start: "-100%",
            end: "=+100%",
            scrub: true
        }
    })
    gsap.from(".s4d", {
        y: "10%", duration: 4, ease: "sine.inOut",
        scrollTrigger: {
            trigger: ".sec4",
            start: "-100%",
            end: "=+100%",
            scrub: true
        }
    })
    gsap.from(".s4e", {
        y: "15%", duration: 4, ease: "sine.inOut",
        scrollTrigger: {
            trigger: ".sec4",
            start: "-100%",
            end: "=+100%",
            scrub: true
        }
    })

    gsap.from(".sec4overlay", {
        opacity: 0, duration: 1, ease: "sine.inOut",
        scrollTrigger: {
            trigger: ".sec4",
            start: "-50%",
            end: "=+30%",
            scrub: true
        }
    })


    /////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////SOCIAL SEC5//////
    ////////////////////////////////////////////////////////////////////////////////////////////

    gsap.from(".social", {
        x: "-100%", duration: 1, ease: "sine.inOut",
        scrollTrigger: {
            trigger: ".sec5",
            start: "-100%",
            end: "=-20%",
            scrub: true,
        }
    })
    gsap.from("#canvas3d", {
        x: "100%", duration: 1, ease: "sine.inOut",
        scrollTrigger: {
            trigger: ".sec5",
            start: "-100%",
            end: "=-20%",
            scrub: true,
        }
    })

    gsap.from(".social_title1", {
        x: "-300%", duration: 1, ease: "sine.inOut",
        scrollTrigger: {
            trigger: ".sec5",
            start: "-100%",
            end: "=-10%",
            scrub: true,
        }
    })
    gsap.from(".social_title2", {
        x: "-280%", duration: 1, ease: "sine.inOut",
        scrollTrigger: {
            trigger: ".sec5",
            start: "-100%",
            end: "=-10%",
            scrub: true,
        }
    })
    gsap.from(".social_title3", {
        x: "-50%", duration: 1, ease: "sine.inOut",
        scrollTrigger: {
            trigger: ".sec5",
            start: "-100%",
            end: "=-10%",
            scrub: true,
        }
    })




    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////NAVIGATION//////
    ////////////////////////////////////////////////////////////////////////////////////////////
    $(".btnabout").click(function () {
        gsap.to(window, { duration: 1, scrollTo: ".sec3" });
    })


    $(".btnwork").click(function () {
        var positionwork = $(".sec4").position().top + 500
        gsap.to(window, { duration: 1, scrollTo: positionwork });
    })





    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////LET'S TALK//////
    ////////////////////////////////////////////////////////////////////////////////////////////

    gsap.to("#smooth-wrapper", { x: 0, duration: 0 })
    gsap.to(".contact_container", { x: "100%", duration: 0 })

    $(".btnclose").click(function () {
        $('html').removeClass('hide-scrollbar');
        gsap.to("#smooth-wrapper", { x: 0, duration: 0.6, ease: "sine.inOut" })
        gsap.to(".contact_container", { x: "100%", duration: 0.8, ease: "sine.inOut" })
    })

    $(".btncontact").click(function () {
        $('html').addClass('hide-scrollbar');
        gsap.to("#smooth-wrapper", { x: "-100%", duration: 0.8, ease: "sine.inOut" })
        gsap.to(".contact_container", { x: 0, duration: 0.6, ease: "sine.inOut" })
        gsap.fromTo(".contact_title1", { y: -200, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5, duration: 2, ease: "elastic.out(0.5, 0.3)" })
        gsap.fromTo(".contact_title2", { y: -150, opacity: 0 }, { y: 0, opacity: 1, delay: 0.6, duration: 1, ease: "elastic.out(0.4, 0.3)" })
        gsap.fromTo(".contact_title3", { y: -50, opacity: 0 }, { y: 0, opacity: 1, delay: 0.7, duration: 1, ease: "elastic.out(0.3, 0.3)" })
        gsap.fromTo(".social_icon", { y: 100, opacity: 0 }, { y: 0, opacity: 1, delay: 0.7, duration: 2, stagger: 0.1, ease: "elastic.out(0.5, 0.3)" })
    })


    gsap.to(".contact_btn_line1", { scaleY: 2, duration: 1, ease: "sine.inOut", yoyo: true, repeat: -1 })
    gsap.to(".contact_btn_line2", { scaleY: 2, duration: 1, ease: "sine.inOut", yoyo: true, repeat: -1 })

    $(".contact_btn").hover(function () {
        gsap.to(".contact_btn", { rotate: 180, duration: 0.5, ease: "back.inOut" })
        gsap.to(".contact_btn_line1", { scaleX: 0.5, duration: 0.5, ease: "back.inOut" })
        gsap.to(".contact_btn_line2", { scaleX: 0.5, duration: 0.5, ease: "back.inOut" })
    }, function () {
        gsap.to(".contact_btn", { rotate: 0, duration: 0.5, ease: "back.inOut" })
        gsap.to(".contact_btn_line1", { scaleX: 1, duration: 0.5, ease: "back.inOut" })
        gsap.to(".contact_btn_line2", { scaleX: 1, duration: 0.5, ease: "back.inOut" })
    });






















    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////PAGE FOLIO//////
    ////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////


    gsap.from(".folio_title1", { x: -1000, opacity: 0, delay: 1.5, duration: 1, ease: "elastic.out(.8, .7)", })
    gsap.from(".folio_title2", { x: 1000, opacity: 0, delay: 1.6, duration: 1, ease: "elastic.out(.8, .7)" })
    gsap.from(".folio_filter", { y: 300, opacity: 0, delay: 1.5, stagger: 0.1, duration: 1, ease: "elastic.out(.8, .7)" })

    gsap.from(".folio_all", { y: 300, opacity: 0, delay: 1.7, duration: 1, ease: "elastic.out(.8, .7)" })
    gsap.from(".folio_all_item", { y: 400, opacity: 0, delay: 2, duration: 1, stagger: 0.05, ease: "elastic.out(.8, .7)" })

    $(".btnhome").click(function () {
        gsap.to(".transitionbox", {
            y: 0, duration: 1, ease: "power1.inOut",
            onComplete: function () {
                location.href = "index.html";
            }
        })
    })

    ///////SLIDER:

    gsap.to(".dot1", { scale: 1.2, opacity: 1, duration: 0 })
    gsap.to(".dot2", { scale: 0.8, opacity: 0.5, duration: 0 })
    gsap.to(".dot3", { scale: 0.8, opacity: 0.5, duration: 0 })
    dot_active = 1

    $(".dot1").click(function () {
        gsap.to(".slider", { x: 0, duration: 1, ease: "power1.inOut" })
        gsap.to(".dot1", { scale: 1.2, opacity: 1, duration: 0.5, ease: "sine.inOut" })
        gsap.to(".dot2", { scale: 0.8, opacity: 0.5, duration: 0.5, ease: "sine.inOut" })
        gsap.to(".dot3", { scale: 0.8, opacity: 0.5, duration: 0.5, ease: "sine.inOut" })
        dot_active = 1
    })
    $(".dot2").click(function () {
        gsap.to(".slider", { x: "-100vw", duration: 1, ease: "power1.inOut" })
        gsap.to(".dot1", { scale: 0.8, opacity: 0.5, duration: 0.5, ease: "sine.inOut" })
        gsap.to(".dot2", { scale: 1.2, opacity: 1, duration: 0.5, ease: "sine.inOut" })
        gsap.to(".dot3", { scale: 0.8, opacity: 0.5, duration: 0.5, ease: "sine.inOut" })
        dot_active = 2
    })
    $(".dot3").click(function () {
        gsap.to(".slider", { x: "-200vw", duration: 1, ease: "power1.inOut" })
        gsap.to(".dot1", { scale: 0.8, opacity: 0.5, duration: 0.5, ease: "sine.inOut" })
        gsap.to(".dot2", { scale: 0.8, opacity: 0.5, duration: 0.5, ease: "sine.inOut" })
        gsap.to(".dot3", { scale: 1.2, opacity: 1, duration: 0.5, ease: "sine.inOut" })
        dot_active = 3
    })

    $(".folio_all_image_container").hover(function () {
        image = $(this).find('img')
        gsap.to(image, { duration: 1, scale: 1.5, ease: "elastic.out(0.1,1)" });
    }, function () {
        image = $(this).find('img')
        gsap.to(image, { duration: 2, scale: 1, ease: "elastic.out(0.4,0.1)" });
    });






    gsap.to(".folio_all_image", { duration: 0, scale: 1 });


    $(".dot1").hover(function () {
        if (dot_active == 1) { }
        if (dot_active == 2) { gsap.to(".dot1", { scale: 1.2, opacity: 1, duration: 0.2, ease: "sine.inOut" }); }
        if (dot_active == 3) { gsap.to(".dot1", { scale: 1.2, opacity: 1, duration: 0.2, ease: "sine.inOut" }); }

    }, function () {
        if (dot_active == 1) { }
        if (dot_active == 2) { gsap.to(".dot1", { scale: 1, opacity: 0.5, duration: 0.2, ease: "sine.inOut" }); }
        if (dot_active == 3) { gsap.to(".dot1", { scale: 1, opacity: 0.5, duration: 0.2, ease: "sine.inOut" }); }
    });

    $(".dot2").hover(function () {
        if (dot_active == 1) { gsap.to(".dot2", { scale: 1.2, opacity: 1, duration: 0.2, ease: "sine.inOut" }); }
        if (dot_active == 2) { }
        if (dot_active == 3) { gsap.to(".dot2", { scale: 1.2, opacity: 1, duration: 0.2, ease: "sine.inOut" }); }

    }, function () {
        if (dot_active == 1) { gsap.to(".dot2", { scale: 1, opacity: 0.5, duration: 0.2, ease: "sine.inOut" }); }
        if (dot_active == 2) { }
        if (dot_active == 3) { gsap.to(".dot2", { scale: 1, opacity: 0.5, duration: 0.2, ease: "sine.inOut" }); }
    });

    $(".dot3").hover(function () {
        if (dot_active == 1) { gsap.to(".dot3", { scale: 1.2, opacity: 1, duration: 0.2, ease: "sine.inOut" }); }
        if (dot_active == 2) { gsap.to(".dot3", { scale: 1.2, opacity: 1, duration: 0.2, ease: "sine.inOut" }); }
        if (dot_active == 3) { }

    }, function () {
        if (dot_active == 1) { gsap.to(".dot3", { scale: 1, opacity: 0.5, duration: 0.2, ease: "sine.inOut" }); }
        if (dot_active == 2) { gsap.to(".dot3", { scale: 1, opacity: 0.5, duration: 0.2, ease: "sine.inOut" }); }
        if (dot_active == 3) { }
    });



    ///////FILTERS:

    $(".filter_all").click(function () {
        $(".logos,.illustrations,.websites,.games").css("display", "flex")
        ScrollTrigger.refresh();
    })

    $(".filter_logos").click(function () {
        $(".logos").css("display", "flex")
        $(".illustrations,.websites,.games").css("display", "none")
        ScrollTrigger.refresh();
    })

    $(".filter_illustrations").click(function () {
        $(".illustrations").css("display", "flex")
        $(".logos,.mascots,.websites,.games").css("display", "none")
        ScrollTrigger.refresh();
    })

    $(".filter_websites").click(function () {
        $(".websites").css("display", "flex")
        $(".logos,.illustrations,.games").css("display", "none")
        ScrollTrigger.refresh();
    })

    $(".filter_games").click(function () {
        $(".games").css("display", "flex")
        $(".logos,.illustrations,.websites").css("display", "none")
        ScrollTrigger.refresh();
    })


    ///////FIXED WINDOW:

    gsap.to(".folio_detail", { x: "-100%", duration: 0 })

    function openwindow(color1, color2, image1, image2, image3) {
        gsap.to("#smooth-wrapper", { x: "100%", duration: 0.8, ease: "sine.inOut" })
        gsap.to(".folio_detail", { x: 0, duration: 0.6, ease: "sine.inOut" })
        gsap.fromTo(".folio_image", { y: -500, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5, duration: 1, ease: "elastic.out(0.4, 0.3)" })
        gsap.fromTo(".dot1", { y: 100, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5, duration: 1, ease: "elastic.out(0.5, 0.3)" })
        gsap.fromTo(".dot2", { y: 100, opacity: 0 }, { y: 0, opacity: 0.5, delay: 0.6, duration: 1, ease: "elastic.out(0.5, 0.3)" })
        gsap.fromTo(".dot3", { y: 100, opacity: 0 }, { y: 0, opacity: 0.5, delay: 0.7, duration: 1, ease: "elastic.out(0.5, 0.3)" })

        $('html').addClass('hide-scrollbar');

        gsap.to(".slider", { x: 0, duration: 0, ease: "power1.inOut" })
        gsap.to(".dot1", { scale: 1.2, duration: 0 })
        gsap.to(".dot2", { scale: 0.8, duration: 0 })
        gsap.to(".dot3", { scale: 0.8, duration: 0 })

        $(".slider").css("background", color1)
        $(".ft1").attr("src", "")
        $(".ft2").attr("src", "")
        $(".ft3").attr("src", "")
        $(".ft1").attr("src", "img/portahome/" + image1 + ".webp")
        $(".ft2").attr("src", "img/portahome/" + image2 + ".webp")
        $(".ft3").attr("src", "img/portahome/" + image3 + ".webp")
        $(".slider_dot").css("background", color2)
    }




    function closewindow() {
        $('html').removeClass('hide-scrollbar');
        gsap.to("#smooth-wrapper", { x: 0, duration: 0.6, ease: "sine.inOut" })
        gsap.to(".folio_detail", { x: "-100%", duration: 0.8, ease: "sine.inOut" })
    }


    $(".btnclose2").click(function () {
        closewindow()
    })



    $(".p1").click(function () {
        openwindow("#000", "#4a4a4a", "p1a", "p1b", "p1c")
    })
    $(".p2").click(function () {
        openwindow("#ff6100", "#ffd100", "p2a", "p2b", "p2c")
    })
    $(".p3").click(function () {
        openwindow("#000", "#ff2d00", "p3a", "p3b", "p3c")
    })
    $(".p4").click(function () {
        openwindow("#000", "#97343b", "p4a", "p4b", "p4c")
    })
    $(".p5").click(function () {
        openwindow("#000", "#FFF", "p5a", "p5b", "p5c")
    })
    $(".p6").click(function () {
        openwindow("#470d00", "#ffa657", "p6a", "p6b", "p6c")
    })
    $(".p7").click(function () {
        openwindow("#ff2a2a", "#034742", "p7a", "p7b", "p7c")
    })
    $(".p8").click(function () {
        openwindow("#000549", "#ff5200", "p8a", "p8b", "p8c")
    })
    $(".p9").click(function () {
        openwindow("#000", "#ffae00", "p9a", "p9b", "p9c")
    })
    $(".p10").click(function () {
        openwindow("#0072ff", "#52c4ff", "p10a", "p10b", "p10c")
    })
    $(".p11").click(function () {
        openwindow("#00030b", "#fff400", "p11a", "p11b", "p11c")
    })
    $(".p12").click(function () {
        openwindow("#655f5f", "#3d0022", "p12a", "p12b", "p12c")
    })
    $(".p13").click(function () {
        openwindow("#1c0079", "#FFF", "p13a", "p13b", "p13c")
    })
    $(".p14").click(function () {
        openwindow("#ff5300", "#FFF", "p14a", "p14b", "p14c")
    })
    $(".p15").click(function () {
        openwindow("#746767", "#FFF", "p15a", "p15b", "p15c")
    })
    $(".p16").click(function () {
        openwindow("#300d00", "#ffb875", "p16a", "p16b", "p16c")
    })
    $(".p17").click(function () {
        openwindow("#000000", "#9ea000", "p17a", "p17b", "p17c")
    })
    $(".p18").click(function () {
        openwindow("#000047", "#0052bc", "p18a", "p18b", "p18c")
    })
    $(".p19").click(function () {
        openwindow("#000116", "#00e7ff", "p19a", "p19b", "p19c")
    })
    $(".p20").click(function () {
        openwindow("#3d263b", "#ffbd00", "p20a", "p20b", "p20c")
    })

    $(".p21").click(function () {
        openwindow("#8e1f04", "#ffe093", "p21a", "p21b", "p21c")
    })
    $(".p22").click(function () {
        openwindow("#ff1a1b", "#e2ffb2", "p22a", "p22b", "p22c")
    })
    $(".p23").click(function () {
        openwindow("#001c7d", "#ff9d00", "p23a", "p23b", "p23c")
    })
    $(".p24").click(function () {
        openwindow("#0057e5", "#FFF", "p24a", "p24b", "p24c")
    })


    $(".p25").click(function () {
        openwindow("#0a004a", "#c200c6", "p25a", "p25b", "p25c")
    })
    $(".p26").click(function () {
        openwindow("#001016", "#bd4524", "p26a", "p26b", "p26c")
    })
    $(".p27").click(function () {
        openwindow("#361205", "#f01e0f", "p27a", "p27b", "p27c")
    })
    $(".p28").click(function () {
        openwindow("#00132f", "#00ffc6", "p28a", "p28b", "p28c")
    })

    $(".p29").click(function () {
        openwindow("#45001a", "#ffe9e9", "p29a", "p29b", "p29c")
    })
    $(".p30").click(function () {
        openwindow("#0068ff", "#48daff", "p30a", "p30b", "p30c")
    })
    $(".p31").click(function () {
        openwindow("#000767", "#ffcf37", "p31a", "p31b", "p31c")
    })
    $(".p32").click(function () {
        openwindow("#000", "#FFA800", "p32a", "p32b", "p32c")
    })

    $(".p33").click(function () {
        openwindow("#000214", "#8ea7ae", "p33a", "p33b", "p33c")
    })
    $(".p34").click(function () {
        openwindow("#440000", "#FFF", "p34a", "p34b", "p34c")
    })
    $(".p35").click(function () {
        openwindow("#530004", "#fc5f2c", "p35a", "p35b", "p35c")
    })
    $(".p36").click(function () {
        openwindow("#ff0246", "#FFF", "p36a", "p36b", "p36c")
    })

    $(".p37").click(function () {
        openwindow("#000226", "#FFF", "p37a", "p37b", "p37c")
    })
    $(".p38").click(function () {
        openwindow("#410300", "#fdf9a8", "p38a", "p38b", "p38c")
    })
    $(".p39").click(function () {
        openwindow("#000", "#FF7A00", "p39a", "p39b", "p39c")
    })
    $(".p40").click(function () {
        openwindow("#1b0067", "#ffcd2e", "p40a", "p40b", "p40c")
    })
    $(".p41").click(function () {
        openwindow("#0c1020", "#FF5F00", "p41a", "p41b", "p41c")
    })
    $(".p42").click(function () {
        openwindow("#2c0083", "#ffcf9b", "p42a", "p42b", "p42c")
    })
    $(".p43").click(function () {
        openwindow("#160035", "#ffa10d", "p43a", "p43b", "p43c")
    })
    $(".p44").click(function () {
        openwindow("#03011e", "#a9170b", "p44a", "p44b", "p44c")
    })



























































})