import { Component } from '@angular/core';

@Component({
    selector: 'app-youtube',
    templateUrl: './youtube.component.html',
    styleUrls: [ './youtube.component.css' ]
})
export class YoutubeComponent {
    videoUrls: Array<string>;

    // todo: ngOnInit() to either fetch videos from youtube channel or db
}
