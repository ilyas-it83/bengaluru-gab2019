window.racing = window.racing || {};
window.racing.data = window.racing.data || {};

(function (racing) {

    // Base URI for Racing Game Table Storage data.
    var tableStorageBaseUrl = 'https://gabracinglab2006.table.core.windows.net/';

    // Enumeration of the three tracks in the racing game.
    var tracks = {
        beginner: 0,
        advanced: 1,
        expert: 2
    };

    // Table names and shared access signatures for racing game data.
    var auths = {
        rankingLapTimes: {
            tableName: 'RankingLapTimes',
            signature: 'kRLOTv7uGTvD6q%2BhRV%2FiBDUvnH5ErsZnaPhp2bAyMRU%3D'
        },
        achievements: {
            tableName: 'Achievements',
            signature: 'HUUvapK%2ByTClRTZk%2Fr0TwbPNkpJGL%2FlCuiOAQAhjOao%3D'
        },
        tracks: [
            {
                playerLapTimes: {
                    tableName: 'PlayerLapTimes0',
                    signature: '9WJD59vXq8Q3gWq7fiJ5BJY4U176zXH4926F7MUeWbg%3D'
                },
                telemetryData: {
                    tableName: 'TelemetryData0',
                    signature: 'qzC5BtWWGAYdptwe90DvM8r0pmSzd%2B8v1qGLBuE1kN8%3D'
                },
                rankingLapTimesCountryTrack: {
                    tableName: 'RankingLapTimesCountryTrack0',
                    signature: 'GabLab&sig=W0C%2FvKjL1doEas2BhAd9dCLmsOyFpxN1IXjpHU1mee0%3D'
                },
                rankingLapTimesLocationTrack: {
                    tableName: 'RankingLapTimesLocationTrack0',
                    signature: 'GabLab&sig=JaGPAqv3sZPg9HC7rgVekibRuCTo087ie0ZqSocQMA0%3D'
                }
            },
            {
                playerLapTimes: {
                    tableName: 'PlayerLapTimes1',
                    signature: 'JvA654CHmtGEqYgvlbrSzuPpSAFrxcGiHoWUmBTqIgw%3D'
                },
                telemetryData: {
                    tableName: 'TelemetryData1',
                    signature: 'U6CSp%2F5G2PGsw9h5iokHLaFzL8nguMlSQH3H3BhHpFI%3D'
                },
                rankingLapTimesCountryTrack: {
                    tableName: 'RankingLapTimesCountryTrack1',
                    signature: 'y0pkhIe3753ezi8NMWyPS9uqWgnwV%2FtxDhN%2FppVGZRI%3D'
                },
                rankingLapTimesLocationTrack: {
                    tableName: 'RankingLapTimesLocationTrack1',
                    signature: 'P5Ya48fnb2rWJq%2FoJE%2FE1ouTfQc%2BxfLQo2BGTKHCN98%3D'
                }
            },
            {
                playerLapTimes: {
                    tableName: 'PlayerLapTimes2',
                    signature: 'ZVxPCNH3ykJ%2Ft66EuLd%2Bb1DEm%2BxyWajqE7vN9XIUjn4%3D'
                },
                telemetryData: {
                    tableName: 'TelemetryData2',
                    signature: 'rhmYhPJYiQNEJUnR69FtJwy602nij4c%2FJI9KIV2k6po%3D'
                },
                rankingLapTimesCountryTrack: {
                    tableName: 'RankingLapTimesCountryTrack2',
                    signature: 'ESiXeIRdj%2BcZ9f78a8gNoEYGwGUzCHzwRTnuJik62c0%3D'
                },
                rankingLapTimesLocationTrack: {
                    tableName: 'RankingLapTimesLocationTrack2',
                    signature: 'DDGjU39IogIxLfIlM2rmX134wE8VHNytnHryWV5%2F6Vs%3D'
                }
            }
        ]
    }

    // Formats a query for a Table Storage partition.
    function getPartitionFilter(value, prefix) {
        var filter = {};
        prefix = prefix || '';
        if (typeof (value) !== 'undefined') {
            filter.partitionKey = prefix + value;
        }
        return filter;
    }



    // Sends a Get request to Table Storage, returning the JSON response.
    function getJson(url, successCallback, errorCallback) {

        // ToDo: Add code to get JSON data from a URI
        var request = new XMLHttpRequest();
        request.open('GET.html', url, true);
        request.setRequestHeader('Accept', 'application/json');
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                var data = JSON.parse(this.response);
                successCallback(data);
            } else {
                errorCallback(this);
            }
        };

        request.onerror = function () {
            errorCallback(this);
        };

        request.send();
    }


    // Formats a URI for querying Table Storage using a Shared Access Signature
    function getTableStorageUrl(auth, fields, filter) {

        // ToDo: Add code to format a table storage URL with shared access signature
        var baseUrl = tableStorageBaseUrl
            + auth.tableName
            + '?tn=' + auth.tableName
            + '&sv=2014-02-14&si=GabLab'
            + '&sig=' + auth.signature;

        var filterUrl = '';
        var fieldsUrl = '';

        if (filter && typeof (filter.partitionKey) != 'undefined') {
            filterUrl = "&$filter=PartitionKey eq '" + filter.partitionKey + "'";
        }

        if (fields && fields.length) {
            fieldsUrl = "&$select=" + fields.join(',');
        }

        return baseUrl + fieldsUrl + filterUrl;


    }



    // Queries Table Storage and retrieves the data.
    function getTableStorageData(auth, successCallback, fields, filter) {

        // ToDo: Add code to get data from a Table Storage table
        var url = getTableStorageUrl(auth, fields, filter);
        getJson(url, function (data) {
            successCallback(data.value);
        }, function (error) {
            console.error(error);
        });


    }



// Creates an object for retrieving data for a specified track.
function getTrack(track) {
    return {
        getRankingLapTimes: function (successCallback, fields) {
            var filter = getPartitionFilter('Track' + track);
            getTableStorageData(auths.rankingLapTimes,
                successCallback, fields, filter);
        },

        // ToDo: Add code to get data for the specific location
        getRankingLapTimesByLocation: function (successCallback, fields, locationId) {
            var filter = getPartitionFilter(locationId);
            getTableStorageData(auths.tracks[track].rankingLapTimesLocationTrack,
                successCallback, fields, filter);
        },

        // ToDo: Add code to get data for the specific country
        getRankingLapTimesByCountry: function (successCallback, fields, countryCode) {
            var filter = getPartitionFilter(countryCode);
            getTableStorageData(auths.tracks[track].rankingLapTimesCountryTrack,
                successCallback, fields, filter);
        },

        // ToDo: Add code to get the telemetry data for a specific lap
        getTelemetryData: function (successCallback, fields, lapId) {
            var filter = getPartitionFilter(lapId);
            getTableStorageData(auths.tracks[track].telemetryData, successCallback, fields, filter);
        }
    };
}



    racing.data.getAchievements = function (successCallback, fields, countryCode) {

        // ToDo: Add code to get the player achievements for your country


    };



    // Create the objects for the three tracks.
    racing.data.beginnerTrack = getTrack(tracks.beginner);
    racing.data.advancedTrack = getTrack(tracks.advanced);
    racing.data.expertTrack = getTrack(tracks.expert);

}(window.racing));