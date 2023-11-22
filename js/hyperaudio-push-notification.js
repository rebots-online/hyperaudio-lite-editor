Notification.requestPermission().then(perm => {
    console.log('permission: ', perm)
})


const notifyTranscriptionReady = () => {
    let notification = new Notification("Your Hyperaudio transcript is ready!", {
        body: "Click here to see your transcript."
    })

    notification.onclick = () => {
    window.parent.parent.focus();
    }

}

window.document.addEventListener('hyperaudioInit', notifyTranscriptionReady, false);