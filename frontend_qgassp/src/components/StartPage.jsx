import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import "../css/startpage.css";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import axios from "axios";
import { useStorageInt, useStorageString } from "../reducers/useStorage";
import urlPrefix from "../Config";
/* import { TransportBaseline } from "./TransportBaseline";
import { LandUseChangeTableForm } from "./LandUseChangeTableForm";
import { ConsumptionBaseline } from "./ConsumptionBaseline"; */
// new Date().getFullYear()
export const StartPage = () => {
 /*  const toggleState = localStorage.getItem("toggleState"); */
  const [country, setCountry] = useStorageString("country", "");
  const [year, setYear] = useStorageInt("year", 0);
  const [population, setPopulation] = useStorageInt("population", 0);
  const currentPop = population;
  const [nextModule, setNextModule] = useState(false);
  const [euCountries, setEuCountries] = useState([]);
  const [errorStartPage, setCountriesError] = useState("");

  const options = [];
  for (let i = 2022; i < 2051; i++) options.push(i);

  useEffect(() => {
    localStorage.setItem("nextModule", nextModule);
  }, [nextModule]);

  const handleSelected = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };

  const handlePopulation = (e) => {
    e.preventDefault();
    setPopulation(Number(e.target.value));
  };

  const handleSelectedYear = (e) => {
    e.preventDefault();
    setYear(Number(e.target.value));
  };
  const clearLocalStorage = (e) => {
    e.preventDefault();
    window.localStorage.clear(); 
    setCountry("");
    setPopulation(0);
    setYear(0);
  };

  const startBaseline = () => {
    setNextModule(true);
    /* if (nextModule && toggleState == 2) {
      return <TransportBaseline />;
    } else if (nextModule && toggleState == 3) {
      return <LandUseChangeTableForm />;
    } else if (nextModule && toggleState == 5) {
      return <ConsumptionBaseline />;
    } */
  };

  useEffect(async () => {
    axios
      .get(urlPrefix + "/api/v1/countries")
      .then((response) => setEuCountries(response.data.data.countries))
      .catch((error) => {
        setCountriesError({ errorMessage: error.message });
        // eslint-disable-next-line no-console
        console.error(
          "Eu countries Response data error - url " + urlPrefix + "---",
          errorStartPage
        );
      });
  }, []);

  /*  if (nextModule === false) { */
  return (
    <>
      <article>
        <br />
        <div>
          <Divider textAlign="left" flexItem>
            {" "}
            <Chip label="ASSESSMENT AREA INFORMATION" />
          </Divider>
        </div>

        <div className="row_start">
          <div className="column_start">
            <header className="intro_header">
              <h1 id="title" className="header_start">
                Fill in the basic information
              </h1>
            </header>

            <form onSubmit={startBaseline}>
              <div className="form-group">
                <label htmlFor="year_selection" className="intro_label">
                  Year
                </label>
                <select
                  id="year_selection"
                  name="year_selection"
                  className="baseline_select"
                  onChange={handleSelectedYear}
                  value={year}
                  defaultValue="Select year"
                  required
                >
                  <option value="DefaultOption">Select year</option>

                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}{" "}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="eu_countries" className="intro_label">
                  Country
                </label>
                <select
                  className="baseline_select"
                  id="eu_countries"
                  name="eu_countries"
                  onChange={handleSelected}
                  value={country}
                  defaultValue="Select country"
                  required
                >
                  <option value="DefaultOption">Select country</option>
                  {euCountries.map((country) => (
                    <option key={country} value={country}>
                      {country}{" "}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="population_assessment" className="intro_label">
                  Assessment area population
                </label>
                <input
                  type="number"
                  pattern="[0-9]*"
                  id="population_assessment"
                  className="population"
                  value={population}
                  min="0"
                  onChange={handlePopulation}
                  required
                />
              </div>
              <div className="next_u1">
                <Button
                  size="small"
                  type="submit"
                  value="Submit"
                  label="Set baseline"
                  primary="true"
                />
              </div>
              <br/>
              <div className="reset_button" >
                <Button
                  size="small"
                  onClick={clearLocalStorage}
                  label="Reset baseline"
                  primary="true"
                />
              </div>
            </form>
          </div>
         

          <Divider orientation="vertical" flexItem></Divider>

          <div className="column_start">
            <header className="intro_header">
              <h1 id="title" className="header_start">
                Create local data-set
              </h1>
            </header>
            <div>
              <form>
                <div className="form-group">
                  <label htmlFor="eu_countries" className="intro_label">
                    Country&apos;s local data-set
                  </label>
                  <select
                    className="baseline_select"
                    id="eu_countries_dataset"
                    name="eu_countries_dataset"
                    defaultValue="Select country"
                    required
                  >
                    <option value="DefaultOption">Select country</option>
                    {euCountries.map((country) => (
                      <option key={country} value={country}>
                        {country}{" "}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="local_dataset">
                  <Button size="small" label="Set baseline" primary="true" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </article>
    </>
  );
  /* } else {
    return (
      <TransportBaseline
        country={country}
        year={year}
        population={population}
      />
    );
  } */
};
