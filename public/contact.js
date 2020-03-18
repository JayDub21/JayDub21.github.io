$("form").on("submit", e => {
  e.preventDefault();

  const email = $("#email").val();

  const subject = $("#subject").val();

  const text = $("#text").val();

  const data = {
    email,
    subject,
    text
  };

  $.post("/contact", data, function() {
    console.log("Data sent to server", data);
  });
});
