PORT ?= 5500

run:
	python3 -m http.server $(PORT)

run-win:
	python -m http.server $(PORT)
