$(document).ready(() => {
    console.log('ready');
    $('#navbar_wraper').load("/Components/navbar.html");    
    $('.footer_wraper').load('/components/footer.html');
    alert( "Load was performed." );
});