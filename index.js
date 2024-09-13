(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node, CommonJS-like
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.reactshadow = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  return function reactshadow(options) {
    let images = document.querySelectorAll(".react-shadow");
    if (options.shadow_type === "hard") options.shadow_type = "0px";
    else options.shadow_type = "15px";

    images.forEach((image) => {
      image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

      if (options.padding) {
        image.style.padding = `1em`;
      }
    });
  };
});
