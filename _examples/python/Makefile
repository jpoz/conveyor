.PHONEY: gen_protos
gen_protos:
	protoc \
		--python_out=tasks \
		--proto_path=tasks ./tasks/tasks.proto
	protol \
		--create-package \
		--in-place \
		--python-out tasks \
		protoc --proto-path=./tasks tasks/tasks.proto
