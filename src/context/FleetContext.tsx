import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

export interface PreOrderConfig {
  product: string;
  tier: string;
  price: number;
  mast: string;
  frontWing: string;
  finish: string;
}

export type InfoModalType = 'warranty' | 'safety' | 'kelp' | 'whitepaper' | null;

export interface QuiverRecommendation {
  discipline: 'parawing' | 'wingfoil' | 'kitefoil';
  weightKg: number;
  weightLbs: number;
  windKts: number;
  windCondition: string;
  frontWingArea: number;
  modelName: string;
  mastLength: string;
  glideRating: string;
  description: string;
  estimatedPrice: number;
}

interface FleetContextType {
  swellHeightMeters: number;
  swellPeriodSec: number;
  isPreOrderOpen: boolean;
  preOrderConfig: PreOrderConfig;
  openPreOrder: (config?: Partial<PreOrderConfig>) => void;
  closePreOrder: () => void;
  activeInfoModal: InfoModalType;
  openInfo: (type: InfoModalType) => void;
  closeInfo: () => void;
  selectedDiscipline: 'parawing' | 'wingfoil' | 'kitefoil';
  setSelectedDiscipline: (d: 'parawing' | 'wingfoil' | 'kitefoil') => void;
  riderWeightKg: number;
  setRiderWeightKg: (w: number) => void;
  windSpeedKts: number;
  setWindSpeedKts: (w: number) => void;
  quiverRecommendation: QuiverRecommendation;
  downloadDataset: () => void;
}

const FleetContext = createContext<FleetContextType | undefined>(undefined);

