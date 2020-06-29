all: build clean moveBuild

build:
	cd chronoblog-site; npm run deploy;

clean:
	find . ! -name 'Makefile' ! -name 'LICENSE' ! -name 'CHANGELOG.md' ! -name 'chronoblog-site' ! -name '.git' ! -name '.gitignore' ! -name 'README.md' -type d -exec rm -rf {} +

moveBuild:
	cd chronoblog-site/public; cp -r * ../../