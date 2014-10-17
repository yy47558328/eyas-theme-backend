/*
 * @name activeNavigatSwitch
 * @Rely jQuery v1.11.1.min
 *
 * github resource repository:
 *   https://github.com/yy47558328
 *
 * usage as:
 * m1.  var object = $.fn.activeNavigatSwitch({...}); 
 * m2.  var object = $(...).activeNavigatSwitch({...});
 *
 * author: Aiven
 * website: http://www.56hm.com
 * email: 47558328@qq.com,  yy47558328@sina.com
 * qq: 47558328
 */
;(function($, window, document, undefined){

   /**
    * constructor function
    * @param selector obj  selecter
    * @param object settings custom configuration
    */
   var Widget = function(obj, settings)
   {

       this.$obj = obj;

       this.defaults = 
       {
          enabled : true
       }

       this.options = $.extend({},$.fn.activeNavigatSwitch.defaults,settings);

          if(!this.options.enabled)return this.$obj;  //test whether open plug-in

   } 
   
   /**
    * define functions
    * @type {[type]}
    */
   Widget.prototype = 
   {

   }



   $.extend($.fn,{


      activeNavigatSwitch : function(settings)
      {

          return this.each(function(){

               var widget = new Widget($(this), settings);
                
                alert(1);
               
          });

      }

   }) // namespace


  
})(jQuery, window, document)

$(function(){


  $('.nav-switch').activeNavigatSwitch();  

});