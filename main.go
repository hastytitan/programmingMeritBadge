package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

const lowTempFWarning float64 = 0
const highTempFWarning float64 = 100
const maxLoop int = 5

func main() {
	var f, c float64 = 0, 0
	var err error
	reader := bufio.NewReader(os.Stdin)
	for i := 0; i < maxLoop; i++ {
		fmt.Println("\nEnter a temperature in Fahrenheit: ")
		text, _ := reader.ReadString('\n')
		text = strings.Trim(text, " \n\r")
		if f, err = strconv.ParseFloat(text, 64); err != nil {
			fmt.Println("\nNot a valid number")
			os.Exit(-1)
		}
		// wc := 13.2 + 0.6215*tempF + (0.3965*tempF-11.37)*math.Pow(tempWc, 0.16)
		c = (f - 32) * 5 / 9
		fmt.Printf("\nThe temperature in Celsius is: %v", c)

		if f > highTempFWarning {
			fmt.Println("\nRemember to hydrate")
		}
		if f < lowTempFWarning {
			fmt.Println("\nRemember to pack Long underwear")
		}
	}
	os.Exit(-1)
}
