    const modelViewer2 = document.querySelector('#model-viewer');

    document.body.addEventListener('mousemove', (event) => {
        // Get the mouse position relative to the body width and height
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const bodyWidth = document.body.offsetWidth;
        const bodyHeight = document.body.offsetHeight;

        // Normalize the mouse position to get values between -1 and 1
        const normalizedX = (mouseX / (bodyWidth / 2)) - 1;
        const normalizedY = (mouseY / (bodyHeight / 2)) - 2;

        // Convert the normalized mouse positions to azimuthal and polar angles
        const azimuthalAngle = normalizedX * -90; // Horizontal rotation
        const polarAngle = normalizedY * -90;      // Vertical rotation (limiting to 90 degrees for better view)

        // Set the camera's rotation based on the mouse position
        modelViewer2.cameraOrbit = `${azimuthalAngle}deg ${polarAngle}deg auto`;
    });

document.addEventListener('DOMContentLoaded', function() {
    // Get the model-viewer element
    const modelViewer = document.getElementById('model-viewer');

    if (!modelViewer) {
        console.error('Model viewer element not found!');
        return;
    }

    modelViewer.addEventListener('load', function() {
        // Get the list of available animations
        const availableAnimations = modelViewer.availableAnimations;

        // Loop through the available animations and map them to the hover divs
        for (let i = 0; i < availableAnimations.length; i++) {
            const divElement = document.getElementById((i + 1).toString());
            if (divElement) {
                divElement.addEventListener('mouseover', function() {
                    modelViewer.setAttribute('animation-name', availableAnimations[i]);
                });
            } else {
                console.error(`Div with id ${i + 1} not found!`);
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("recent-work-toggle");
  const list = document.getElementById("recent-work-list");

  toggle.addEventListener("click", () => {
    if (list.classList.contains("open")) {
      list.style.maxHeight = "0px"; // Collapse the list
      list.style.opacity = "0";
      list.classList.remove("open");
      toggle.textContent = "Recent Work ▼";
    } else {
      list.style.maxHeight = list.scrollHeight + "px"; // Expand the list
      list.style.opacity = "1";
      list.classList.add("open");
      toggle.textContent = "Recent Work ▲";
    }
  });
});



