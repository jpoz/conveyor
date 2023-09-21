//go:generate mockgen -destination=./mock_jobs.go -package=wire github.com/jpoz/protojob/wire HubServer,HubClient
package wire
