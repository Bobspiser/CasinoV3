function previewFile() {
    var preview = document.getElementById('profile-image1');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}
$(function () {
    $('#profile-image1').on('click', function () {
        $('#profile-image-upload').click();
    });
});


function tabs1()
{
    document.getElementById("Information").style.display = "block";
    document.getElementById("Security").style.display = "none";
    document.getElementById("History").style.display = "none";
    document.getElementById("Activity").style.display = "none";
}

function tabs2() {
    document.getElementById("Information").style.display = "none";
    document.getElementById("Security").style.display = "block";
    document.getElementById("History").style.display = "none";
    document.getElementById("Activity").style.display = "none";
}

function tabs3() {
    document.getElementById("Information").style.display = "none";
    document.getElementById("Security").style.display = "none";
    document.getElementById("History").style.display = "block";
    document.getElementById("Activity").style.display = "none";
}

function tabs4() {
    document.getElementById("Information").style.display = "none";
    document.getElementById("Security").style.display = "none";
    document.getElementById("History").style.display = "none";
    document.getElementById("Activity").style.display = "block";
}