// ============================================================
//  🎟  Event Welcome Center — script.js
//  JavaScript Foundations · Lab 5
// ============================================================

// ── Challenge 1: Event Information ──────────────────────────
// Create your variables here and log each one to the console.

let eventName = "CodeFest";
let speakerName = "Mr. Freeman";
let roomNumber = 204;
let attendeeName = "Levi";
let agenda = "Keynote, workshops, and networking";

console.log(eventName);

// ── Challenge 2: Personalized Greetings ─────────────────────
// Combine your variables with strings to build welcome messages.

console.log("Welcome to " + eventName + "!");
console.log("Your session is in Room " + roomNumber + ".");

// ── Challenge 3: Build Functions ────────────────────────────
// Create at least two functions and call them below.

function welcomeGuest() {
  console.log("Welcome to " + eventName);
}

function displaySessionInfo() {
  console.log("Room: " + roomNumber);
}

welcomeGuest();
displaySessionInfo();

// ── Challenge 4: Alert Messages ─────────────────────────────
// Send messages directly to the user with alert().

alert("Welcome to " + eventName + "!");

// ── Challenge 5: Attendee Counter ───────────────────────────
// Track how many attendees have checked in.

let attendeeCount = 0;
console.log("Attendees: " + attendeeCount);

attendeeCount++;
console.log("Attendees: " + attendeeCount);

// ── 🚀 Level Up Challenges ──────────────────────────────────
// LU1: Add displaySpeaker(), displayRoom(), displayAgenda()

function displaySpeaker() {
  console.log("Speaker: " + speakerName);
}

function displayRoom() {
  console.log("Room: " + roomNumber);
}

function displayAgenda() {
  console.log("Agenda: " + agenda);
}

displaySpeaker();
displayRoom();
displayAgenda();

// LU2: Create variables for 3 attendees with personalized messages
let secondAttendeeName = "Cypress";
let thirdAttendeeName = "Kohana";

console.log("Welcome " + attendeeName + " to " + eventName + "!");
console.log("Welcome " + secondAttendeeName + " to " + eventName + "!");
console.log("Welcome " + thirdAttendeeName + " to " + eventName + "!");

// LU3: Build a mini conference dashboard (variables + functions + console)
// LU4: Demonstrate console.table(), console.info(), and console.warn().

function displayConferenceDashboard() {
  console.log("Conference Dashboard");
  console.table([
    { detail: "Event", information: eventName },
    { detail: "Speaker", information: speakerName },
    { detail: "Room", information: roomNumber },
    { detail: "Agenda", information: agenda },
  ])
  console.log("Attendees")
  console.table([
    { detail: "Attendee 1", information: attendeeName },
    { detail: "Attendee 2", information: secondAttendeeName },
    { detail: "Attendee 3", information: thirdAttendeeName },
    { detail: "Checked in", information: attendeeCount },
  ]);
}

displayConferenceDashboard();
console.info("Conference details loaded for " + eventName + ".");
console.warn("Reminder: verify Room " + roomNumber + " is available before the event.");
