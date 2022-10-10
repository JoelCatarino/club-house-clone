import React from "react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import styles from "../styles/bottomSheet.module.css";
import StartRoom from "./bottom_sheets/StartRoom";
import NewRoom from "../components/bottom_sheets/NewRoom";

export default function BottomSheet(props) {
  return (
    <SwipeableBottomSheet
      open={props.sheetVisible}
      onChange={() => {
        props.setSheetVisible(!props.sheetVisible);
        props.setItemsVisible(true);
      }}
      fullScream={props.sheetTitle == "room detail" ? true : false}
    >
      <div
        className={styles.BottomSheetContainer}
        style={{
          backgroundColor: props.sheetTitle == "profile" ? "transparent" : " ",
        }}
      >
        {props.sheetTitle == "new room" ? (
          <NewRoom
            cardDetail={props.cardDetail}
            setSheetVisible={(item) => {
              props.setSheetVisible(item);
              props.setItemVisible(true);
            }}
          />
        ) : props.sheetTitle == "start room" ? (
          <StartRoom
            setSheetCreateRoom={props.setSheetCreateRoom}
            setSheetVisible={(item) => {
              props.setSheetVisible(item);
              props.setItemsVisible(true);
            }}
          />
        ) : (
          " "
        )}
      </div>
    </SwipeableBottomSheet>
  );
}
