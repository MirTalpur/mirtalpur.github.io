all: build moveBuild

build:
	cd chronoblog-site; npm run deploy;

moveBuild:
	cd chronoblog-site/public; cp * ../../