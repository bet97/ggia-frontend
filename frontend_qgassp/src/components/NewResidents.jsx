import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Button } from "./Button";
import "../css/u2planner.css";
import { U2planner } from "./U2planner";

/**
 * U1 Planner user input form for baseline
 * @return {}
 */

export const NewResidents = ({
  country,
  year,
  population,
  settlementDistribution,
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => {
  const [metropolitanCenter, setNsMetropolitan] = useState(parseFloat(0));
  const [urban, setNsUrban] = useState(parseFloat(0));
  const [suburban, setNsSubUrban] = useState(parseFloat(0));
  const [town, setNsTown] = useState(parseFloat(0));
  const [rural, setNsRural] = useState(parseFloat(0));
  const [newResidents, setNewResidents] = useState("");
  const [yearStart, setYearStart] = useState(0);
  const [yearFinish, setYearFinish] = useState(0);
  const [baseline, setBaseline] = useState("");
  const [newDevelopment, setNewDevelopment] = useState("");
  const [updateU2charts, setU2charts] = useState(false);
  const [totalNewResidents, setTotalNewResidents] = useState(0.0);

  const handleNsMetropolitanCenter = (e) => {
    setNsMetropolitan(parseFloat(e.target.value));
  };
  const handleNsUrban = (e) => {
    setNsUrban(parseFloat(e.target.value));
  };
  const handleNsSuburban = (e) => {
    setNsSubUrban(parseFloat(e.target.value));
  };
  const handleNsTown = (e) => {
    setNsTown(parseFloat(e.target.value));
  };
  const handleNsRural = (e) => {
    setNsRural(parseFloat(e.target.value));
  };
  const handleStartYear = (e) => {
    setYearStart(Number(e.target.value));
  };
  const handleYearFinish = (e) => {
    e.preventDefault();
    setYearFinish(Number(e.target.value));
  };
  const handleNewResident = (e) => {
    e.preventDefault();
    setNewResidents(Number(e.target.value));
  };

  const updateU2Planner = () => {
    const baselineSettlement = {
      country,
      year,
      population,
      settlementDistribution,
    };
    setBaseline(baselineSettlement);

    const newSettlementDistribution = {
      metropolitanCenter,
      urban,
      suburban,
      town,
      rural,
    };
    const newDevelopmentU2 = {
      newResidents,
      yearStart,
      yearFinish,
      newSettlementDistribution,
    };
    setNewDevelopment(newDevelopmentU2);
    setTotalNewResidents(metropolitanCenter + urban + suburban + town + rural);
    setU2charts(true);
  };

  if (updateU2charts === false && totalNewResidents !== 100) {
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

        <section>
          <div>
            <h2>U2 NEW DEVELOPMENT</h2>
          </div>
          <form onSubmit={updateU2Planner}>
            <label>
              <b>U2.1 New residents</b>
            </label>
            <div>
              <label htmlFor="new_residents">
                Number of new residents moving in
              </label>
              <input
                type="text"
                pattern="[0-9]*"
                id="new_residents"
                onChange={handleNewResident}
                required
              />
              <label> 0 = no new developments to be quantified</label>
            </div>
            <div>
              <label htmlFor="start_year"> Start</label>
              <select
                className="start_year"
                id="start_year"
                name="start_year"
                onChange={handleStartYear}
                defaultValue="2022"
                required
              >
                <option value="DefaultOption">Select start year</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
                <option value="2031">2031</option>
                <option value="2032">2032</option>
                <option value="2033">2033</option>
                <option value="2034">2034</option>
                <option value="2035">2035</option>
                <option value="2036">2036</option>
                <option value="2037">2037</option>
                <option value="2038">2038</option>
                <option value="2039">2039</option>
                <option value="2040">2040</option>
                <option value="2041">2041</option>
                <option value="2042">2041</option>
                <option value="2042">2042</option>
                <option value="2043">2043</option>
                <option value="2044">2044</option>
                <option value="2045">2045</option>
                <option value="2046">2046</option>
                <option value="2047">2047</option>
                <option value="2048">2048</option>
                <option value="2049">2049</option>
                <option value="2050">2050</option>
              </select>
            </div>

            <div>
              <label htmlFor="finish_year"> End</label>
              <select
                className="finish_year"
                id="finish_year"
                name="finish_year"
                onChange={handleYearFinish}
                defaultValue="2022"
                required
              >
                <option value="DefaultOption">Select start year</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
                <option value="2031">2031</option>
                <option value="2032">2032</option>
                <option value="2033">2033</option>
                <option value="2034">2034</option>
                <option value="2035">2035</option>
                <option value="2036">2036</option>
                <option value="2037">2037</option>
                <option value="2038">2038</option>
                <option value="2039">2039</option>
                <option value="2040">2040</option>
                <option value="2041">2041</option>
                <option value="2042">2041</option>
                <option value="2042">2042</option>
                <option value="2043">2043</option>
                <option value="2044">2044</option>
                <option value="2045">2045</option>
                <option value="2046">2046</option>
                <option value="2047">2047</option>
                <option value="2048">2048</option>
                <option value="2049">2049</option>
                <option value="2050">2050</option>
              </select>
            </div>
            <br />
            <label>
              <b>U2.2 Settlement type</b>
            </label>
            <label>
              <b>Existing environment</b>
            </label>
            <label>
              <b>New development</b>
            </label>
            <div>
              <label htmlFor="city">Metropolitan Area</label>
              <input
                type="number"
                id="metropolitan"
                min="0"
                max="100"
                value={baseline.metropolitanCenter}
                readOnly
              />
              <input
                type="number"
                step="0.1"
                id="nsMetropolitan"
                min="0"
                max="100"
                onChange={handleNsMetropolitanCenter}
                required
              />
            </div>
            <div>
              <label htmlFor="city">Urban</label>
              <input
                type="number"
                step="0.1"
                id="urban"
                min="0"
                max="100"
                calue={baseline.urban}
                readOnly
              />
              <input
                type="number"
                step="0.1"
                id="nsUrban"
                min="0"
                max="100"
                onChange={handleNsUrban}
                required
              />
            </div>
            <div>
              <label htmlFor="suburban"> Suburban</label>
              <input
                type="number"
                id="suburban"
                step="any"
                min="0.0"
                max="100.0"
                value={baseline.suburban}
                readOnly
              />
              <input
                type="number"
                id="nsSuburban"
                step="any"
                min="0.0"
                max="100.0"
                onChange={handleNsSuburban}
                required
              />
            </div>
            <div>
              <label htmlFor="town">Town</label>
              <input
                type="number"
                id="town"
                step="0.1"
                min="0.0"
                max="100.0"
                value={baseline.town}
                readOnly
              />
              <input
                type="number"
                id="nsTown"
                step="0.1"
                min="0.0"
                max="100.0"
                onChange={handleNsTown}
                required
              />
            </div>
            <div>
              <label htmlFor="rural">Rural</label>
              <input
                type="number"
                id="town"
                step="0.1"
                min="0.0"
                max="100.0"
                defaultValue={baseline.rural}
                readOnly
              />
              <input
                type="number"
                id="nsRural"
                step="0.1"
                min="0"
                max="100"
                onChange={handleNsRural}
                required
              />
            </div>

            <div>
              <Button
                size="small"
                type="submit"
                value="Submit"
                label="Next"
                primary
              />
            </div>
          </form>
        </section>
      </article>
    );
  } else {
    return (
      <U2planner
        country={country}
        year={year}
        population={population}
        baseline={baseline}
        newDevelopment={newDevelopment}
      />
    );
  }
};

NewResidents.propTypes = {
  settlementDistribution: PropTypes.array.isRequired,
  population: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

NewResidents.defaultProps = {
  user: null,
};
