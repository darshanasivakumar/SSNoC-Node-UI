

function checkStatus(status) {
    var result = window.confirm("Confirm set status to " + status +"?");
    if (result==true)
    {
        alert("You status has been set to " +status +".");
    }
}

