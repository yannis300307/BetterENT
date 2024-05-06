function onPageLoad() {
    const audioRecorders = document.getElementsByClassName("js-audio-recorder")
    if (document.getElementsByClassName("js-audio-recorder").length > 0) {
        for (let i = 0; i < audioRecorders.length; i++) {
            const element = audioRecorders[i];
            
            var importFieldDiv = document.createElement("div");

            importFieldDiv.style = "width: 100%; outline: 1px grey; border-radius: 3px; padding: 30px; border-style: dashed;";
            importFieldDiv.setAttribute("ondrop", "dropHandler(event)");

            importFieldDiv.innerHTML=
            '<label for="betterent-import-mp3">Choisissez un mp3 personnalisé : </label> <input type="file" id="betterent-import-mp3" name="betterent-import-mp3" accept="audio/mp3" />'

            element.parentElement.append(importFieldDiv);
        }
}
}

function dropHandler(ev) {
    console.log("File(s) dropped");
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  }
  

onPageLoad();
