$(window).ready(function(){$('[data-toggle="tooltip"]').tooltip(),$("[data-toggle=popover]").popover({html:!0,content:function(){var e=$(this).attr("data-popover-content");return $(e).children(".popover-body").html()}});var e={1:"MAR 21 - MAR 27",2:"MAR 14 - MAR 20",3:"MAR 07 - MAR 13",4:"MAR 14 - MAR 21"},t={1:"FEB 21 - FEB 21",2:"APR 14 - MAY 14",3:"JUN 07 - JUL 07",4:"SEP 14 - OCT 14"},r={1:"MAR 21 - MAR 21",2:"APR 16 - APR 16",3:"JUN 10 - JUN 10",4:"SEP 28 - SEP 28"};$("#sort-by-period select").change(function(){var o="";$("#sort-by-period select option:selected").each(function(){o+=$(this).text(),"Week"==o?($("#sort-by-date select").find("option").remove(),$.each(e,function(e,t){$("#sort-by-date select").append("<option value="+e+">"+t+"</option>")})):"Month"==o?($("#sort-by-date select").find("option").remove(),$.each(t,function(e,t){$("#sort-by-date select").append("<option value="+e+">"+t+"</option>")})):($("#sort-by-date select").find("option").remove(),$.each(r,function(e,t){$("#sort-by-date select").append("<option value="+e+">"+t+"</option>")}))})}),$(".pagination-wrap").bootpag({total:23,page:3,maxVisible:7}).on("page",function(e,t){$(".content2").html("Page "+t)}),$("#star-1, #star-2, #star-3, #star-4, #star-5, #star-6, #star-7, #star-8, #star-9, #star-10").click(function(){var e=$(this),t=e.attr("src"),r=e.attr("data-swap");e.attr("src",r).attr("data-swap",t)}),$(".carousel").carousel({interval:!1}),$("#map").gMap(),$("#labels2-3.demo input").switchButton({labels_placement:"left",on_label:"Public",off_label:"Private",width:70,height:30,button_width:35}),$(document).on("change",":file",function(){var e=$(this),t=e.get(0).files?e.get(0).files.length:1,r=e.val().replace(/\\/g,"/").replace(/.*\//,"");e.trigger("fileselect",[t,r])}),$(document).ready(function(){$(":file").on("fileselect",function(e,t,r){var o=$(this).parents(".input-group").find(":text"),i=t>1?t+" files selected":r;o.length?o.val(i):i&&alert(i)})}),rivets.formatters.chosen=function(e,t){return $(t).val(e).trigger("liszt:updated"),e},window.view=rivets.bind($("#contentWrap-country"),{truck:{id:1,country_id:1},country:[{id:1,country_number:"Select country..."},{id:2,country_number:"2"},{id:3,country_number:"3"},{id:4,country_number:"4"}]}),window.view=rivets.bind($("#sort-by"),{truck:{id:1,topic_id:1},topic:[{id:1,topic_number:"Newest"},{id:2,topic_number:"Oldest"},{id:3,topic_number:"Favorite"},{id:4,topic_number:"Popular"}]})}),$(document).on("ready",function(){$(".responsive").slick({dots:!0,infinite:!1,speed:300,slidesToShow:6,slidesToScroll:6,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})}),function(e,t,r){var o={};o.UTIL={setupFormValidation:function(){e("#register-form").validate({rules:{displayname:"required",username:"required",firstname:"required",lastname:"required",email:{required:!0,email:!0},confirmemail:{required:!0,email:!0},password:{required:!0,minlength:5},confirmpassword:{required:!0,minlength:5},dateofbirth:"required",agree:"required"},messages:{displayname:"Please enter your display name",username:"Please enter your username",firstname:"Please enter your firstname",lastname:"Please enter your lastname",dateofbirth:"Please enter your date of birth",password:{required:"Please provide a password",minlength:"Your password must be at least 5 characters long"},confirmpassword:{required:"Wrong password",minlength:"Your password must be at least 5 characters long"},email:"Please enter a valid email address",confirmemail:"Wrong email address",agree:"Please accept our policy"},submitHandler:function(e){e.submit()}})}},e(r).ready(function(e){o.UTIL.setupFormValidation()})}(jQuery,window,document);