package main

import (
	"fmt"

	"github.com/bwmarrin/discordgo"
)

const token string = "NTQyMzM4OTk1NDAxNTIzMjMw.Xn8m2w.DKEz7I1435KoMjYxiWIIKnSiVS8"

func main() {
	discord, err := discordgo.New("Bot " + token)
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	discord.AddHandler(messageHandlers) // ajoute un handler d'event
	err = discord.Open()
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	return
}

func messageHandlers(s *discordgo.Session, m *discordgo.MessageCreate) {
	fmt.Println("test")
	fmt.Println(m.Content)
	if m.Content == "salut" {
		_, _ = s.ChannelMessageSend(m.ChannelID, "Salut!!")
	}
}
