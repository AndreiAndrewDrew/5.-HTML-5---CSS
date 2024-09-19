function showConfirm(message, callback) {
  let confirmBox = document.createElement("div");
  confirmBox.classList.add("confirm-box");

  let messageBox = document.createElement("div");
  messageBox.classList.add("message-box");
  messageBox.textContent = message;
  confirmBox.appendChild(messageBox);

  let buttonBox = document.createElement("div");
  buttonBox.classList.add("button-box");
  messageBox.appendChild(buttonBox);

  let yesButton = document.createElement("button");
  yesButton.classList.add("yes-button");
  yesButton.textContent = "Yes";
  buttonBox.appendChild(yesButton);
  yesButton.addEventListener("click", YesButtonClick);

  let noButton = document.createElement("button");
  noButton.classList.add("no-button");
  noButton.textContent = "No";
  buttonBox.appendChild(noButton);
  noButton.addEventListener("click", NoButtonClick);

  function RemoveConfirmBox() {
    document.body.removeChild(confirmBox);
  }

  function YesButtonClick() {
    callback(true);
    RemoveConfirmBox();
  }

  function NoButtonClick() {
    callback(false);
    RemoveConfirmBox();
  }

  document.body.appendChild(confirmBox);
}

document.querySelector("#OpenBox").addEventListener("click", () => {
  showConfirm("Are you 18 ?", function (result) {
    if (result) {
      console.log("You Pressed Yes");
    } else {
      console.log("You Pressed No");
    }
  });
});
