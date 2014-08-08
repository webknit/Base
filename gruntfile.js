module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
		      src: ['assets/js/libs/*.js','assets/js/plugins.js', 'assets/js/script.js'],
		      dest: 'assets/js/deployment.js'
		    },
		    options: {
	        	style: 'compressed'
		    },
        },
        
        uglify: {
		    build: {
		        src: 'assets/js/deployment.js',
		        dest: 'assets/js/deployment.min.js'
		    }
		},
		
		imagemin: {
		    dynamic: {
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
		            style: 'compressed'
		        },
		        files: {
		            'style.css': 'assets/SASS/style.scss'
		        }
		    } 
		},
		
        cssmin: {
			style: {
                src: 'style.css',
                dest: 'style.min.css'
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
			    files: ['assets/SASS/*.scss'],
			    tasks: ['sass'],
			    options: {
			        spawn: false,
			    }
			}
		}

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['concat', 'uglify', 'imagemin', 'sass', 'cssmin']);

};
