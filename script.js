//your JS code here. If required.
function fontSetting(){
	const fontsize = document.getElementById("fontsize").value;
    const fontcolor = document.getElementById("fontcolor").value;

document.cookie = `fontsize=${fontsize}`;
document.cookie = `fontcolor=${fontcolor}`;

document.documentElement.style.setProperty("--fontsize", `${fontsize}px`);
document.documentElement.style.setProperty("--fontcolor", fontcolor);
}
function loadFontSettings() {
    const fontsizeCookie = document.cookie.match(/fontsize=([^;]*)/);
    const fontcolorCookie = document.cookie.match(/fontcolor=([^;]*)/);

    if (fontsizeCookie && fontcolorCookie) {
        const fontsize = fontsizeCookie[1];
        const fontcolor = fontcolorCookie[1];

        // Update font size and color variables
        document.documentElement.style.setProperty("--fontsize", `${fontsize}px`);
        document.documentElement.style.setProperty("--fontcolor", fontcolor);

        // Update form fields with cookie values
        document.getElementById("fontsize").value = fontsize;
        document.getElementById("fontcolor").value = fontcolor;
    }
}

// Add event listener for form submission
document.getElementById("font-settings").addEventListener("submit", (event) => {
    event.preventDefault();
    fontSettings();
});

// Load font settings from cookies on page load
loadFontSettings();