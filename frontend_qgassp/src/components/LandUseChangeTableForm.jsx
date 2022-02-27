import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Button } from "./Button";
import { LUCBaseline } from "./LUCBaseline";
import "../css/landusechange.css";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

/**
 * LUC inputs table from to
 * @return {}
 */

 export const LandUseChangeTableForm = ({
    user,
    onLogin,
    onLogout,
    onCreateAccount,
    country,
    year,
    population
  }) => {
    // to Forest vars
    // #region 
    const [cropToForest, setCropToForest] = useState(0);
    const [cropToForestMineral, setCropToForestMineral] = useState(0);
    const [cropToForestOrganic, setCropToForestOrganic] = useState(0);
    const [cropToForestYear, setCropToForestYear] = useState(2022);

    const [grassToForest, setGrassToForest] = useState(0);
    const [grassToForestMineral, setGrassToForestMineral] = useState(0);
    const [grassToForestOrganic, setGrassToForestOrganic] = useState(0);
    const [grassToForestYear, setGrassToForestYear] = useState(2022);


    const [wetToForest, setWetToForest] = useState(0);
    const [wetToForestMineral, setWetToForestMineral] = useState(0);
    const [wetToForestOrganic, setWetToForestOrganic] = useState(0);
    const [wetToForestYear, setWetToForestYear] = useState(2022);

    const [settlementsToForest, setSettlementsToForest] = useState(0);
    const [settlementsToForestMineral, setSettlementsToForestMineral] = useState(0);
    const [settlementsToForestOrganic, setSettlementsToForestOrganic] = useState(0);
    const [settlementsToForestYear, setSettlementsToForestYear] = useState(2022);


    const [otherToForest, setOtherToForest] = useState(0);
    const [otherToForestMineral, setOtherToForestMineral] = useState(0);
    const [otherToForestOrganic, setOtherToForestOrganic] = useState(0);
    const [otherToForestYear, setOtherToForestYear] = useState(2022);
    // #endregion

    // to Crop vars
    // #region 
    const [forestToCrop, setForestToCrop] = useState(0);
    const [forestToCropMineral, setForestToCropMineral] = useState(0);
    const [forestToCropOrganic, setForestToCropOrganic] = useState(0);
    const [forestToCropYear, setForestToCropYear] = useState(2022);

    const [grassToCrop, setGrassToCrop] = useState(0);
    const [grassToCropMineral, setGrassToCropMineral] = useState(0);
    const [grassToCropOrganic, setGrassToCropOrganic] = useState(0);
    const [grassToCropYear, setGrassToCropYear] = useState(2022);

    const [wetToCrop, setWetToCrop] = useState(0);
    const [wetToCropMineral, setWetToCropMineral] = useState(0);
    const [wetToCropOrganic, setWetToCropOrganic] = useState(0);
    const [wetToCropYear, setWetToCropYear] = useState(2022);

    const [settlementsToCrop, setSettlementsToCrop] = useState(0);
    const [settlementsToCropMineral, setSettlementsToCropMineral] = useState(0);
    const [settlementsToCropOrganic, setSettlementsToCropOrganic] = useState(0);
    const [settlementsToCropYear, setSettlementsToCropYear] = useState(2022);

    const [otherToCrop, setOtherToCrop] = useState(0);
    const [otherToCropMineral, setOtherToCropMineral] = useState(0);
    const [otherToCropOrganic, setOtherToCropOrganic] = useState(0);
    const [otherToCropYear, setOtherToCropYear] = useState(2022);
    // #endregion

    // to Grass vars
    // #region 
    const [forestToGrass, setForestToGrass] = useState(0);
    const [forestToGrassMineral, setForestToGrassMineral] = useState(0);
    const [forestToGrassOrganic, setForestToGrassOrganic] = useState(0);
    const [forestToGrassYear, setForestToGrassYear] = useState(2022);

    const [cropToGrass, setCropToGrass] = useState(0);
    const [cropToGrassMineral, setCropToGrassMineral] = useState(0);
    const [cropToGrassOrganic, setCropToGrassOrganic] = useState(0);
    const [cropToGrassYear, setCropToGrassYear] = useState(2022);

    const [wetToGrass, setWetToGrass] = useState(0);
    const [wetToGrassMineral, setWetToGrassMineral] = useState(0);
    const [wetToGrassOrganic, setWetToGrassOrganic] = useState(0);
    const [wetToGrassYear, setWetToGrassYear] = useState(2022);

    const [settlementsToGrass, setSettlementsToGrass] = useState(0);
    const [settlementsToGrassMineral, setSettlementsToGrassMineral] = useState(0);
    const [settlementsToGrassOrganic, setSettlementsToGrassOrganic] = useState(0);
    const [settlementsToGrassYear, setSettlementsToGrassYear] = useState(2022);

    const [otherToGrass, setOtherToGrass] = useState(0);
    const [otherToGrassMineral, setOtherToGrassMineral] = useState(0);
    const [otherToGrassOrganic, setOtherToGrassOrganic] = useState(0);
    const [otherToGrassYear, setOtherToGrassYear] = useState(2022);
    // #endregion
    
     // to other wetlands/flooded land vars
     // #region 
     const [landConvertedToPeat, setLandConvertedToPeat] = useState(0);
     const [landConvertedToPeatMineral, setLandConvertedToPeatMineral] = useState(0);
     const [landConvertedToPeatOrganic, setLandConvertedToPeatOrganic] = useState(0);
     const [landConvertedToPeatYear, setLandConvertedToPeatYear] = useState(2022);

     const [peatLandRestore, setPeatLandRestore] = useState(0);
     const [peatLandRestoreMineral, setPeatLandRestoreMineral] = useState(0);
     const [peatLandRestoreOrganic, setPeatLandRestoreOrganic] = useState(0);
     const [peatLandRestoreYear, setPeatLandRestoreYear] = useState(2022);

     const [forestToWetland, setForestToWetland] = useState(0);
     const [forestToWetlandMineral, setForestToWetlandMineral] = useState(0);
     const [forestToWetlandOrganic, setForestToWetlandOrganic] = useState(0);
     const [forestToWetlandYear, setForestToWetlandYear] = useState(2022);

     const [cropToWet, setCropToWet] = useState(0);
     const [cropToWetMineral, setCropToWetMineral] = useState(0);
     const [cropToWetOrganic, setCropToWetOrganic] = useState(0);
     const [cropToWetYear, setCropToWetYear] = useState(2022);

     const [grassToWet, setGrassToWet] = useState(0);
     const [grassToWetMineral, setGrassToWetMineral] = useState(0);
     const [grassToWetOrganic, setGrassToWetOrganic] = useState(0);
     const [grassToWetYear, setGrassToWetYear] = useState(2022);
    // #endregion

    // to Settlements vars
    // #region 
    const [forestToSettlements, setForestToSettlements] = useState(0);
    const [forestToSettlementsMineral, setForestToSettlementsMineral] = useState(0);
    const [forestToSettlementsOrganic, setForestToSettlementsOrganic] = useState(0);
    const [forestToSettlementsYear, setForestToSettlementsYear] = useState(2022);

    const [cropToSettlements, setCropToSettlements] = useState(0);
    const [cropToSettlementsMineral, setCropToSettlementsMineral] = useState(0);
    const [cropToSettlementsOrganic, setCropToSettlementsOrganic] = useState(0);
    const [cropToSettlementsYear, setCropToSettlementsYear] = useState(2022);

    const [grassToSettlements, setGrassToSettlements] = useState(0);
    const [grassToSettlementsMineral, setGrassToSettlementsMineral] = useState(0);
    const [grassToSettlementsOrganic, setGrassToSettlementsOrganic] = useState(0);
    const [grassToSettlementsYear, setGrassToSettlementsYear] = useState(2022);

    const [wetToSettlements, setWetToSettlements] = useState(0);
    const [wetToSettlementsMineral, setWetToSettlementsMineral] = useState(0);
    const [wetToSettlementsOrganic, setWetToSettlementsOrganic] = useState(0);
    const [wetToSettlementsYear, setWetToSettlementsYear] = useState(2022);

    const [otherToSettlements, setOtherToSettlements] = useState(0);
    const [otherToSettlementsMineral, setOtherToSettlementsMineral] = useState(0);
    const [otherToSettlementsOrganic, setOtherToSettlementsOrganic] = useState(0);
    const [otherToSettlementsYear, setOtherToSettlementsYear] = useState(2022);
    // #endregion

    // to other land vars
    // #region 
    const [forestToOther, setForestToOther] = useState(0);
    const [forestToOtherMineral, setForestToOtherMineral] = useState(0);
    const [forestToOtherOrganic, setForestToOtherOrganic] = useState(0);
    const [forestToOtherYear, setForestToOtherYear] = useState(2022);

    const [cropToOther, setCropToOther] = useState(0);
    const [cropToOtherMineral, setCropToOtherMineral] = useState(0);
    const [cropToOtherOrganic, setCropToOtherOrganic] = useState(0);
    const [cropToOtherYear, setCropToOtherYear] = useState(2022);

    const [grassToOther, setGrassToOther] = useState(0);
    const [grassToOtherMineral, setGrassToOtherMineral] = useState(0);
    const [grassToOtherOrganic, setGrassToOtherOrganic] = useState(0);
    const [grassToOtherYear, setGrassToOtherYear] = useState(2022);

    const [wetToOther, setWetToOther] = useState(0);
    const [wetToOtherMineral, setWetToOtherMineral] = useState(0);
    const [wetToOtherOrganic, setWetToOtherOrganic] = useState(0);
    const [wetToOtherYear, setWetToOtherYear] = useState(2022);

    const [settlementsToOther, setSettlementsToOther] = useState(0);
    const [settlementsToOtherMineral, setSettlementsToOtherMineral] = useState(0);
    const [settlementsToOtherOrganic, setSettlementsToOtherOrganic] = useState(0);
    const [settlementsToOtherYear, setSettlementsToOtherYear] = useState(2022);
    // #endregion

    const [totalArea, setTotalArea] = useState(
        cropToForest + grassToForest + wetToForest + 
        settlementsToForest + otherToForest + forestToCrop + 
        grassToCrop + wetToCrop + settlementsToCrop + otherToCrop +
        forestToGrass + cropToGrass + wetToGrass + settlementsToGrass +
        otherToGrass + landConvertedToPeat + peatLandRestore + forestToWetland +
        cropToWet + grassToWet + forestToOther + wetToOther + grassToOther + 
        cropToOther + settlementsToOther
    );
    const [totalMineral, setTotalMineral] = useState(
      cropToForestMineral + grassToForestMineral + wetToForestMineral + 
      settlementsToForestMineral + otherToForestMineral + forestToCropMineral + 
      grassToCropMineral + wetToCropMineral + settlementsToCropMineral + otherToCropMineral +
      forestToGrassMineral + cropToGrassMineral + wetToGrassMineral + settlementsToGrassMineral +
      otherToGrassMineral + landConvertedToPeatMineral + peatLandRestoreMineral + forestToWetlandMineral +
      cropToWetMineral + grassToWetMineral + forestToOtherMineral + wetToOtherMineral + grassToOtherMineral + 
      cropToOtherMineral + settlementsToOtherMineral
    );
    const [totalOrganic, setTotalOrganic] = useState(
      cropToForestOrganic + grassToForestOrganic + wetToForestOrganic + 
      settlementsToForestOrganic + otherToForestOrganic + forestToCropOrganic + 
      grassToCropOrganic + wetToCropOrganic + settlementsToCropOrganic + otherToCropOrganic +
      forestToGrassOrganic + cropToGrassOrganic + wetToGrassOrganic + settlementsToGrassOrganic +
      otherToGrassOrganic + landConvertedToPeatOrganic + peatLandRestoreOrganic + 
      forestToWetlandOrganic + cropToWetOrganic + grassToWetOrganic + forestToOtherOrganic + 
      wetToOtherOrganic + grassToOtherOrganic + cropToOtherOrganic + settlementsToOtherOrganic
    );
    const [LUCbaseline, setLUCbaseline] = useState(false);
    const navigate = useNavigate();

    const options = [];
    for (let i = 2022; i < 2051; i++) options.push(i);

    // toForest handlers
    // #region 
    // crop
    const handleCropToForest = (e) => {
        setCropToForest(parseInt(e.target.value));
    };

    const handleCropToForestMineral = (e) => {
      setCropToForestMineral(parseInt(e.target.value));
    };

    const handleCropToForestOrganic = (e) => {
      setCropToForestOrganic(parseInt(e.target.value));
    };

    const handleCropToForestYear = (e) => {
      e.preventDefault();
      setCropToForestYear(Number(e.target.value));
    };
    // grass
    const handleGrassToForest = (e) => {
      setGrassToForest(parseInt(e.target.value));
    };

    const handleGrassToForestMineral = (e) => {
      setGrassToForestMineral(parseInt(e.target.value));
    };

    const handleGrassToForestOrganic = (e) => {
      setGrassToForestOrganic(parseInt(e.target.value));
    };

    const handleGrassToForestYear = (e) => {
      e.preventDefault();
      setGrassToForestYear(Number(e.target.value));
    };
    // wet
    const handleWetToForest = (e) => {
      setWetToForest(parseInt(e.target.value));
    };

    const handleWetToForestMineral = (e) => {
      setWetToForestMineral(parseInt(e.target.value));
    };

    const handleWetToForestOrganic = (e) => {
      setWetToForestOrganic(parseInt(e.target.value));
    };

    const handleWetToForestYear = (e) => {
      e.preventDefault();
      setWetToForestYear(Number(e.target.value));
    };
    // settlements
    const handleSettlementsToForest = (e) => {
      setSettlementsToForest(parseInt(e.target.value));
    };

    const handleSettlementsToForestMineral = (e) => {
      setSettlementsToForestMineral(parseInt(e.target.value));
    };
    const handleSettlementsToForestOrganic = (e) => {
      setSettlementsToForestOrganic(parseInt(e.target.value));
    };

    const handleSettlementsToForestYear = (e) => {
      e.preventDefault();
      setSettlementsToForestYear(Number(e.target.value));
    };
    // other
    const handleOtherToForest = (e) => {
      setOtherToForest(parseInt(e.target.value));
    };

    const handleOtherToForestMineral = (e) => {
      setOtherToForestMineral(parseInt(e.target.value));
    };

    const handleOtherToForestOrganic = (e) => {
      setOtherToForestOrganic(parseInt(e.target.value));
    };

    const handleOtherToForestYear = (e) => {
      e.preventDefault();
      setOtherToForestYear(Number(e.target.value));
    };
  // #endregion
    
    // to Crop handlers
    // #region 
    // forest
    const handleForestToCrop = (e) => {
      setForestToCrop(parseInt(e.target.value));
    };

    const handleForestToCropMineral = (e) => {
      setForestToCropMineral(parseInt(e.target.value));
    };

    const handleForestToCropOrganic = (e) => {
      setForestToCropOrganic(parseInt(e.target.value));
    };

    const handleForestToCropYear = (e) => {
      e.preventDefault();
      setForestToCropYear(Number(e.target.value));
    };
    // grass
    const handleGrassToCrop = (e) => {
      setGrassToCrop(parseInt(e.target.value));
    };

    const handleGrassToCropMineral = (e) => {
      setGrassToCropMineral(parseInt(e.target.value));
    };

    const handleGrassToCropOrganic = (e) => {
      setGrassToCropOrganic(parseInt(e.target.value));
    };

    const handleGrassToCropYear = (e) => {
      e.preventDefault();
      setGrassToCropYear(Number(e.target.value));
    };
    // wetland
    const handleWetToCrop = (e) => {
      setWetToCrop(parseInt(e.target.value));
    };

    const handleWetToCropMineral = (e) => {
      setWetToCropMineral(parseInt(e.target.value));
    };

    const handleWetToCropOrganic = (e) => {
      setWetToCropOrganic(parseInt(e.target.value));
    };
    const handleWetToCropYear = (e) => {
      e.preventDefault();
      setWetToCropYear(Number(e.target.value));
    };
    // settlements
    const handleSettlementsToCrop = (e) => {
      setSettlementsToCrop(parseInt(e.target.value));
    };

    const handleSettlementsToCropMineral = (e) => {
      setSettlementsToCropMineral(parseInt(e.target.value));
    };

    const handleSettlementsToCropOrganic = (e) => {
      setSettlementsToCropOrganic(parseInt(e.target.value));
    };
    const handleSettlementsToCropYear = (e) => {
      e.preventDefault();
      setSettlementsToCropYear(Number(e.target.value));
    };
    // other land
    const handleOtherToCrop = (e) => {
      setOtherToCrop(parseInt(e.target.value));
    };

    const handleOtherToCropMineral = (e) => {
      setOtherToCropMineral(parseInt(e.target.value));
    };

    const handleOtherToCropOrganic = (e) => {
      setOtherToCropOrganic(parseInt(e.target.value));
    };
    const handleOtherToCropYear = (e) => {
      e.preventDefault();
      setOtherToCropYear(Number(e.target.value));
    };
    // #endregion

    // to Grass handlers
    // #region 
    // forest
    const handleForestToGrass = (e) => {
      setForestToGrass(parseInt(e.target.value));
    };

    const handleForestToGrassMineral = (e) => {
      setForestToGrassMineral(parseInt(e.target.value));
    };

    const handleForestToGrassOrganic = (e) => {
      setForestToGrassOrganic(parseInt(e.target.value));
    };

    const handleForestToGrassYear = (e) => {
      e.preventDefault();
      setForestToGrassYear(Number(e.target.value));
    };
    // crop
    const handleCropToGrass = (e) => {
      setCropToGrass(parseInt(e.target.value));
    };

    const handleCropToGrassMineral = (e) => {
      setCropToGrassMineral(parseInt(e.target.value));
    };

    const handleCropToGrassOrganic = (e) => {
      setCropToGrassOrganic(parseInt(e.target.value));
    };

    const handleCropToGrassYear = (e) => {
      e.preventDefault();
      setCropToGrassYear(Number(e.target.value));
    };
    // wetlands
     const handleWetToGrass = (e) => {
      setWetToGrass(parseInt(e.target.value));
    };

    const handleWetToGrassMineral = (e) => {
      setWetToGrassMineral(parseInt(e.target.value));
    };

    const handleWetToGrassOrganic = (e) => {
      setWetToGrassOrganic(parseInt(e.target.value));
    };

    const handleWetToGrassYear = (e) => {
      e.preventDefault();
      setWetToGrassYear(Number(e.target.value));
    };
    // settlements
    const handleSettlementsToGrass = (e) => {
      setSettlementsToGrass(parseInt(e.target.value));
    };

    const handleSettlementsToGrassMineral = (e) => {
      setSettlementsToGrassMineral(parseInt(e.target.value));
    };

    const handleSettlementsToGrassOrganic = (e) => {
      setSettlementsToGrassOrganic(parseInt(e.target.value));
    };

    const handleSettlementsToGrassYear = (e) => {
      e.preventDefault();
      setSettlementsToGrassYear(Number(e.target.value));
    };
    // other land
    const handleOtherToGrass = (e) => {
      setOtherToGrass(parseInt(e.target.value));
    };

    const handleOtherToGrassMineral = (e) => {
      setOtherToGrassMineral(parseInt(e.target.value));
    };

    const handleOtherToGrassOrganic = (e) => {
      setOtherToGrassOrganic(parseInt(e.target.value));
    };

    const handleOtherToGrassYear = (e) => {
      e.preventDefault();
      setOtherToGrassYear(Number(e.target.value));
    };
    // #endregion

    // to other wetlands/flooded land handlers
    // #region 
    // to peat extraction
    const handleLandConvertedToPeat = (e) => {
      setLandConvertedToPeat(parseInt(e.target.value));
    };

    const handleLandConvertedToPeatMineral = (e) => {
      setLandConvertedToPeatMineral(parseInt(e.target.value));
    };

    const handleLandConvertedToPeatOrganic = (e) => {
      setLandConvertedToPeatOrganic(parseInt(e.target.value));
    };

    const handleLandConvertedToPeatYear = (e) => {
      e.preventDefault();
      setLandConvertedToPeatYear(Number(e.target.value));
    };

    // to peatland restore
     const handlePeatLandRestore = (e) => {
      setPeatLandRestore(parseInt(e.target.value));
    };

    const handlePeatLandRestoreMineral = (e) => {
      setPeatLandRestoreMineral(parseInt(e.target.value));
    };

    const handlePeatLandRestoreOrganic = (e) => {
      setPeatLandRestoreOrganic(parseInt(e.target.value));
    };

    const handlePeatLandRestoreYear = (e) => {
      e.preventDefault();
      setPeatLandRestoreYear(Number(e.target.value));
    };

    // forest to
    const handleForestToWetland = (e) => {
      setForestToWetland(parseInt(e.target.value));
    };

    const handleForestToWetlandMineral = (e) => {
      setForestToWetlandMineral(parseInt(e.target.value));
    };

    const handleForestToWetlandOrganic = (e) => {
      setForestToWetlandOrganic(parseInt(e.target.value));
    };

    const handleForestToWetlandYear = (e) => {
      e.preventDefault();
      setForestToWetlandYear(Number(e.target.value));
    };

    // cropland to
    const handleCropToWet = (e) => {
      setCropToWet(parseInt(e.target.value));
    };

    const handleCropToWetMineral = (e) => {
      setCropToWetMineral(parseInt(e.target.value));
    };

    const handleCropToWetOrganic = (e) => {
      setCropToWetOrganic(parseInt(e.target.value));
    };

    const handleCropToWetYear = (e) => {
      e.preventDefault();
      setCropToWetYear(Number(e.target.value));
    };

    // grassland to
    const handleGrassToWet = (e) => {
      setGrassToWet(parseInt(e.target.value));
    };

    const handleGrassToWetMineral = (e) => {
      setGrassToWetMineral(parseInt(e.target.value));
    };

    const handleGrassToWetOrganic = (e) => {
      setGrassToWetOrganic(parseInt(e.target.value));
    };

    const handleGrassToWetYear = (e) => {
      e.preventDefault();
      setGrassToWetYear(Number(e.target.value));
    };
     // #endregion
    
    // to Settlements handlers
    // #region 
    // forest
    const handleForestToSettlements = (e) => {
      setForestToSettlements(parseInt(e.target.value));
    };

    const handleForestToSettlementsMineral = (e) => {
      setForestToSettlementsMineral(parseInt(e.target.value));
    };

    const handleForestToSettlementsOrganic = (e) => {
      setForestToSettlementsOrganic(parseInt(e.target.value));
    };

    const handleForestToSettlementsYear = (e) => {
      e.preventDefault();
      setForestToSettlementsYear(Number(e.target.value));
    };
     // crop
     const handleCropToSettlements = (e) => {
      setCropToSettlements(parseInt(e.target.value));
    };

    const handleCropToSettlementsMineral = (e) => {
      setCropToSettlementsMineral(parseInt(e.target.value));
    };

    const handleCropToSettlementsOrganic = (e) => {
      setCropToSettlementsOrganic(parseInt(e.target.value));
    };

    const handleCropToSettlementsYear = (e) => {
      e.preventDefault();
      setCropToSettlementsYear(Number(e.target.value));
    };
     // grass
     const handleGrassToSettlements = (e) => {
      setGrassToSettlements(parseInt(e.target.value));
    };

    const handleGrassToSettlementsMineral = (e) => {
      setGrassToSettlementsMineral(parseInt(e.target.value));
    };

    const handleGrassToSettlementsOrganic = (e) => {
      setGrassToSettlementsOrganic(parseInt(e.target.value));
    };

    const handleGrassToSettlementsYear = (e) => {
      e.preventDefault();
      setGrassToSettlementsYear(Number(e.target.value));
    };
     // wet
     const handleWetToSettlements = (e) => {
      setWetToSettlements(parseInt(e.target.value));
    };

    const handleWetToSettlementsMineral = (e) => {
      setWetToSettlementsMineral(parseInt(e.target.value));
    };

    const handleWetToSettlementsOrganic = (e) => {
      setWetToSettlementsOrganic(parseInt(e.target.value));
    };

    const handleWetToSettlementsYear = (e) => {
      e.preventDefault();
      setWetToSettlementsYear(Number(e.target.value));
    };
    // other
    const handleOtherToSettlements = (e) => {
      setOtherToSettlements(parseInt(e.target.value));
    };

    const handleOtherToSettlementsMineral = (e) => {
      setOtherToSettlementsMineral(parseInt(e.target.value));
    };

    const handleOtherToSettlementsOrganic = (e) => {
      setOtherToSettlementsOrganic(parseInt(e.target.value));
    };

    const handleOtherToSettlementsYear = (e) => {
      e.preventDefault();
      setOtherToSettlementsYear(Number(e.target.value));
    };
    // #endregion

    // to other handlers
    // #region 
    // forest
    const handleForestToOther = (e) => {
      setForestToOther(parseInt(e.target.value));
    };

    const handleForestToOtherMineral = (e) => {
      setForestToOtherMineral(parseInt(e.target.value));
    };

    const handleForestToOtherOrganic = (e) => {
      setForestToOtherOrganic(parseInt(e.target.value));
    };

    const handleForestToOtherYear = (e) => {
      e.preventDefault();
      setForestToOtherYear(Number(e.target.value));
    };

    // crop
    const handleCropToOther = (e) => {
      setCropToOther(parseInt(e.target.value));
    };

    const handleCropToOtherMineral = (e) => {
      setCropToOtherMineral(parseInt(e.target.value));
    };

    const handleCropToOtherOrganic = (e) => {
      setCropToOtherOrganic(parseInt(e.target.value));
    };

    const handleCropToOtherYear = (e) => {
      e.preventDefault();
      setCropToOtherYear(Number(e.target.value));
    };

    // grass
    const handleGrassToOther = (e) => {
      setGrassToOther(parseInt(e.target.value));
    };

    const handleGrassToOtherMineral = (e) => {
      setGrassToOtherMineral(parseInt(e.target.value));
    };

    const handleGrassToOtherOrganic = (e) => {
      setGrassToOtherOrganic(parseInt(e.target.value));
    };

    const handleGrassToOtherYear = (e) => {
      e.preventDefault();
      setGrassToOtherYear(Number(e.target.value));
    };

    // wet
    const handleWetToOther = (e) => {
      setWetToOther(parseInt(e.target.value));
    };

    const handleWetToOtherMineral = (e) => {
      setWetToOtherMineral(parseInt(e.target.value));
    };

    const handleWetToOtherOrganic = (e) => {
      setWetToOtherOrganic(parseInt(e.target.value));
    };

    const handleWetToOtherYear = (e) => {
      e.preventDefault();
      setWetToOtherYear(Number(e.target.value));
    };
     // settlements
    const handleSettlementsToOther = (e) => {
      setSettlementsToOther(parseInt(e.target.value));
    };

    const handleSettlementsToOtherMineral = (e) => {
      setSettlementsToOtherMineral(parseInt(e.target.value));
    };

    const handleSettlementsToOtherOrganic = (e) => {
      setSettlementsToOtherOrganic(parseInt(e.target.value));
    };

    const handleSettlementsToOtherYear = (e) => {
      e.preventDefault();
      setSettlementsToOtherYear(Number(e.target.value));
    };
    // #endregion

    // functions for baseline generation
    const setLandUseChange = () => {
        setTotalArea(
          cropToForest + grassToForest + wetToForest + 
          settlementsToForest + otherToForest + forestToCrop + 
          grassToCrop + wetToCrop + settlementsToCrop + otherToCrop +
          forestToGrass + cropToGrass + wetToGrass + settlementsToGrass +
          otherToGrass + landConvertedToPeat + peatLandRestore + forestToWetland +
          cropToWet + grassToWet + forestToOther + wetToOther + grassToOther + 
          cropToOther + settlementsToOther
        );
        setLUCbaseline(true);
    };

    if (LUCbaseline === false) {
        return (
          <div>
            <article>
              {
                <Header
                  user={user}
                  onLogin={onLogin}
                  onLogout={onLogout}
                  onCreateAccount={onCreateAccount}
                />
              }
              <div className="headerSettlement">
                <Divider textAlign="left" flexItem>
                  {" "}
                  <Chip label="U5 LAND-USE CHANGE" />
                </Divider>
              </div>
              <div className="luc_main">
                <section>
                  <form id="from_landusechange_type" onSubmit={setLandUseChange}>                   
                    <div className="row">
                      <table className="toForest tbl">
                          <thead>
                              <th className="row-title">Land-Use Change</th>
                              <th>Total area, ha</th>
                              <th>Soil area (mineral), ha</th>
                              <th>Soil area (organic), ha</th>
                              <th>Year of implementation</th>
                          </thead>
                          <tbody>
                              <tr>
                                  <td className="row-title">
                                      Cropland to Forest Land
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="cropToForest"
                                          min="0"
                                          value={cropToForest}
                                          onChange={handleCropToForest}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="cropToForestMineral"
                                          min="0"
                                          value={cropToForestMineral}
                                          onChange={handleCropToForestMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="cropToForestOrganic"
                                          min="0"
                                          value={cropToForestOrganic}
                                          onChange={handleCropToForestOrganic}
                                          required
                                      />
                                  </td>
                                  <td>
                                    <select
                                        className="table-cell"
                                        id="cropToForestYear"
                                        name="cropToForestYear"
                                        onChange={handleCropToForestYear}
                                        value={cropToForestYear}
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
                                  </td>
                              </tr>
                              <tr>
                                  <td className="row-title">
                                      Grassland to Forest Land
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="grassToForest"
                                          min="0"
                                          value={grassToForest}
                                          onChange={handleGrassToForest}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="grassToForestMineral"
                                          min="0"
                                          value={grassToForestMineral}
                                          onChange={handleGrassToForestMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="grassToForestOrganic"
                                          min="0"
                                          value={grassToForestOrganic}
                                          onChange={handleGrassToForestOrganic}
                                          required
                                      />
                                  </td>
                                  <td>
                                    <select
                                        className="table-cell"
                                        id="grassToForestYear"
                                        name="grassToForestYear"
                                        onChange={handleGrassToForestYear}
                                        value={grassToForestYear}
                                        defaultValue="Select year"
                                        required
                                      >

                                        {options.map((option) => (
                                          <option key={option} value={option}>
                                            {option}{" "}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="row-title">
                                      Wetlands to Forest Land
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="wetToForest"
                                          min="0"
                                          value={wetToForest}
                                          onChange={handleWetToForest}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="wetToForestMineral"
                                          min="0"
                                          value={wetToForestMineral}
                                          onChange={handleWetToForestMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="wetToForestOrganic"
                                          min="0"
                                          value={wetToForestOrganic}
                                          onChange={handleWetToForestOrganic}
                                          required
                                      />
                                  </td>
                                  <td>
                                    <select
                                        className="table-cell"
                                        id="wetToForestYear"
                                        name="wetToForestYear"
                                        onChange={handleWetToForestYear}
                                        value={wetToForestYear}
                                        defaultValue="Select year"
                                        required
                                      >

                                        {options.map((option) => (
                                          <option key={option} value={option}>
                                            {option}{" "}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="row-title">
                                      Settlements to Forest Land
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="settlementsToForest"
                                          min="0"
                                          value={settlementsToForest}
                                          onChange={handleSettlementsToForest}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="settlementsToForestMineral"
                                          min="0"
                                          value={settlementsToForestMineral}
                                          onChange={handleSettlementsToForestMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="settlementsToForestOrganic"
                                          min="0"
                                          value={settlementsToForestOrganic}
                                          onChange={handleSettlementsToForestOrganic}
                                          required
                                      />
                                  </td>
                                  <td>
                                    <select
                                        className="table-cell"
                                        id="settlementsToForestYear"
                                        name="settlementsToForestYear"
                                        onChange={handleSettlementsToForestYear}
                                        value={settlementsToForestYear}
                                        defaultValue="Select year"
                                        required
                                      >

                                        {options.map((option) => (
                                          <option key={option} value={option}>
                                            {option}{" "}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="row-title">
                                      Other land to Forest Land
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="otherToForest"
                                          min="0"
                                          value={otherToForest}
                                          onChange={handleOtherToForest}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="otherToForestMineral"
                                          min="0"
                                          value={otherToForestMineral}
                                          onChange={handleOtherToForestMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="otherToForestOrganic"
                                          min="0"
                                          value={otherToForestOrganic}
                                          onChange={handleOtherToForestOrganic}
                                          required
                                      />
                                  </td>
                                  <td>
                                    <select
                                        className="table-cell"
                                        id="otherToForestYear"
                                        name="otherToForestYear"
                                        onChange={handleOtherToForestYear}
                                        value={otherToForestYear}
                                        defaultValue="Select year"
                                        required
                                      >

                                        {options.map((option) => (
                                          <option key={option} value={option}>
                                            {option}{" "}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                              </tr>
                          </tbody>
                      </table>

                      <table className="toCrop tbl">
                          <thead>
                              <th className="row-title">Land-Use Change</th>
                              <th>Total area, ha</th>
                              <th>Soil area (mineral), ha</th>
                              <th>Soil area (organic), ha</th>
                              <th>Year of implementation</th>
                          </thead>
                          <tbody>
                              <tr>
                                  <td className="row-title">
                                      Forest Land to Cropland
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="forestToCrop"
                                          min="0"
                                          value={forestToCrop}
                                          onChange={handleForestToCrop}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="forestToCropMineral"
                                          min="0"
                                          value={forestToCropMineral}
                                          onChange={handleForestToCropMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="forestToCropOrganic"
                                          min="0"
                                          value={forestToCropOrganic}
                                          onChange={handleForestToCropOrganic}
                                          required
                                      />
                                  </td>
                                  <td>
                                    <select
                                        className="table-cell"
                                        id="forestToCropYear"
                                        name="forestToCropYear"
                                        onChange={handleForestToCropYear}
                                        value={forestToCropYear}
                                        defaultValue="Select year"
                                        required
                                      >

                                        {options.map((option) => (
                                          <option key={option} value={option}>
                                            {option}{" "}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="row-title">
                                      Grassland to Cropland
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="grassToCrop"
                                          min="0"
                                          value={grassToCrop}
                                          onChange={handleGrassToCrop}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="grassToCropMineral"
                                          min="0"
                                          value={grassToCropMineral}
                                          onChange={handleGrassToCropMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="grassToCropOrganic"
                                          min="0"
                                          value={grassToCropOrganic}
                                          onChange={handleGrassToCropOrganic}
                                          required
                                      />
                                  </td>
                                  <td>
                                    <select
                                        className="table-cell"
                                        id="grassToCropYear"
                                        name="grassToCropYear"
                                        onChange={handleGrassToCropYear}
                                        value={grassToCropYear}
                                        defaultValue="Select year"
                                        required
                                      >

                                        {options.map((option) => (
                                          <option key={option} value={option}>
                                            {option}{" "}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="row-title">
                                      Wetlands to Cropland
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="wetToCrop"
                                          min="0"
                                          value={wetToCrop}
                                          onChange={handleWetToCrop}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="wetToCropMineral"
                                          min="0"
                                          value={wetToCropMineral}
                                          onChange={handleWetToCropMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="wetToCropOrganic"
                                          min="0"
                                          value={wetToCropOrganic}
                                          onChange={handleWetToCropOrganic}
                                          required
                                      />
                                  </td>
                                  <td>
                                    <select
                                        className="table-cell"
                                        id="wetToCropYear"
                                        name="wetToCropYear"
                                        onChange={handleWetToCropYear}
                                        value={wetToCropYear}
                                        defaultValue="Select year"
                                        required
                                      >

                                        {options.map((option) => (
                                          <option key={option} value={option}>
                                            {option}{" "}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="row-title">
                                      Settlements to Cropland
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="settlementsToCrop"
                                          min="0"
                                          value={settlementsToCrop}
                                          onChange={handleSettlementsToCrop}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="settlementsToCropMineral"
                                          min="0"
                                          value={settlementsToCropMineral}
                                          onChange={handleSettlementsToCropMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="settlementsToCropOrganic"
                                          min="0"
                                          value={settlementsToCropOrganic}
                                          onChange={handleSettlementsToCropOrganic}
                                          required
                                      />
                                  </td>
                                  <td>
                                    <select
                                        className="table-cell"
                                        id="settlementsToCropYear"
                                        name="settlementsToCropYear"
                                        onChange={handleSettlementsToCropYear}
                                        value={settlementsToCropYear}
                                        defaultValue="Select year"
                                        required
                                      >

                                        {options.map((option) => (
                                          <option key={option} value={option}>
                                            {option}{" "}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="row-title">
                                      Other land to Cropland
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="otherToCrop"
                                          min="0"
                                          value={otherToCrop}
                                          onChange={handleOtherToCrop}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="otherToCropMineral"
                                          min="0"
                                          value={otherToCropMineral}
                                          onChange={handleOtherToCropMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="otherToCropOrganic"
                                          min="0"
                                          value={otherToCropOrganic}
                                          onChange={handleOtherToCropOrganic}
                                          required
                                      />
                                  </td>
                                  <td>
                                    <select
                                        className="table-cell"
                                        id="otherToCropYear"
                                        name="otherToCropYear"
                                        onChange={handleOtherToCropYear}
                                        value={otherToCropYear}
                                        defaultValue="Select year"
                                        required
                                      >

                                        {options.map((option) => (
                                          <option key={option} value={option}>
                                            {option}{" "}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                    </div>

                    <div className="row">
                      <table className="toGrass tbl">
                          <thead>
                              <th className="row-title">Land-Use Change</th>
                              <th>Total area, ha</th>
                              <th>Soil area (mineral), ha</th>
                              <th>Soil area (organic), ha</th>
                              <th>Year of implementation</th>
                          </thead>
                          <tbody>
                              <tr>
                                  <td className="row-title">
                                      Forest Land to GrassLand
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="forestToGrass"
                                          min="0"
                                          value={forestToGrass}
                                          onChange={handleForestToGrass}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="forestToGrassMineral"
                                          min="0"
                                          value={forestToGrassMineral}
                                          onChange={handleForestToGrassMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="forestToGrassOrganic"
                                          min="0"
                                          value={forestToGrassOrganic}
                                          onChange={handleForestToGrassOrganic}
                                          required
                                      />
                                  </td>
                                  <td>
                                    <select
                                        className="table-cell"
                                        id="forestToGrassYear"
                                        name="forestToGrassYear"
                                        onChange={handleForestToGrassYear}
                                        value={forestToGrassYear}
                                        defaultValue="Select year"
                                        required
                                      >

                                        {options.map((option) => (
                                          <option key={option} value={option}>
                                            {option}{" "}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="row-title">
                                      Cropland to Grassland
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="cropToGrass"
                                          min="0"
                                          value={cropToGrass}
                                          onChange={handleCropToGrass}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="cropToGrassMineral"
                                          min="0"
                                          value={cropToGrassMineral}
                                          onChange={handleCropToGrassMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="cropToGrassOrganic"
                                          min="0"
                                          value={cropToGrassOrganic}
                                          onChange={handleCropToGrassOrganic}
                                          required
                                      />
                                  </td>
                                  <td>
                                    <select
                                        className="table-cell"
                                        id="cropToGrassYear"
                                        name="cropToGrassYear"
                                        onChange={handleCropToGrassYear}
                                        value={cropToGrassYear}
                                        defaultValue="Select year"
                                        required
                                      >

                                        {options.map((option) => (
                                          <option key={option} value={option}>
                                            {option}{" "}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="row-title">
                                      Wetlands to Grassland
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="wetToGrass"
                                          min="0"
                                          value={wetToGrass}
                                          onChange={handleWetToGrass}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="wetToGrassMineral"
                                          min="0"
                                          value={wetToGrassMineral}
                                          onChange={handleWetToGrassMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="wetToGrassOrganic"
                                          min="0"
                                          value={wetToGrassOrganic}
                                          onChange={handleWetToGrassOrganic}
                                          required
                                      />
                                  </td>
                                  <td>
                                    <select
                                        className="table-cell"
                                        id="wetToGrassYear"
                                        name="wetToGrassYear"
                                        onChange={handleWetToGrassYear}
                                        value={wetToGrassYear}
                                        defaultValue="Select year"
                                        required
                                      >

                                        {options.map((option) => (
                                          <option key={option} value={option}>
                                            {option}{" "}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="row-title">
                                      Settlements to Grassland
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="settlementsToGrass"
                                          min="0"
                                          value={settlementsToGrass}
                                          onChange={handleSettlementsToGrass}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="settlementsToGrassMineral"
                                          min="0"
                                          value={settlementsToGrassMineral}
                                          onChange={handleSettlementsToGrassMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="settlementsToGrassOrganic"
                                          min="0"
                                          value={settlementsToGrassOrganic}
                                          onChange={handleSettlementsToGrassOrganic}
                                          required
                                      />
                                  </td>
                                  <td>
                                    <select
                                        className="table-cell"
                                        id="settlementsToGrassYear"
                                        name="settlementsToGrassYear"
                                        onChange={handleSettlementsToGrassYear}
                                        value={settlementsToGrassYear}
                                        defaultValue="Select year"
                                        required
                                      >

                                        {options.map((option) => (
                                          <option key={option} value={option}>
                                            {option}{" "}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="row-title">
                                      Other land to Grassland
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="otherToGrass"
                                          min="0"
                                          value={otherToGrass}
                                          onChange={handleOtherToGrass}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="otherToCropMineral"
                                          min="0"
                                          value={otherToGrassMineral}
                                          onChange={handleOtherToGrassMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="otherToCropOrganic"
                                          min="0"
                                          value={otherToGrassOrganic}
                                          onChange={handleOtherToGrassOrganic}
                                          required
                                      />
                                  </td>
                                  <td>
                                    <select
                                        className="table-cell"
                                        id="otherToGrassYear"
                                        name="otherToGrassYear"
                                        onChange={handleOtherToGrassYear}
                                        value={otherToGrassYear}
                                        defaultValue="Select year"
                                        required
                                      >

                                        {options.map((option) => (
                                          <option key={option} value={option}>
                                            {option}{" "}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                              </tr>
                          </tbody>
                      </table>

                      <table className="toWet tbl">
                          <thead>
                              <th className="row-title">Land-Use Change</th>
                              <th>Total area, ha</th>
                              <th>Soil area (mineral), ha</th>
                              <th>Soil area (organic), ha</th>
                              <th>Year of implementation</th>
                          </thead>
                          <tbody>
                              <tr>
                                  <td className="row-title">
                                      Land converted to peat extraction (combined)
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="landConvertedToPeat"
                                          min="0"
                                          value={landConvertedToPeat}
                                          onChange={handleLandConvertedToPeat}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="landConvertedToPeatMineral"
                                          min="0"
                                          value={landConvertedToPeatMineral}
                                          onChange={handleLandConvertedToPeatMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="landConvertedToPeatOrganic"
                                          min="0"
                                          value={forestToGrassOrganic}
                                          onChange={handleLandConvertedToPeatOrganic}
                                          required
                                      />
                                  </td>
                                  <td>
                                    <select
                                        className="table-cell"
                                        id="landConvertedToPeatYear"
                                        name="landConvertedToPeatYear"
                                        onChange={handleLandConvertedToPeatYear}
                                        value={landConvertedToPeatYear}
                                        defaultValue="Select year"
                                        required
                                      >

                                        {options.map((option) => (
                                          <option key={option} value={option}>
                                            {option}{" "}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="row-title">
                                      Peatland restoration (rewetting)
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="peatLandRestore"
                                          min="0"
                                          value={peatLandRestore}
                                          onChange={handlePeatLandRestore}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="peatLandRestoreMineral"
                                          min="0"
                                          value={peatLandRestoreMineral}
                                          onChange={handlePeatLandRestoreMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="peatLandRestoreOrganic"
                                          min="0"
                                          value={peatLandRestoreOrganic}
                                          onChange={handlePeatLandRestoreOrganic}
                                          required
                                      />
                                  </td>
                                  <td>
                                    <select
                                        className="table-cell"
                                        id="peatLandRestoreYear"
                                        name="peatLandRestoreYear"
                                        onChange={handlePeatLandRestoreYear}
                                        value={peatLandRestoreYear}
                                        defaultValue="Select year"
                                        required
                                      >

                                        {options.map((option) => (
                                          <option key={option} value={option}>
                                            {option}{" "}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="row-title">
                                      Forest land to other wetlands/ flooded land
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="forestToWetland"
                                          min="0"
                                          value={forestToWetland}
                                          onChange={handleForestToWetland}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="forestToWetlandMineral"
                                          min="0"
                                          value={forestToWetlandMineral}
                                          onChange={handleForestToWetlandMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="wetToGrassOrganic"
                                          min="0"
                                          value={forestToWetlandOrganic}
                                          onChange={handleForestToWetlandOrganic}
                                          required
                                      />
                                  </td>
                                  <td>
                                    <select
                                        className="table-cell"
                                        id="wetToGrassYear"
                                        name="forestToWetland"
                                        onChange={handleForestToWetlandYear}
                                        value={forestToWetlandYear}
                                        defaultValue="Select year"
                                        required
                                      >

                                        {options.map((option) => (
                                          <option key={option} value={option}>
                                            {option}{" "}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="row-title">
                                      Cropland to other wetlands/ flooded land
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="cropToWet"
                                          min="0"
                                          value={cropToWet}
                                          onChange={handleCropToWet}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="cropToWetMineral"
                                          min="0"
                                          value={cropToWetMineral}
                                          onChange={handleCropToWetMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="cropToWetOrganic"
                                          min="0"
                                          value={cropToWetOrganic}
                                          onChange={handleCropToWetOrganic}
                                          required
                                      />
                                  </td>
                                  <td>
                                    <select
                                        className="table-cell"
                                        id="cropToWetYear"
                                        name="cropToWetYear"
                                        onChange={handleCropToWetYear}
                                        value={cropToWetYear}
                                        defaultValue="Select year"
                                        required
                                      >

                                        {options.map((option) => (
                                          <option key={option} value={option}>
                                            {option}{" "}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="row-title">
                                        Grassland to other wetlands/ flooded land
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="grassToWet"
                                          min="0"
                                          value={grassToWet}
                                          onChange={handleGrassToWet}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="grassToWetMineral"
                                          min="0"
                                          value={grassToWetMineral}
                                          onChange={handleGrassToWetMineral}
                                          required
                                      />
                                  </td>
                                  <td>
                                      <input className="table-cell"
                                          type="number"
                                          step="1"
                                          id="grassToWetOrganic"
                                          min="0"
                                          value={grassToWetOrganic}
                                          onChange={handleGrassToWetOrganic}
                                          required
                                      />
                                  </td>
                                  <td>
                                    <select
                                        className="table-cell"
                                        id="grassToWetYear"
                                        name="grassToWetYear"
                                        onChange={handleGrassToWetYear}
                                        value={grassToWetYear}
                                        defaultValue="Select year"
                                        required
                                      >

                                        {options.map((option) => (
                                          <option key={option} value={option}>
                                            {option}{" "}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                    </div>

                    <div className="row">
                        <table className="toSettlements tbl">
                            <thead>
                                <th className="row-title">Land-Use Change</th>
                                <th>Total area, ha</th>
                                <th>Soil area (mineral), ha</th>
                                <th>Soil area (organic), ha</th>
                                <th>Year of implementation</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="row-title">
                                        Forest land to Settlements
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="forestToSettlements"
                                            min="0"
                                            value={forestToSettlements}
                                            onChange={handleForestToSettlements}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="forestToSettlementsMineral"
                                            min="0"
                                            value={forestToSettlementsMineral}
                                            onChange={handleForestToSettlementsMineral}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="forestToSettlementsOrganic"
                                            min="0"
                                            value={forestToSettlementsOrganic}
                                            onChange={handleForestToSettlementsOrganic}
                                            required
                                        />
                                    </td>
                                    <td>
                                      <select
                                          className="table-cell"
                                          id="forestToSettlementsYear"
                                          name="forestToSettlementsYear"
                                          onChange={handleForestToSettlementsYear}
                                          value={forestToSettlementsYear}
                                          defaultValue="Select year"
                                          required
                                        >

                                          {options.map((option) => (
                                            <option key={option} value={option}>
                                              {option}{" "}
                                            </option>
                                          ))}
                                      </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="row-title">
                                          Cropland to Settlements
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="cropToSettlements"
                                            min="0"
                                            value={cropToSettlements}
                                            onChange={handleCropToSettlements}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="cropToSettlementsMineral"
                                            min="0"
                                            value={cropToSettlementsMineral}
                                            onChange={handleCropToSettlementsMineral}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="cropToSettlementsOrganic"
                                            min="0"
                                            value={cropToSettlementsOrganic}
                                            onChange={handleCropToSettlementsOrganic}
                                            required
                                        />
                                    </td>
                                    <td>
                                      <select
                                          className="table-cell"
                                          id="cropToSettlementsYear"
                                          name="cropToSettlementsYear"
                                          onChange={handleCropToSettlementsYear}
                                          value={cropToSettlementsYear}
                                          defaultValue="Select year"
                                          required
                                        >

                                          {options.map((option) => (
                                            <option key={option} value={option}>
                                              {option}{" "}
                                            </option>
                                          ))}
                                      </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="row-title">
                                        Grass to Settlements
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="grassToSettlements"
                                            min="0"
                                            value={grassToSettlements}
                                            onChange={handleGrassToSettlements}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="grassToSettlementsMineral"
                                            min="0"
                                            value={grassToSettlementsMineral}
                                            onChange={handleGrassToSettlementsMineral}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="grassToSettlementsOrganic"
                                            min="0"
                                            value={grassToSettlementsOrganic}
                                            onChange={handleGrassToSettlementsOrganic}
                                            required
                                        />
                                    </td>
                                    <td>
                                      <select
                                          className="table-cell"
                                          id="wetToGrassYear"
                                          name="forestToWetland"
                                          onChange={handleGrassToSettlementsYear}
                                          value={grassToSettlementsYear}
                                          defaultValue="Select year"
                                          required
                                        >

                                          {options.map((option) => (
                                            <option key={option} value={option}>
                                              {option}{" "}
                                            </option>
                                          ))}
                                      </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="row-title">
                                        Wetlands to Settlements
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="wetToSettlements"
                                            min="0"
                                            value={wetToSettlements}
                                            onChange={handleWetToSettlements}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="wetToSettlementsMineral"
                                            min="0"
                                            value={wetToSettlementsMineral}
                                            onChange={handleWetToSettlementsMineral}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="wetToSettlementsOrganic"
                                            min="0"
                                            value={wetToSettlementsOrganic}
                                            onChange={handleWetToSettlementsOrganic}
                                            required
                                        />
                                    </td>
                                    <td>
                                      <select
                                          className="table-cell"
                                          id="wetToSettlementsYear"
                                          name="wetToSettlementsYear"
                                          onChange={handleWetToSettlementsYear}
                                          value={wetToSettlementsYear}
                                          defaultValue="Select year"
                                          required
                                        >

                                          {options.map((option) => (
                                            <option key={option} value={option}>
                                              {option}{" "}
                                            </option>
                                          ))}
                                      </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="row-title">
                                        Other to Settlements
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="otherToSettlements"
                                            min="0"
                                            value={otherToSettlements}
                                            onChange={handleOtherToSettlements}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="otherToSettlementsMineral"
                                            min="0"
                                            value={otherToSettlementsMineral}
                                            onChange={handleOtherToSettlementsMineral}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="otherToSettlementsOrganic"
                                            min="0"
                                            value={otherToSettlementsOrganic}
                                            onChange={handleOtherToSettlementsOrganic}
                                            required
                                        />
                                    </td>
                                    <td>
                                      <select
                                          className="table-cell"
                                          id="otherToSettlementsYear"
                                          name="otherToSettlementsYear"
                                          onChange={handleOtherToSettlementsYear}
                                          value={otherToSettlementsYear}
                                          defaultValue="Select year"
                                          required
                                        >

                                          {options.map((option) => (
                                            <option key={option} value={option}>
                                              {option}{" "}
                                            </option>
                                          ))}
                                      </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className="toOther tbl">
                            <thead>
                                <th className="row-title">Land-Use Change</th>
                                <th>Total area, ha</th>
                                <th>Soil area (mineral), ha</th>
                                <th>Soil area (organic), ha</th>
                                <th>Year of implementation</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="row-title">
                                        Forest land to other land
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="forestToOther"
                                            min="0"
                                            value={forestToOther}
                                            onChange={handleForestToOther}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="forestToOtherMineral"
                                            min="0"
                                            value={forestToOtherMineral}
                                            onChange={handleForestToOtherMineral}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="forestToOtherOrganic"
                                            min="0"
                                            value={forestToOtherOrganic}
                                            onChange={handleForestToOtherOrganic}
                                            required
                                        />
                                    </td>
                                    <td>
                                      <select
                                          className="table-cell"
                                          id="forestToOtherYear"
                                          name="forestToOtherYear"
                                          onChange={handleForestToOtherYear}
                                          value={forestToOtherYear}
                                          defaultValue="Select year"
                                          required
                                        >

                                          {options.map((option) => (
                                            <option key={option} value={option}>
                                              {option}{" "}
                                            </option>
                                          ))}
                                      </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="row-title">
                                        Cropland land to other land
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="cropToOther"
                                            min="0"
                                            value={cropToOther}
                                            onChange={handleCropToOther}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="cropToOtherMineral"
                                            min="0"
                                            value={cropToOtherMineral}
                                            onChange={handleCropToOtherMineral}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="cropToOtherOrganic"
                                            min="0"
                                            value={cropToOtherOrganic}
                                            onChange={handleCropToOtherOrganic}
                                            required
                                        />
                                    </td>
                                    <td>
                                      <select
                                          className="table-cell"
                                          id="cropToOtherYear"
                                          name="cropToOtherYear"
                                          onChange={handleCropToOtherYear}
                                          value={cropToOtherYear}
                                          defaultValue="Select year"
                                          required
                                        >

                                          {options.map((option) => (
                                            <option key={option} value={option}>
                                              {option}{" "}
                                            </option>
                                          ))}
                                      </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="row-title">
                                        Grassland to other land
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="grassToOther"
                                            min="0"
                                            value={grassToOther}
                                            onChange={handleGrassToOther}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="cropToOtherMineral"
                                            min="0"
                                            value={grassToOtherMineral}
                                            onChange={handleGrassToOtherMineral}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="cropToOtherOrganic"
                                            min="0"
                                            value={grassToOtherOrganic}
                                            onChange={handleGrassToOtherOrganic}
                                            required
                                        />
                                    </td>
                                    <td>
                                      <select
                                          className="table-cell"
                                          id="cropToOtherYear"
                                          name="cropToOtherYear"
                                          onChange={handleGrassToOtherYear}
                                          value={grassToOtherYear}
                                          defaultValue="Select year"
                                          required
                                        >

                                          {options.map((option) => (
                                            <option key={option} value={option}>
                                              {option}{" "}
                                            </option>
                                          ))}
                                      </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="row-title">
                                        Wetlands to other land
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="wetToOther"
                                            min="0"
                                            value={wetToOther}
                                            onChange={handleWetToOther}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="wetToOtherMineral"
                                            min="0"
                                            value={wetToOtherMineral}
                                            onChange={handleWetToOtherMineral}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="wetToOtherOrganic"
                                            min="0"
                                            value={wetToOtherOrganic}
                                            onChange={handleWetToOtherOrganic}
                                            required
                                        />
                                    </td>
                                    <td>
                                      <select
                                          className="table-cell"
                                          id="wetToOtherYear"
                                          name="wetToOtherYear"
                                          onChange={handleWetToOtherYear}
                                          value={wetToOtherYear}
                                          defaultValue="Select year"
                                          required
                                        >

                                          {options.map((option) => (
                                            <option key={option} value={option}>
                                              {option}{" "}
                                            </option>
                                          ))}
                                      </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="row-title">
                                        Settlements to other land
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="settlementsToOther"
                                            min="0"
                                            value={settlementsToOther}
                                            onChange={handleSettlementsToOther}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="settlementsToOtherMineral"
                                            min="0"
                                            value={settlementsToOtherMineral}
                                            onChange={handleSettlementsToOtherMineral}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input className="table-cell"
                                            type="number"
                                            step="1"
                                            id="settlementsToOtherOrganic"
                                            min="0"
                                            value={settlementsToOtherOrganic}
                                            onChange={handleSettlementsToOtherOrganic}
                                            required
                                        />
                                    </td>
                                    <td>
                                      <select
                                          className="table-cell"
                                          id="settlementsToOtherYear"
                                          name="settlementsToOtherYear"
                                          onChange={handleSettlementsToOtherYear}
                                          value={settlementsToOtherYear}
                                          defaultValue="Select year"
                                          required
                                        >

                                          {options.map((option) => (
                                            <option key={option} value={option}>
                                              {option}{" "}
                                            </option>
                                          ))}
                                      </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="backStart">
                      <Button
                        size="small"
                        value="backStartPage"
                        onClick={() => navigate("/startPage", { replace: true })}
                        label="&laquo; Previous"
                        secondary
                      />
                    </div>
    
                    <div className="nextU1Button">
                      <Button
                        size="small"
                        type="submit"
                        value="Submit"
                        label="Next &raquo;"
                        primary
                      />
                    </div>
                  </form>
                </section>
              </div>
            </article>
          </div>
        );
      } else {
        return (
          <LUCBaseline
            country={country}
            year={year}
            population={population}
                    
          />
        );
      }
  };

  

  LandUseChangeTableForm.propTypes = {
    population: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    user: PropTypes.shape({}),
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onCreateAccount: PropTypes.func.isRequired,
  };
  
  LandUseChangeTableForm.defaultProps = {
    user: null,
  };