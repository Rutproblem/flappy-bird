import React, { useEffect, useState } from "react";
import { View, StyleSheet, useWindowDimensions, Dimensions } from "react-native";
import Bird from "./src/components/Bird";

export default function App() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const birdLeft = screenWidth / 2;
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth);
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth/2 + 30);
  const [obstaclesNegHeight, setObstacleNegHeight] = useState(0);
  const [obstaclesNegHeightTwo, setObstacleNegHeightTwo] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const gravity = 3;

  let obstacleWidth = 60;
  let obstacleHeight = 300;
  let gap = 200;
  let gameTimerId;
  let obstaclesTimerId;

  useEffect(() => {
    if(birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - gravity)
      }, 30)

      return () => {
        clearInterval(gameTimerId)
      }
    }
  }, [birdBottom])

  // obstacle1
  useEffect(() => {
    if(obstaclesLeft > -60) {
      obstaclesTimerId = setInterval(() => {
        setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5)
      }, 30)
      
      return() => {
        clearInterval(obstaclesTimerId)
      }
    }
    else {
      setScore(setScore => score + 1);
      setObstaclesLeft(screenWidth);
      setObstacleNegHeight ( - Math.random()*100);
    }
  }, [obstaclesLeft])

  // obstacle2
  useEffect(() => {
    if(obstaclesLeftTwo > -60) {
      obstaclesTimerIdTwo = setInterval(() => {
        setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5)
      }, 30)
      
      return() => {
        clearInterval(obstaclesTimerIdTwo)
      }
    }
    else {
      setScore(setScore => score + 1);
      setObstaclesLeftTwo(screenWidth);
      setObstacleNegHeightTwo ( - Math.random()*100);
    }
  }, [obstaclesLeftTwo])

  // jumpbehavior

  const jump = () => {
    if(!isGameOver && (birdBottom < screenHeight)) {
      setBirdBottom(birdBottom => birdBottom + 50)
      console.log('jumpSuccessful')
    }
  }
}