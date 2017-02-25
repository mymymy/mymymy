module.exports = function(grunt) {

	grunt.initConfig({
		aws_s3: {
			production: {
				options: {
					bucket: 'BUCKETNAME',
					uploadConcurrency: 50,
					params: {
						CacheControl: 'max-age=31536000'
					}
				},
				files: [
					{ expand: true, cwd: "dist/assets/", src: ['**'], dest: '/assets/', differential: true },
				]
			}
		},
		clean: {
			test: ['dist/**']
		},
		copy: {
			main: {
				files: [
					{ expand: true, cwd: "src/", src: ['server.js'], dest: 'dist' },
					{ expand: true, cwd: "src/assets/images/", src: ['**'], dest: 'dist/assets/images' },
					{ expand: true, cwd: "src/assets/fonts/", src: ['**'], dest: 'dist/assets/fonts' },
				]
			}
		},
		uglify: {
			app: {
				options: {
				},
				files: {
					'dist/assets/app.js': ['src/assets/libs/*.js', 'src/assets/js/*.js']
				}
			}
		},
		stylus: {
			compile: {
				options: {
					compress: false,
					paths: ["src/assets/styles", "node_modules/rupture"]
				},
				files: {
					"dist/assets/main.css": "src/assets/styles/main.styl"
				}
			}
		},
		cssmin: {
			style: {
				files: {
					'dist/assets/main.css': ['dist/assets/main.css']
				}
			}
		},
		htmlmin: {
			dist: {                                 
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: [
					{ expand: true, flatten: true, cwd: "src", src: ['*.html'], dest: 'dist/' }
				]
			}
		},
		replace: {
			production: {
				options: {
					variables: {
						'root_path': 'https://s3-eu-west-1.amazonaws.com/BUCKETNAME',
						'compressed': '.gz'
					}
				},
				files: [
					{ expand: true, flatten: true, src: ['dist/assets/app.js'], dest: 'dist/assets/' },
					{ expand: true, flatten: true, src: ['dist/assets/main.css'], dest: 'dist/assets/' },
					{ expand: true, flatten: true, cwd: "dist", src: ['*.html'], dest: 'dist/' }
				]
			},
			local: {
				options: {
					variables: {
						'root_path': '',
						'compressed': ''
					}
				},
				files: [
					{ expand: true, flatten: true, src: ['dist/assets/app.js'], dest: 'dist/assets/' },
					{ expand: true, flatten: true, src: ['dist/assets/main.css'], dest: 'dist/assets/' },
					{ expand: true, flatten: true, cwd: "dist", src: ['*.html'], dest: 'dist/' }
				]
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie 9']
			},
			style: {
				src: 'dist/assets/main.css',
				dest: 'dist/assets/main.css'
			}
		},
		compress: {
			js: {
				options: {
					mode: 'gzip'
				},
				expand: true,
				cwd: 'dist/assets/',
				src: ['app.js'],
				ext: '.js.gz',
				extDot: 'last',
				dest: 'dist/assets/'
			},
			css: {
				options: {
					mode: 'gzip'
				},
				expand: true,
				cwd: 'dist/assets/',
				src: ['main.css'],
				ext: '.css.gz',
				extDot: 'last',
				dest: 'dist/assets/'
			}
		},
		watch: {
			all: {
				files: ["src/**/*"],
				tasks: ['copy', 'stylus', 'autoprefixer', 'htmlmin', 'uglify', 'replace:local']
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-compress')
	grunt.loadNpmTasks('grunt-contrib-htmlmin')
	grunt.loadNpmTasks('grunt-contrib-clean')
	grunt.loadNpmTasks('grunt-contrib-copy')
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-contrib-cssmin')
	grunt.loadNpmTasks('grunt-contrib-stylus')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-aws-s3')
	grunt.loadNpmTasks('grunt-replace')
	grunt.loadNpmTasks('grunt-autoprefixer')

	var tasks = ['copy', 'stylus', 'autoprefixer', 'htmlmin', 'uglify']

	if (process.env.DEPLOY_ENV === 'production') {
		tasks.push('cssmin', 'replace:production', 'compress', 'aws_s3')
	}
	else {
		tasks.push('replace:local')
	}

	grunt.registerTask('default', tasks)
}
