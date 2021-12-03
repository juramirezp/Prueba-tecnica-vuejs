var app = new Vue({
	el: "#app",
	data: {
		users: [],
		searchInput: "",
		loading: false,
	},
	mounted() {
		this.loading = true;
		fetch("https://randomuser.me/api/?results=50")
			.then((response) => response.json())
			.then((json) => {
				this.users = json.results;
				this.loading = false;
			});
	},
	computed: {
		filteredData: function () {
			this.loading = true;
			var data = [];

			this.users.forEach((user) => {
				if (
					user.name.first
						.toLowerCase()
						.includes(this.searchInput.toLowerCase()) ||
					user.name.last.toLowerCase().includes(this.searchInput.toLowerCase())
				) {
					data.push(user);
				}
			});

			this.loading = false;
			return data;
		},
	},
});
