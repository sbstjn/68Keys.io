styles:
	yarn build:styles

styles-watch:
	sass --style compressed --watch source/styles/main.sass:static/styles/main.css

scripts:
	yarn build:scripts

scripts-watch:
	tsc --watch

run:
	HUGO_ENV=dev hugo server --watch --verbose --bind 0.0.0.0

build: styles scripts
	hugo

.PHONY: scripts styles run build
