import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
// import "../css/u3policies.css";
import "../css/u3planner.css";
import axios from "axios";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  VerticalBarSeries,
  RadialChart,
  DiscreteColorLegend,
} from "react-vis";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

const BarSeries = VerticalBarSeries;
/**
 * U3 input display
 * @return {}
 */

export const U3policies = ({
  policyQuantification,
  emission,
  baseline,
  projections,
  policyQuant
  // passengerMob,
  // freightTrans,
  // modalPassShares,
  // modalSplitPass,
  // modalFreShares,
  // modalSplitFre,
  // fuelSharesBusTypes,
  // fuelSharesBus,
  // fuelSharesCarTypes,
  // fuelSharesCar,
  // electricityTransTypes,
  // electricityTrans,
}) => {
  // if (updateU2charts === false && totalNewResidents !== 100) {
  return (
    <article>
      <br />
      <div className="headerU3policies">
        <Divider textAlign="left" flexItem>
          {" "}
          <Chip label="U3 POLICY QUANTIFICATION" />
        </Divider>
      </div>

      <section className="section-u3">
        <div>{policyQuantification}</div>
        <div>
          <form>
            <div className="row_u3">
              {/*  passenger mobility section start */}
              <div className="column_u3">
                <div>
                  {" "}
                  <label>
                    <b>Passenger mobility (Residential and Non)</b>
                  </label>
                </div>
                <div>
                  {" "}
                  <label>Change in mobility %</label>
                </div>
                <div>
                  <label>Policy period</label>
                  <label> {policyQuant.passengerMob.yearStart}</label>
                  <label> {policyQuant.passengerMob.yearFinish}</label>
                </div>
              </div>
              <div className="column_u3">
                <div>
                  {" "}
                  <label>Expected change %</label>
                </div>
                <label>{policyQuant.passengerMob.expectedChange}</label>
              </div>
              <div className="column_u3">
                {/* <label className="space_holder"></label> */}
                <label>% of the area affected</label>
                <label>{policyQuant.passengerMob.affectedArea}</label>
              </div>
              <div className="column_u3"></div>
            </div>
            {/*  passenger mobility section end*/}

            {/*  freight transport section */}
            <div className="row_u3">
              <div className="column_u3">
                <div>
                  <label>
                    <b>Freight transport</b>
                  </label>
                </div>
                <div>
                  {" "}
                  <label>Change in freight transport %</label>
                </div>
                <div>
                  <div>
                    {" "}
                    <label>Policy period</label>
                  </div>
                  <label> {policyQuant.freightTrans.yearStart}</label>
                  <label> {policyQuant.freightTrans.yearFinish}</label>
                </div>
              </div>
              <div className="column_u3">
                <label>Expected change %</label>
                <label>{policyQuant.freightTrans.expectedChange}</label>
              </div>
              <div className="column_u3"></div>
              <div className="column_u3"></div>
            </div>
            {/*  freight transport section end */}

            <br />

            {/* modal split-passenger transport section start */}

            <div className="row_u3">
              <div className="column_u3">
                <div>
                  <label>
                    <b>Modal split/Passenger transport</b>
                  </label>
                </div>
                <div>
                  <label>Share for bus</label>
                </div>
                <div>
                  <label>Share for metro</label>
                </div>
                <div>
                  <label>Share for tram</label>
                </div>
                <div>
                  <label>Share for train</label>
                </div>
                <div>
                  <label>CarPassenger</label>
                </div>
                <div>
                  <label>Policy period</label>
                  <label> {policyQuant.modalSplitPass.yearStart}</label>
                  <label> {policyQuant.modalSplitPass.yearFinish}</label>
                </div>
              </div>

              <div className="column_u3">
                <div>
                  {" "}
                  <label>Without policy</label>
                </div>
                <div>
                  <label>{emission.bus}</label>
                </div>
                <div>
                  <label>{emission.metro}</label>
                </div>
                <div>
                  <label>{emission.tram}</label>
                </div>
                <div>
                  <label>{emission.train}</label>
                </div>
                <div>
                  <label>{emission.car}</label>
                </div>
              </div>

              <div className="column_u3">
                <label>Policy target %</label>
                {/*  bus */}
                <label> {policyQuant.modalSplitPass.modalPassShares.bus}</label>
                {/*  metro */}
                <div>
                  {" "}
                  <label> {policyQuant.modalSplitPass.modalPassShares.metro}</label>
                </div>
                {/*   tram */}
                <div>
                  {" "}
                  <label> {policyQuant.modalSplitPass.modalPassShares.tram}</label>
                </div>
                {/*  train */}
                <div>
                  {" "}
                  <label> {policyQuant.modalSplitPass.modalPassShares.train}</label>
                </div>
                {/*    car */}
                <div>
                  <label> {policyQuant.modalSplitPass.modalPassShares.car}</label>
                </div>
              </div>
              <div className="column_u3">
                <label>% of the area affeccted</label>
                <label> {policyQuant.modalSplitPass.affectedPopulation}</label>
              </div>
            </div>
            {/* modal split-passenger transport section end */}
            {/* <div className="column"> */}
            <div id="divspace">
              <RadialChart
                type="piechart"
                data={[
                  {
                    // angle: ,
                    angle: 12,
                    label: "Urban",
                    color: "#164059",
                  },
                  {
                    angle: 38,
                    label: "Suburban",
                    color: "#F25F29",
                  },
                  {
                    angle: 12,
                    label: "Town",
                    color: "#F23A29",
                  },
                  {
                    angle: 38,
                    label: "Rural",
                    color: "#D9D9D9",
                  },
                ]}
                width={180}
                height={180}
                colorType="literal"
              />
            </div>
            <label>colorlegend can go here maybe</label>
            {/* <DiscreteColorLegend
                items={settlementLabels}
                orientation="horizontal"
                strokeWidth="40"
              /> */}
            <div>
              <RadialChart
                type="piechart"
                data={[
                  {
                    // angle: ,
                    angle: 12,
                    label: "Urban",
                    color: "#164059",
                  },
                  {
                    angle: 38,
                    label: "Suburban",
                    color: "#F25F29",
                  },
                  {
                    angle: 12,
                    label: "Town",
                    color: "#F23A29",
                  },
                  {
                    angle: 38,
                    label: "Rural",
                    color: "#D9D9D9",
                  },
                ]}
                width={180}
                height={180}
                colorType="literal"
              />
            </div>
            <br />

            <div className="row_u3">
              <div className="column_u3">
                <div>
                  <label>
                    <b>Modal split/Freight transport</b>
                  </label>
                </div>
                <div>
                  <label>Share for rail</label>
                </div>
                <div>
                  <label>Share for inland waterways</label>
                </div>
                <div>
                  <label>Share for road freight</label>
                </div>
                <div>
                  <label>Policy period</label>
                  <label> {policyQuant.modalSplitFre.yearStart}</label>
                  <label> {policyQuant.modalSplitFre.yearFinish}</label>
                </div>
              </div>

              <div className="column_u3">
                <div>
                  {" "}
                  <label>Without policy</label>
                </div>
                <div>
                  <label>{emission.rail_transport}</label>
                </div>
                <div>
                  <label>{emission.waterways_transport}</label>
                </div>
                <div>
                  <label>{emission.road_transport}</label>
                </div>
              </div>

              <div className="column_u3">
                <label>Policy target %</label>
                {/*  rail */}
                <label> {policyQuant.modalSplitFre.modalFreShares.railTransport}</label>
                {/*  water */}
                <div>
                  {" "}
                  <label> {policyQuant.modalSplitFre.modalFreShares.waterwaysTransport}</label>
                </div>
                {/*   road */}
                <div>
                  {" "}
                  <label> {policyQuant.modalSplitFre.modalFreShares.roadTransport}</label>
                </div>
              </div>
            </div>
            <div id="divspace">
              <RadialChart
                type="piechart"
                data={[
                  {
                    // angle: ,
                    angle: 12,
                    label: "Urban",
                    color: "#164059",
                  },
                  {
                    angle: 38,
                    label: "Suburban",
                    color: "#F25F29",
                  },
                  {
                    angle: 12,
                    label: "Town",
                    color: "#F23A29",
                  },
                  {
                    angle: 38,
                    label: "Rural",
                    color: "#D9D9D9",
                  },
                ]}
                width={180}
                height={180}
                colorType="literal"
              />
            </div>
            <label>colorlegend can go here maybe</label>
            {/* <DiscreteColorLegend
                items={settlementLabels}
                orientation="horizontal"
                strokeWidth="40"
              /> */}
            <div>
              <RadialChart
                type="piechart"
                data={[
                  {
                    // angle: ,
                    angle: 12,
                    label: "Urban",
                    color: "#164059",
                  },
                  {
                    angle: 38,
                    label: "Suburban",
                    color: "#F25F29",
                  },
                  {
                    angle: 12,
                    label: "Town",
                    color: "#F23A29",
                  },
                  {
                    angle: 38,
                    label: "Rural",
                    color: "#D9D9D9",
                  },
                ]}
                width={180}
                height={180}
                colorType="literal"
              />
            </div>
            <br />
            {/* fuel-bus transport section start*/}
            <div className="row_u3">
              <div className="column_u3">
                <div>
                  {" "}
                  <label>
                    <b>Shares of fuel types/Bus transport</b>{" "}
                  </label>
                </div>
                <div>
                  {" "}
                  <label>Petroleum products</label>
                </div>
                <div>
                  {" "}
                  <label>Liquified Petroleum Gas (LPG)</label>
                </div>
                <div>
                  {" "}
                  <label>Natural Gas (CNG)</label>
                </div>
                <div>
                  <label>Electricty</label>
                </div>
                <div>
                  {" "}
                  <label>Diesel</label>
                </div>
                <div>
                  <label>Policy period</label>
                  <label>{policyQuant.fuelSharesBus.yearStart}</label>
                  <label>{policyQuant.fuelSharesBus.yearFinish}</label>
                </div>
              </div>

              <div className="column_u3">
                <div>
                  {" "}
                  <label>Without policy</label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
              </div>

              <div className="column_u3">
                <div>
                  <label>Policy target %</label>
                </div>
                <div>
                  {" "}
                  <label>{policyQuant.fuelSharesBus.fuelSharesBusTypes.petrol}</label>
                </div>
                <div>
                  {" "}
                  <label>{policyQuant.fuelSharesBus.fuelSharesBusTypes.lpg}</label>
                </div>
                <div>
                  {" "}
                  <label>{policyQuant.fuelSharesBus.fuelSharesBusTypes.cng}</label>
                </div>
                <div>
                  <label>{policyQuant.fuelSharesBus.fuelSharesBusTypes.electricity}</label>
                </div>
                <div>
                  <label>{policyQuant.fuelSharesBus.fuelSharesBusTypes.diesel}</label>
                </div>
              </div>
              <div className="column_u3">
                <label>% of the area affeccted</label>
                <label>{policyQuant.fuelSharesBus.affectedArea}</label>
              </div>
            </div>
            {/* fuel-bus transport section end */}
            <div id="divspace">
              <RadialChart
                type="piechart"
                data={[
                  {
                    // angle: ,
                    angle: 12,
                    label: "Urban",
                    color: "#164059",
                  },
                  {
                    angle: 38,
                    label: "Suburban",
                    color: "#F25F29",
                  },
                  {
                    angle: 12,
                    label: "Town",
                    color: "#F23A29",
                  },
                  {
                    angle: 38,
                    label: "Rural",
                    color: "#D9D9D9",
                  },
                ]}
                width={180}
                height={180}
                colorType="literal"
              />
            </div>
            <label>colorlegend can go here maybe</label>
            {/* <DiscreteColorLegend
                items={settlementLabels}
                orientation="horizontal"
                strokeWidth="40"
              /> */}
            <div>
              <RadialChart
                type="piechart"
                data={[
                  {
                    // angle: ,
                    angle: 12,
                    label: "Urban",
                    color: "#164059",
                  },
                  {
                    angle: 38,
                    label: "Suburban",
                    color: "#F25F29",
                  },
                  {
                    angle: 12,
                    label: "Town",
                    color: "#F23A29",
                  },
                  {
                    angle: 38,
                    label: "Rural",
                    color: "#D9D9D9",
                  },
                ]}
                width={180}
                height={180}
                colorType="literal"
              />
            </div>
            <br />

            {/* fuel-car section start*/}
            <div className="row_u3">
              <div className="column_u3">
                <div>
                  {" "}
                  <label>
                    <b>Shares of fuel types/Cars</b>
                  </label>
                </div>
                <div>
                  {" "}
                  <label>Liquified Petroleum Gas (LPG)</label>
                </div>
                <div>
                  {" "}
                  <label>Natural Gas (CNG)</label>
                </div>
                <div>
                  {" "}
                  <label>Hybrid electric-petrol</label>
                </div>
                <div>
                  <label>Plug-in hybrid petrol-electric PHEV</label>
                </div>
                <div>
                  {" "}
                  <label>Hydrogen and fuel cells</label>
                </div>
                <div>
                  {" "}
                  <label>Bioethanol</label>
                </div>
                <div>
                  {" "}
                  <label>Bio-diesel</label>
                </div>
                <div>
                  {" "}
                  <label>Bi-fuel</label>
                </div>
                <div>
                  {" "}
                  <label>Other (unknown)</label>
                </div>
                <div>
                  {" "}
                  <label>Electricity BEV</label>
                </div>
                <div>
                  {" "}
                  <label>Petrol, according to country selection</label>
                </div>
                <div>
                  {" "}
                  <label>Diesel, according to country selection</label>
                </div>
                <div>
                  <label>Policy period</label>
                  <label>{policyQuant.fuelSharesCar.yearStart}</label>
                  <label>{policyQuant.fuelSharesCar.yearFinish}</label>
                </div>
              </div>
              <div className="column_u3">
                <div>
                  {" "}
                  <label>Without policy</label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
                <div>
                  {" "}
                  <label></label>
                </div>
              </div>

              <div className="column_u3">
                <div>
                  <label>Policy target %</label>
                </div>
                <div>
                  {" "}
                  <label>{policyQuant.fuelSharesCarTypes.lpg}</label>
                </div>
                <div>
                  {" "}
                  <label>{policyQuant.fuelSharesCarTypes.cng}</label>
                </div>
                <div>
                  {" "}
                  <label>{policyQuant.fuelSharesCarTypes.ngv}</label>
                </div>
                <div>
                  {" "}
                  <label>{policyQuant.fuelSharesCarTypes.hep}</label>
                </div>
                <div>
                  {" "}
                  <label>{policyQuant.fuelSharesCarTypes.phev}</label>
                </div>
                <div>
                  {" "}
                  <label>{policyQuant.fuelSharesCarTypes.hydrogenfuel}</label>
                </div>
                <div>
                  {" "}
                  <label>{policyQuant.fuelSharesCarTypes.bioethanol}</label>
                </div>
                <div>
                  {" "}
                  <label>{policyQuant.fuelSharesCarTypes.biodiesel}</label>
                </div>
                <div>
                  {" "}
                  <label>{policyQuant.fuelSharesCarTypes.bifuel}</label>
                </div>
                <div>
                  {" "}
                  <label>{policyQuant.fuelSharesCarTypes.other}</label>
                </div>
                <div>
                  {" "}
                  <label>{policyQuant.fuelSharesCarTypes.electricity}</label>
                </div>
                <div>
                  {" "}
                  <label>{policyQuant.fuelSharesCarTypes.petrol}</label>
                </div>
                <div>
                  {" "}
                  <label>{policyQuant.fuelSharesCarTypes.diesel}</label>
                </div>
              </div>
              <div className="column_u3">
                <label>% of the area affeccted</label>
                <label>{policyQuant.fuelSharesCar.affectedArea}</label>
              </div>
            </div>
            {/* fuel-car section end */}
            <div id="divspace">
              <RadialChart
                type="piechart"
                data={[
                  {
                    // angle: ,
                    angle: 12,
                    label: "Urban",
                    color: "#164059",
                  },
                  {
                    angle: 38,
                    label: "Suburban",
                    color: "#F25F29",
                  },
                  {
                    angle: 12,
                    label: "Town",
                    color: "#F23A29",
                  },
                  {
                    angle: 38,
                    label: "Rural",
                    color: "#D9D9D9",
                  },
                ]}
                width={180}
                height={180}
                colorType="literal"
              />
            </div>
            <label>colorlegend can go here maybe</label>
            {/* <DiscreteColorLegend
                items={settlementLabels}
                orientation="horizontal"
                strokeWidth="40"
              /> */}
            <div>
              <RadialChart
                type="piechart"
                data={[
                  {
                    // angle: ,
                    angle: 12,
                    label: "Urban",
                    color: "#164059",
                  },
                  {
                    angle: 38,
                    label: "Suburban",
                    color: "#F25F29",
                  },
                  {
                    angle: 12,
                    label: "Town",
                    color: "#F23A29",
                  },
                  {
                    angle: 38,
                    label: "Rural",
                    color: "#D9D9D9",
                  },
                ]}
                width={180}
                height={180}
                colorType="literal"
              />
            </div>
            <br />

            {/*  electricity for transport start */}
            <div className="row_u3">
              <div className="column_u3">
                <div>
                  <label>
                    <b>Electricity for transport</b>
                  </label>
                </div>
                <div>
                  <label>Increase in the share of renewables</label>
                </div>

                <div>
                  <label>Policy period</label>
                  <label>{policyQuant.electricityTrans.yearStart}</label>
                  <label>{policyQuant.electricityTrans.yearFinish}</label>
                </div>
              </div>
              <div className="column_u3">
                <label>gCO2e/kWh without policy</label>
              </div>
              <div className="column_u3">
                <label>Policy target %</label>
                <label>{policyQuant.electricityTransTypes.renewables}</label>
              </div>
              <div className="column_u3">
                <label>% of the area affected</label>
                <label>{policyQuant.electricityTrans.affectedArea}</label>
              </div>
            </div>
            {/*  electricity for transport end */}
            <div id="divspace">
              <RadialChart
                type="piechart"
                data={[
                  {
                    // angle: ,
                    angle: 12,
                    label: "Urban",
                    color: "#164059",
                  },
                  {
                    angle: 38,
                    label: "Suburban",
                    color: "#F25F29",
                  },
                  {
                    angle: 12,
                    label: "Town",
                    color: "#F23A29",
                  },
                  {
                    angle: 38,
                    label: "Rural",
                    color: "#D9D9D9",
                  },
                ]}
                width={180}
                height={180}
                colorType="literal"
              />
            </div>
            <label>colorlegend can go here maybe</label>
            {/* <DiscreteColorLegend
                items={settlementLabels}
                orientation="horizontal"
                strokeWidth="40"
              /> */}
            <div>
              <RadialChart
                type="piechart"
                data={[
                  {
                    // angle: ,
                    angle: 12,
                    label: "Urban",
                    color: "#164059",
                  },
                  {
                    angle: 38,
                    label: "Suburban",
                    color: "#F25F29",
                  },
                  {
                    angle: 12,
                    label: "Town",
                    color: "#F23A29",
                  },
                  {
                    angle: 38,
                    label: "Rural",
                    color: "#D9D9D9",
                  },
                ]}
                width={180}
                height={180}
                colorType="literal"
              />
            </div>
            <br />
            <div>
              <XYPlot
                width={900}
                height={500}
                xType="ordinal"
                yDomain={[0, 100000]}
                // yType="linear"
                stackBy="y"
              >
                <HorizontalGridLines style={{ stroke: "#B7E9ED" }} />
                <VerticalGridLines style={{ stroke: "#B7E9ED" }} />
                <VerticalBarSeries className="U3StackedBarchart" />
                <XAxis
                  style={{
                    line: { stroke: "#ADDDE1" },
                    ticks: { stroke: "#ADDDE1" },
                    text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
                  }}
                />
                <YAxis />
                <LineSeries
                  curve={null}
                  data={[
                    { x: 2022, y: 12000 },
                    { x: 2023, y: 16200 },
                    { x: 2024, y: 16300 },
                    { x: 2025, y: 16340 },
                    { x: 2026, y: 16360 },
                    { x: 2027, y: 16220 },
                    { x: 2028, y: 16000 },
                    { x: 2029, y: 14000 },
                    { x: 2030, y: 16550 },
                    { x: 2031, y: 16300 },
                    { x: 2032, y: 16200 },
                    { x: 2033, y: 15600 },
                    { x: 2034, y: 15800 },
                    { x: 2035, y: 16000 },
                    { x: 2036, y: 16100 },
                    { x: 2037, y: 16200 },
                    { x: 2038, y: 16300 },
                    { x: 2039, y: 16400 },
                    { x: 2040, y: 16500 },
                    { x: 2041, y: 16400 },
                    { x: 2042, y: 16300 },
                    { x: 2043, y: 16200 },
                    { x: 2044, y: 16100 },
                    { x: 2045, y: 16000 },
                    { x: 2046, y: 15900 },
                    { x: 2047, y: 16000 },
                    { x: 2048, y: 16000 },
                    { x: 2049, y: 16000 },
                    { x: 2050, y: 16000 },
                  ]}
                  opacity={1}
                  stroke="rgba(102,116,155,1)"
                  strokeDasharray=""
                  strokeStyle="dashed"
                  strokeWidth="1.5"
                  style={{}}
                />
                <BarSeries
                  color="#8C0303"
                  data={[
                    { x: 2022, y: 1500 },
                    { x: 2023, y: 1500 },
                    { x: 2024, y: 1500 },
                    { x: 2025, y: 1500 },
                    { x: 2026, y: 1500 },
                    { x: 2027, y: 1500 },
                    { x: 2028, y: 1500 },
                    { x: 2029, y: 1500 },
                    { x: 2030, y: 1500 },
                    { x: 2031, y: 1500 },
                    { x: 2032, y: 1500 },
                    { x: 2033, y: 1500 },
                    { x: 2034, y: 1500 },
                    { x: 2035, y: 1500 },
                    { x: 2036, y: 1500 },
                    { x: 2037, y: 1500 },
                    { x: 2038, y: 1500 },
                    { x: 2039, y: 1500 },
                    { x: 2040, y: 1500 },
                    { x: 2041, y: 1500 },
                    { x: 2042, y: 1500 },
                    { x: 2043, y: 1500 },
                    { x: 2044, y: 1500 },
                    { x: 2045, y: 1500 },
                    { x: 2046, y: 1500 },
                    { x: 2047, y: 1500 },
                    { x: 2048, y: 1500 },
                    { x: 2049, y: 1500 },
                    { x: 2050, y: 1500 },
                  ]}
                />
                <BarSeries
                  color="#A6036D"
                  data={[
                    { x: 2022, y: 1500 },
                    { x: 2023, y: 1500 },
                    { x: 2024, y: 1500 },
                    { x: 2025, y: 1500 },
                    { x: 2026, y: 1500 },
                    { x: 2027, y: 1500 },
                    { x: 2028, y: 1500 },
                    { x: 2029, y: 1500 },
                    { x: 2030, y: 1500 },
                    { x: 2031, y: 1500 },
                    { x: 2032, y: 1500 },
                    { x: 2033, y: 1500 },
                    { x: 2034, y: 1500 },
                    { x: 2035, y: 1500 },
                    { x: 2036, y: 1500 },
                    { x: 2037, y: 1500 },
                    { x: 2038, y: 1500 },
                    { x: 2039, y: 1500 },
                    { x: 2040, y: 1500 },
                    { x: 2041, y: 1500 },
                    { x: 2042, y: 1500 },
                    { x: 2043, y: 1500 },
                    { x: 2044, y: 1500 },
                    { x: 2045, y: 1500 },
                    { x: 2046, y: 1500 },
                    { x: 2047, y: 1500 },
                    { x: 2048, y: 1500 },
                    { x: 2049, y: 1500 },
                    { x: 2050, y: 1500 },
                  ]}
                />
                <BarSeries
                  color="#400D01"
                  data={[
                    { x: 2022, y: 1500 },
                    { x: 2023, y: 1500 },
                    { x: 2024, y: 1500 },
                    { x: 2025, y: 1500 },
                    { x: 2026, y: 1500 },
                    { x: 2027, y: 1500 },
                    { x: 2028, y: 1500 },
                    { x: 2029, y: 1500 },
                    { x: 2030, y: 1500 },
                    { x: 2031, y: 1500 },
                    { x: 2032, y: 1500 },
                    { x: 2033, y: 1500 },
                    { x: 2034, y: 1500 },
                    { x: 2035, y: 1500 },
                    { x: 2036, y: 1500 },
                    { x: 2037, y: 1500 },
                    { x: 2038, y: 1500 },
                    { x: 2039, y: 1500 },
                    { x: 2040, y: 1500 },
                    { x: 2041, y: 1500 },
                    { x: 2042, y: 1500 },
                    { x: 2043, y: 1500 },
                    { x: 2044, y: 1500 },
                    { x: 2045, y: 1500 },
                    { x: 2046, y: 1500 },
                    { x: 2047, y: 1500 },
                    { x: 2048, y: 1500 },
                    { x: 2049, y: 1500 },
                    { x: 2050, y: 1500 },
                  ]}
                />
                <BarSeries
                  color="#C4D4F2"
                  data={[
                    { x: 2022, y: 1500 },
                    { x: 2023, y: 1500 },
                    { x: 2024, y: 1500 },
                    { x: 2025, y: 1500 },
                    { x: 2026, y: 1500 },
                    { x: 2027, y: 1500 },
                    { x: 2028, y: 1500 },
                    { x: 2029, y: 1500 },
                    { x: 2030, y: 1500 },
                    { x: 2031, y: 1500 },
                    { x: 2032, y: 1500 },
                    { x: 2033, y: 1500 },
                    { x: 2034, y: 1500 },
                    { x: 2035, y: 1500 },
                    { x: 2036, y: 1500 },
                    { x: 2037, y: 1500 },
                    { x: 2038, y: 1500 },
                    { x: 2039, y: 1500 },
                    { x: 2040, y: 1500 },
                    { x: 2041, y: 1500 },
                    { x: 2042, y: 1500 },
                    { x: 2043, y: 1500 },
                    { x: 2044, y: 1500 },
                    { x: 2045, y: 1500 },
                    { x: 2046, y: 1500 },
                    { x: 2047, y: 1500 },
                    { x: 2048, y: 1500 },
                    { x: 2049, y: 1500 },
                    { x: 2050, y: 1500 },
                  ]}
                />
                <BarSeries
                  color="#D90404"
                  data={[
                    { x: 2022, y: 1500 },
                    { x: 2023, y: 1500 },
                    { x: 2024, y: 1500 },
                    { x: 2025, y: 1500 },
                    { x: 2026, y: 1500 },
                    { x: 2027, y: 1500 },
                    { x: 2028, y: 1500 },
                    { x: 2029, y: 1500 },
                    { x: 2030, y: 1500 },
                    { x: 2031, y: 1500 },
                    { x: 2032, y: 1500 },
                    { x: 2033, y: 1500 },
                    { x: 2034, y: 1500 },
                    { x: 2035, y: 1500 },
                    { x: 2036, y: 1500 },
                    { x: 2037, y: 1500 },
                    { x: 2038, y: 1500 },
                    { x: 2039, y: 1500 },
                    { x: 2040, y: 1500 },
                    { x: 2041, y: 1500 },
                    { x: 2042, y: 1500 },
                    { x: 2043, y: 1500 },
                    { x: 2044, y: 1500 },
                    { x: 2045, y: 1500 },
                    { x: 2046, y: 1500 },
                    { x: 2047, y: 1500 },
                    { x: 2048, y: 1500 },
                    { x: 2049, y: 1500 },
                    { x: 2050, y: 1500 },
                  ]}
                />
                <BarSeries
                  color="#80D941"
                  data={[
                    { x: 2022, y: 1500 },
                    { x: 2023, y: 1500 },
                    { x: 2024, y: 1500 },
                    { x: 2025, y: 1500 },
                    { x: 2026, y: 1500 },
                    { x: 2027, y: 1500 },
                    { x: 2028, y: 1500 },
                    { x: 2029, y: 1500 },
                    { x: 2030, y: 1500 },
                    { x: 2031, y: 1500 },
                    { x: 2032, y: 1500 },
                    { x: 2033, y: 1500 },
                    { x: 2034, y: 1500 },
                    { x: 2035, y: 1500 },
                    { x: 2036, y: 1500 },
                    { x: 2037, y: 1500 },
                    { x: 2038, y: 1500 },
                    { x: 2039, y: 1500 },
                    { x: 2040, y: 1500 },
                    { x: 2041, y: 1500 },
                    { x: 2042, y: 1500 },
                    { x: 2043, y: 1500 },
                    { x: 2044, y: 1500 },
                    { x: 2045, y: 1500 },
                    { x: 2046, y: 1500 },
                    { x: 2047, y: 1500 },
                    { x: 2048, y: 1500 },
                    { x: 2049, y: 1500 },
                    { x: 2050, y: 1500 },
                  ]}
                />
                {/* <LineSeries
                  curve={null}
                  data={[
                    { x: 2022, y: projections.total[2022]},
                    { x: 2023, y: projections.total[2023]},
                    { x: 2024, y: projections.total[2024]},
                    { x: 2025, y: projections.total[2025]},
                    { x: 2026, y: projections.total[2026]},
                    { x: 2027, y: projections.total[2027]},
                    { x: 2028, y: projections.total[2028]},
                    { x: 2029, y: projections.total[2029]},
                    { x: 2030, y: projections.total[2030]},
                    { x: 2031, y: projections.total[2031]},
                    { x: 2032, y: projections.total[2032]},
                    { x: 2033, y: projections.total[2033]},
                    { x: 2034, y: projections.total[2034]},
                    { x: 2035, y: projections.total[2035]},
                    { x: 2036, y: projections.total[2036]},
                    { x: 2037, y: projections.total[2037]},
                    { x: 2038, y: projections.total[2038]},
                    { x: 2039, y: projections.total[2039]},
                    { x: 2040, y: projections.total[2040]},
                    { x: 2041, y: projections.total[2041]},
                    { x: 2042, y: projections.total[2042]},
                    { x: 2043, y: projections.total[2043]},
                    { x: 2044, y: projections.total[2044]},
                    { x: 2045, y: projections.total[2045]},
                    { x: 2046, y: projections.total[2046]},
                    { x: 2047, y: projections.total[2047]},
                    { x: 2048, y: projections.total[2048]},
                    { x: 2049, y: projections.total[2049]},
                    { x: 2050, y: projections.total[2050]},
                  ]}
                  opacity={1}
                  stroke="rgba(102,116,155,1)"
                  strokeDasharray=""
                  strokeStyle="dashed"
                  strokeWidth="1.5"
                  style={{}}
                />
                <BarSeries
                  color="#ffdf43"
                  data={[
                    { x: 2022, y: policyQuantification.bus[2022]},
                    { x: 2023, y: policyQuantification.bus[2023]},
                    { x: 2024, y: policyQuantification.bus[2024]},
                    { x: 2025, y: policyQuantification.bus[2025]},
                    { x: 2026, y: policyQuantification.bus[2026]},
                    { x: 2027, y: policyQuantification.bus[2027]},
                    { x: 2028, y: policyQuantification.bus[2028]},
                    { x: 2029, y: policyQuantification.bus[2029]},
                    { x: 2030, y: policyQuantification.bus[2030]},
                    { x: 2031, y: policyQuantification.bus[2031]},
                    { x: 2032, y: policyQuantification.bus[2032]},
                    { x: 2033, y: policyQuantification.bus[2033]},
                    { x: 2034, y: policyQuantification.bus[2034]},
                    { x: 2035, y: policyQuantification.bus[2035]},
                    { x: 2036, y: policyQuantification.bus[2036]},
                    { x: 2037, y: policyQuantification.bus[2037]},
                    { x: 2038, y: policyQuantification.bus[2038]},
                    { x: 2039, y: policyQuantification.bus[2039]},
                    { x: 2040, y: policyQuantification.bus[2040]},
                    { x: 2041, y: policyQuantification.bus[2041]},
                    { x: 2042, y: policyQuantification.bus[2042]},
                    { x: 2043, y: policyQuantification.bus[2043]},
                    { x: 2044, y: policyQuantification.bus[2044]},
                    { x: 2045, y: policyQuantification.bus[2045]},
                    { x: 2046, y: policyQuantification.bus[2046]},
                    { x: 2047, y: policyQuantification.bus[2047]},
                    { x: 2048, y: policyQuantification.bus[2048]},
                    { x: 2049, y: policyQuantification.bus[2049]},
                    { x: 2050, y: policyQuantification.bus[2050]},
                  ]}
                />
                <BarSeries
                  color="#76918e"
                  data={[
                    { x: 2022, y: policyQuantification.car[2022]},
                    { x: 2023, y: policyQuantification.car[2023]},
                    { x: 2024, y: policyQuantification.car[2024]},
                    { x: 2025, y: policyQuantification.car[2025]},
                    { x: 2026, y: policyQuantification.car[2026]},
                    { x: 2027, y: policyQuantification.car[2027]},
                    { x: 2028, y: policyQuantification.car[2028]},
                    { x: 2029, y: policyQuantification.car[2029]},
                    { x: 2030, y: policyQuantification.car[2030]},
                    { x: 2031, y: policyQuantification.car[2031]},
                    { x: 2032, y: policyQuantification.car[2032]},
                    { x: 2033, y: policyQuantification.car[2033]},
                    { x: 2034, y: policyQuantification.car[2034]},
                    { x: 2035, y: policyQuantification.car[2035]},
                    { x: 2036, y: policyQuantification.car[2036]},
                    { x: 2037, y: policyQuantification.car[2037]},
                    { x: 2038, y: policyQuantification.car[2038]},
                    { x: 2039, y: policyQuantification.car[2039]},
                    { x: 2040, y: policyQuantification.car[2040]},
                    { x: 2041, y: policyQuantification.car[2041]},
                    { x: 2042, y: policyQuantification.car[2042]},
                    { x: 2043, y: policyQuantification.car[2043]},
                    { x: 2044, y: policyQuantification.car[2044]},
                    { x: 2045, y: policyQuantification.car[2045]},
                    { x: 2046, y: policyQuantification.car[2046]},
                    { x: 2047, y: policyQuantification.car[2047]},
                    { x: 2048, y: policyQuantification.car[2048]},
                    { x: 2049, y: policyQuantification.car[2049]},
                    { x: 2050, y: policyQuantification.car[2050]},
                  ]}
                />
                <BarSeries
                  color="#ce143d"
                  data={[
                    { x: 2022, y: policyQuantification.tram[2022]},
                    { x: 2023, y: policyQuantification.tram[2023]},
                    { x: 2024, y: policyQuantification.tram[2024]},
                    { x: 2025, y: policyQuantification.tram[2025]},
                    { x: 2026, y: policyQuantification.tram[2026]},
                    { x: 2027, y: policyQuantification.tram[2027]},
                    { x: 2028, y: policyQuantification.tram[2028]},
                    { x: 2029, y: policyQuantification.tram[2029]},
                    { x: 2030, y: policyQuantification.tram[2030]},
                    { x: 2031, y: policyQuantification.tram[2031]},
                    { x: 2032, y: policyQuantification.tram[2032]},
                    { x: 2033, y: policyQuantification.tram[2033]},
                    { x: 2034, y: policyQuantification.tram[2034]},
                    { x: 2035, y: policyQuantification.tram[2035]},
                    { x: 2036, y: policyQuantification.tram[2036]},
                    { x: 2037, y: policyQuantification.tram[2037]},
                    { x: 2038, y: policyQuantification.tram[2038]},
                    { x: 2039, y: policyQuantification.tram[2039]},
                    { x: 2040, y: policyQuantification.tram[2040]},
                    { x: 2041, y: policyQuantification.tram[2041]},
                    { x: 2042, y: policyQuantification.tram[2042]},
                    { x: 2043, y: policyQuantification.tram[2043]},
                    { x: 2044, y: policyQuantification.tram[2044]},
                    { x: 2045, y: policyQuantification.tram[2045]},
                    { x: 2046, y: policyQuantification.tram[2046]},
                    { x: 2047, y: policyQuantification.tram[2047]},
                    { x: 2048, y: policyQuantification.tram[2048]},
                    { x: 2049, y: policyQuantification.tram[2049]},
                    { x: 2050, y: policyQuantification.tram[2050]},
                  ]}
                />
                <BarSeries
                  color="#d6e7d9"
                  data={[
                    { x: 2022, y: policyQuantification.metro[2022]},
                    { x: 2023, y: policyQuantification.metro[2023]},
                    { x: 2024, y: policyQuantification.metro[2024]},
                    { x: 2025, y: policyQuantification.metro[2025]},
                    { x: 2026, y: policyQuantification.metro[2026]},
                    { x: 2027, y: policyQuantification.metro[2027]},
                    { x: 2028, y: policyQuantification.metro[2028]},
                    { x: 2029, y: policyQuantification.metro[2029]},
                    { x: 2030, y: policyQuantification.metro[2030]},
                    { x: 2031, y: policyQuantification.metro[2031]},
                    { x: 2032, y: policyQuantification.metro[2032]},
                    { x: 2033, y: policyQuantification.metro[2033]},
                    { x: 2034, y: policyQuantification.metro[2034]},
                    { x: 2035, y: policyQuantification.metro[2035]},
                    { x: 2036, y: policyQuantification.metro[2036]},
                    { x: 2037, y: policyQuantification.metro[2037]},
                    { x: 2038, y: policyQuantification.metro[2038]},
                    { x: 2039, y: policyQuantification.metro[2039]},
                    { x: 2040, y: policyQuantification.metro[2040]},
                    { x: 2041, y: policyQuantification.metro[2041]},
                    { x: 2042, y: policyQuantification.metro[2042]},
                    { x: 2043, y: policyQuantification.metro[2043]},
                    { x: 2044, y: policyQuantification.metro[2044]},
                    { x: 2045, y: policyQuantification.metro[2045]},
                    { x: 2046, y: policyQuantification.metro[2046]},
                    { x: 2047, y: policyQuantification.metro[2047]},
                    { x: 2048, y: policyQuantification.metro[2048]},
                    { x: 2049, y: policyQuantification.metro[2049]},
                    { x: 2050, y: policyQuantification.metro[2050]},
                  ]}
                />
                <BarSeries
                  color="#002117"
                  data={[
                    { x: 2022, y: policyQuantification.train[2022]},
                    { x: 2023, y: policyQuantification.train[2023]},
                    { x: 2024, y: policyQuantification.train[2024]},
                    { x: 2025, y: policyQuantification.train[2025]},
                    { x: 2026, y: policyQuantification.train[2026]},
                    { x: 2027, y: policyQuantification.train[2027]},
                    { x: 2028, y: policyQuantification.train[2028]},
                    { x: 2029, y: policyQuantification.train[2029]},
                    { x: 2030, y: policyQuantification.train[2030]},
                    { x: 2031, y: policyQuantification.train[2031]},
                    { x: 2032, y: policyQuantification.train[2032]},
                    { x: 2033, y: policyQuantification.train[2033]},
                    { x: 2034, y: policyQuantification.train[2034]},
                    { x: 2035, y: policyQuantification.train[2035]},
                    { x: 2036, y: policyQuantification.train[2036]},
                    { x: 2037, y: policyQuantification.train[2037]},
                    { x: 2038, y: policyQuantification.train[2038]},
                    { x: 2039, y: policyQuantification.train[2039]},
                    { x: 2040, y: policyQuantification.train[2040]},
                    { x: 2041, y: policyQuantification.train[2041]},
                    { x: 2042, y: policyQuantification.train[2042]},
                    { x: 2043, y: policyQuantification.train[2043]},
                    { x: 2044, y: policyQuantification.train[2044]},
                    { x: 2045, y: policyQuantification.train[2045]},
                    { x: 2046, y: policyQuantification.train[2046]},
                    { x: 2047, y: policyQuantification.train[2047]},
                    { x: 2048, y: policyQuantification.train[2048]},
                    { x: 2049, y: policyQuantification.train[2049]},
                    { x: 2050, y: policyQuantification.train[2050]},
                  ]}
                />
                <BarSeries
                  color="#ef7d00"
                  data={[
                    { x: 2022, y: policyQuantification.rail_transport[2022]},
                    { x: 2023, y: policyQuantification.rail_transport[2023]},
                    { x: 2024, y: policyQuantification.rail_transport[2024]},
                    { x: 2025, y: policyQuantification.rail_transport[2025]},
                    { x: 2026, y: policyQuantification.rail_transport[2026]},
                    { x: 2027, y: policyQuantification.rail_transport[2027]},
                    { x: 2028, y: policyQuantification.rail_transport[2028]},
                    { x: 2029, y: policyQuantification.rail_transport[2029]},
                    { x: 2030, y: policyQuantification.rail_transport[2030]},
                    { x: 2031, y: policyQuantification.rail_transport[2031]},
                    { x: 2032, y: policyQuantification.rail_transport[2032]},
                    { x: 2033, y: policyQuantification.rail_transport[2033]},
                    { x: 2034, y: policyQuantification.rail_transport[2034]},
                    { x: 2035, y: policyQuantification.rail_transport[2035]},
                    { x: 2036, y: policyQuantification.rail_transport[2036]},
                    { x: 2037, y: policyQuantification.rail_transport[2037]},
                    { x: 2038, y: policyQuantification.rail_transport[2038]},
                    { x: 2039, y: policyQuantification.rail_transport[2039]},
                    { x: 2040, y: policyQuantification.rail_transport[2040]},
                    { x: 2041, y: policyQuantification.rail_transport[2041]},
                    { x: 2042, y: policyQuantification.rail_transport[2042]},
                    { x: 2043, y: policyQuantification.rail_transport[2043]},
                    { x: 2044, y: policyQuantification.rail_transport[2044]},
                    { x: 2045, y: policyQuantification.rail_transport[2045]},
                    { x: 2046, y: policyQuantification.rail_transport[2046]},
                    { x: 2047, y: policyQuantification.rail_transport[2047]},
                    { x: 2048, y: policyQuantification.rail_transport[2048]},
                    { x: 2049, y: policyQuantification.rail_transport[2049]},
                    { x: 2050, y: policyQuantification.rail_transport[2050]},
                  ]}
                />
                <BarSeries
                  color="#6c3b00"
                  data={[
                    { x: 2022, y: policyQuantification.road_transport[2022]},
                    { x: 2023, y: policyQuantification.road_transport[2023]},
                    { x: 2024, y: policyQuantification.road_transport[2024]},
                    { x: 2025, y: policyQuantification.road_transport[2025]},
                    { x: 2026, y: policyQuantification.road_transport[2026]},
                    { x: 2027, y: policyQuantification.road_transport[2027]},
                    { x: 2028, y: policyQuantification.road_transport[2028]},
                    { x: 2029, y: policyQuantification.road_transport[2029]},
                    { x: 2030, y: policyQuantification.road_transport[2030]},
                    { x: 2031, y: policyQuantification.road_transport[2031]},
                    { x: 2032, y: policyQuantification.road_transport[2032]},
                    { x: 2033, y: policyQuantification.road_transport[2033]},
                    { x: 2034, y: policyQuantification.road_transport[2034]},
                    { x: 2035, y: policyQuantification.road_transport[2035]},
                    { x: 2036, y: policyQuantification.road_transport[2036]},
                    { x: 2037, y: policyQuantification.road_transport[2037]},
                    { x: 2038, y: policyQuantification.road_transport[2038]},
                    { x: 2039, y: policyQuantification.road_transport[2039]},
                    { x: 2040, y: policyQuantification.road_transport[2040]},
                    { x: 2041, y: policyQuantification.road_transport[2041]},
                    { x: 2042, y: policyQuantification.road_transport[2042]},
                    { x: 2043, y: policyQuantification.road_transport[2043]},
                    { x: 2044, y: policyQuantification.road_transport[2044]},
                    { x: 2045, y: policyQuantification.road_transport[2045]},
                    { x: 2046, y: policyQuantification.road_transport[2046]},
                    { x: 2047, y: policyQuantification.road_transport[2047]},
                    { x: 2048, y: policyQuantification.road_transport[2048]},
                    { x: 2049, y: policyQuantification.road_transport[2049]},
                    { x: 2050, y: policyQuantification.road_transport[2050]},
                  ]}
                />
                <BarSeries
                  color="#00aed5"
                  data={[
                    { x: 2022, y: policyQuantification.waterways_transport[2022]},
                    { x: 2023, y: policyQuantification.waterways_transport[2023]},
                    { x: 2024, y: policyQuantification.waterways_transport[2024]},
                    { x: 2025, y: policyQuantification.waterways_transport[2025]},
                    { x: 2026, y: policyQuantification.waterways_transport[2026]},
                    { x: 2027, y: policyQuantification.waterways_transport[2027]},
                    { x: 2028, y: policyQuantification.waterways_transport[2028]},
                    { x: 2029, y: policyQuantification.waterways_transport[2029]},
                    { x: 2030, y: policyQuantification.waterways_transport[2030]},
                    { x: 2031, y: policyQuantification.waterways_transport[2031]},
                    { x: 2032, y: policyQuantification.waterways_transport[2032]},
                    { x: 2033, y: policyQuantification.waterways_transport[2033]},
                    { x: 2034, y: policyQuantification.waterways_transport[2034]},
                    { x: 2035, y: policyQuantification.waterways_transport[2035]},
                    { x: 2036, y: policyQuantification.waterways_transport[2036]},
                    { x: 2037, y: policyQuantification.waterways_transport[2037]},
                    { x: 2038, y: policyQuantification.waterways_transport[2038]},
                    { x: 2039, y: policyQuantification.waterways_transport[2039]},
                    { x: 2040, y: policyQuantification.waterways_transport[2040]},
                    { x: 2041, y: policyQuantification.waterways_transport[2041]},
                    { x: 2042, y: policyQuantification.waterways_transport[2042]},
                    { x: 2043, y: policyQuantification.waterways_transport[2043]},
                    { x: 2044, y: policyQuantification.waterways_transport[2044]},
                    { x: 2045, y: policyQuantification.waterways_transport[2045]},
                    { x: 2046, y: policyQuantification.waterways_transport[2046]},
                    { x: 2047, y: policyQuantification.waterways_transport[2047]},
                    { x: 2048, y: policyQuantification.waterways_transport[2048]},
                    { x: 2049, y: policyQuantification.waterways_transport[2049]},
                    { x: 2050, y: policyQuantification.waterways_transport[2050]},
                  ]}
                /> */}
              </XYPlot>
            </div>
            <br />
            <div></div>
          </form>
        </div>
      </section>
    </article>
  );
};

U3policies.propTypes = {
  policyQuantification: PropTypes.object.isRequired,
  emission: PropTypes.object.isRequired,
  baseline: PropTypes.object.isRequired,
  policyQuant: PropTypes.object.isRequired,
  // passengerMob: PropTypes.object.isRequired,
  // freightTrans: PropTypes.object.isRequired,
  // modalPassShares: PropTypes.object.isRequired,
  // modalSplitPass: PropTypes.object.isRequired,
  // modalFreShares: PropTypes.object.isRequired,
  // modalSplitFre: PropTypes.object.isRequired,
  // fuelSharesBusTypes: PropTypes.object.isRequired,
  // fuelSharesBus: PropTypes.object.isRequired,
  // fuelSharesCarTypes: PropTypes.object.isRequired,
  // fuelSharesCar: PropTypes.object.isRequired,
  // electricityTransTypes: PropTypes.object.isRequired,
  // electricityTrans: PropTypes.object.isRequired,
  projections: PropTypes.object.isRequired,
};
