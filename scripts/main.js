$(window).ready(function(){causeRepaintsOn=$(".user-activity-action"),$(window).resize(function(){causeRepaintsOn.css("z-index",1)});var t=$('a[data-toggle="tab"]').parents(".active").length,e=!1,i=function(){$('a[data-toggle="tab"]').parent().removeClass("active"),$(".tab-pane.active").removeClass("active"),t=!1};$("[data-toggle=tab]").click(function(){$(this).parent().hasClass("active")?($($(this).attr("href")).toggleClass("active"),t=!1):(e=!0,t=this)}),$(document).on("click.bs.tab.data-api",function(a){!t||e||$(a.target).closest(".tab-pane.active").length||i(),e=!1}),$(".circle-btn").on("click",function(){$parent_box=$(this).closest(".stats-box"),$parent_box.siblings().find(".stats-content").slideUp(),$parent_box.find(".stats-content").slideToggle(500,"swing")}),$(".circle-gallery-btn").on("click",function(){$parent_box=$(this).closest(".gallery-box"),$parent_box.siblings().find(".gallery-content").slideUp(),$parent_box.find(".gallery-content").slideToggle(500,"swing"),$(".resize-btn").css({position:"absolute",left:"50%",top:"50%","margin-left":function(){return-$(this).outerWidth()/2},"margin-top":function(){return-$(this).outerHeight()/2}})}),$(".circle-btn").on("click",function(t){$(".divider.animated").toggleClass("rotateOut"),$(".divider").hasClass("rotateOut")?$(".divider.animated").addClass("rotateIn"):$(".divider.animated").removeClass("rollOut")}),$(".circle-gallery-btn").on("click",function(t){$(".img-circle.animated").toggleClass("rotateOut"),$(".resize-btn").css("opacity","0"),$(".img-circle").hasClass("rotateOut")?($(".img-circle.animated").addClass("rotateIn"),$(".resize-btn").css("opacity","0"),setTimeout(function(){$(".gallery-box-item a").css("display","none")},700)):($(".img-circle.animated").removeClass("rotateOut"),$(".gallery-box-item a").css("display","block"),$(".resize-btn").css({position:"absolute",left:"50%",top:"50%","margin-left":function(){return-$(this).outerWidth()/2},"margin-top":function(){return-$(this).outerHeight()/2}}),$(".resize-btn").css("opacity","1"))});var a=$(".text-letter-by-letter span").width();$(".text-letter-by-letter").animate({width:a},2500),$("input").val(),tinymce.init({selector:"#text-editor",height:300,theme:"modern",plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar1:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",image_advtab:!0,templates:[{title:"Test template 1",content:"Test 1"},{title:"Test template 2",content:"Test 2"}],content_css:["//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css","//www.tinymce.com/css/codepen.min.css"]}),$(".rating").likeDislike({reverseMode:!0,disabledClass:"disable",click:function(t,e,i){var a=$(this).find(".likes"),n=$(this).find(".dislikes");1===t?a.text("1"):a.text("0"),-1===t?n.text("1"):n.text("0")}}),$(".rating-1").likeDislike({reverseMode:!0,disabledClass:"disable",click:function(t,e,i){var a=$(this).find(".likes_1"),n=$(this).find(".dislikes_1");1===t?a.text("1"):a.text("0"),-1===t?n.text("1"):n.text("0")}}),$(".dropdown-toggle").dropdown(),$(window).scroll(function(){$(this).scrollTop()>100?$(".scrollup").fadeIn():$(".scrollup").fadeOut()}),$(".scrollup").click(function(){return $("html, body").animate({scrollTop:0},600),!1}),$(".resize-btn").css({position:"absolute",left:"50%",top:"50%","margin-left":function(){return-$(this).outerWidth()/2},"margin-top":function(){return-$(this).outerHeight()/2}}),$('[data-toggle="tooltip"]').tooltip(),$("[data-toggle=popover]").popover({html:!0,content:function(){var t=$(this).attr("data-popover-content");return $(t).children(".popover-body").html()}}),$("body").on("click",function(t){$('[data-toggle="popover"]').each(function(){$(this).is(t.target)||0!==$(this).has(t.target).length||0!==$(".popover").has(t.target).length||$(this).popover("hide")})});var n={1:"MAR 21 - MAR 27",2:"MAR 14 - MAR 20",3:"MAR 07 - MAR 13",4:"MAR 14 - MAR 21"},r={1:"FEB 21 - FEB 21",2:"APR 14 - MAY 14",3:"JUN 07 - JUL 07",4:"SEP 14 - OCT 14"},o={1:"MAR 21 - MAR 21",2:"APR 16 - APR 16",3:"JUN 10 - JUN 10",4:"SEP 28 - SEP 28"};$("#sort-by-period select").change(function(){var t="";$("#sort-by-period select option:selected").each(function(){t+=$(this).text(),"Week"==t?($("#sort-by-date select").find("option").remove(),$.each(n,function(t,e){$("#sort-by-date select").append("<option value="+t+">"+e+"</option>")})):"Month"==t?($("#sort-by-date select").find("option").remove(),$.each(r,function(t,e){$("#sort-by-date select").append("<option value="+t+">"+e+"</option>")})):($("#sort-by-date select").find("option").remove(),$.each(o,function(t,e){$("#sort-by-date select").append("<option value="+t+">"+e+"</option>")}))})}),rivets.formatters.chosen=function(t,e){return $(e).val(t).trigger("liszt:updated"),t},window.view=rivets.bind($("#contentWrap-country"),{truck:{id:1,country_id:1},country:[{id:1,country_number:"Select country..."},{id:2,country_number:"2"},{id:3,country_number:"3"},{id:4,country_number:"4"}]}),window.view=rivets.bind($("#sort-by"),{truck:{id:1,topic_id:1},topic:[{id:1,topic_number:"Newest"},{id:2,topic_number:"Oldest"},{id:3,topic_number:"Favorite"},{id:4,topic_number:"Popular"}]}),window.view=rivets.bind($("#gallery-sort"),{truck:{id:1,sort_id:1},sort:[{id:1,gallery_number:"Latest"},{id:2,gallery_number:"Most Popular"},{id:3,gallery_number:"Most Discussed"},{id:4,gallery_number:"Printed"},{id:5,gallery_number:"Oldest"}]})}),$("#star-1, #star-2, #star-3, #star-4, #star-5, #star-6, #star-7, #star-8, #star-9, #star-10").click(function(){var t=$(this),e=t.attr("src"),i=t.attr("data-swap");t.attr("src",i).attr("data-swap",e)}),$(".carousel").carousel({interval:!1}),$("#labels2-3.demo input").switchButton({labels_placement:"left",on_label:"Public",off_label:"Private",width:70,height:30,button_width:35}),$(".pagination-wrap").bootpag({total:23,page:1,maxVisible:5,next:"Next Page",prev:"Previous"}).on("page",function(t,e){$(".content2").html("Page "+e)}),function(t,e,i){var a={};a.UTIL={setupFormValidation:function(){t("#register-form").validate({rules:{displayname:"required",username:"required",firstname:"required",lastname:"required",email:{required:!0,email:!0},confirmemail:{required:!0,email:!0},password:{required:!0,minlength:5},confirmpassword:{required:!0,minlength:5},dateofbirth:"required",agree:"required"},messages:{displayname:"Please enter your display name",username:"Please enter your username",firstname:"Please enter your firstname",lastname:"Please enter your lastname",dateofbirth:"Please enter your date of birth",password:{required:"Please provide a password",minlength:"Your password must be at least 5 characters long"},confirmpassword:{required:"Wrong password",minlength:"Your password must be at least 5 characters long"},email:"Please enter a valid email address",confirmemail:"Wrong email address",agree:"Please accept our policy"},submitHandler:function(t){t.submit()}})}},t(i).ready(function(t){a.UTIL.setupFormValidation()})}(jQuery,window,document);