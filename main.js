addEventListener("load", async () => {
    let sw = await navigator.serviceWorker.register("/sw.js");
    console.log(sw)
})

async function subscribe() {
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: "BN6bSsnsvYOD35xp2oPVUaBQxJT4CCC0CYspiZdg7GIxNzxURRzzaUuhkBVgWRBidzsug1_5mU_mTvgXl_e-mXI"
    })

    console.log(JSON.stringify(push))
}