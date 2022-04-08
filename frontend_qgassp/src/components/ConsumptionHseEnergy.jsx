import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import "../css/u1planner.css";
import Chip from "@mui/material/Chip";
import { Button } from "./Button";
import { ConsumptionTransport } from "./ConsumptionTransport";
import PropTypes from "prop-types";

/**
 * Consumption house energy UI component
 * @return {}
 */
const ceYes = true;
const ceNo = false;
export const ConsumptionHseEnergy = ({
  districtProp,
  liquidsProp,
  solidsProp,
  gasesProp,
  districtValue,
}) => {
  const [nextCBTransport, setCbTransport] = useState(false);
  const [districtHeating, setDistrictHeating] = useState(0.0);
  const [liquidHeating, setLiquidHeating] = useState(0.0);
  const [solidsHeating, setSolidHeating] = useState(0.0);
  const [gasesHeating, setGasesHeating] = useState(0.0);
  const [valueDistrict, setValueDistrict] = useState(0.0);


  const [policyYear, setPolicyYear] = useState(0);
  const [newFloorArea, setNewFloorArea] = useState(0);
  const [popSizePolicy, setPopulationSizePolicy] = useState(0);
  const [effGain, setEffGain] = useState(false);
  const [effScaler, setEffScaler] = useState(0);
  const [localElectricity, setLocalElectricity] = useState(false);
  const [elType, setElectricityType] = useState(
    "Electricity by solar photovoltaic"
  );
  const [elScaler, setElectricityScaler] = useState(0);
  const [sHeating, setShareHeating] = useState(false);

  const [checked, setChecked] = useState(false);
  const handleBreakdownChange = (e) => {
    e.target.checked;
    setChecked(!checked);
  };

  const optionsCb = [];
  for (let i = 2022; i < 2051; i++) optionsCb.push(i);

  const handlePolicyYear = (e) => {
    e.preventDefault();
    setPolicyYear(Number(e.target.value));
  };

  const handleNewFloorArea = (e) => {
    e.preventDefault();
    setNewFloorArea(Number(e.target.value));
  };

  const handlePopSizePolicy = (e) => {
    e.preventDefault();
    setPopulationSizePolicy(Number(e.target.value));
  };

  const handleEffScaler = (e) => {
    e.preventDefault();
    setEffScaler(Number(e.target.value));
  };

  const handleElScaler = (e) => {
    e.preventDefault();
    setElectricityScaler(Number(e.target.value));
  };

  const handleDistrictProp = (e) => {
    e.preventDefault();
    setDistrictHeating(Number(e.target.value));
  };

  const handleLiquidsProp = (e) => {
    e.preventDefault();
    setLiquidHeating(Number(e.target.value));
  };

  const  handleSolidProp = (e) => {
    e.preventDefault();
    setSolidHeating(Number(e.target.value));
  };

  const handleGasesProp = (e) => {
    e.preventDefault();
    setGasesHeating(Number(e.target.value));
  };

  const  handleDistrictValue = (e) => {
    e.preventDefault();
    setValueDistrict(Number(e.target.value));
  };

  if (nextCBTransport === false) {
    return (
      <article>
        <section>
          <div>
            <Divider textAlign="left" flexItem>
              {" "}
              <Chip label="Household energy" />
            </Divider>
          </div>

          <div className="settlementDiv">
            <div className="div_transport">
              <label htmlFor="policy_year"> Policy implementation year</label>
              <select
                className="select_policy_start"
                id="policy_year"
                onChange={handlePolicyYear}
                defaultValue={policyYear}
                required
              >
                <option value="DefaultOption">Select year</option>

                {optionsCb.map((option) => (
                  <option key={option} value={option}>
                    {option}{" "}
                  </option>
                ))}
              </select>
            </div>

            <div className="div_transport">
              <label htmlFor="population_size" className="settle_label">
                Total new population size
              </label>
              <input
                className="input_occupancy"
                type="number"
                id="population_size"
                onChange={handlePopSizePolicy}
                defaultValue={popSizePolicy}
                required
              />
            </div>
            <div className="div_transport">
              <label>
                <b>Construction</b>
              </label>
              <label></label>
            </div>

            <div className="div_transport">
              <label htmlFor="new_floor_area" className="settle_label">
                Size of new residential buildings (gross SQM)
              </label>
              <input
                className="input_occupancy"
                type="number"
                id="new_floor_area"
                name="new_floor_area"
                onChange={handleNewFloorArea}
                defaultValue={newFloorArea}
                required
              />
            </div>

            <div className="div_transport">
              <label>
                <b>Household heating energy efficiency</b>
              </label>
              <label></label>
            </div>
            <div className="div_transport">
              <label htmlFor="eff_gain">
                Do you want “Household energy efficiency”?
              </label>
              <select
                className="hse_energy options"
                id="eff_gain"
                onChange={(e) => setEffGain(e.target.value)}
                defaultValue={effGain}
              >
                <option value="DefaultOption">Select an option</option>
                <option value={ceYes}>Yes</option>
                <option value={ceNo}>No</option>
              </select>
            </div>
            <div className="div_transport">
              <label htmlFor="eff_scaler" className="settle_label">
                <b>% </b>energy reduction of household heating &#38; cooling
              </label>
              <input
                className="input_occupancy"
                type="number"
                id="eff_scaler"
                onChange={handleEffScaler}
                defaultValue={effScaler}
                min="0"
                max="100"
                required
              />
            </div>
            <div className="div_transport">
              <label>
                <b>Energy production</b>
              </label>
              <label></label>
            </div>

            <div className="div_transport">
              <label htmlFor="local_electricity">
                Consider local electricity production?
              </label>
              <select
                className="prod_energy_options"
                id="local_electricity"
                onChange={(e) => setLocalElectricity(e.target.value)}
                defaultValue={localElectricity}
              >
                <option value="DefaultOption">Select an option</option>
                <option value={ceYes}>Yes</option>
                <option value={ceNo}>No</option>
              </select>
            </div>

            <div className="div_transport">
              <label htmlFor="el_type">
                What is the source of local electricity production?
              </label>
              <select
                className="local_energy_elec"
                id="el_type"
                onChange={(e) => setElectricityType(e.target.value)}
                defaultValue={elType}
              >
                <option value="DefaultOption">Select source</option>
                <option value="Electricity by coal">Electricity by coal</option>
                <option value="Electricity by gas">Electricity by gas</option>
                <option value="Electricity by nuclear">
                  Electricity by nuclear
                </option>
                <option value="Electricity by hydro">
                  Electricity by hydro
                </option>
                <option value="Electricity by wind">Electricity by wind</option>
                <option value="Electricity by petroleum and other oil derivatives">
                  Electricity by petroleum and other oil derivatives
                </option>
                <option value="Electricity by biomass and waste">
                  Electricity by biomass and waste
                </option>
                <option value="Electricity by solar photovoltaic">
                  Electricity by solar photovoltaic
                </option>
                <option value="Electricity by solar thermal">
                  Electricity by solar thermal
                </option>
                <option value="Electricity by tide, wave, ocean">
                  Electricity by tide, wave, ocean
                </option>
                <option value="Electricity by Geothermal">
                  Electricity by Geothermal
                </option>
                <option value="Electricity nec">No Electricity</option>
              </select>
            </div>

            <div className="div_transport">
              <label htmlFor="electricity_scaler" className="settle_label">
                What % of demand is covered by this new source?
              </label>
              <input
                className="input_occupancy"
                type="number"
                id="electricity_scaler"
                onChange={handleElScaler}
                defaultValue={elScaler}
                min="0"
                max="100"
                placeholder="0-100 %"
                required
              />
            </div>

            <div className="div_transport">
              <label htmlFor="s_heating">
                Consider changes in the heating share?
              </label>
              <select
                className="heat_share_options"
                id="s_heating"
                onChange={(e) => setShareHeating(e.target.value)}
                defaultValue={sHeating}
              >
                <option value="DefaultOption">Select an option</option>
                <option value={ceYes}>Yes</option>
                <option value={ceNo}>No</option>
              </select>
            </div>

            <br />
            {sHeating==="true" &&
            <>
            <Divider textAlign="left" flexItem>
              {" "}
              <b>Sustainable heating </b>
            </Divider>
            <br />
            <div className="div_breakdown">
              <label htmlFor="source_breakdown">
                <b>Select to view breakdown of heating sources in the area</b>
              </label>
              <input
                className="checkbox_cb"
                type="checkbox"
                id="source_breakdown"
                checked={checked}
                onChange={handleBreakdownChange}
              />
            </div>
            
            </>
            }

            

            {checked && sHeating==="true"&&(
              <>
                <div className="div_heating">
                  <label htmlFor="district_heating" className="settle_label">
                    District heating
                  </label>
                  <input
                    className="input_occupancy"
                    type="number"
                    id="district_heating"
                    onChange={handleDistrictProp} 
                    defaultValue={
                      Math.round((districtProp + Number.EPSILON) * 100) / 100
                    }
                  />
                </div>

                <div className="div_heating">
                  <label htmlFor="liquid_heating" className="settle_label">
                    Liquid heating
                  </label>
                  <input
                    className="input_occupancy"
                    type="number"
                    id="liquid_heating"
                    onChange={handleLiquidsProp} 
                    defaultValue={
                      Math.round((liquidsProp + Number.EPSILON) * 100) / 100
                    }
                  />
                </div>
                <div className="div_heating">
                  <label htmlFor="solid_heating" className="settle_label">
                    Solid heating
                  </label>
                  <input
                    className="input_occupancy"
                    type="number"
                    id="solid_heating"
                    onChange={handleSolidProp} 
                    defaultValue={
                      Math.round((solidsProp + Number.EPSILON) * 100) / 100
                    }
                  />
                </div>

                <div className="div_heating">
                  <label htmlFor="gas_heating" className="settle_label">
                    Liquid heating
                  </label>
                  <input
                    className="input_occupancy"
                    type="number"
                    id="gas_heating"
                     onChange={handleGasesProp}
                    defaultValue={
                      Math.round((gasesProp + Number.EPSILON) * 100) / 100
                    }
                  />
                </div>
                <div className="div_heating">
                  <label htmlFor="district_value" className="settle_label">
                    District value
                  </label>
                  <input
                    className="input_occupancy"
                    type="number"
                    id="district_value"
                     onChange={handleDistrictValue}
                    defaultValue={
                      Math.round((districtValue + Number.EPSILON) * 100) / 100
                    }
                  />
                </div>
              </>
            )}
          </div>
          {policyYear > 0 && popSizePolicy>0 && newFloorArea>0 && (
            <div className="nextCBQ">
              <Button
                size="small"
                value="charts"
                onClick={() => setCbTransport(true)}
                label="Next &raquo;"
                primary
              />
            </div>
          )}
        </section>
      </article>
    );
  } else {
    return (
      <ConsumptionTransport
        policyYear={policyYear}
        newFloorArea={newFloorArea}
        popSizePolicy={popSizePolicy}
        effGain={effGain}
        effScaler={effScaler}
        localElectricity={localElectricity}
        elType={elType}
        elScaler={elScaler}
        sHeating={sHeating}
        districtProp={districtHeating}
        liquidsProp={liquidHeating}
        solidsProp={solidsHeating}
        gasesProp={gasesHeating}
        districtValue={valueDistrict}
      />
    );
  }
};

ConsumptionHseEnergy.propTypes = {
  districtProp: PropTypes.number.isRequired,
  liquidsProp: PropTypes.number.isRequired,
  solidsProp: PropTypes.number.isRequired,
  gasesProp: PropTypes.number.isRequired,
  districtValue: PropTypes.number.isRequired,
};
