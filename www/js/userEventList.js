let url = new URL(location.href);
let userId = url.searchParams.get("userId");

$(document).ready(function () {
    $('#back-btn').on('click', function (e) {
        e.preventDefault();
        window.location.replace("list-view.html?userId="+ userId);
    });
});
