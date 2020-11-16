class Github {
    constructor() {
        this.client_id ='3503b3a66b5df0d5a027';
        this.client_secret = 'b218c2cf6397d2eb51452e9872df5fe1ddddbd5d';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}
        ?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }

    }
}