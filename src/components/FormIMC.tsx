import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface FormIMCProps {
  height: string;
  weight: string;
  onHeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onWeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormIMC: React.FC<FormIMCProps> = ({
  height,
  weight,
  onHeightChange,
  onWeightChange,
}) => {
  return (
    <div className="container d-flex justify-content-center">
      <form action="" className="d-flex">
        <div className="d-flex flex-column align-items-center m-3">
          <label htmlFor="height" className="fw-bolder fs-5 font-monospace">
            Height (cm):
          </label>
          <input
            type="number"
            name="height"
            id="height"
            value={height}
            onChange={onHeightChange}
            min="0"
            max="300"
            step="0.1"
            className="form-control"
          />
        </div>
        <div className="d-flex flex-column align-items-center m-3">
          <label htmlFor="weight" className="fw-bolder fs-5 font-monospace">
            Weight (kg):
          </label>
          <input
            type="number"
            name="weight"
            id="weight"
            value={weight}
            onChange={onWeightChange}
            min="0"
            max="500"
            step="0.1"
            className="form-control"
          />
        </div>
      </form>
    </div>
  );
};

export default FormIMC;
