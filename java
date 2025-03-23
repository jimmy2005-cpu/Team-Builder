gsap.to([cordWrapper, ribbon], {
  opacity: 0,
  duration: 0.5,
  onComplete: () => {
    cordWrapper.style.display = "none";
    ribbon.style.display = "none";
  }
});
mvn test