module.exports = function(grunt) {
	var globalConfig ={
		path_jsout:'js/output.min.js',
		path_cssout:'css/main.css',

		path_js:'js/**/*.js',
		path_scss:'sass/**/*.scss',

		wiredep_file:'index.php',
		mainjs:'js/scripts.js'
	};
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		globalConfig: globalConfig,
		watch:{
			configFiles:{
				files:['app/index.php'],
				tasks:['wiredep'],
				options:{
					livereload: true,
				},
			},
			sass:{
				files:['prod/<%= globalConfig.path_scss %>'],
				tasks: ['sass'],
				options:{
					livereload:true,
				},
			},
			javascript:{
				files:['prod/js/**/*.js','Gruntfile.js'],
				tasks:['jshint','uglify'],
				options:{
					livereload:true,
				},
			},
		},
		wiredep:{
			target:{
				src:[
					'app/<%= globalConfig.wiredep_file %>'
				],
			}
		},

		sass: {
			dist: {
				options: {
					style: 'nested'
				},
				files: {
					'app/<%= globalConfig.path_cssout %>': 'prod/<%= globalConfig.path_scss %>'
				},
			},
			prod:{
				options:{
					style: 'compressed'
				},
				files:{
					'app/<%= globalConfig.path_cssout %>': 'prod/<%= globalConfig.path_scss %>'
				}
			}
		},

		jshint:{
			all:[
				'Gruntfile.js','prod/<%= globalConfig.path_js %>','!app/<%= globalConfig.path_jsout %>'
			]
		},

		uglify:{
			all:{
				files:{
			        'app/<%= globalConfig.path_jsout %>': ['prod/<%= globalConfig.mainjs %>']
			    }
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('dev', ['watch']);
	grunt.registerTask('default', ['wiredep','sass:prod','uglify']);
};