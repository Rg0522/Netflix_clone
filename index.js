const questions = document.querySelectorAll(".faq__question");

questions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector("i");

    // Toggle icons
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-times");

    // Toggle accordion animation
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      document
        .querySelectorAll(".faq__answer")
        .forEach((el) => (el.style.maxHeight = null));
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
