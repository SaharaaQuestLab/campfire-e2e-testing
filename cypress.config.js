const {defineConfig} = require("cypress");

module.exports = defineConfig({
	viewportWidth: 1200,
	viewportHeight: 800,
	e2e: {
		baseUrl: 'https://quest.ownstack.cn/?isTest=true&',
	},
	env: {
		nm1: {
			"userAddress": "0x768Fe877d814f0bdEe3405011BEAa50d5b8058e2",
			"privateKey": "f6e1a8a806562a087956d25c8dbe3f5251d5e5221f4ad039c9f5534e263514fa",
			"userRole": 6
		},
		labeler1: {
			"userAddress": "0xC381d175C04e827b278CEE89F1B7B619037D953f",
			"privateKey": "d44d417dc02b333aaf863d0c9ecab96261c91b2ca5ccdd0a8c1f317ccebfc7c8",
			"userRole": 1
		},
		requester: {
			"userAddress": "0x0d184B1BF603a6E909E1f008185F6b7606e7EC9a",
			"privateKey": "d01fdef25661391a7209ad9d2b0af0155861a76aad1fa90f801fe86bc0fcba17",
			"userRole": 5
		},
		am: {
			"userAddress": "0x4CCE6c3386d015fd99cbcb16054ed73D19960032",
			"privateKey": "4d8cadf6056ae185f3ba3e12ff86add4c2885485c2b308a0064ab21bc28f219f",
			"userRole": 2
		},
		qm: {
			"userAddress": "0x19745FE4980D6f0EE28bdD0a328f16CAE21c9B13",
			"privateKey": "",
			"userRole": 4
		},
	}
});

