package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"sync"

	"log"
	"net/http"

	nats "github.com/nats-io/nats.go"
)

var programName string
var channel = "sample-messaging"

//
//SampleMessageType
//
type SampleMessageType struct {
	username    string
	fullname    string
	email       string
	phonenumber string
}

func main() {
	programName = "Message Producer Microservice"

	fmt.Println(programName)
	//handle requests
	handleHTTPRequests()
	log.Print("started at port 10005")
}

func handleHTTPRequests() {
	http.HandleFunc("/PostMessageNatsIO", postMessageNatsIO)
	http.HandleFunc("/RxMessageNatsIO", rxNatsIO)
	http.HandleFunc("/", homePage)
	http.HandleFunc("/PostMessageKafka", postMessageKafka)
	http.HandleFunc("/PostMessageRabbitMQ", postMessageRabbitMQ)
	http.HandleFunc("/PostMessageActiveMQ", postMessageActiveMQ)
	http.HandleFunc("/PostMessageKubeMQ", postMessageKubeMQ)
	http.HandleFunc("/SendStaticMessageRabbitMQ", sendStaticRabbitMQ)
	// http.HandleFunc("/SendStaticMessageKubeMQ", sendStaticKubeMQ)
	// http.HandleFunc("/SendStaticMessageActiveMQ", sendStaticActiveMQ)
	// http.HandleFunc("/SendStaticMessageKafka", sendStaticKafka)
	http.HandleFunc("/kill", killServer)
	//listen on port 10005, exit if endpoints are down
	//	log.Fatal(http.ListenAndServe(":"+ocfg.ListenerPort, nil))
	log.Fatal(http.ListenAndServe(":10005", nil))
}

func rxNatsIO(w http.ResponseWriter, r *http.Request) {
	log.Println("In rxNatsIO ")
	defer r.Body.Close()
	nc, err := nats.Connect("127.0.0.1:4222", nats.Name("SampleNatsRx"))
	if err != nil {
		log.Printf("Error Connecting to Nats : %v", err)
	}
	defer nc.Close()
	// Use a WaitGroup to wait for a message to arrive
	wg := sync.WaitGroup{}
	wg.Add(1)

	// Subscribe
	if _, err := nc.Subscribe("updates", func(m *nats.Msg) {
		natsData := m.Data
		log.Printf("Nats Data: %s" + string(natsData))
		wg.Done()
	}); err != nil {
		log.Fatal(err)
	}

	// Wait for a message to come in
	wg.Wait()

	// var jsonData string
	// data, err := ioutil.ReadAll(r.Body)
	// if err != nil {
	// 	log.Printf("Error Converting : %v", err)
	// 	http.Error(w, "Error Converting : ", http.StatusInternalServerError)
	// } else {
	// 	// Send jsonData to a Q
	// 	jsonData = string(data)
	// 	// This is response back to caller.
	// 	w.WriteHeader(200)
	// 	w.Header().Set("Content-Type", "application/json")
	// 	fmt.Fprintf(w, jsonData)
	// }
	// log.Println("JSON Data: " + jsonData)

}
func postMessageNatsIO(w http.ResponseWriter, r *http.Request) {
	log.Println("In postMessageNatsIO ")
	defer r.Body.Close()
	msg := SampleMessageType{"jkennedy", "John F Kennedy", "jfk@gmail.com", "(111)-222-3333"}
	jsonData, err := json.Marshal(msg)
	if err != nil {
		log.Printf("Error Marshalling : %v", err)
		http.Error(w, "Error Reading : ", http.StatusInternalServerError)
		jsonData = []byte("Hello World!")
	}
	// Send jsonData to a NatsIO.
	log.Printf("static data : %v", msg)

	nc, err := nats.Connect("127.0.0.1:4222", nats.Name("SampleNatsSend"))
	if err != nil {
		log.Printf("Error Connecting to Nats : %v", err)
	}
	defer nc.Close()

	nc.Publish(channel, []byte(jsonData))
	nc.Drain()
	nc.Close()
	// This is response back to caller.
	w.WriteHeader(200)
	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, "%v", msg)
}
func killServer(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, programName+" Terminating...")
	log.Fatal(programName + " killed externally")
}

//home endpoint
func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "/PostMessageToQueue to send to Queue, /PostConfigCheck to pull disaster config data \n/InspectionDownload to get inspection data \n")
	fmt.Fprintf(w, "/kill to stop this server \n")
	// log.Println(programName)
}

func postMessageKafka(w http.ResponseWriter, r *http.Request) {

}

func postMessageRabbitMQ(w http.ResponseWriter, r *http.Request) {

}

func postMessageActiveMQ(w http.ResponseWriter, r *http.Request) {

}

func postMessageKubeMQ(w http.ResponseWriter, r *http.Request) {

}

func sendStaticRabbitMQ(w http.ResponseWriter, r *http.Request) {
	log.Println("In postMessageQ ")
	defer r.Body.Close()
	jsonData, err := ioutil.ReadFile("MockServicePayloads/InspectionRequest.json")
	if err != nil {
		log.Printf("Error Converting : %v", err)
		http.Error(w, "Error Converting : ", http.StatusInternalServerError)
	} else {
		// Send jsonData to a RabbitMQ

		// This is response back to caller.
		w.WriteHeader(200)
		w.Header().Set("Content-Type", "application/json")
		fmt.Fprintf(w, string(jsonData))
	}

}
