import {Guest} from "./Guest";

export const Guests: Guest[] = 
[
    {name: "Martin", attending: false, songWishes: ["Lukas Graham - 7 years"], 
    guests: 
    [
        {name: "Stine", attending: false, songWishes: ["Jonah Blacksmit - House is on fire"]}, {name: "Liv", attending: false, foodInfo: "Likes milk", songWishes: ["Taylor Swift - Antihero"]},
    ]},
    {name: "Søren", attending: false, foodInfo: "Loves a big beer", songWishes: ["Drake - Gods plan", "Beyonce - Single Ladies"]},
    {name: "Sebastian Refsbæk Christiansen", attending: false, foodInfo: "Hates onions. NO onions please.", songWishes: ["The Weeknd -  Take my breath", "Mina Okabe - Every second", "Tove Lo - Cool girl"]},
    {name: "Lærke Overgaard", attending: false, songWishes: [], 
    guests: 
    [
        {name: "Henrik Faxholm", attending: false, songWishes: []},
        {name: "Jonathan Faxholm", attending: false, songWishes: []},
    ]},
    
    {name: "Mathias Refsbæk Christiansen", attending: false, songWishes: [], 
    guests: 
    [
        {name: "Line Sølling Refsbæk", attending: false, songWishes: ["Jonah Blacksmit - House is on fire"]},
    ]},
];

export const DEFAULT_GUEST_STATE: Guest =  {name: "NONE", attending: false, songWishes: []}
      