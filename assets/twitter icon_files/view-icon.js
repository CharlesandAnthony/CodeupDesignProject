$(document).ready(function(){$('#icon-size-selector li[size]').click(function(){var thisSelector=$(this)
$('#icon-size-selector li.active').removeClass('active')
thisSelector.addClass('active')
var size=thisSelector.attr('size');var originalSrc='{{getImageWithSize(@$icon->original,"original")}}'
console.log(originalSrc.replace('-original.','-'+thisSelector.attr('size')+'.'))
$('input[name="size"]').val(thisSelector.attr('size'));$('#icon-detail-preview').attr('width',thisSelector.attr('size'));})
window.onload=function(){loadRealtedIcons(0);}});$(document).on("click",".dwn-btn",function(){$('#myModal').css('display','flex');});$('.attribute-close').click(function(event){$('#myModal').hide();});function copyText(){var range,selection,worked;var element=document.getElementById("copied");if(document.body.createTextRange){range=document.body.createTextRange();range.moveToElementText(element);range.select();}else if(window.getSelection){var copyTextarea=document.getElementById("copied-hidden");copyTextarea.select();}
try{document.execCommand('copy');$(".txt-copied").show();setTimeout(function(){$(".txt-copied").hide();},5000);}
catch(err){alert('unable to copy text');}}
function downloadFile(){var url=$('#icon-detail-preview').attr('src');window.location=url;}
$(".load-more").on('click',function(){loadRealtedIcons();});function loadRealtedIcons(length=0){var _totalCurrentResult=length==0?length:$(".product-box").length;var iconId=$("input[name='current_icon_id']").val();$.ajax({url:'/load-more-data',type:'get',dataType:'json',data:{skip:_totalCurrentResult,icon_id:iconId},beforeSend:function(){$(".load-more").html('Loading...');},success:function(response){var _html='';console.log(response.html)
$(".product-list").append(response.html);var _totalCurrentResult=$(".product-box").length;var _totalResult=parseInt($(".load-more").attr('data-totalResult'));console.log(_totalCurrentResult);console.log(_totalResult);if(_totalCurrentResult==_totalResult||_totalCurrentResult==0){$(".load-more").remove();}else{$(".load-more").html('Load More');}}});}