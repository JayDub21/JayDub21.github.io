$("form").on("submit", e => {
  e.preventDefault();

  const email = $("#email")
    .val()
    .trim();
  const subject = $("#subject")
    .val()
    .trim();
  const text = $("#text")
    .val()
    .trim();

  const data = {
    email,
    subject,
    text
  };

  $.post("/contact", data, function() {
    console.log("Data sent to server", data);
  });
});
