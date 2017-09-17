$(function () {
    //购物车
    var timer=null;
    $('#gouwu').mouseover(function () {
        $('#x-shop').show();
    })
    $('#x-shop').mouseleave(function (){
        timer=setTimeout(function () {
            $('#x-shop').hide();
        },500);
    });
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
    $('.del').click(function () {
        $(this).parent().parent().parent().remove();

        var x=parseInt($(this).parent().siblings('span').html());
        var y=parseInt($(this).parent().parent().siblings().find('span').html());
        var z=$('.tatol-price').html()
        $('.tatol-price').html((z-x*y))
        var t=$('.totalNum').html()
        $('.totalNum').html(t-y);
    })
   
    var $mi=$('#img-mi');
    var $zz=$('#img-zzy');
    $('#myde').click(function () {
        $('#shouhuo').hide();
        $('#cent1').show();
    })
    $('#myshouhuo').click(function () {
        $('#shouhuo').show();
        $('#cent1').hide();
        $('#motai').show();
    })
   $mi.mouseover(function () {
      $zz.show();
    })
    $("#img-tt").mouseleave(function () {
        $zz.hide();
    })
    $('#shopping').mouseover(function () {
        $('#ul2').show();
    })
    $('#ul2').mouseleave(function () {
        $(this).hide();
    })
        var $phone=$('#ul2').find('li');
    var $right=$('#float-right').find('li');
    $phone.mouseover(function () {
        $right.hide();
        $('#float-right').show();
        $right.eq($(this).index()).show();
    })
    $('#ul2').mouseleave(function () {
        $right.hide();
        $right.eq($(this).index()).hide();
        $('#float-right').hide();
    })
   
    //早中晚判定
    function a() {
        var d = new Date();
        var t=d.getHours();
        if(t<=11){
           $('.temorr').siblings().remove();
        }else if(t<=17){
            $('.temorr1').siblings().remove();
        }else{
            $('.temorr2').siblings().remove();
        }
    }
    a();
  $('#pull-gai').mouseover(function () {
      $('#pull-xiu').slideDown(600);
  })
    $('#pull-gai').mouseleave(function () {
        $('#pull-xiu').hide(500);
    })

    

//三级联动城市下拉框
  
    
    function sanjiliandong() {
        var privaces=['福建','上海','江西'];
        var citys=[['福建1','福建2','福建3'],['上海1','上海2','上海3'],['江西1','江西2','江西3']]
        var xians=[[['德化1','德化2','德化3'],['德化4','德化5','德化6'],['德化7','德化8','德化9']],
            [['上海市1','上海市2','上海市3'],['上海市4','上海市5','上海市6'],['上海市7','上海市8','上海市9']],
            [['上海市1','上海市2','上海市3'],['上海市4','上海市5','上海市6'],['上海市7','上海市8','上海市9']]]
        var iNum;

        for(var i=0;i<privaces.length;i++){
            $('#privace').append('<option>'+privaces[i]+'</option>')
        }
        $('#privace').change(function () {
            $('#city').find('option').not(':eq(0)').remove();
            iNum=$(this).children('option:selected').index();
            var acity=citys[iNum-1];
            for(var j=0;j<acity.length;j++){
                $('#city').append('<option>'+acity[j]+'</option>')
            }
        })
        $('#city').change(function () {
            $('#xian').find('option').not(':eq(0)').remove();
            iNum2=$(this).children('option:selected').index();
            var axian=xians[iNum-1][iNum2-1];
            for(var z=0;z<axian.length;z++){
                $('#xian').append('<option>'+axian[z]+'</option>')
            }
        })
    }
    sanjiliandong();
//获取地址2
    
    var USER_KEY='address';
    var addressList=store.get('USER_KEY',[]);
    var html='';
    for(var i=0;i<addressList.length;i++){
        html += '<div class="text-center" data-num="'+addressList[i].myID+'" style="margin-left:20px;width: 265px;height: 180px;border: 1px solid #e0e0e0;float: left">';
        html += '<p>'+ addressList[i].myName +'</p>';
        html += '<p>'+ addressList[i].myPhone +'</p>';
        html += '<p>'+ addressList[i].myProvince + addressList[i].myCity + addressList[i].myCountry+'</p>';
        html += '<p>'+ addressList[i].myAddressXX +'</p>';
        html += '<p>'+ addressList[i].myZipcode +'</p>';
        html += '<p><a href="#" class="change" data-toggle="modal" data-target="#changeModal" >修改</a><a href="#" class="shanchu">删除</a></p> </div>';
    }
    console.log(addressList);
    $('.add').append(html);
    $('#save').click(function () {
        if( $('#inputName').val() ==''
            || $('#inputPhone').val() ==''
            || $('#inputAddress').val() ==''
            || $('#inputZipcode').val() ==''
            || $('#privace').val() == '请选择省份'
            || $('#city').val() == '请选择城市'
            || $('#xian').val() == '请选择地区'){
            alert('请将信息填写完整！')
        }else{
            var name =  $('#inputName').val();
            var phone =  $('#inputPhone').val();
            var province =  $('#privace').val();
            var city = $('#city').val();
            var country = $('#xian').val();
            var addressXX =  $('#inputAddress').val();
            var zipcode =  $('#inputZipcode').val();

            var id=1;
            if(addressList.length>0){
                id=addressList[addressList.length-1].myID+1;
            }
            var address={
                "myID":id,
                "myName":name,
                "myPhone":phone,
                "myProvince":province,
                "myCity":city,
                "myCountry":country,
                "myAddressXX":addressXX,
                "myZipcode":zipcode
            };


            addressList.push(address);

            store.update('USER_KEY',addressList);

            var html = '';
            html += '<div class="text-center" data-num="'+address.myID+'" style="margin-left:30;width: 265px;height: 180px;border: 1px solid #e0e0e0;float: left">';
            html += '<p>'+ address.myName +'</p>';
            html += '<p>'+ address.myPhone +'</p>';
            html += '<p>'+ address.myProvince +address.myCity + address.myCountry+'</p>';
            html += '<p>'+ address.myAddressXX +'</p>';
            html += '<p>'+ address.myZipcode +'</p>';
            html += '<p><a href="#" class="change" data-toggle="modal" data-target="#changeModal" >修改</a><a href="#" class="shanchu">删除</a></p> </div>';
            $('.add').append(html);
        }

    });

    $('.add').on('click','.shanchu',function () {
        var id= $(this).parent().parent().data('num');
        $(this).parent().parent().remove();
        for(var i=0;i<addressList.length;i++){
            if(addressList[i].myID==id){
                addressList.splice(i,1);
            }
        }
        store.update('USER_KEY',addressList);
    });


    $('.add').on('click','.change',function () {
        var id= $(this).parent().parent().data('num');
        for(var i=0;i<addressList.length;i++){
            if(addressList[i].myID==id){
                address = addressList[i];
                break;
            }
        }

        $('#changeName').val(address.myName);
        $('#changePhone').val(address.myPhone);
        $('#changeProvince>option:checked').text(address.myProvince);
        $('#changeCity>option:checked').text(address.myCity);
        $('#changeCountry>option:checked').text(address.myCountry);
        $('#changeAddress').val(address.myAddressXX);
        $('#changeZipcode').val(address.myZipcode);
        console.log(address);
    });

    $('#change').click(function () {
        address.myName =  $('#changeName').val();
        address.myPhone =   $('#changePhone').val();
        address.myProvince =  $('#changeProvince>option:checked').text();
        address.myCity =   $('#changeCity>option:checked').text();
        address.myCountry =   $('#changeCountry>option:checked').text();
        address.myAddressXX =  $('#changeAddress').val();
        address.myZipcode =   $('#changeZipcode').val();
        store.update('USER_KEY',addressList);

        var html = '';
        html += '<div class="text-center" data-num="'+address.myID+'" style="margin-left:30;width: 265px;height: 180px;border: 1px solid #e0e0e0;float: left">';
        html += '<p>'+  address.myName +'</p>';
        html += '<p>'+ address.myPhone +'</p>';
        html += '<p>'+ address.myProvince + address.myCity + address.myCountry +'</p>';
        html += '<p>'+ address.myAddressXX +'</p>';
        html += '<p>'+ address.myZipcode +'</p>';
        html += '<p><a href="#" class="change" data-toggle="modal" data-target="#changeModal" >修改</a><a href="#" class="shanchu">删除</a></p> </div>';
        $('[data-num='+address.myID+']').html(html);

    })

})