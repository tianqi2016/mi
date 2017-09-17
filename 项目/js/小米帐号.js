$(function () {
    //年月日
    function birth() {
        var year=['1994','1995','1996','1997','1998','1999','2001','2002','2003','2004','2005','2006','2007','2008'];
        var moth=['1','2','3','4','5','6','7','8','9','10','11','12'];
        var day=['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];
        for(var i=0,len=year.length;i<len;i++){
            $('#year').append('<option>'+year[i]+'</option>')
        }
        for(var j=0,len=moth.length;j<len;j++){
            $('#moth').append('<option>'+moth[j]+'</option>')
        }
        for(var z=0,len=day.length;z<len;z++){
            $('#day').append('<option>'+day[z]+'</option>')
        }
    }
    birth();
    //资料编辑
    function name() {
        $('#btn').click(function () {
            var setname=$('#set-name-1').val();
            var getname=$('#set-name');
            localStorage.setItem('name',setname)
            $('#set-name').html(localStorage.getItem('name'))
        })
        $('#set-name').html(localStorage.getItem('name'))
    }
    name();
   function birthday() {
       $('#btn').click(function () {
           var year=$('#year').val();
           var moth=$('#moth').val();
           var day=$('#day').val();
           var bir= year+'_'+moth+'_'+day;
           localStorage.setItem('birth', year+'_'+moth+'_'+day)
           $('#birthday').html(localStorage.getItem('birth'));
       })
       $('#birthday').html(localStorage.getItem('birth'));
   }
    birthday();
    function sex() {
        $("#btn").click(function(){
            var val=$('input:radio[name="sex"]:checked').val();
            localStorage.setItem('sex',val);
            $('#sex').html(localStorage.getItem('sex'))
        });
        $('#sex').html(localStorage.getItem('sex'));
    }
    sex();
})