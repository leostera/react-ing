SASS = $(shell find src/styles -name "*.sass")

SRC = $(shell find src -name "*.js")
LIB = $(SRC:src/%.js=build/lib/%.js)

JADE = $(shell find src/templates -name "*.jade")
HTML = $(JADE:src/%.jade=build/lib/%.html)

all: build/index.js build/index.css build/index.html

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

clean:
	rm -rf ./build/*

.PHONY: clean 
