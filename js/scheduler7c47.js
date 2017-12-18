$(function () {
    $(".trackglobal .session_row").toggle(
        function () {
            $(this).css("background-image", "url('image/GWAB/appbar.chevron.up.blue.png')");
        },
        function () {
            $(this).css("background-image", "url('image/GWAB/appbar.chevron.down.blue.png')");
        }
    );

    $(".trackdev .session_row").toggle(
        function () {
            $(this).css("background-image", "url('image/GWAB/appbar.chevron.up.png')");
        },
        function () {
            $(this).css("background-image", "url('image/GWAB/appbar.chevron.down.png')");
        }
    );

    $(".trackit .session_row").toggle(
        function () {
            $(this).css("background-image", "url('image/GWAB/appbar.chevron.up.png')");
        },
        function () {
            $(this).css("background-image", "url('image/GWAB/appbar.chevron.down.png')");
        }
    );

    $(".trackoss .session_row").toggle(
        function () {
            $(this).css("background-image", "url('image/GWAB/appbar.chevron.up.png')");
        },
        function () {
            $(this).css("background-image", "url('image/GWAB/appbar.chevron.down.png')");
        }
    );


    $(".trackglobal .session_row").each(function () {
        $(this).click(function () {
            $("#" + $(this).data("target")).toggle("fast");
        });
    });

    $(".trackdev .session_row").each(function () {
        $(this).click(function () {
            $("#" + $(this).data("target")).toggle("fast");
        });        
    });

    $(".trackit .session_row").each(function () {
        $(this).click(function () {
            $("#" + $(this).data("target")).toggle("fast");
        });
    });

    $(".trackoss .session_row").each(function () {
        $(this).click(function () {
            $("#" + $(this).data("target")).toggle("fast");
        });
    });

});