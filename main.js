addEventListener("load", () => {
    let sw = navigator.serviceWorker.register("./sw.js");
    console.log(sw)
})

function subscribe() {
    let sw = navigator.serviceWorker.ready;
    let push = sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: "BN6bSsnsvYOD35xp2oPVUaBQxJT4CCC0CYspiZdg7GIxNzxURRzzaUuhkBVgWRBidzsug1_5mU_mTvgXl_e-mXI"
    })

    console.log(JSON.stringify(push))
}