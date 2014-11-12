module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
		      src: ['assets/js/plugins.js', 'assets/js/script.js'],
		      dest: 'assets/js/deployment.js'
		    },
		    options: {
	        	style: 'compressed'
		    },
        },
        
        jshint: {
		  files: ['assets/js/*.js'],
		},
		
		imagemin: {
		    dynamic: {
		    	options: {
			        optimizationLevel: 7
			    },
		        files: [{
		            expand: true,
		            cwd: 'assets/img/',
		            src: ['**/*.{png,jpg,gif}'],
		            dest: 'assets/img/'
		        }]
		    }
		},

		compass: {
			dist: {
	        	options: {
	        		sassDir: 'assets/SASS',
	        		cssDir: '.',
	        		environment: 'production',
	        	},
	        },
	    },
		
		watch: {
			options: {
		        livereload: true,
		    },
		    scripts: {
		    	files: 'assets/JS/{,*/}*.js',
		        tasks: ['concat', 'jshint'],
		        options: {
		        	style: 'compressed',
		            spawn: false,
		        },
		    },
		    sass: {
			    files: ['assets/SASS/{,*/}*.{scss,sass}'],
			    tasks: ['compass'],
			    options: {
			        spawn: false,
			    }
			}
		}

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('deploy', ['concat', 'imagemin', 'compass']);

};