console.log("connected")

const hippocampToggle = document.querySelector("#hippocamp2-toggle");
const hippocampLabel = document.querySelector("#hippocamp2-label");

if (hippocampToggle && hippocampLabel) {
    const syncHippocampLabel = () => {
        hippocampLabel.classList.toggle("hidden", !hippocampToggle.checked);
    };

    hippocampToggle.addEventListener("change", syncHippocampLabel);
    syncHippocampLabel();
}