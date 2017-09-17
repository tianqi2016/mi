$(function () {
//         鼠标移入移出

var timer=null;
$('#gouwu').mouseover(function () {
    $('#x-shop').show();
})
$('#x-shop').mouseleave(function (){
    timer=setTimeout(function () {
        $('#x-shop').hide();
    },500);
});
    //选项卡
 var $left=$('#ul2').find('li');
 var $right=$('#float-right').find('li');
  $left.mouseenter(function () {
     $right.hide();
     $right.eq($(this).index()).show();
     $('#float-right').show();
     })
     $('#float-right').mouseleave(function () {
     $right.hide();
     $right.eq($(this).index()).hide();
     $('#float-right').hide();
     })
    $('#float-div').mouseleave(function () {
        $('#float-right').hide();
    })
    
   
//家电选项卡
    var $jiadian=$('#house-tvv').find('li');
    var $phone=$('#xsw').children('ul');
    $jiadian.mouseover(function () {
        $phone.hide();
        $phone.eq($(this).index()).show();
        $('#xsw').show();
    })
    var $zhineng=$('#house-tvv1').find('li');
    var $phone1=$('#xsw1').children('ul');
    $zhineng.mouseover(function () {
        $phone1.hide();
        $phone1.eq($(this).index()).show();
        $('#xsw1').show();
    })


    /* $('[data-toggle=hover]').on('mouseenter mouseleave',function () {
         $(this).parent().toggleClass('open');
     })*/
//      加法、减法 总量计算
$(".plus").click(function () {
    var tatol=$(this).siblings('span');
    tatol.text(parseInt(tatol.text())+1);

    var totalNum = parseInt($(".totalNum").text());
    totalNum++;
    $('.totalNum').text(totalNum);

    var goodprice=parseInt($(this).parent().parent().find('.price').text())
    $('.tatol-price').text(parseInt($('.tatol-price').text())+goodprice);
})

$(".reduce").click(function () {
    var total=$(this).siblings('span');
    if(total.text()>0){
        total.text(parseInt(total.text())-1);

        var totalNum=parseInt($('.totalNum').text());
        totalNum--;
        $('.totalNum').text(totalNum);

        var goodprice=parseInt($(this).parent().parent().find('.price').text())
        $('.tatol-price').text(parseInt($('.tatol-price').text())-goodprice);
    }else {
        total.text('0');
    }
})
    //总量计算
$('.del').click(function () {
    $(this).parent().parent().parent().remove();
    
    var x=parseInt($(this).parent().siblings('span').html());
    var y=parseInt($(this).parent().parent().siblings().find('span').html());
    var z=$('.tatol-price').html()
    $('.tatol-price').html((z-x*y))
    var t=$('.totalNum').html()
    $('.totalNum').html(t-y);
})
  
    /*
    小米明星单品
     */
    var $oLi = $('ol li');
    var $uLi = $('#star').find('li');
    var iNow = 0;
    var oneWidth = $uLi.width();

    $uLi.slice(1).each(function(){
        $(this).css( 'left', oneWidth );
    });
    var bBtn = true;
    $oLi.click(function(){
        if(bBtn){
            bBtn = false;
            $oLi.attr('class','');

            $(this).attr('class','active');

            var index = $(this).index();

            if(iNow < index){
                $uLi.eq(index).css('left',oneWidth);
                $uLi.eq(iNow).animate({'left':-oneWidth});
            }
            else if(iNow > index){
                $uLi.eq(index).css('left',-oneWidth);
                $uLi.eq(iNow).animate({'left':oneWidth});
            }

            $uLi.eq(index).animate({'left':0},function(){
                bBtn = true;
            });
            iNow = index;
        }
    });
    //注销帐号

   $('#zhuxiao').click(function () {

       window.location.replace("首页2.html");
       return false;
   })
    $('#zhuce').click(function () {

        window.location.href="小米注册.html";
        localstorage.clear('user');
    })
$('#login-l').click(function () {
    window.location.href='登录页.html';
})
   function ab() {
       var zz=localStorage.getItem('log');
       
       $('#zhanghu').html(zz);
   }
ab();
    $('.carousel-indicators').find('li').click(function () {
        $(this).siblings().css('background','#999');
        $(this).siblings().css('border-color','#999');
        $(this).css('background','#FFF');
        $(this).css('border-color','orangered');
    })
    
})
