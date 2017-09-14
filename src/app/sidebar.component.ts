import { Component } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    safeURL: SafeUrl;
    episodes: Array<object>;

    constructor(private _sanitizer: DomSanitizer) {
        this.episodes = [
            {
                'id': 'trailer',
                'title': 'Trailer',
                'link': 'https://www.youtube.com/embed/K5IVpVFlEkE?rel=0',
                'mouseOn': false},
            {
                'id': 'ep1',
                'title': 'Episode 1: Philadelpha, PA',
                'link': 'https://www.youtube.com/embed/YkLNQQKNu48?rel=0',
                'mouseOn': false
            }
        ];
        this.setUrl(this.episodes[this.episodes.length - 1]); // default to most recent video
    }

    setUrl(episode) {
        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(episode.link);
    }

    mouseOver(episode) {
        episode.mouseOn = true;
    }

    mouseOff(episode) {
        episode.mouseOn = false;
    }
}