export const FleetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [swellHeightMeters, setSwellHeightMeters] = useState<number>(1.8);
  const [swellPeriodSec, setSwellPeriodSec] = useState<number>(12);
  const [isPreOrderOpen, setIsPreOrderOpen] = useState<boolean>(false);
  const [activeInfoModal, setActiveInfoModal] = useState<InfoModalType>(null);

  const [selectedDiscipline, setSelectedDiscipline] = useState<'parawing' | 'wingfoil' | 'kitefoil'>('parawing');
  const [riderWeightKg, setRiderWeightKg] = useState<number>(78);
  const [windSpeedKts, setWindSpeedKts] = useState<number>(18);

  const [preOrderConfig, setPreOrderConfig] = useState<PreOrderConfig>({
    product: 'Parawing Gen-4 Complete',
    tier: 'FLEET TIER 01',
    price: 1299,
    mast: '80cm HM Carbon',
    frontWing: '850 cm² WaveFlight',
    finish: 'Matte Hydro-Silica Anti-Ventilation Weave',
  });

  // Simulated live wave swell fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.5) * 0.2;
      const newH = Math.round((1.8 + delta) * 10) / 10;
      setSwellHeightMeters(Math.max(1.4, Math.min(2.4, newH)));

      const pDelta = Math.floor(Math.random() * 3) - 1;
      setSwellPeriodSec(Math.max(10, Math.min(14, 12 + pDelta)));
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const quiverRecommendation = useMemo<QuiverRecommendation>(() => {
    const weightLbs = Math.round(riderWeightKg * 2.20462);

    let windCondition = 'Light Glass';
    if (windSpeedKts > 28) {
      windCondition = 'Heavy Gale & Swell';
    } else if (windSpeedKts > 18) {
      windCondition = 'Moderate Ocean Swell';
    } else if (windSpeedKts > 12) {
      windCondition = 'Breezy Rolling Waves';
    }

    let frontWingArea = 850;
    let mastLength = '85cm';
    let modelName = 'Phantom Hawk';
    let glideRating = '14.6:1 (Ultra High)';
    let description = 'Optimized for sustained ocean swells and low-power perpetual downwind pump.';
    let estimatedPrice = 1299;

    if (selectedDiscipline === 'parawing') {
      const areaCalc = Math.round(riderWeightKg * 11 - windSpeedKts * 6 + 150);
      frontWingArea = Math.min(1300, Math.max(680, areaCalc));
      mastLength = riderWeightKg > 85 ? '85cm HM Carbon' : '80cm HM Carbon';
      modelName = `Parawing WaveFlight ${frontWingArea}`;
      glideRating = '15.2:1 (Perpetual Pump)';
      description = 'Ultra-fast depower setup. Allows effortless paddling onto rolling open ocean humps with pocket-pack waist stowage.';
      estimatedPrice = 1299;
    } else if (selectedDiscipline === 'wingfoil') {
      const areaCalc = Math.round(riderWeightKg * 12 - windSpeedKts * 8 + 120);
      frontWingArea = Math.min(1250, Math.max(620, areaCalc));
      mastLength = riderWeightKg > 82 ? '92cm HM M40J' : '85cm HM M40J';
      modelName = `Apex Wing ${frontWingArea}`;
      glideRating = '14.2:1 (Carve / High Lift)';
      description = 'Exceptional roll stability with high dihedral lift for snappy wave carves, explosive pumping, and recovery.';
      estimatedPrice = 2450;
    } else if (selectedDiscipline === 'kitefoil') {
      const areaCalc = Math.round(riderWeightKg * 7.5 - windSpeedKts * 5 + 80);
      frontWingArea = Math.min(850, Math.max(480, areaCalc));
      mastLength = '102cm Thin Taper Race';
      modelName = `HydroSpeed GT ${frontWingArea}`;
      glideRating = '12.8:1 (38+ kts Top Speed)';
      description = 'Razor-thin low-drag foil profile for blisteringly fast upwind pointing and GPS speed runs up to 38+ kts.';
      estimatedPrice = 2890;
    }

    return {
      discipline: selectedDiscipline,
      weightKg: riderWeightKg,
      weightLbs,
      windKts: windSpeedKts,
      windCondition,
      frontWingArea,
      modelName,
      mastLength,
      glideRating,
      description,
      estimatedPrice,
    };
  }, [selectedDiscipline, riderWeightKg, windSpeedKts]);

  const openPreOrder = (config?: Partial<PreOrderConfig>) => {
    if (config) {
      setPreOrderConfig((prev) => ({ ...prev, ...config }));
    }
    setIsPreOrderOpen(true);
  };

  const closePreOrder = () => setIsPreOrderOpen(false);
  const openInfo = (type: InfoModalType) => setActiveInfoModal(type);
  const closeInfo = () => setActiveInfoModal(null);

  const downloadDataset = () => {
    const csvContent = [
      '# SwiftMonster Marine Labs - Towing Tank CFD Hydrodynamic Test Dataset',
      '# Saline Temperature: 20C | Flume Channel Length: 45m | Calibrated Piezometer Array',
      'Test_Run_ID,Profile_Model,Velocity_Kts,Aspect_Ratio,Angle_Of_Attack_Deg,Lift_Coefficient_Cl,Drag_Coefficient_Cd,Lift_To_Drag_Ratio,Cavitation_Threshold_Margin_Pct,Flow_Regime',
      'SM-2025-01,SwiftMonster T1100 Ultra-Slick,15.0,9.8,1.5,0.48,0.0152,31.6,+48%,Laminar Attached',
      'SM-2025-02,SwiftMonster T1100 Ultra-Slick,20.0,9.8,1.8,0.52,0.0168,31.0,+45%,Laminar Attached',
      'SM-2025-03,SwiftMonster T1100 Ultra-Slick,28.0,9.8,2.2,0.59,0.0189,31.2,+42%,Laminar Attached',
      'SM-2025-04,SwiftMonster T1100 Ultra-Slick,35.0,9.8,2.5,0.64,0.0218,29.4,+39%,Controlled Turbulent Shear',
      'SM-2025-05,Gen-2 High-Modulus Carbon,15.0,8.5,1.5,0.46,0.0215,21.4,+34%,Laminar Attached',
      'SM-2025-06,Gen-2 High-Modulus Carbon,20.0,8.5,1.8,0.51,0.0242,21.1,+30%,Attached Boundary Layer',
      'SM-2025-07,Gen-2 High-Modulus Carbon,28.0,8.5,2.2,0.56,0.0284,19.7,+26%,Transition Inception',
      'SM-2025-08,First-Gen Carbon Foil,20.0,7.2,1.8,0.49,0.0385,12.7,+18%,Boundary Layer Thickening',
      'SM-2025-09,Extruded 6061 Aluminum Alloy,20.0,6.0,1.8,0.42,0.0590,7.1,+8%,Premature Micro-Cavitation',
      'SM-2025-10,Extruded 6061 Aluminum Alloy,28.0,6.0,2.2,0.47,0.0685,6.9,+3%,Severe Trailing Edge Flutter',
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'SwiftMonster_T1100_Hydrodynamics_CFD_Data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <FleetContext.Provider
      value={{
        swellHeightMeters,
        swellPeriodSec,
        isPreOrderOpen,
        preOrderConfig,
        openPreOrder,
        closePreOrder,
        activeInfoModal,
        openInfo,
        closeInfo,
        selectedDiscipline,
        setSelectedDiscipline,
        riderWeightKg,
        setRiderWeightKg,
        windSpeedKts,
        setWindSpeedKts,
        quiverRecommendation,
        downloadDataset,
      }}>
      {children}
    </FleetContext.Provider>
  );
};

export const useFleet = () => {
  const context = useContext(FleetContext);
  if (!context) {
    throw new Error('useFleet must be used within a FleetProvider');
  }
  return context;
};
