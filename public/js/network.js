function logNetworkInfo() {
	if(navigator.connection) {
		navigator.connection.addEventListener('change', logNetworkInfo);
		console.log(navigator.connection);
		// Network type that browser uses
		console.log('type: ' + navigator.connection.effectiveType);
		// Effective bandwidth estimate
		console.log('downlink: ' + navigator.connection.downlink + 'Mb/s');
		// Effective round-trip time estimate
		console.log('rtt: ' + navigator.connection.rtt + 'ms');
		// True if the user has requested a reduced data usage mode from the user agent.
		console.log('saveData: ' + navigator.connection.saveData);
	}
}

logNetworkInfo();