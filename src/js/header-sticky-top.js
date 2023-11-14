class HeaderStickyTop {
  enable() {
    const hasVariantTransparent = document.querySelector(".navbar-transparent");

    window.addEventListener(
      "scroll",
      function () {
        const currentPosition = this._getCurrentPosition();

        if (currentPosition > 400) {
          if (hasVariantTransparent) {
            document
              .getElementsByClassName("navbar")[0]
              .classList.remove("navbar-transparent");
          }

          document
            .getElementsByClassName("navbar")[0]
            .classList.add("sticky-top");
          return;
        }

        document
          .getElementsByClassName("navbar")[0]
          .classList.remove("sticky-top");

        if (hasVariantTransparent) {
          document
            .getElementsByClassName("navbar")[0]
            .classList.add("navbar-transparent");
        }
      }.bind(this)
    );
  }

  _getCurrentPosition() {
    return document?.documentElement?.scrollTop ?? 0;
  }
}

export default HeaderStickyTop;
