const animTimingSideBar = 900;
const animTimeAccordion = 700;
const targetDate = new Date("8-oct-2024");

$(document).ready(function(){
    $('.side-menu-btn').on('click', function(){
        $('.side-menu').animate({'width': "250px"},animTimingSideBar);
        $('.content').animate({'left': "250px"},animTimingSideBar);
    });

    $('.side-menu-close-btn').on('click', function(){
        $('.side-menu').animate({'width': "0px"},animTimingSideBar);
        $('.content').animate({'left': "0px"},animTimingSideBar);
    });

    //initial setting
    $('.accord-head:not(.active)+.accord-body').slideUp(0);

    $('.accord-head').on('click', function(e){
        $('.accord-body').slideUp(animTimeAccordion);

        if ($(e.target).hasClass('active')){
            $(e.target).removeClass('active');
        }else{
            $(e.target).addClass('active').siblings('.accord-head').removeClass('active');
            $(e.target).next('.accord-body').slideDown(animTimeAccordion);
        }
    });

    $('textarea').on('input', function(e){
        const maxChars = $(e.target).attr("maxlength");
        const typedChars = $(e.target).val().length;
        $('#remaingCharCntr').text(`${maxChars - typedChars}`);
    })

    setInterval(function(){
        let diff = new Date(targetDate - new Date());

        $('#dayCntr').text(`${Math.round(diff/1000/60/60/24)} D`);
        $('#hrsCntr').text(`${diff.getHours()} h`);
        $('#minCntr').text(`${diff.getMinutes()} m`);
        $('#secCntr').text(`${diff.getSeconds()} s`);
        
    },1000);
})

