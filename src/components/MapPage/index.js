import React from "react";
import styles from "./MapPage.module.scss";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const MapPage = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDgWElKqTh_HbML-1jJM_wHCE-MowNfKeQ",
  });

  const position = {
    lat: -20.002449,
    lng: -44.048507,
  };
  return (
    <div className={styles.container}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "300px" }}
          center={position}
          zoom={15}
          //   onLoad={onLoad}
          //   onUnmount={onUnmount}
        >
          <MarkerF
            position={position}
            options={{
              label: {
                text: "Posição teste",
              },
            }}
          />
        </GoogleMap>
      ) : (
        <>
          <p>Naõ mostrou</p>
        </>
      )}
    </div>
  );
};

export default MapPage;
