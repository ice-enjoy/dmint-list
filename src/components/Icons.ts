import { library } from '@fortawesome/fontawesome-svg-core';
import { faDownload, faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* add icons to the library */
[faDownload, faRefresh].forEach((icon: any) => {
  library.add(icon);
});

export default (app: any) => app.component('font-awesome-icon', FontAwesomeIcon);

