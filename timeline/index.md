---
title: Trip Timeline
layout: timeline_layout
---

# Trip Timeline

<script>
const timeline = [
  { date: "Dec 21", icon: "✈️", text: "Depart BLR → BUD" },
  { date: "Dec 22", icon: "🏨", text: "Arrive in Budapest" },
  { date: "Dec 23", icon: "🚆", text: "Travel to Berlin" },
  { date: "Dec 24", icon: "🏙️", text: "Berlin sightseeing" },
  { date: "Dec 31", icon: "✈️", text: "Return to BLR" },
];

document.getElementById("timeline-container").innerHTML =
  timeline.map(item =>
    `<div class='timeline-item'>
       <div class='timeline-date'>${item.date}</div>
       <div class='timeline-icon'>${item.icon}</div>
       <div class='timeline-text'>${item.text}</div>
     </div>`
  ).join("");
</script>
