import React, { useState, useEffect } from "react";
/* import PropTypes from "prop-types";
import { Header } from "./Header"; */
import { Piechart } from "./Piechart";
import { Legend } from "./Legend";
import "../css/u1planner.css";
import axios from "axios";
import {
  XYPlot,
  VerticalGridLines,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
  RadialChart,
} from "react-vis";

/**
 * U1 Planner user input form for baseline
 * @return {}
 */

// const baseURL = "http://localhost:5000";


// export const U1planner = ({ user, onLogin, onLogout, onCreateAccount }) => {
export const U1planner = () => {
  const [eucountry, setCountry] = useState("");
  // const [responseData, setResponseData] = useState("");
  const [emission, setEmissionData] = useState("");

  // const countrySelected = useRef();
  useEffect(() => {
    const jsonRaw = {
      country: "Finland",
    };
    const headers = {
      "Content-type": "application/json",
    };

    axios
      .post("http://localhost:5000/calc/emission", jsonRaw, headers)
      .then(function (response) {
        // eslint-disable-next-line no-console
        console.log(response);
        setEmissionData(response.data);
      })
      .catch(function (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <article>
      {/*   <Header
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      /> */}
      <section>
        <div>
          <h2>U1 PLANNER USER INPUT 1: BASELINE</h2>
        </div>
        <form>
          <div>
            <label htmlFor="year_selection"> Year</label>
            <select id="year_selection" name="year_selection">
              <optgroup label="Select year"></optgroup>
              <option value="year">2021</option>
            </select>
          </div>

          <div>
            <label htmlFor="eu_countries">Country</label>
            <select
              id="eu_countries"
              name="eu_countries"
              onChange={() => handleChange}
              // setCountry(e.target.value)}
              defaultValue={eucountry}
            >
              <optgroup label="Select country"></optgroup>
              <option value="Austria">Austria</option>
              <option value="Belgium">Belgium</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Croatia">Croatia</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czechia">Czechia</option>
              <option value="Denmark">Denmark</option>
              <option value="Estonia">Estonia</option>
              <option value="Finland">Finland</option>
              <option value="France">Austria</option>
              <option value="Germany">Germany</option>
              <option value="Greece">Greece</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="Ireland">Ireland</option>
              <option value="Italy">Italy</option>
              <option value="Latvia">Latvia</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Malta">Malta</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Norway">Malta</option>
            </select>
          </div>
          <div>
            <label htmlFor="population_assessment">
              Population of the assessment area
            </label>
            <input type="text" id="population_assessment" />
          </div>
          <br />

          <label>
            <b>U1.1 Settlement type</b>
          </label>
          <label>Share (%)</label>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" id="city" />
          </div>
          <div>
            <label htmlFor="suburban"> Suburban</label>
            <input type="text" id="suburban" />
          </div>
          <div>
            <label htmlFor="town">Town</label>
            <input type="text" id="town" />
          </div>
          <div>
            <label htmlFor="rural">Rural</label>
            <input type="text" id="rural" />
          </div>
          <Piechart />
          <br />
          <label>
            <b>U1.2 Area</b>
          </label>
          <label>Km</label>
          <div>
            <label htmlFor="ns_measure">N-S Measurement (km)</label>
            <input type="text" id="ns_measure" />
          </div>
          <div>
            <label htmlFor="ew_measure">E-W Measurement (km)</label>
            <input type="text" id="ew_measure" />
          </div>
          <br />
          <div>
            <label>
              <b>U1.2 Non-residential and freight</b>
            </label>
            <label></label>
          </div>
          <div>
            <label htmlFor="non_resident_road">
              {" "}
              Non-residential road transport
            </label>
            <select id="non_resident_road">
              <optgroup label="Select road transport intensity"></optgroup>
              <option value="very_limited">0.25</option>
              <option value="national_average_intensity">1.0</option>
              <option value="very_intensive">2.50</option>
            </select>
          </div>

          <div>
            <label htmlFor="freight=road">Freight transport by road</label>
            <select id="freight_road" name="freight_road">
              <optgroup label="Select freight road intensity"></optgroup>
              <option value="very_limited">0.25</option>
              <option value="national_average_intensity">1.0</option>
              <option value="very_intensive">2.50</option>
            </select>
          </div>
          <div>
            <label htmlFor="freight_rail">Freight transport by rail</label>
            <select id="freight_rail" name="freight_rail">
              <option value="very_limited">0.25</option>
              <option value="national_average_intensity">1.0</option>
              <option value="very_intensive">2.50</option>
            </select>
          </div>

          <div>
            <label htmlFor="freight_waterway">
              Freight transport by inland waterways
            </label>
            <select id="freight_waterway" name="freight_waterway">
              <option value="very_limited">0.25</option>
              <option value="national_average_intensity">1.0</option>
              <option value="very_intensive">2.50</option>
            </select>
          </div>

          <label>
            <b>Baseline - Transport CO2e emission 2021</b>
          </label>
          <div>
            <div>
              <div>
                <RadialChart
                  data={[
                    {
                      angle:
                        Math.round(
                          (emission.motor_coaches_buses_and_trolley_buses /
                            emission.total +
                            Number.EPSILON) *
                            36000
                        ) / 100,
                      label: "Buses",
                      color: "#8C0303",
                    },
                    {
                      angle:
                        Math.round(
                          (emission.metro / emission.total + Number.EPSILON) *
                            36000
                        ) / 100,
                      label: "Metro",
                      color:"#400D01",
                    },
                    {
                      angle:
                        Math.round(
                          (emission.passenger_trains / emission.total +
                            Number.EPSILON) *
                            36000
                        ) / 100,
                      label: "Passenger trains",
                      color:"#D90404",
                    },
                    {
                      angle:
                        Math.round(
                          (emission.road_freight / emission.total +
                            Number.EPSILON) *
                            36000
                        ) / 100,
                      label: "Road freight",
                      color:"#F21905",
                    },
                    {
                      angle:
                        Math.round(
                          (emission.passenger_cars / emission.total +
                            Number.EPSILON) *
                            36000
                        ) / 100,
                      label: "Passenger cars",
                      color:"#A6036D",
                    },
                    {
                      angle:
                        Math.round(
                          (emission.tram_light_train / emission.total +
                            Number.EPSILON) *
                            36000
                        ) / 100,
                      label: "Tram, light train",
                      color:"#03A688",
                    },
                    {
                      angle:
                        Math.round(
                          (emission.rail_freight / emission.total +
                            Number.EPSILON) *
                            36000
                        ) / 100,
                      label: "Rail freight",
                      color:"#80D941",
                    },
                    {
                      angle:
                        Math.round(
                          (emission.inland_waterways_freight / emission.total +
                            Number.EPSILON) *
                            36000
                        ) / 100,
                      label: "Inland waterways freight",
                      color:"#F2CE1B",
                    },
                  ]}
                  width={350}
                  height={350}
                  labelsAboveChildren={true}
                  labelsRadiusMultiplier={1.1}
                  labelsStyle={{
                    fontSize: 8,
                  }}
                  // showLabels
                />
              </div>
            </div>
            <div>
              <Legend />
            </div>
            <div></div>
          </div>
          <label>
            <b>Baseline - Transport CO2e emission/resident</b>
          </label>

          <div>
            <XYPlot xType="ordinal" width={1000} height={312} xDistance={200}>
              <HorizontalGridLines />
              <VerticalGridLines />
              <VerticalBarSeries
                className="BaselineBarchart"
                data={[
                  {
                    y:
                      Math.round(
                        (emission.motor_coaches_buses_and_trolley_buses +
                          Number.EPSILON) *
                          100
                      ) / 100,
                    x: "Buses",
                  },
                  {
                    y:
                      Math.round((emission.metro + Number.EPSILON) * 100) / 100,
                    x: "Metro",
                  },
                  {
                    y:
                      Math.round(
                        (emission.passenger_trains + Number.EPSILON) * 100
                      ) / 100,
                    x: "Passenger trains",
                  },
                  {
                    y:
                      Math.round(
                        (emission.road_freight + Number.EPSILON) * 100
                      ) / 100,
                    x: "Road freight",
                  },
                  {
                    y:
                      Math.round(
                        (emission.passenger_cars + Number.EPSILON) * 100
                      ) / 100,
                    x: "Passenger cars",
                  },
                  {
                    y:
                      Math.round(
                        (emission.tram_light_train + Number.EPSILON) * 100
                      ) / 100,
                    x: "Tram, light train",
                  },
                  {
                    y:
                      Math.round(
                        (emission.rail_freight + Number.EPSILON) * 100
                      ) / 100,
                    x: "Rail freight",
                  },
                  {
                    y:
                      Math.round(
                        (emission.inland_waterways_freight + Number.EPSILON) *
                          100
                      ) / 100,
                    x: "Inland waterways freight",
                  },
                  {
                    y:
                      Math.round((emission.total + Number.EPSILON) * 100) / 100,
                    x: "total emissions",
                  },
                ]}
              />
              <XAxis />
              <YAxis />
            </XYPlot>
          </div>
        </form>
      </section>
    </article>
  );
};
/* 
U1planner.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

U1planner.defaultProps = {
  user: null,
};
 */
