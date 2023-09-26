package conveyor_test

import (
	"context"
	"testing"

	"github.com/jpoz/conveyor/fixtures"
	"github.com/jpoz/conveyor/libs/go/conveyor"
	"github.com/jpoz/conveyor/wire"
	"github.com/stretchr/testify/assert"
	"go.uber.org/mock/gomock"
)

func TestEnqueue(t *testing.T) {
	ctx := context.Background()
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockClient := wire.NewMockHubClient(ctrl)
	client := &conveyor.HubClient{
		Hub: mockClient,
	}

	basic := &fixtures.Basic{
		Str: "foo",
		Int: 123,
	}

	mockClient.EXPECT().
		Add(
			gomock.Eq(ctx),
			gomock.Eq(&wire.AddRequest{
				Job: &wire.Job{
					Type:    "fixtures.Basic",
					Queue:   "fixtures.Basic",
					Payload: []byte("\n\x03foo\x10{"),
				},
			}),
		).
		Return(&wire.AddResponse{
			Success: true,
			Message: "Job submitted",
			Job: &wire.Job{
				Uuid: "uuid",
			},
		}, nil)

	res, err := client.Enqueue(ctx, basic)
	assert.NoError(t, err)
	assert.NotNil(t, res)
}
