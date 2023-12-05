 const config = {
  startAt: 0,
  type:"slider",
  perView: 4,
  slidesToScroll: 3,
  gap:30,
  rewind:false,
  animationDuration:400,
  breakpoints: {
      768: {
          perView:2,
          slidesToScroll: 1,
 
      },
      1025: {
          perView:3,
          slidesToScroll: 3,
      }
  }
};
const sliders = document.querySelectorAll('.glide');

for (var i = 1; i < sliders.length; i++) {
  function DisableControls(Glide, Components, Events) {
    const PREV_CONTROL_SELECTOR = "[data-glide-dir='|<']";
    const NEXT_CONTROL_SELECTOR = "[data-glide-dir='|>']";
    const component = {
      buildAfter() {
        this.prevBtn = Components.Html.root.querySelector(PREV_CONTROL_SELECTOR);
        this.nextBtn = Components.Html.root.querySelector(NEXT_CONTROL_SELECTOR);
      },
      handleDisable() {
        const perView = Glide.settings.perView;
        const slidesCount = Components.Html.slides.length;

        this.prevBtn.disabled = (Glide.index <= 0);
        this.nextBtn.disabled = (Glide.index >= slidesCount - perView);
      },
    };

    Events.on("build.after", function () {
      component.buildAfter();
      component.handleDisable();
    });
    Events.on("run.after", function () {
      component.handleDisable();
    });
    return component;
}
new Glide(sliders[i],config).mount({ DisableControls: DisableControls })
}
