import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount
} from "./roomSlice";
import styles from "./Room.module.css";

export function Room() {
  // let peerConnection = null;
  // let localStream = null;
  // let remoteStream = null;
  // let roomDialog = null;
  // let roomId = null;

  const localVideoEl = useRef(null);

  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState("2");
  const [disableCameraBtn, setDisableCameraBtn] = useState(false);
  const [disableCreateRoomBtn, setDisableCreateRoomBtn] = useState(true);
  const [peerConnection, setPeerConnection] = useState();
  const [localStream, setLocalStream] = useState();
  const [remoteStream, setRemoteStream] = useState();
  const [roomDialog, setRoomDialog] = useState();
  const [roomId, setRoomId] = useState();

  const openUserMedia = async e => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });
    localVideoEl.current.srcObject = stream;
    // document.querySelector("#localVideo").srcObject = stream;
    setLocalStream(stream);
    // remoteStream = new MediaStream();
    // document.querySelector("#remoteVideo").srcObject = remoteStream;

    console.log("Stream:", localVideoEl.current.srcObject);
    setDisableCreateRoomBtn(false);
    setDisableCameraBtn(true);
    // document.querySelector("#cameraBtn").disabled = true;
    // document.querySelector("#joinBtn").disabled = false;
    // document.querySelector("#createBtn").disabled = false;
    // document.querySelector("#hangupBtn").disabled = false;
  };

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={openUserMedia}
          disabled={disableCameraBtn}
        >
          Open Mic & Camera
        </button>
        <button
          className={styles.button}
          // onClick={}
          disabled={disableCreateRoomBtn}
        >
          Create room
        </button>
        {/* <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button> */}
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <video
          style={{
            background: "black",
            width: 640,
            height: "100%",
            display: "block",
            margin: "1em"
          }}
          id="localVideo"
          ref={localVideoEl}
          muted
          autoPlay
          playsInline
        ></video>
        {/* <video id="remoteVideo" autoplay playsinline></video> */}
      </div>
    </div>
  );
}
