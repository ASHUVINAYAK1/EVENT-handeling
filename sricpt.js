var typed = new Typed(".typing", {
  strings: ["CORPORATE EVENTS", "EDUCATIONAL EVENTS", "WEDDINGS", "PARTIES"],
  typespeed: 0.0090,
  backspeed: 10,
  backDelay: 5000,
  typeDelay: 5000,
  loop: true
});

function save() {
  const name = document.getElementById("name").value;
  const num = document.getElementById("num").value;
  const mail = document.getElementById("mail").value;
  const event = document.getElementById("event").value;
  const message = document.getElementById("message").value;
  

  const data = `Name: ${name}\nNumber: ${num}\nMail: ${mail}\nMessage: ${message}\nEvent: ${event}\n`;

  const file = new Blob([data], { type: 'text/plain' });

  const a = document.createElement('a');
  a.href = URL.createObjectURL(file);
  a.download = 'data.txt';
  a.click();
  localStorage.setItem("Name", name);
  localStorage.setItem("Number", num);
  localStorage.setItem("Mail", mail);
  localStorage.setItem("Event", event);
  localStorage.setItem("Message", message);
}
