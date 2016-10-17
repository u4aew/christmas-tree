$(document).ready(function () {
    function HeightHeader() {
        Header = $(".js-header");
        heightHeader = $(".js-header").height();
        $(".js-header-wrapper").height(heightHeader);
    };
    HeightHeader();
    function FixedHeder() {
        HeightHeader();
        if ($(window).scrollTop() > heightHeader) {
            Header.addClass('js-header-fixed');
        }
        else {
            Header.removeClass('js-header-fixed');
        }
    };
    $(window).scroll(function () {
        FixedHeder()
    });
    $(window).resize(function () {
        FixedHeder()
    });
    $(".fancybox").fancybox();
    $("#formOrder").submit(function () {
        $.ajax({
            type: "POST",
            url: "/mail.php",
            data: $(this).serialize()
        }).done(function () {
            $("#formOrder").trigger('reset');
            $("#myModalBox").attr("data-needSuccess", true).modal("hide");
            $('#successBox').modal('show');
            setTimeout(function () {
                $('#successBox').modal('hide');
            }, 3000);
        });
        return false;
    })
});