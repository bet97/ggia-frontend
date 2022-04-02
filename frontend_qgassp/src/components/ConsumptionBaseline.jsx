import React, { useState } from "react";
import "../css/startpage.css";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import "../css/u1planner.css";
import { Button } from "./Button";
import { ConsumptionBaselineResults } from "./ConsumptionBaselineResults";
import { useStorageInt, useStorageString } from "../reducers/useStorage";

export const ConsumptionBaseline = () => {
  const [nextShowCharts, setNextShow] = useState(false);

  const [areaType, setAreaType] = useStorageString("areaType","");
  const [houseSize, setHouseSize] = useStorageInt("houseSize",0);
  const [incomeChoice, setIncomeChoice] = useStorageInt("incomeChoice",0);
  const [effScalerInitial, setEffScalerInitial] =useStorageString("effScalerInitial","normal");

  const handleHouseSize = (e) => {
    e.preventDefault();
    setHouseSize(Number(e.target.value));
  };

  const handleIncomeChoice = (e) => {
    e.preventDefault();
    setIncomeChoice(Number(e.target.value));
  };


  const showConsumptionBaseline = () => {
    setNextShow(true);
  };

  if (nextShowCharts === false) {
    return (
      <>
        <br />
        {/*  <div className="settlementDiv">
          <CbBreadcrumb />
        </div> */}
        <article>
          <br />
          <div>
            <Divider textAlign="left" flexItem>
              {" "}
              <Chip label="Area and type population" />
            </Divider>
          </div>
          <section>
            <form onSubmit={showConsumptionBaseline}>
              <div className="settlementDiv">
                <div className="div_transport">
                  <label>
                    <b>Area type</b>
                  </label>
                  <label></label>
                </div>
                <div className="div_transport">
                  <label htmlFor="select_planned_area">
                    {" "}
                    Planned area type
                  </label>
                  <select
                    className="select_planned_area"
                    id="select_planned_area"
                    onChange={(e) => setAreaType(e.target.value)}
                    defaultValue={areaType}
                  >
                    <option value="DefaultOption">Select area type</option>
                    <optgroup label="Planned area types">
                      <option value="average">average/mix</option>
                      <option value="city">city</option>
                      <option value="town">town</option>
                      <option value="rural">rural</option>
                    </optgroup>
                  </select>
                </div>

                <div className="div_transport">
                  <label htmlFor="house_size" className="settle_label">
                    Average house occupancy level
                  </label>
                  <input
                    className="input_occupancy"
                    type="number"
                    pattern="[0-9]*"
                    min="0"
                    id="house_size"
                    onChange={handleHouseSize}
                    defaultValue={houseSize}
                    placeholder={houseSize}
                    required
                  />
                </div>

                <div className="div_transport">
                  <label htmlFor="income_choice">
                    Average income level of households
                  </label>
                  <select
                    className="select_transport"
                    id="income_choice"
                    name="income_choice"
                    onChange={handleIncomeChoice}
                    defaultValue={incomeChoice}
                   
                  >
                    <option value="DefaultOption">Select Income </option>
                    <optgroup label="Household income levels">
                      <option value="0">3rd_household</option>
                      <option value="1">Bottom 20%</option>
                      <option value="5">Top 20 %</option>
                      <option value="2">20-40 %</option>
                      <option value="3">40-60%</option>
                      <option value="4">60-80 %</option>
                      <option value="3">average/unknown</option>
                    </optgroup>
                  </select>
                </div>

                <div className="div_transport">
                  <label
                    htmlFor="decarbonization_percent"
                    className="settle_label"
                  >
                    Expected rate of global decarbonisation? (%)
                  </label>
                  <select
                    className="select_transport"
                    id="decarbonization_percent"
                    name="decarbonization_percent"
                    onChange={(e) => setEffScalerInitial(e.target.value)}
                    defaultValue={effScalerInitial}
                  >
                    <option value="DefaultOption">Select rate %</option>
                    <optgroup label="Global decarbonisation %">
                      <option value="normal">Normal</option>
                      <option value="fast">fast</option>
                      <option value="slow">slow</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <div className="nextCBQ">
                <Button
                  size="small"
                  value="charts"
                  onClick={() => setNextShow(true)}
                  label="Next &raquo;"
                  primary
                />
              </div>
            </form>
            <br />
          </section>
        </article>
      </>
    );
  } else {
    return (
      <ConsumptionBaselineResults
        areaType={areaType}
        houseSize={houseSize}
        incomeChoice={incomeChoice}
        effScalerInitial={effScalerInitial}
      />
    );
  }
};
// parseInt(string: string, radix?: number)
