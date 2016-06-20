$(window).ready(function () {
  
  //show text letter by letter
  var spanWidth = $('.text-letter-by-letter span').width();
    $('.text-letter-by-letter').animate( { width: spanWidth }, 2500 );
   
   //Tag input
  $('input').val();

  //text editor
   tinymce.init({
    selector: '#text-editor',
    height: 300,
    theme: 'modern',
    plugins: [
      'advlist autolink lists link image charmap print preview hr anchor pagebreak',
      'searchreplace wordcount visualblocks visualchars code fullscreen',
      'insertdatetime media nonbreaking save table contextmenu directionality',
      'emoticons template paste textcolor colorpicker textpattern imagetools'
    ],
    toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
    // toolbar2: 'print preview media | forecolor backcolor emoticons',
    image_advtab: true,
    templates: [
      { title: 'Test template 1', content: 'Test 1' },
      { title: 'Test template 2', content: 'Test 2' }
    ],
    content_css: [
      'http://fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
      'http://www.tinymce.com/css/codepen.min.css'
    ]
   });
  //like Dislike buttons

  // $('#rating').likeDislike({
  //   reverseMode: true,
  //   initialValue: 0,
  //   click: function(value, btnType, event) {
  //     var self = this;

      // locks the buttons
      // self.readOnly(true);

      // $.ajax({ // sending data to the server
      //   url: '/url',
      //   type: 'post',
      //   data: 'id=1&value=' + value,
      //   dataType: 'json',
      //   success: function (data) {
      //     $(self).find('.likes').text(data.likes);
      //     $(self).find('.dislikes').text(data.dislikes);

          // unlocks the buttons
  //         self.readOnly(false);
  //       }
  //     });
  //   }
  // });
  $('.rating').likeDislike({
     reverseMode: true,
      disabledClass: 'disable',
      click: function (value, btnType, event) {
          var likes = $(this).find('.likes');
          var dislikes = $(this).find('.dislikes');
          value === 1 ? likes.text('1') : likes.text('0');
          value === -1 ? dislikes.text('1') : dislikes.text('0');      }
  });
  $('.rating-1').likeDislike({
     reverseMode: true,
      disabledClass: 'disable',
      click: function (value, btnType, event) {
          var likes = $(this).find('.likes_1');
          var dislikes = $(this).find('.dislikes_1');
          value === 1 ? likes.text('1') : likes.text('0');
          value === -1 ? dislikes.text('1') : dislikes.text('0');      }
  });
  //End like Dislike buttons


//dropdown
$('.dropdown-toggle').dropdown();

//sctroll up
$(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    
//resize
  $('.resize-btn').css({
    'position' : 'absolute',
    'left' : '50%',
    'top' : '50%',
    'margin-left' : function() {return -$(this).outerWidth()/2},
    'margin-top' : function() {return -$(this).outerHeight()/2}
  });

  
//Tooltip
$('[data-toggle="tooltip"]').tooltip();

//Popover
  $('[data-toggle=popover]').popover({
      html : true,
      content: function() {
        var content = $(this).attr('data-popover-content');
        return $(content).children('.popover-body').html();
      },
  });
  $('body').on('click', function (e) {
    $('[data-toggle="popover"]').each(function () {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons within a button that triggers a popup
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
  });
  //Select
  var weeklyPeriod={
     '1':'MAR 21 - MAR 27',
     '2':'MAR 14 - MAR 20',
     '3':'MAR 07 - MAR 13',
     '4':'MAR 14 - MAR 21'
   };
   var monthlyPeriod={
     '1':'FEB 21 - FEB 21',
     '2':'APR 14 - MAY 14',
     '3':'JUN 07 - JUL 07',
     '4':'SEP 14 - OCT 14'
   };
   var yearPeriod={
     '1':'MAR 21 - MAR 21',
     '2':'APR 16 - APR 16',
     '3':'JUN 10 - JUN 10',
     '4':'SEP 28 - SEP 28'
   };
  $( '#sort-by-period select' )
  .change(function () {
    var str = '';
    $( '#sort-by-period select option:selected' ).each(function() {
      str += $( this ).text();
      if(str=='Week') {
        $( '#sort-by-date select' ).find('option').remove();
        $.each(weeklyPeriod,function(key, value)
        {
          $( '#sort-by-date select' ).append('<option value=' + key + '>' + value + '</option>');
        });
      }
      else if(str=='Month') {
        $( '#sort-by-date select' ).find('option').remove();
        $.each(monthlyPeriod,function(key, value)
        {
          $( '#sort-by-date select' ).append('<option value=' + key + '>' + value + '</option>');
        });
      }
      else {
        $( '#sort-by-date select' ).find('option').remove();
        $.each(yearPeriod,function(key, value)
        {
          $( '#sort-by-date select' ).append('<option value=' + key + '>' + value + '</option>');
        });
      }
    });
  });

   rivets.formatters.chosen = function(value,selector) {
    $(selector).val(value).trigger('liszt:updated');
    return value;
  };
  window.view = rivets.bind($('#contentWrap-country'),{
    truck:{id:1,country_id:1},
    country:[
      {id:1,country_number:'Select country...'},
      {id:2,country_number:'2'},
      {id:3,country_number:'3'},
      {id:4,country_number:'4'},
    ]
  });

  window.view = rivets.bind($('#sort-by'),{
    truck:{id:1,topic_id:1},
    topic:[
        {id:1,topic_number:'Newest'},
        {id:2,topic_number:'Oldest'},
        {id:3,topic_number:'Favorite'},
        {id:4,topic_number:'Popular'},
      ]
    });

    window.view = rivets.bind($('#gallery-sort'),{
    truck:{id:1,sort_id:1},
    sort:[
        {id:1,gallery_number:'Latest'},
        {id:2,gallery_number:'Most Popular'},
        {id:3,gallery_number:'Most Discussed'},
        {id:4,gallery_number:'Printed'},
        {id:5,gallery_number:'Oldest'},
      ]
    });
  });

  //Rating topic on click
  $('#star-1, #star-2, #star-3, #star-4, #star-5, #star-6, #star-7, #star-8, #star-9, #star-10').click(function() {
        var _this = $(this);
        var current = _this.attr('src');
        var swap = _this.attr('data-swap');
       _this.attr('src', swap).attr('data-swap',current);
  });
  // Carousel
  $('.carousel').carousel({
    // pause: true,
    interval: false
  });
  
  // gMap
  $('#map').gMap();

  // Swith Button
  $('#labels2-3.demo input').switchButton({
    labels_placement: 'left',
    on_label: 'Public',
    off_label: 'Private',
    width: 70,
    height: 30,
    button_width: 35,
  });
  //Pagination
  $('.pagination-wrap').bootpag({
   total: 23,
   page: 1,
   maxVisible: 5,
   next: 'Next Page',
   prev: 'previous',
}).on('page', function(event, num){
    $('.content2').html('Page ' + num); // or some ajax content loading...
});

//form validation
(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $('#register-form').validate({
                rules: {
                    displayname: 'required',
                    username: 'required',
                    firstname: 'required',
                    lastname: 'required',
                    email: {
                        required: true,
                        email: true
                    },
                    confirmemail: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        minlength: 5
                    },
                    confirmpassword: {
                        required: true,
                        minlength: 5
                    },
                    dateofbirth: 'required',
                    agree: 'required'
                },
                messages: {
                    displayname: 'Please enter your display name',
                    username: 'Please enter your username',
                    firstname: 'Please enter your firstname',
                    lastname: 'Please enter your lastname',
                    dateofbirth: 'Please enter your date of birth',
                    password: {
                        required: 'Please provide a password',
                        minlength: 'Your password must be at least 5 characters long'
                    },
                    confirmpassword: {
                        required: 'Wrong password',
                        minlength: 'Your password must be at least 5 characters long'
                    },
                    email: 'Please enter a valid email address',
                    confirmemail: 'Wrong email address',
                    agree: 'Please accept our policy'
                },
                submitHandler: function(form) {
                    form.submit();
                }
            });
        }
    };

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);