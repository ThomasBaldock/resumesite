.PHONY: build

build:
	sam build

deploy-infra:
	make build && aws-vault exec my-user --no-session -- sam deploy --no-confirm-changeset

deploy-site:
	aws-vault exec my-user --no-session -- aws s3 sync ./resumesitehtml s3://www.thomasbaldock.com --exclude "*DS_Store"

invoke-get:
	sam build && aws-vault exec my-user --no-session -- sam local invoke GetFunction

invoke-put:
	sam build && aws-vault exec my-user --no-session -- sam local invoke PutFunction