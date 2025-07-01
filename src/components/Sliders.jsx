import clsx from "clsx";
import { forwardRef } from "react";
import Button from "./ui/Button";

const imagePath = import.meta.env.BASE_URL;

const Sliders = forwardRef(({ className, onPrev, onNext }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx("w-fit h-fit px-4 py-3 absolute flex items-center gap-8 bg-white shadow rounded-full", className)}
    >
      <Button ariaLabel="Previous" onClick={onPrev}>
        <img src={`${imagePath}/icon-prev.svg`} alt="" />
      </Button>
      <Button ariaLabel="Next" onClick={onNext}>
        <img src={`${imagePath}/icon-next.svg`} alt="" />
      </Button>
    </div>
  );
});


Sliders.displayName = "Sliders";

export default Sliders;
