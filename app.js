//using selectors inside the element

const questions = document.querySelectorAll(".question")

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn")

  btn.addEventListener("click", (e) => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text")
      }
    })

    question.classList.toggle("show-text")
  })
})

// traversing the dom

// const questionBtns = document.querySelectorAll(".question-btn")

// questionBtns.forEach((questionBtn) => {
//   questionBtn.addEventListener("click", (e) => {
//     const question = e.currentTarget.parentElement.parentElement
//     question.classList.toggle("show-text")
//   })
// })
