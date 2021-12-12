function getThumbnail() {
    currenturl=window.location.href
    urlsplit=currenturl.split('watch?v=')[1].split("&")
    link="https://i3.ytimg.com/vi/"+urlsplit[0]+"/maxresdefault.jpg"
    window.open(link,'_blank').focus();
}
function scrFunc() {
    var canvas = document.createElement('canvas');
    var video = document.querySelector('video');
    var ctx = canvas.getContext('2d');

    // Change the size here
    canvas.width = parseInt(video.offsetWidth);
    canvas.height = parseInt(video.offsetHeight);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Won't work on file:/// URLs. SecurityError: Tainted canvases may not be exported.
    var base64ImageData = canvas.toDataURL('image/jpeg');
    var filename = 'snap-' + canvas.width + 'x' + canvas.height + '-' + video.currentTime + '.jpg';

    // Wrap <img> in link to download image because 
    // the context menu Save Image as... is blocked for security reasons
    var a = document.createElement('a');
    a.download = filename;
    a.href = base64ImageData;

    var img = document.createElement('img');
    img.src = base64ImageData;
    img.alt = filename;
    img.title = 'Click to save ' + filename;

    window.open().document.body.appendChild(a).appendChild(img);
};
function AddButtons() {
    var ytpRightControls = document.getElementsByClassName("ytp-right-controls")[0];
    if (ytpRightControls) {
        ytpRightControls.prepend(screenshotButton);
        ytpRightControls.prepend(thumbnailButton);
    }
}
var screenshotButton = document.createElement("button");
screenshotButton.className = "screenshotButton ytp-button";
screenshotButton.style.width = "auto";
screenshotButton.style.paddingLeft = "5px";
screenshotButton.style.paddingRight = "5px";
screenshotButton.innerHTML = "Screenshot";
screenshotButton.style.cssFloat = "left";
screenshotButton.onclick = scrFunc;
var thumbnailButton = document.createElement("button");
thumbnailButton.className = "thumbnailButton ytp-button";
thumbnailButton.style.width = "auto";
thumbnailButton.innerHTML = "Thumbnail";
thumbnailButton.style.cssFloat = "left";
thumbnailButton.onclick = getThumbnail;
AddButtons()