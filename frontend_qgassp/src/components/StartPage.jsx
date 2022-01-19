import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import { Header } from "./Header";
import { U1planner } from "./U1planner";
import "../css/startpage.css";

const isNumber = "[0-9]*";
export const StartPage = ({ user, onLogin, onLogout, onCreateAccount }) => {
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [population, setPopulation] = useState("");
  const [next, setNext] = useState(false);

  const handleSelected = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };

  const handlePopulation = (e) => {
    e.preventDefault();
    if (e.target.value.test(isNumber)) {
      setPopulation(e.target.value);
    }
  };

  const handleSelectedYear = (e) => {
    e.preventDefault();
    setYear(e.target.value);
  };

  const startBaseline = () => {
      setNext(true);
  };

  if (next === false ) {
    return (
      <article>
        {
          <Header
            user={user}
            onLogin={onLogin}
            onLogout={onLogout}
            onCreateAccount={onCreateAccount}
          />
        }
        <div className="intro_main">
          <section>
            <header className="intro_header">
              <h1 id="title" className="intro_h1">
                <b>Select country for assessment</b>
              </h1>
            </header>

            <form id="impact_start_form"  onSubmit={startBaseline}>
              <div className="form-group">
                <label htmlFor="year_selection" className="intro_label">
                  Year
                </label>
                <select
                  className="intro_select"
                  id="year_selection"
                  name="year_selection"
                  onChange={handleSelectedYear}
                  defaultValue=""
                  required
                >
                  <optgroup label="Select year"></optgroup>
                  <option value="2021">2018</option>
                  <option value="2022">2019</option>
                  <option value="2023">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2021">2024</option>
                  <option value="2022">2025</option>
                  <option value="2023">2026</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="eu_countries" className="intro_label">
                  Country
                </label>
                <select
                  className="intro_select"
                  id="eu_countries"
                  name="eu_countries"
                  onChange={handleSelected}
                  defaultValue="Select country"
                  required
                >
                  <optgroup label="Select country"></optgroup>
                  <option value="DefaultOption">Select country</option>
                  <option value="Austria">Austria</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czechia">Czechia</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
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
                  <option value="Norway">Norway</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="population_assessment" className="intro_label">
                  Population of the assessment area
                </label>
                <input
                  type="text"
                  pattern="[0-9]*"
                  id="population_assessment"
                  className="form-input"
                  onChange={handlePopulation}
                  placeholder="0"
                  required
                />
              </div>
              <div className="nextButton">
                <Button
                  size="large"
                  type="submit" 
                  value="Submit"
                  label="Next"
                  primary
                />
              </div>
            </form>
          </section>
        </div>
      </article>
    );
  } else {
    return <U1planner country={country} year={year} population={population} />;
  }
};

StartPage.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

StartPage.defaultProps = {
  user: null,
};
