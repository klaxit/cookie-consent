PORT = 8080
HOST = 0.0.0.0
ENVIRONMENT = development

.PHONY: install
install:
	yarn install

dev:
	yarn start