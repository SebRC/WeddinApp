import {Guest} from "./Guest";

export const Guests: Guest[] = 
[
    {id: "martin", name: "Martin", attending: false, songWishes: ["Lukas Graham - 7 years"], 
    guests: 
    [
        {id: "stine", name: "Stine", attending: false, songWishes: ["Jonah Blacksmit - House is on fire"]}, 
        {id: "liv", name: "Liv", attending: false, foodInfo: "Likes milk", songWishes: ["Taylor Swift - Antihero"]},
    ]},
    {id: "soeren", name: "Søren", attending: false, foodInfo: "Loves a big beer", songWishes: ["Drake - Gods plan", "Beyonce - Single Ladies"]},
    {id: "seb", name: "Sebastian Refsbæk Christiansen", attending: false, foodInfo: "Hates onions. NO onions please.", songWishes: ["The Weeknd -  Take my breath", "Mina Okabe - Every second", "Tove Lo - Cool girl"]},
    {id:"laerke", name: "Lærke Overgaard", attending: false, songWishes: [], 
    guests: 
    [
        {id: "henrik",name: "Henrik Faxholm", attending: false, songWishes: []},
        {id: "jonathan", name: "Jonathan Faxholm", attending: false, songWishes: []},
    ]},
    
    {id: "mathias", name: "Mathias Refsbæk Christiansen", attending: false, songWishes: [], 
    guests: 
    [
        {id: "line", name: "Line Sølling Refsbæk", attending: false, songWishes: ["Jonah Blacksmit - House is on fire"]},
    ]},
];

export const DEFAULT_GUEST_STATE: Guest =  {id: "NONE", name: "NONE", attending: false, songWishes: []}
      