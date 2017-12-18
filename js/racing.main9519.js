window.racing = window.racing || {};
window.racing.app = window.racing.app || {};

(function (racing) {

    // Formats the lap time for display on the web page.
    function formatMs(ms) {
        function pad(n) {
            return (n < 10 ? '0' : '') + n;
        }

        var milliseconds = ms % 1000;
        var seconds = Math.floor((ms / 1000) % 60);
        var minutes = Math.floor((ms / (60 * 1000)) % 60);

        return pad(minutes) + ":" + pad(seconds) + "." + milliseconds;
    }

    // Creates a row in the results table with the appropriate values
    function getTableRow(values, type, onClick) {
        var row = document.createElement('tr');
        values.forEach(function (value) {
            var cell = document.createElement(type);
            cell.innerText = value;
            row.appendChild(cell);
        });
        if (onClick) {
            row.addEventListener('click', onClick);
        }
        return row;
    }


    function getTelemetryEntries(data) {
        return {
            labels: ['Game Time', 'Speed', 'ERS Battery', 'Damage', 'Steering', 'Throttle', 'Brakes', 'ERS', 'Gear'],
            data: data.map(function (entry) {
                return [entry.GameTime, entry.Speed, entry.ErsBatteryPercent * 100, entry.Damage, (entry.SteeringAngle * 500) + 200, entry.ThrottlePercent * 100, 100 + entry.BrakesPercent * 100, 200 + (entry.HasUsedErs == true ? 100 : 0), entry.Gear * 50];
            })
        };
    }

    function renderLapTelemetry(title, data) {
        var graphWrapper = document.querySelector('#TelemtryGraphWrapper');
        var graphTitle = graphWrapper.querySelector('.title');
        var graph = graphWrapper.querySelector('.graph');
        var graphData = getTelemetryEntries(data);

        graphTitle.innerText = title;
        if (graphData.data.length) {
            graphWrapper.style.display = 'block'

            return new Dygraph(graph, graphData.data, {
                labels: graphData.labels,
                legend: 'always',
                logscale: false
            });
        } else {
            graphWrapper.style.display = 'none';
        }
    }

    
function showLapTelemetry(lap, track) {

    // ToDo: Add code to retrieve the telemetry data from storage and render a telemetry graph
    track.getTelemetryData(function (data) {
        var title = lap.PartitionKey + ' by ' + lap.PlayerName;
        renderLapTelemetry(title, data);
    }, ['GameTime', 'Speed', 'ErsBatteryPercent', 'Damage', 'SteeringAngle',
        'ThrottlePercent', 'BrakesPercent', 'HasUsedErs', 'Gear'], lap.LapId);

}


    // Renders the lap time data in the appropriate table on the results page.
    function renderRankingLapTimes(laps, tableSelector, track, mode) {
        var table = document.querySelector(tableSelector);
        var tableHead = document.createElement('thead');
        var tableBody = document.createElement('tbody');
        var lapTimeZero = laps && laps.length > 0 ? laps[0].LapTimeMs : 0;

        laps.forEach(function (lap, index) {
            var lapTimeOffset = lap.LapTimeMs - lapTimeZero;

            var cells;

            switch (mode) {
                case 'Country':
                    cells = [(index + 1), lap.PlayerName, lap.Location, formatMs(lap.LapTimeMs), formatMs(lapTimeOffset), lap.Damage];
                    break;
                case 'Location':
                    cells = [(index + 1), lap.PlayerName, formatMs(lap.LapTimeMs), formatMs(lapTimeOffset), lap.Damage];
                    break;
                default:
//                    cells = [(index + 1), lap.PlayerName, lap.Country, lap.Location, formatMs(lap.LapTimeMs), formatMs(lapTimeOffset), lap.Damage];
                    cells = [(index + 1), lap.PlayerName, formatMs(lap.LapTimeMs), formatMs(lapTimeOffset)];

                    break;
            }

            tableBody.appendChild(getTableRow(cells, 'td', function () {
                showLapTelemetry(lap, track);
            }));

        });

        table.innerHTML = '';

        switch (mode) {
            case 'Country':
                tableHead.appendChild(getTableRow(['Pos', 'Name', 'Location', 'Laptime', 'Delta', 'Damage'], 'th'));
                break;
            case 'Location':
                tableHead.appendChild(getTableRow(['Pos', 'Name', 'Laptime', 'Delta', 'Damage'], 'th'));
                break;
            default:
                //tableHead.appendChild(getTableRow(['Pos', 'Name', 'Country', 'Location', 'Laptime', 'Delta', 'Damage'], 'th'));
                tableHead.appendChild(getTableRow(['Pos', 'Name', 'Laptime', 'Delta'], 'th'));
                break;
        }

        table.appendChild(tableHead);
        table.appendChild(tableBody);
    }



    // Country Statistics
    function initCountryStat(track, selector, countryCode) {

        // ToDo: Add code to get the country track data and pass it to the render method
        track.getRankingLapTimesByCountry(function (data) {
            renderRankingLapTimes(data, '.track-stats-country ' + selector, track, 'Country');
        }, ['PartitionKey', 'PlayerName', 'Location', 'LapTimeMs', 'Damage', 'LapId'], countryCode);


    }

    function initCountryStats(countryCode) {

        // ToDo: Add code to initialize the country data for the three tracks
        initCountryStat(racing.data.beginnerTrack, '.track-stats-beginner', countryCode);
        initCountryStat(racing.data.advancedTrack, '.track-stats-advanced', countryCode);
        initCountryStat(racing.data.expertTrack, '.track-stats-expert', countryCode);


    }

    // Location Statistics

    // Get the track data and pass it to the render method
    function initLocationStat(track, selector, locationId) {

        // ToDo: Add code to get the location track data and pass it to the render method
        track.getRankingLapTimesByLocation(function (data) {
            renderRankingLapTimes(data, '.track-stats-location ' + selector, track, 'Location');
        }, ['PartitionKey', 'PlayerName', 'LapTimeMs', 'Damage', 'LapId'], locationId);


    }

    // Get the track data and pass it to the render method
    function initStat(track, selector) {

        // ToDo: Add code to get the track data and pass it to the render method
        track.getRankingLapTimes(function (data) {
            renderRankingLapTimes(data, '.track-stats-location ' + selector, track);
        }, ['PartitionKey', 'PlayerName', 'LapTimeMs', 'Dammage', 'LapId']);

    }



    // Initialize the data for the tracks.
    function initLocationStats(locationId) {

        // ToDo: Add code to initialize the location data for the beginner track
        initLocationStat(racing.data.beginnerTrack, '.track-stats-beginner', locationId);

        // ToDo: Add code to initialize the location data for the advanced and expert tracks
        initLocationStat(racing.data.advancedTrack, '.track-stats-advanced', locationId);
        initLocationStat(racing.data.expertTrack, '.track-stats-expert', locationId);


    }

    // Initialize the data for the tracks.
    function initStats() {

        // ToDo: Add code to initialize the data for the beginner track
        initStat(racing.data.beginnerTrack, '.track-stats-beginner');

        // ToDo: Add code to initialize the data for the advanced and expert tracks
        initStat(racing.data.advancedTrack, '.track-stats-advanced');
        initStat(racing.data.expertTrack, '.track-stats-expert');
    }

    // ToDo: Set your country code and location ID.
    var yourLocationId = '1';
    var yourCountryCode = 'GAB';

    // Initialize the page with location statistics
    initStats();
    //initLocationStats(yourLocationId);
    //initCountryStats(yourCountryCode);

}(window.racing));
