styles:
	sass --style compressed source/styles/main.sass static/styles/main.css

styles-watch:
	sass --style compressed --watch source/styles/main.sass:static/styles/main.css

scripts:
	tsc

scripts-watch:
	tsc --watch

run:
	HUGO_ENV=dev hugo server --watch --verbose --bind 0.0.0.0

build: styles scripts
	hugo

.PHONY: scripts styles run build
