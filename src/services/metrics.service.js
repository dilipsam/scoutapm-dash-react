import fetch from "cross-fetch";
import {API_KEY} from "../constants";
import {subHours, subMinutes} from "date-fns";

export function get(app, callback, metric = 'response_time') {
    return () => {
        const params = new URLSearchParams();
        const now = new Date();
        params.append('from', subHours(now, 3).toISOString());
        params.append('to', subMinutes(now, 5).toISOString());

        fetch(`https://scoutapm.com/api/v0/apps/${app}/metrics/${metric}?${params}`, {
            headers: {
                "X-SCOUT-API": API_KEY
            }
        }).then(
            response => response.json(),
            err => console.log('err', err)
        ).then(
            response => response.results.series
        ).then(callback)
    }
}
