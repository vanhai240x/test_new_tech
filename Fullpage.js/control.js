document.addEventListener("DOMContentLoaded", function(event) {
    fill_template();
    var tl = gsap.timeline({ default: { duration: .5 } });
    tl.from(".first-slide h2", { y: -150, opacity: 0, duration: 1.5 })
        .from("#header h1", { y: -50, opacity: 0, duration: .5 }, "-=1.5")
        .from(".first-slide img", { y: -150, opacity: 0, duration: 1.5 }, "-=2")
        .from(".first-slide p", { y: -150, opacity: 0, duration: 1.5 }, "-=1.5")

    new fullpage("#output", {
        licenseKey: 'YOUR KEY HERE',
        // navigation: true,
        autoScrolling: true,
        scrollHorizontally: true,
        fixedElements: '#header, #scroll',
        onLeave: (origin, desctination, direction) => {
            tl.from(".container h2", { y: -150, opacity: 0, duration: 1.5 })
                .from(".container img", { y: -100, opacity: 0, duration: 1 }, "-=1.5")
                .from(".container p", { y: 60, opacity: 0, duration: .7 }, "-=1.5")
        },
    })
});

function fill_template() {
    var data = {
        lang: {
            en: "English",
            vi: "Tiếng Việt",
        },
        en: {
            author: "Tran Van Hai",
            who_im_i: "Who am I?",
            intro_1: "I am a front-end developer.",
            intro_2: "I come from Gia Lai, 23 years old.",
            intro_3: "Now I'm working for Rionlab in Danang city.",
            adv_skill: "Advanced skill",
            skill_1: "HTML (Pub, Slim).",
            skill_2: "CSS, SCSS, Bootstrap, UiKit, Materialize css,...",
            skill_3: "Vanila js, JQuery, Angular+.",
            skill_4: "Git, Xd, Photoshop,...",
            history: "Work history",
            history_1_t: "4/2019 – 5/2020",
            history_1_p_1: "In Rionlab",
            history_1_p_2: "Front end developer",
            history_2_t: "6/2020 – 1/2021",
            history_2_p_1: "In Home",
            history_2_p_2: "Freelancer",
            history_3_t: "2/2021 - Now",
            history_3_p_1: "In Rionlab",
            history_3_p_2: "Front end developer",
            hobbit: "My hobbits",
            hobbit_1: "Playing video game like",
            hobbit_2: "Listening to music",
            hobbit_3: "Backpacking, camping",
            hobbit_4: "Reading books",
            kit: "Keep in touch",
        },
        vi: {
            author: "Trần Văn Hải",
            who_im_i: "Đôi chút về tôi",
            intro_1: "Mình là 1 lập trình viên Front-ent",
            intro_2: "Đến từ Gia Lai và đang 23 tuổi",
            intro_3: "Hiện đang làm việc tại Rionlab, ở Đà Nẵng",
            adv_skill: "Kỹ năng chuyên môn",
            skill_1: "HTML (Pub, Slim).",
            skill_2: "CSS, SCSS, Bootstrap, UiKit, Materialize css,...",
            skill_3: "Vanila js, JQuery, Angular+.",
            skill_4: "Git, Xd, Photoshop,...",
            history: "Lịch sử làm việc",
            history_1_t: "4/2019 – 5/2020",
            history_1_p_1: "Làm cho Rionlab",
            history_1_p_2: "Lập trình viên Front-end",
            history_2_t: "6/2020 – 1/2021",
            history_2_p_1: "Làm việc tại nhà",
            history_2_p_2: "Lập trình viên tự do",
            history_3_t: "2/2021 - Nay",
            history_3_p_1: "Làm cho Rionlab",
            history_3_p_2: "Lập trình viên Front-end",
            hobbit: "Sở thích cá nhân",
            hobbit_1: "Chơi game",
            hobbit_2: "Nghe nhạc",
            hobbit_3: "Đi phượt, cắm trại",
            hobbit_4: "Đọc sách",
            kit: "Liên hệ với mình qua",
        }
    }
    var template = Handlebars.compile(document.querySelector("#template").innerHTML);
    var filled = template(data);
    document.querySelector("#output").innerHTML = filled;

    $('[lang="vi"]').hide();
    let lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "en";
    if (lang === "vi") {
        $('[lang="vi"]').toggle();
        $('[lang="en"]').toggle();
    }
    $('#switch-lang').click(function() {
        $('[lang="vi"]').toggle();
        $('[lang="en"]').toggle();
        console.log(lang);
        lang === "en" ? localStorage.setItem("lang", "vi") : localStorage.setItem("lang", "en");
    });
}