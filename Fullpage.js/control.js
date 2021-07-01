document.addEventListener("DOMContentLoaded", function(event) { 
    // fill_template();

    new fullpage("#fullpage", {
        licenseKey: 'YOUR KEY HERE',
        navigation: true,
        autoScrolling: true,
        scrollHorizontally: true,
        fixedElements: '#header',
    })
});
function fill_template() {
    var data = {
        lang: {
            en: "English",
            vi: "Tiếng Việt",
        },
        en: {
            text_1: "Section 1",
            text_2: "Section 2",
            text_3: "Section 3",
            text_4: "Section 4",
            text_5: "Section 5",
        },
        vi: {
            text_1: "Khoi' 1",
            text_2: "Khoi' 2",
            text_3: "Khoi' 3",
            text_4: "Khoi' 4",
            text_5: "Khoi' 5",
        }
    }
    var template = Handlebars.compile(document.querySelector("#template").innerHTML);
    var filled = template(data);
    document.querySelector("#output").innerHTML = filled;

    $('[lang="vi"]').hide();
    $('#switch-lang').click(function () {
        $('[lang="vi"]').toggle();
        $('[lang="en"]').toggle();
    });
}