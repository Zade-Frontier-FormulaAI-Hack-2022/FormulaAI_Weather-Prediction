AOS.init({
  duration: 1200,
})

// $('#myCarousel').carousel();



// function includeHTML() {
//   var z, i, elmnt, file, xhttp;
//   /* Loop through a collection of all HTML elements: */
//   z = document.getElementsByTagName("*");
//   for (i = 0; i < z.length; i++) {
//     elmnt = z[i];
//     /*search for elements with a certain atrribute:*/
//     file = elmnt.getAttribute("w3-include-html");
//     if (file) {
//       /* Make an HTTP request using the attribute value as the file name: */
//       xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function() {
//         if (this.readyState == 4) {
//           if (this.status == 200) {elmnt.innerHTML = this.responseText;}
//           if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
//           /* Remove the attribute, and call this function once more: */
//           elmnt.removeAttribute("w3-include-html");
//           includeHTML();
//         }
//       }
//       xhttp.open("GET", file, true);
//       xhttp.send();
//       /* Exit the function: */
//       return;
//     }
//   }
// }


function applyCodeColors()
{
  console.log("inhere");
  // get all code tags
  var codeTags = document.getElementsByTagName('code');
  for (var i = 0; i < codeTags.length; i++) {
    // change background color with !important
    var codeTag = codeTags[i];
    if (i % 3 == 0) {
      codeTag.setAttribute('style', 'background: rgb(192,164,165); background: radial-gradient(circle, rgba(192,164,165,0.35) 13%, rgba(253,182,146,0.35) 100%);');
    }
    else if (i % 3 == 1) {
      codeTag.setAttribute('style', 'background: rgb(238,174,202); background: radial-gradient(circle, rgba(238,174,202,0.4) 0%, rgba(148,187,233,0.4) 100%);');
    }
    else if (i % 3 == 2) {
      codeTag.setAttribute('style', 'background: linear-gradient(90deg, rgba(154,202,164,1) 0%, rgba(241,227,166,1) 50%, rgba(236,236,236,1) 100%) !important; border: 3px solid rgb(230, 252, 252) !important;');
    }

  }
}

applyCodeColors();
