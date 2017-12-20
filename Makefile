install:
	@brew install fswatch hugo sassc typescript

styles:
	sass --style compressed source/styles/main.sass static/styles/main.css

styles-watch:
	@fswatch source/styles 'make styles'

scripts:
	@tsc

scripts-watch:
	@tsc --watch

run:
	@hugo server --watch --verbose --bind 0.0.0.0

build: styles scripts
	@hugo
	@rm -rf public/styles/

.PHONY: scripts styles install run build
