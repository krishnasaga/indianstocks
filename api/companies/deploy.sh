#!/usr/bin/env bash
zip -r lambda.zip *
aws lambda update-function-code \
    --function-name  indianstocks-companies \
    --zip-file fileb://lambda.zip
