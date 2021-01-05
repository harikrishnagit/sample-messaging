package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	nats "github.com/nats-io/nats.go"
)

var programName string

func main() {
	programName = "Message Consumer"
	channel = "sample-messaging"
	fmt.Println(programName)
	nc, err := nats.Connect(nats.DefaultURL)
	if err != nil {
		log.Printf("Error Connecting to : %v", nats.DefaultURL)
	}
	// Simple Async Subscriber
	nc.Subscribe(channel, func(m *nats.Msg) {
		fmt.Printf("Received a message: %s\n", string(m.Data))
	})

	nc.Drain()
	nc.Close()

}


}
