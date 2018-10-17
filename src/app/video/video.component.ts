import { Component, OnInit } from '@angular/core';
import { videoRTC } from '../jsf/videoRTC.js';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.style.scss']
})
export class VideoComponent implements OnInit {
  private rtc: videoRTC;
  constructor() {
    this.rtc = new videoRTC();
  }

  ngOnInit() {
    this.rtc.init('remoteVideo');
  }
}
