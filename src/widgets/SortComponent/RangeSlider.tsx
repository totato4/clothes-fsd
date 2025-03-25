/* eslint-disable @typescript-eslint/no-explicit-any */
import { Slider } from "@mui/material";

type props = {
  updateRange: any;
  RangeVal: number[];
};

const RangeSlider: React.FC<props> = ({ updateRange, RangeVal }) => {
  return (
    <div className="w-full flex justify-center">
      <Slider
        value={RangeVal}
        onChange={updateRange}
        defaultValue={[0, 10000]}
        min={0}
        max={10000}
        valueLabelDisplay="auto"
        sx={{ width: 190, color: "#F8991D" }}
      />
    </div>
  );
};

export default RangeSlider;
