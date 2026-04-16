up:
	./scripts/start-localstack.sh

down:
	localstack stop

logs:
	localstack logs -f

bootstrap:
	cd infra-cdk && npm run bootstrap:local

deploy:
	cd infra-cdk && npm run deploy:local

destroy:
	cd infra-cdk && npm run destroy:local

status:
	localstack status

show-outputs:
	AWS_ACCESS_KEY_ID=test AWS_SECRET_ACCESS_KEY=test AWS_DEFAULT_REGION=us-east-1 aws --endpoint-url=http://127.0.0.1:4566 cloudformation describe-stacks --stack-name SharedLocalStack
