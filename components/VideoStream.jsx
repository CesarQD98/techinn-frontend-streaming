"use client";
import React, { useEffect, useRef } from 'react';

export default function VideoStream() {
  return (
    <div>
      <video id="video" width="640" height="480" autoPlay></video>
    </div>
  );
}
