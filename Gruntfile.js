module.exports = function(grunt){
    
    //自动载入任务模块.
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //less 模块.
        less:
        {

           release:
           {
               options: 
               {
                   paths: ["assets/css"],
                   syncImport : true,
                   compress : true,
                   banner: '/*! <%= pkg.name %> last modified to: <%= grunt.template.today("yyyy-mm-dd") %> */\n'
               },
                
               files:
               {
                   'assets/css/eyas.min.css' : 'less/eyas.less',
                   'assets/css/theme-blue.min.css' : 'less/theme-blue.less'
               }
           }
        },


        //jsmin
        uglify:
        {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                preserveComments: false,
                expand:true,
                footer:'\n/*! <%= pkg.name %> last modified to: <%= grunt.template.today("yyyy-mm-dd") %> */'
            },

            release: 
            {
                files: 
                {
                    'assets/js/eyas.min.js': ['script/**/*.js']
                }
            }
        },



        watch:
        {
           less:
           {  
              files: ['less/**/*.less'],
              tasks:['less:release']
           },


           uglify:
           {
              files: ['script/**/*.js'],
              tasks:['uglify:release']
           },
            
        }

    });


    // 默认任务
    grunt.registerTask('default', ['less:release','uglify:release']);
}