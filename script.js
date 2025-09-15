function showTime() {
  const clock = document.getElementById("clock");
  const date = document.getElementById("date");

  const now = new Date();

  // Hours, Minutes, Seconds
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let session = "AM";

  if (h == 0) {
    h = 12;
  } else if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  // Format 2-digit
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  clock.innerText = `${h}:${m}:${s} ${session}`;
  date.innerText = now.toDateString();
}

// Run every second
setInterval(showTime, 1000);
showTime();
