function run() {
    let htmlCode = document.getElementById('html-code').value;
    let cssCode = document.getElementById('css-code').value;
    let jsCode = document.getElementById('js-code').value;
    let output = document.getElementById('output');
    const consoleOutput = document.getElementById('console');

    // Clear the previous output
    output.innerHTML = '';
    // consoleOutput.textContent = ''; // Clear previous console output
    // console.log("This is example" + consoleOutput)
    // // Create a custom logger function
    // function customLogger(message) {
    //     return consoleOutput.textContent += message + '\n';
    // }

    // // // Save the original console.log function
    // // const originalConsoleLog = console.log;

    // // Override console.log with the custom logger
    // console.log = customLogger;

    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
    consoleOutput.innerHTML = console.message;
    console.log(console.message)

    // try {
    //     output.contentWindow.eval(jsCode);
    //     // Create a script element to execute the JavaScript code
    //     var script = document.createElement('script');
    //     script.textContent = `
    //                 (function() {
    //                     try {
    //                         ${jsCode}
    //                     } catch (error) {
    //                         console.error(error);
    //                     }
    //                 })();
    //             `;

    //     // Append the script to the document
    //     document.body.appendChild(script);
    // } catch (error) {
    //     console.error(error);
    //     output.innerHTML = "Error: " + error.message;
    // }
    // // finally {
    // //     // Restore the original console.log function
    // //     console.log = originalConsoleLog;
    // // }
}






