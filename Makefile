SASS = $(shell find src/styles -name "*.sass")

SRC = $(shell find src -name "*.js")
LIB = $(SRC:src/%.js=build/lib/%.js)

JADE = $(shell find src/templates -name "*.jade")
HTML = $(JADE:src/%.jade=build/lib/%.html)

IMAGES = $(shell find src/images -name "*.png")
ASSETS = $(IMAGES:src/images/%.png=build/images/%.png)

all: build/index.js build/index.css build/index.html $(ASSETS)

build/index.html: src/index.html
	@cp -f src/index.html build/

build/index.js: $(LIB) $(HTML)
	browserify $(LIB) -t partialify -o build/index.js --debug

build/index.css: $(SASS)
	sass -I src/styles src/styles/index.sass > build/index.css

build/lib/%.js: src/%.js
	@mkdir -p $(@D)
	babel $< -o $@

build/lib/templates/%.html: src/templates/%.jade
	@mkdir -p $(@D)
	jade < $< > $@

build/images/%.png: src/images/%.png
	@mkdir -p $(@D)
	@cp -f $< $(@D)

dist: dist/index.js dist/index.css dist/index.html

dist/index.js: build/index.js
	uglifyjs build/index.js -mc --screw-ie8 > dist/index.js

dist/index.css: build/index.css
	cleancss --output dist/index.css build/index.css 

dist/index.html: build/index.html
	@cp -f src/index.html dist/

clean:
	rm -rf ./build/*
	rm -rf ./dist/*

.PHONY: clean 
