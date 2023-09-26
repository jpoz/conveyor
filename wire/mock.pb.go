//go:generate mockgen -destination=./mock_jobs.go -package=wire github.com/jpoz/conveyor/wire HubServer,HubClient
package wire
