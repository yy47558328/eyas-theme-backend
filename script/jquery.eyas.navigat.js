/*
 * @name navigatToggle
 * @Rely jQuery v1.11.1.min
 *
 * github resource repository:
 *   https://github.com/yy47558328
 *
 * usage as:
 * m1.  var object = $.fn.navigatToggle({...}); 
 * m2.  var object = $(...).navigatToggle({...});
 *
 * author: Aiven
 * website: http://www.56hm.com
 * email: 47558328@qq.com,  yy47558328@sina.com
 * qq: 47558328
 */
;(function($, window, document, undefined){

   

   $.extend($.fn,{

      navigatToggle : function(opts)
      {

          var settings = 
          {

             enabled : true,

             container : '.body-container',

             activeNavToggleClas : 'nav-active-toggle',

             toggle : 'toggle'
          }

          var options = $.extend({}, settings, opts);

          if(!options.enabled)return this; //test whether the plug-in is enabled

          return this.each(function(){
              
               $this = $(this);

               var widget = new Widget();

               $container = $(options.container),

               $this.on('click', widget.Toggle.clickEvent);

          });

          /**
           * widget class
           */
          function Widget()
          {

             /**
              * ActiveNavigat Toggle handle Class
              * @type {[type]}
              */
             this.Toggle = 
             {

                 

                 /**
                  * click event handle function
                  * @return {[type]} [description]
                  */
                 clickEvent : function()
                 {

                     if($this.hasClass(options.toggle))
                     {
                         $this.removeClass(options.toggle);
                         $container.removeClass(options.activeNavToggleClas);
                     
                     }else{

                         $this.addClass(options.toggle);
                         $container.addClass(options.activeNavToggleClas);
              
                     }

                 }
             }
          }
      }
   }) // namespace

})(jQuery, window, document)

$(function(){


  $('.nav-switch').navigatToggle();  

});