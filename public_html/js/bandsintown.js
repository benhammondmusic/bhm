async function fetchShows(sub) {
    const URL = 'https://rest.bandsintown.com/artists/id_189988/events/?app_id=520e812b2c4e8a1367d48cc00673c0b5';
    // try {
    const fetchResult = fetch(
        new Request(URL, { method: 'GET', cache: 'reload' })
    );
    const response = await fetchResult;
    const jsonData = await response.json();
    let showList = "";
    const displayLimit = 5;
    jsonData.slice(0, displayLimit).forEach(show => {
        showDate = moment(show.datetime).format('ddd, M/D');
        showTime = moment(show.datetime).format('h:mma z');
        let callToAction = "Info";
        
        // if it's a LiveStream show change text 
        const minsUntil = moment(show.datetime).diff(moment(), 'minutes');
        if ((show.venue.type) && (minsUntil < 15)) { callToAction = "WATCH NOW!"; }

        const showItem = `<!-- Show -->
        <li class="d-flex flex-row align-items-center justify-content-start">
            <div>
                <div class="show_date">
                    ${showDate}<br>${showTime}
                </div>
            </div>
            <div
                class="show_info d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-md-start justify-content-center">
                <div class="show_name"></div>
                <div class="show_location">${show.title}</div>
            </div>

            <div class="show_link d-flex flex-row align-items-center justify-content-center">
                <a href="${show.url}" title="${show.description}">${callToAction}</a></div>

        </li>`
        showList = showList.concat("\n\n" + showItem);
        });
    
    const showUL = document.getElementById("shows");
    showUL.innerHTML = showList;
    
    
    // } catch(e){
    // throw Error(e);
    // }
}  
fetchShows('javascript');


