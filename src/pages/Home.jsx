import React, { useState } from "react";
import styles from "../styles/home.module.css";
import Header from "../components/Header";
import DailyInfoCard from "../components/DailyInfoCard";
import RoomInfoCard from "../components/RoomInfoCard";
import BottomSheet from "../components/BottomSheet";
import newRoomData from "../data/newRoom.json";
import data from "../data/roomCard.json";
import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";

export default function Home() {
  const [itemsVisible, setItemsVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const [cardId, setCardId] = useState(1);

  return (
    <>
      {loaderVisibility ? (
        <div
          style={{
            position: "fixed",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="/img/loader.gif" alt="" />
        </div>
      ) : (
        " "
      )}
      <Header />
      <div className={styles.homeContainer}>
        <DailyInfoCard />
        <RoomInfoCard />
      </div>
      <div className={styles.action_btn}>
        <button onClick={() => setSheetVisible(true)}>
          <AiOutlinePlus className="ms-2" />
          Start a room
        </button>
        <button>
          <BsGrid3X3Gap />
        </button>
      </div>
      <BottomSheet
        sheetTitle="start room"
        sheetVisible={sheetVisible}
        setSheetVisible={(item) => setSheetVisible(item)}
        setItemsVisible={(item) => setItemsVisible(item)}
        setSheetCreateRoom={(item) => {
          setLoaderVisibility(true);
          setTimeout(() => {
            setSheetCreateRoom(item);
            setLoaderVisibility(false);
          }, 1000);
        }}
        cardDetail={data.find((item) => item.id == cardId)}
      />
      <BottomSheet
        sheetTitle="new room"
        sheetVisible={sheetCreateRoom}
        setSheetVisible={(item) => setSheetCreateRoom(item)}
        setItemsVisible={(item) => setItemsVisible(item)}
        cardDetail={newRoomData}
      />
    </>
  );
}
