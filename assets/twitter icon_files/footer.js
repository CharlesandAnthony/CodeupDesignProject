$(document).ready(function(){if($('#loginModalInfo').val()=='open'){console.log(90);openModal(loginModal)}});$.ajaxSetup({headers:{'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')}});function submitForm(){$('.alert-danger').hide()
$('.success').hide()
var form=$('.register-form');$.ajax({type:"POST",url:form.attr('action'),data:form.serialize(),success:function(response){$('.success').show();$('.success').html('');$('.success').html(response.message);},error:function(response){$('.alert-danger').show();$('.alert-danger').html('');grecaptcha.reset();console.log()
$.each(response.responseJSON.errors,function(key,value){$('.alert-danger').append('<li>'+value+'</li>');});}});return false;}
function submitResetForm(){$('.alert-danger').hide()
$('.success').hide()
var form=$('.reset-form');$.ajax({type:"POST",url:form.attr('action'),data:form.serialize(),success:function(response){$('.success').show();$('.success').html('');$('.success').html(response.message);if(response.redirecturl){window.location.replace(response.redirecturl);}else{window.location.reload();}},error:function(response){if(response.message&&response.message=="CSRF token mismatch."){$('.alert-danger').append('<li>Please Reload Page</li>');}
$('.alert-danger').show();$('.alert-danger').html('');$.each(response.responseJSON.errors,function(key,value){$('.alert-danger').append('<li>'+value+'</li>');});}});return false;}
function submitLoginForm(){$('.alert-danger').hide()
$('.success').hide()
var form=$('.login-form');$.ajax({type:"POST",url:form.attr('action'),data:form.serialize(),success:function(response){$('.success').show();$('.success').html('');$('.success').html(response.message);console.log($("link[rel='canonical']").attr("href"));location.assign($("link[rel='canonical']").attr("href"));},error:function(response){if(response.message&&response.message=="CSRF token mismatch."){$('.alert-danger').append('<li>Please Reload Page</li>');}
$('.alert-danger').show();$('.alert-danger').html('');$.each(response.responseJSON.errors,function(key,value){$('.alert-danger').append('<li>'+value+'</li>');});}});return false;}
function submitForgotForm(){$('.alert-danger').hide()
$('.success').hide()
var form=$('.forgot-form');$.ajax({type:"POST",url:form.attr('action'),data:form.serialize(),success:function(response){$('.forgot-form .success').show();$('.forgot-form .success').html('');$('.forgot-form .success').html(response.message);},error:function(response){$('.forgot-form .alert-danger').show();$('.forgot-form .alert-danger').html('');console.log()
$.each(response.responseJSON.errors,function(key,value){$('.forgot-form .alert-danger').append('<li>'+value+'</li>');});}});return false;}
function openModal(modal){$("#wrngModal").modal("hide");$('form').trigger("reset");$('.success').hide();$('.alert-danger').hide();$(modal).modal();}
var urlParams=new URLSearchParams(window.location.search);if(urlParams.has('reset-password')==true)
{setTimeout(function(){openModal(resetModal)},1000);}