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
		
		sass: {
		    dist: {
		        options: {
		            style: 'compressed',
      				require: 'susy'
		        },
		        files: {
		            'style.css': 'assets/SASS/style.scss'
		        }
		    } 
		},
		
		watch: {
			options: {
		        livereload: true,
		    },
		    scripts: {
		        files: ['assets/js/*.js'],
		        tasks: ['concat'],
		        options: {
		        	style: 'compressed',
		            spawn: false,
		        },
		    },
		    sass: {
			    files: ['assets/SASS/*.scss', 'assets/SASS/partials/*.scss', 'assets/SASS/modules/*.scss'],
			    tasks: ['sass'],
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

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('deploy', ['concat', 'imagemin', 'sass']);

};