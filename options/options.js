const timeOption = document.querySelector("#timer-option");
timeOption.addEventListener("change", (e) => {
    const val = e.target.value;
    if(val < 1 || val > 60){
        timeOption.value = 25;
    }
});

const saveBtn = document.querySelector("#save-btn");
saveBtn.addEventListener("click", () => {
    chrome.storage.local.set({
        timer: 0,
        timeOption: timeOption.value,
        isRunning: false,
    })
});

chrome.storage.local.get(["timeOption"], (res) => {
    timeOption.value = res.timeOption;
})